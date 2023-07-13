import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredJumlah, setEnteredJumlah] = useState ("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  
  const jumlahChangeHandler = (event) => {
      setEnteredJumlah(event.target.value)
  }

  // HANDLER BUAT NYIMPAN SEMUA HANDLER DIATAS (ALTERNATIF)
  // const inputChangeHandler = (identify, value) => {
  //   if(identify === "title") {
  //     setEnteredTitle(value);
  //   }else if (identify === 'amount') {
  //     setEnteredAmount(value);
  //   }else {
  //     setEnteredDate(value)
  //   }
  // }

  const submitHandler = (event) => {
    event.preventDefault();

    const addExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      jumlah: enteredJumlah,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(addExpense);
    setEnteredTitle(""); //INI BIAR KETIKA DI MASUKKAN TITLE TRUS DI ENTER JD KOSONG LG 
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredAmount("")
    setEnteredJumlah("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Jumlah</label>
          <input
            type="number"
            min="1"
            step="1"
            onChange={jumlahChangeHandler}
            value={enteredJumlah}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
