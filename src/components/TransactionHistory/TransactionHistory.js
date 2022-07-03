import React from 'react';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';
import PropTypes from "prop-types";
import useStyles from "./TransactionHistory.styled";


const TransactionHistory = ({ items }) => {
    const classes = useStyles();
    return (
        <table className={classes.table}>
            <thead>
                <tr className={classes.thead}>
                    <th className={classes.title}>Type</th>
                    <th className={classes.title}>Amount</th>
                    <th className={classes.title}>Currency</th>
                </tr>
            </thead>

            <tbody className={classes.tbody}>
               {items.map((item,i) => {
                return (
                    <TransactionHistoryItem 
                        key={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                        count={i + 1}
                    />
                )
               })}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
        }).isRequired
    )
}

export default TransactionHistory;