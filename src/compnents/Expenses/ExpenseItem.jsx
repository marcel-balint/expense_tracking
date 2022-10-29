import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import styles from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [inputVal, setInputVal] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [validForm, setValidForm] = useState(true);

  const titleChangeHandler = (e) => {
    if (e.target.value.length > 2) {
      setValidForm(true);
    }
    setInputVal(e.target.value);
    setTitle(e.target.value);
  };

  const displayForm = () => {
    setCurrentTitle(title);
    setShowForm(true);
  };

  const addNewTitle = () => {
    if (inputVal.length === 0) {
      setValidForm(false);
      return;
    }
    setShowForm(false);
    setInputVal("");
  };
  const hideForm = () => {
    setTitle(currentTitle);
    setShowForm(false);
  };

  let modifyTitleForm = null;
  if (showForm) {
    modifyTitleForm = (
      <form className={styles.changeTitle}>
        <p className={`${!validForm ? styles.showRequired : ""} `}>
          Required field
        </p>

        <input
          className={`${!validForm ? styles.invalid : ""} `}
          type="text"
          onChange={titleChangeHandler}
          placeholder="*Add a title..."
        />
        <button
          className={styles.changeTitle__add}
          onClick={addNewTitle}
          type="button"
        >
          ADD
        </button>
        <button
          className={styles.changeTitle__cancel}
          onClick={hideForm}
          type="button"
        >
          CANCEL
        </button>
      </form>
    );
  }

  return (
    <li>
      <Card className={styles.expenseItem}>
        <div className={styles.expenseDate}>
          <ExpenseDate date={props.date} />
        </div>
        <div className={styles.expenseItem__description}>
          <h2>{title}</h2>
          <div className={styles.expenseItem__price}>${props.amount}</div>
        </div>
        {modifyTitleForm}
        <button className={styles.addTitleBtn} onClick={displayForm}>
          Change Title
        </button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
