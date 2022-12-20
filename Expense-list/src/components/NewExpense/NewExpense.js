import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [allowEditing, setAllowEditing] = useState(false);
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const addNewExpenseHandler = () => {
    setAllowEditing(true);
  };

  const cancelNewExpenseHandler = () => {
    setAllowEditing(false);
  };

  return (
    <div className="new-expense">
      {!allowEditing && (
        <button type="button" onClick={addNewExpenseHandler}>
          Add New Expense
        </button>
      )}
      {allowEditing && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancel={cancelNewExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
