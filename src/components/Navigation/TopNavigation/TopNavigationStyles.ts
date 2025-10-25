import { makeStyles, tokens } from "@fluentui/react-components";

const topNavigationStyles = makeStyles({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: tokens.colorNeutralBackground2,
    color: tokens.colorNeutralForeground1,
    WebkitAppRegion: "drag",
    userSelect: "none",
    borderBottom: "solid",
    borderBottomColor: tokens.colorNeutralBackground3Selected
  },
  left: {
    display: "flex",
    alignItems: "center",
    columnGap: "8px",
  },
  right: {
    display: "flex",
    alignItems: "center",
    columnGap: "4px",
    WebkitAppRegion: "no-drag",
  },
  appTitle: {
    fontWeight: 600,
    fontSize: tokens.fontSizeBase300,
  },
});

export default topNavigationStyles