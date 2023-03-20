import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        textTransform: "capitalize",
    },
    chart: {
        width: 100
    },
    child1: {
        fontWeight: "bold",
        fontSize: 13,
        paddingBottom: 25
    },
    child2: {
        fontWeight: "bold",
        fontSize: 22,
    }, child3: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#FD6820",
        textDecoration: "underline",
    }
})