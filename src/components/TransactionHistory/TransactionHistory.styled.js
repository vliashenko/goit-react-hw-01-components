import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    table: {
        width: "1280px",
        margin: "120px auto 0",
        boxShadow: "0px 2px 15px #dadada",
        fontSize: "18px"
    },
    thead: {
        backgroundColor: "#00bcd5",
        color: "#fff",
    },
    title: {
        height: "60px"
    },
    tbody: {
        backgroundColor: "#fff"
    }
})

export default useStyles;