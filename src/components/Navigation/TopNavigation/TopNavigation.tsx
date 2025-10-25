import type { FunctionComponent } from "react";
import WindowControls from "../../WindowControls/WindowControls";
import topNavigationStyles from "./TopNavigationStyles";

interface Props { }

const TopNavigation: FunctionComponent<Props> = () => {
  const styles = topNavigationStyles();

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        {/* <Text className={styles.appTitle}>Azure PR Widget</Text> */}
      </div>
      <div className={styles.right}>
        <WindowControls />
      </div>
    </div>
  );
};

export default TopNavigation;
