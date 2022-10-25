import { useState } from "react";

import Expenses from "./compnents/Expenses/Expenses";
import NewExpense from "./compnents/NewExpense/NewExpense";

const DUMMY_DATA = [
  { id: "42", title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
  { id: "e456", title: "Desk", amount: 1799.49, date: new Date(2022, 5, 14) },
  {
    id: "e424",
    title: "Hair Dryer",
    amount: 599.49,
    date: new Date(2022, 11, 12),
  },
  { id: "et456", title: "Desk", amount: 1000.49, date: new Date(2022, 8, 14) },
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e76",
    title: "Book",
    amount: 943.12,
    date: new Date(2020, 6, 12),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  { id: "e56", title: "Desk", amount: 1799.49, date: new Date(2021, 5, 14) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 3, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 6, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
