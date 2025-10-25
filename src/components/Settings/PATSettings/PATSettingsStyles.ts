import { makeStyles, tokens } from "@fluentui/react-components";

const patSettingsStyles = makeStyles({
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
    actionButtons: {
        display: "flex",
        justifyContent: "space-between",
        padding: "5px"
    }
});

export default patSettingsStyles

