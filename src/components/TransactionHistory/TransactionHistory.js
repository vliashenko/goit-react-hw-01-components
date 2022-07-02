import React from 'react';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';
import { createUseStyles } from 'react-jss';
import PropTypes from "prop-types";

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

const TransactionHistory = ({ items }) => {
    const classes = useStyles()
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
    items: PropTypes.array.isRequired
}

export default TransactionHistory;