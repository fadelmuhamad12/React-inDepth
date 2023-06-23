import React from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p>{props.id}</p>
        <div className="expense-item__price">Rp. {props.price}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
