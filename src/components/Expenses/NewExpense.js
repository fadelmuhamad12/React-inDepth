import "./NewExpense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const NewExpense = (props) => {
  const [year, setYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear); //setyear nyimpen tahun pas user ngeklik
  };

  const filteredItemByYear = props.items.filter((item) => {
    return item.date.getFullYear().toString() === year;
  });

  return (
    <li>
      <ExpensesFilter onChangeFilter={filterChangeHandler} saveYear={year} />
      <Card className="expenses">
        <ExpensesChart NewExpense={filteredItemByYear}/>
        <ExpensesList items={filteredItemByYear} />
      </Card>
    </li>
  );
};

export default NewExpense;
