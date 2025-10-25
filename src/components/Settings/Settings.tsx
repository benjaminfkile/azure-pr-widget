import { useEffect, useState } from "react";
import type { FunctionComponent } from "react";
import {
  Card,
  CardHeader,
  CardPreview,
  Select,
  Text,
} from "@fluentui/react-components";

import { Settings24Regular } from "@fluentui/react-icons";
import electronAPIBridge from "../../bridges/ElectronAPIBridge";
import getAuthMethod from "../../functions/GetAzureAuthType";
import settingsStyles from "./SettingsStyles";
import PATSettings from "./PATSettings/PATSettings";



export const Settings: FunctionComponent = () => {

  const [authType, setAuthType] = useState<string>("PAT");

  const styles = settingsStyles();

  useEffect(() => {
    const fetchSettings = async () => {
      const method = await getAuthMethod();
      setAuthType(method);

    };

    fetchSettings();
  }, []);

  const handleAuthTypeChange = async (value: string) => {
    setAuthType(value);
    await electronAPIBridge.set("authType", value);
  };



  return (
    <Card className={styles.root} appearance="filled">
      <CardHeader
        image={<Settings24Regular />}
        header={<Text weight="semibold">Settings</Text>}
      />
      <CardPreview>
        <div className={styles.section}>
          <Text>Authentication Method</Text>
          <Select
            value={authType}
            onChange={(e) => handleAuthTypeChange(e.target.value)}
            style={{ marginTop: 6, width: "100%" }}
          >
            <option value="PAT">Personal Access Token (PAT)</option>
            <option value="SSO">
              Single Sign-On (Microsoft)
            </option>
          </Select>
        </div>

        {authType === "PAT" && (
          <PATSettings />
        )}
      </CardPreview>
    </Card>
  );
};
