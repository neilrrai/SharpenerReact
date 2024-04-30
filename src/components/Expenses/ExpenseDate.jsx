// handling date
import "./ExpenseDate.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// calenderDate coming from ExpenseItem as props.
function ExpenseDate(props) {
  const month = months[props.calenderDate.getMonth()];
  const year = props.calenderDate.getFullYear();
  const date = props.calenderDate.getDate();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{date}</div>
    </div>
  );
}

export default ExpenseDate;
