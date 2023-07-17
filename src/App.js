import { useState } from "react";
import NewExpense from "./components/Expenses/NewExpense";
import NewExpenses from "./components/NewExpense/NewExpenses";

const Dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_expenses);

  const addExpenseHandler = (expenses) => { //INI BUAT INPUTAN MASUKIN ITEM BARU
    setExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses ];
    });
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} /> {/*INI INPUTAN BUAT BIKIN BARU*/}
      <NewExpense items={expenses} />  {/*INI BUAT NGE PASSING SI DUMMY EXPENSES*/}
    </div>
  );
}

export default App;
