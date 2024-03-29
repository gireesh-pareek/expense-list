import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const yearSelectionHandler = (event) => {
    const selectedYear = event.target.value;
    props.onYearSelection(selectedYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearSelectionHandler}>
          <option value="year">Select Year</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
