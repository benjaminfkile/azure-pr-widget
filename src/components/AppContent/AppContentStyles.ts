import { makeStyles, tokens } from "@fluentui/react-components";

const appContentStyles = makeStyles({
    root: {
        position: "absolute",
        top: "33px",
        left: 0,
        width: "100%",
        height: "calc(100vh - 66px)",
        backgroundColor: tokens.colorNeutralBackground1,
    }
});

export default appContentStyles