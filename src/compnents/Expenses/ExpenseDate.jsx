import React from "react";

import styles from "./ExpenseDate.module.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = +props.date.toLocaleString("en-US", { day: "2-digit" }) + 1;
  const year = props.date.getFullYear();
  return (
    <div className={styles.expenseDate}>
      <div className={styles.expenseDate__month}>{month}</div>
      <div className={styles.expenseDate__day}>{day}</div>
      <div className={styles.expenseDate__year}>{year}</div>
    </div>
  );
};

export default ExpenseDate;
