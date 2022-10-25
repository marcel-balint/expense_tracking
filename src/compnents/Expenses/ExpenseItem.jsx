import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [inputVal, setInputVal] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = (e) => {
    setInputVal(e.target.value);
    setTitle(e.target.value);
  };

  const displayForm = () => {
    setCurrentTitle(title);
    setShowForm(true);
  };

  const addNewTitle = () => {
    console.log(inputVal);
    if (inputVal.length === 0) {
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
      <form className="change-title">
        <input
          type="text"
          onChange={titleChangeHandler}
          placeholder="Add a title..."
        />

        <button
          className="change-title__add"
          onClick={addNewTitle}
          type="button"
        >
          ADD
        </button>
        <button
          className="change-title__cancel"
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
      <Card className="expense-item">
        <div className="expense-date">
          <ExpenseDate date={props.date} />
        </div>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {modifyTitleForm}
        <button className="add-title-btn" onClick={displayForm}>
          Change Title
        </button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
