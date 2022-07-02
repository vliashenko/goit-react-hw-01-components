import React, { Component } from 'react';
import propTypes from "prop-types";
import styles from "./Statistics.module.css";

class Statistics extends Component {

    state = {
        colors: ["#4bc6f7", "#a43cf3", "#e64c66", "#21b7c5", "#48b14b"]
    }

    render() {
        const { stats, title } = this.props;
        return (
            <section className={styles.statistics}>
                <h2 className={styles.title}>{title}</h2>
          
            <ul className={styles.statList}>
              {stats.map((item,i) => {
                return (
                    <li key={item.id} className={styles.item} style={{backgroundColor: this.state.colors[i] }}>
                        <span className={styles.label}>{item.label}</span>
                        <span className={styles.percentage}>{item.percentage}</span>
                    </li>
                )
              })}
            </ul>
          </section>
        );
    }
};

Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            label: propTypes.string.isRequired,
            percentage: propTypes.number.isRequired,
        })
    )
}

export default Statistics;