import React from 'react';
import PropTypes from "prop-types";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    item: {
        border: "1px solid #efefef",
        textAlign: "center",
        height: "60px",
        color: "#adaeb1"
    },
    blued: {
        backgroundColor: "#ecf1f4"
    }
})

const TransactionHistoryItem = ({ count, currency, amount, type }) => {
    const classes = useStyles()
    return (
            <tr className={ count % 2 === 0 ? classes.blued : null}>
                <td className={classes.item}>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
                <td className={classes.item}>{amount}</td>
                <td className={classes.item}>{currency}</td>
            </tr>
    );
};

TransactionHistoryItem.propTypes = {
    count: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired
}

export default TransactionHistoryItem;