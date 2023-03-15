import { makeStyles } from "@material-ui/core/styles";

const navWidth = 275

export const useStyle = makeStyles ({
    root: {
        width: navWidth,
        borderRight: "1px solid grey",
        height: "100%",
        display: "flex",
        flexDirection: "row",
    },


    icon: {
        position: "absolute",
        top: 37,
        left: 235,
        border: "1px solid #E0E0E0",
        borderRadius: 100,
        color: "#FD6920",

    }
})