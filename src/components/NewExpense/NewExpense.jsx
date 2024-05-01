import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
// I
const NewExpense = (props) => {
  const SaveExpenseDataHandler = (entredExpenseData) => {
    const expenseData = { ...entredExpenseData, id: Math.random().toString() };
    //step4. calling onAddExpense props from Parent App with parameter as expense data.
    props.onAddExpense(expenseData);
    console.log(expenseData);
  };
  return (
    //step1. here I used onSaveExpenseData as funtion props passing to it,s child ExpenseForm to get form data
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
