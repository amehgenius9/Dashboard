import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingTop: 10
    },
    child: {
        textDecoration: "underline",
        textTransform: "capitalize",
        fontWeight: "bold"
    },
    child2: {
        backgroundColor: "#ec9f34",
        marginLeft: 5,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 12, 
        height: "20px"
    }
})