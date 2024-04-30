// handle all the items

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
// import ExpenseItem from "components/ExpenseItem";
import "./Expenses.css";
function Expenses() {
  const expenses = [
    {
      id: "1",
      date: new Date(2023, 7, 15),
      title: "Insurance",
      price: "100",
      location: "Bangalore",
    },
    {
      id: "2",
      date: new Date(2023, 3, 25),
      title: "Book",
      price: "10",
      location: "Delhi",
    },
    {
      id: "3",
      date: new Date(2023, 10, 11),
      title: "Pen",
      price: "1",
      location: "Hydetabad",
    },
    {
      id: "4",
      date: new Date(2023, 1, 14),
      title: "Laptop",
      price: "200",
      location: "Mumbai",
    },
  ];
  return (
    <Card className="expenses">
      {/* here className is passed as props to Card component */}
      {expenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            price={item.price}
            location={item.location}
          />
        );
      })}
    </Card>
  );
}
export default Expenses;
