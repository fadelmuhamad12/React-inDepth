import React, {useState} from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";


const ExpenseItem = (props) => {
  const [title, seTitle] = useState(props.title)

  const clickHandler = () => {
    seTitle("Updated!")
    console.log(title);
  }



  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p>{props.id}</p>
        <div className="expense-item__price">Rp. {props.price}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
