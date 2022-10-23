import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated !");
  };
  return (
    <Card className="expense-item">
      <div className="expense-date">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>CHANGE title</button>
    </Card>
  );
};

export default ExpenseItem;
