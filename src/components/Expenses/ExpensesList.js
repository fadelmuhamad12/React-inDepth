import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expensesContent = <h3>No Item Found</h3>;

    if(props.items.length === 0) {
        return <h2 className="expenses-list__fallback"> No Items Found</h2>
    }

  return (
    <ul className="expenses-list">
      {props.items.map(({ id, title, amount, date }) => {
        return (
          <ExpenseItem key={id} title={title} price={amount} date={date} />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
