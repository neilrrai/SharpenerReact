import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  // Here I used single funHadler 'inputChangeHandler' to update input value

  const inputChangeHandler = (event) => {
    console.log(event);
    setUserInput((prevState) => {
      return {
        ...prevState,
        [event.target.id]: event.target.value,
      };
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="enteredTitle"
            onChange={inputChangeHandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="enteredAmount"
            onChange={inputChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="enteredDate"
            min="2023-01-01"
            max="2024-12-31"
            onChange={inputChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
