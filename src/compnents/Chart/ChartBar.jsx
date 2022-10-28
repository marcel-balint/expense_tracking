import React from "react";

import styles from "./ChartBar.module.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className={styles.chartBar}>
      <div className={styles.chartBar__inner}>
        <div
          className={styles.chartBar__fill}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={styles.chartBar__label}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
