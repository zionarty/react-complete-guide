import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onSorted = (filterYear) => {
    console.log(filterYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSorted={onSorted} />
        <ExpenseItem
          title={props.expenseItem[0].title}
          amount={props.expenseItem[0].amount}
          date={props.expenseItem[0].date}
        />
        <ExpenseItem
          title={props.expenseItem[1].title}
          amount={props.expenseItem[1].amount}
          date={props.expenseItem[1].date}
        />
        <ExpenseItem
          title={props.expenseItem[2].title}
          amount={props.expenseItem[2].amount}
          date={props.expenseItem[2].date}
        />
        <ExpenseItem
          title={props.expenseItem[3].title}
          amount={props.expenseItem[3].amount}
          date={props.expenseItem[3].date}
        />
      </Card>
    </div>
  );
};
export default ExpenseList;
