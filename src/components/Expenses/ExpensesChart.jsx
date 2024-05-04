import Chart from "components/Chart/Chart";
import React from "react";

function ExpensesChart(props) {
  return <Chart chartExpenses={props.filteredExpensesForChart} />;
}

export default ExpensesChart;
