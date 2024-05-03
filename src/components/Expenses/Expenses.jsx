import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        price={expense.price}
      />
    ));

    if (filteredExpenses.length === 1) {
      expensesContent = (
        <>
          {expensesContent}
          <p>Only one expense here. Please add more</p>
        </>
      );
    }
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
