import { makeStyles } from "@material-ui/core/styles";


export const useStyle = makeStyles ({
    root: {
        padding: "10px",
        display: "block",
        color: "#011B69",
        marginLeft: 55,

    },
    header: {
        fontSize: 11.2,
        zIndex: .3,
        marginLeft: 10,
        marginBottom: 5,
        fontWeight: "bold",
        color: "#B4B6BC"
    },
    topHeader: {
        height: 50,
        width: "200px",
        display: "grid",
        placeContent: "center",
        fontWeight: "bold",
        color: "#011B69",
        margin: "0 0 0 45px",
        borderBottom: "1px solid #E0E0E0",
        '&:hover': {
            backgroundColor: "#011B69",
            cursor: "pointer",
            color: "#FFF",
            transition: ".5s ease-out" 
        },
    },
    child: {
        fontSize: 14,
        display: "flex",
        alignItems: "center",
        gap: 10,
        cursor: "pointer",
        margin: "5px 0",
    }
})