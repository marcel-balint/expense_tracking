import React, { useState } from "react";

import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [validForm, setValidForm] = useState(true);

  const titleChangeHandler = (e) => {
    if (enteredTitle) {
      setValidForm(true);
    }
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    if (enteredAmount) {
      setValidForm(true);
    }
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    if (enteredDate) {
      setValidForm(true);
    }
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      enteredTitle.length === 0 ||
      enteredAmount.length === 0 ||
      enteredDate.length === 0
    ) {
      setValidForm(false);
      return;
    }
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={styles.newExpense__controls}>
        <div className={styles.newExpense__control}>
          <label>Title</label>
          <p className={`${!validForm ? styles.showRequired : ""} `}>
            Required field
          </p>
          <input
            className={`${!validForm ? styles.invalid : ""}`}
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={styles.newExpense__control}>
          <label>Amont</label>
          <p className={`${!validForm ? styles.showRequired : ""} `}>
            Required field
          </p>
          <input
            className={`${!validForm ? styles.invalid : ""}`}
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={styles.newExpense__control}>
          <label>Date</label>
          <p className={`${!validForm ? styles.showRequired : ""} `}>
            Required field
          </p>
          <input
            className={`${!validForm ? styles.invalid : ""}`}
            type="date"
            min="2015-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={styles.newExpense__actions}>
        <button onClick={props.onCancel} type="button">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
