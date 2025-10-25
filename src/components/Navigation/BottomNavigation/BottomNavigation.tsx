import type { FunctionComponent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import bottomNavigationStyles from "./BottomNavigationStyles";
import FluentIconButton from "../../buttons/FluentIconButton/FluentIconButton";
import { Eye32Regular, Home32Regular, Settings32Regular } from "@fluentui/react-icons";


const BottomNavigation: FunctionComponent = () => {
  const styles = bottomNavigationStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <FluentIconButton
          icon={Home32Regular}
          label="Home"
          size={32}
          appearance={isActive("/") ? "primary" : "subtle"}
          onClick={() => navigate("/")}
        />
        <FluentIconButton
          icon={Eye32Regular}
          label="Pull requests"
          size={32}
          appearance={isActive("/") ? "primary" : "subtle"}
          onClick={() => navigate("/")}
        />
      </div>

      <div className={styles.right}>
        <FluentIconButton
          icon={Settings32Regular}
          label="Settings"
          appearance={isActive("/") ? "primary" : "subtle"}
          onClick={() => navigate("/settings")}
          size={32}
        />
      </div>
    </div>
  );
};

export default BottomNavigation;
