import { makeStyles, tokens } from "@fluentui/react-components";

const appStyles = makeStyles({
    root: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: tokens.colorNeutralBackground1
    }
});

export default appStyles