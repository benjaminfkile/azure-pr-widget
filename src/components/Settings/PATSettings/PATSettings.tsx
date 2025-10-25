import { useEffect, useState, type ChangeEvent, type FunctionComponent } from "react";
import electronAPIBridge from "../../../bridges/ElectronAPIBridge";
import { Input, Text, Button } from "@fluentui/react-components";
import patSettingsStyles from "./PATSettingsStyles";

interface Props { }

const PATSettings: FunctionComponent<Props> = () => {
    const [patToken, setPatToken] = useState<string>("");

    const styles = patSettingsStyles();

    useEffect(() => {
        const fetchToken = async () => {
            const savedToken = await electronAPIBridge.get<string>("authPAT");
            console.log("Fetched saved PAT:", savedToken);
            if (savedToken) {
                setPatToken(savedToken);
            }
        };

        fetchToken();
    }, []);

    const handlePATChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setPatToken(e.target.value);
    };

    const handleSavePAT = async () => {
        await electronAPIBridge.set("authPAT", patToken);
    };

    const handleDeletePAT = async () => {
        await electronAPIBridge.delete("authPAT");
        setPatToken("")
    };

    return (
        <div>
            <div className={styles.section}>
                <Text>Personal Access Token</Text>
                <Input
                    type="password"
                    placeholder="Enter your PAT here..."
                    value={patToken}
                    onChange={handlePATChange}
                    className={styles.input}
                />

                <div className={styles.actionButtons}>
                    <Button
                        appearance="outline"
                        onClick={handleDeletePAT}
                    >
                        Delete Token
                    </Button>

                    <Button
                        onClick={handleSavePAT}
                        appearance="primary"
                    >
                        Save Token
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PATSettings;
