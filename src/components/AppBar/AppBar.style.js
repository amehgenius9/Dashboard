import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles ({
    root: {
        background: "#FFFFFF",
        width: "100%",
        height: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: "row",
        borderBottom: "1px solid #E0E0E0",
        padding: "0 20px",
        position: "sticky",
        top: 0,
        zIndex: 100,
    },
})