import electronAPIBridge from "../bridges/ElectronAPIBridge"
import type { AzureAuthTypes } from "../types"

const getAuthMethod = async (): Promise<AzureAuthTypes> => {
    const DEFAULT_AUTH: AzureAuthTypes = "PAT"
    try {
        const authType = await electronAPIBridge.get("authType")
        if (authType) {
            return authType
        } else {
            await electronAPIBridge.set("authType", DEFAULT_AUTH)
        }
        return DEFAULT_AUTH
    } catch (error) {
        console.error(error)
        return DEFAULT_AUTH
    }

}

export default getAuthMethod