import "./NewExpense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";



const NewExpense = (props) => {

const [year, setYear] = useState("2021")
  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear) //setyear nyimpen tahun pas user ngeklik
    console.log("NewExpense.js");
    console.log(selectedYear, "Argumen");

  }


  return (
    <>
    <ExpensesFilter onChangeFilter={filterChangeHandler} saveYear={year}/>
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        price={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
      
        title={props.items[1].title}
        price={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        price={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        price={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
    </>
  );
};

export default NewExpense;
