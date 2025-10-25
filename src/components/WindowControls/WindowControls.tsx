import type { FunctionComponent } from "react";
import FluentIconButton from "../buttons/FluentIconButton/FluentIconButton";
import electronAPIBridge from "../../bridges/ElectronAPIBridge";
import windowControlsStyles from "./WindowControlsStyles";
import { Subtract24Regular, SquareMultiple24Regular, Dismiss24Regular } from "@fluentui/react-icons";

const WindowControls: FunctionComponent = () => {
  const styles = windowControlsStyles();

  return (
    <div className={styles.root}>
      <FluentIconButton
        icon={Subtract24Regular}
        label="Minimize"
        size={28}
        onClick={async () => await electronAPIBridge.minimize()}
      />
      <FluentIconButton
        icon={SquareMultiple24Regular}
        label="Maximize"
        size={28}
        onClick={async () => await electronAPIBridge.maximize()}
      />
      <FluentIconButton
        icon={Dismiss24Regular}
        label="Close"
        size={28}
        onClick={async () => await electronAPIBridge.close()}
      />
    </div>
  );
};

export default WindowControls;
