import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles ({
    root: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F4F5F9",
        padding: "30px 20px 20px 20px"
    },
    figures: {
        fontSize: 30,
        fontWeight: "bolder",
        letterSpacing: 1.2,
        margin: 0,
        display: "flex",
        alignItems: "center",
        gap: 10,
        color: "#011B60",

    }, 
    walletMangt: {
        fontSize: 12,
        fontWeight: "bold",
        textTransform: "capitalize",
        textDecoration: "underline",
        color: "#FD6820",
        paddingBottom: 20
    },
    figureIconShow: {
        display: "flex",
    },

    figureIconHide: {
        display: "none",
    }
})