import "./ExpenseDate.css";
import React from "react";

const ExpenseDate = (props) => {
  // Mengonversi string tanggal menjadi objek tanggal
  const date = new Date(props.date);

  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
