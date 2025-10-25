import { makeStyles, tokens } from "@fluentui/react-components";

const settingsStyles = makeStyles({
    root: {
        width: "calc(100% - 10px)",
        margin: "5px",
        padding: tokens.spacingHorizontalM,
    },
    section: {
        marginTop: tokens.spacingVerticalM,
    },
    input: {
        marginTop: tokens.spacingVerticalS,
        width: "100%",
    },
});

export default settingsStyles