import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState("year");

  const yearSelectionHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log(year);
  };

  const itemsByYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onYearSelection={yearSelectionHandler} />
      <ExpensesChart expenses={itemsByYear} />
      <ExpensesList items={itemsByYear} />
    </Card>
  );
}

export default Expenses;
