// handle the data with object
// in this I passed date attribute(props) comming from App.js to ExpenseDate as calenderDate so this way we passed props from components to another components
import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const expenseTitle = props.title;
  const expenseAmount = props.price;
  const expenseLocation = props.location;

  // defining onClick function

  return (
    <Card className="expense-item">
      {/* here className is passed as props to Card component */}
      <ExpenseDate calenderDate={props.date} />
      <div className="expense-item__location">{expenseLocation}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
