import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const expensesOnlyArray = props.chartExpenses.map((monthExpenseData) => {
    return monthExpenseData.price;
  });
  // console.log(expensesOnlyArray);
  const chartData = [
    { expenseMonth: "Jan", expenseValue: 0 },
    { expenseMonth: "Feb", expenseValue: 0 },
    { expenseMonth: "Mar", expenseValue: 0 },
    { expenseMonth: "Apr", expenseValue: 0 },
    { expenseMonth: "May", expenseValue: 0 },
    { expenseMonth: "Jun", expenseValue: 0 },
    { expenseMonth: "Jul", expenseValue: 0 },
    { expenseMonth: "Aug", expenseValue: 0 },
    { expenseMonth: "Sep", expenseValue: 0 },
    { expenseMonth: "Oct", expenseValue: 0 },
    { expenseMonth: "Nov", expenseValue: 0 },
    { expenseMonth: "Dec", expenseValue: 0 },
  ];

  for (let expense of props.chartExpenses) {
    chartData[expense.date.getMonth()].expenseValue += expense.price;
  }

  const maxValue = Math.max(...expensesOnlyArray);
  // console.log(chartData.expenseValue);
  return (
    <div className="chart">
      {chartData.map((monthDate) => {
        return (
          <ChartBar
            key={monthDate.expenseMonth}
            label={monthDate.expenseMonth}
            value={monthDate.expenseValue}
            maxValue={maxValue}
          />
        );
      })}
    </div>
  );
}

export default Chart;
