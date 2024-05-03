import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };
  const [toggeleForm, setToggleForm] = useState(false);

  const toggleFormHanler = () => {
    setToggleForm(true);
  };
  let showForm = <button onClick={toggleFormHanler}>Add Expense</button>;
  if (toggeleForm === true) {
    showForm = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        toggleValue={setToggleForm}
      />
    );
  }

  return <div className="new-expense">{showForm}</div>;
};

export default NewExpense;
