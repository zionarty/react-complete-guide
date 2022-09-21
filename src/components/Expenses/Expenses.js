import React, { useState } from "react";
//import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onSorted = (filterYear) => {
    setFilteredYear(filterYear);
  };

  //filter option
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSorted={onSorted} />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
};
export default ExpenseList;
