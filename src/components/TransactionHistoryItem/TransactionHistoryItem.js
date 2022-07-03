import React from 'react';
import useStyles from "./TransactionHistoryItem.styled";
import PropTypes from "prop-types";

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