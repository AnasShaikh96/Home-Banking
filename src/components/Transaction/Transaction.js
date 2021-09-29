import React, { useState } from "react";
import "./Transaction.css";
import allTransactions from "./allTransactions";
import AllTransaction from "./AllTransactions/AllTransaction";

export default function Transaction() {
  const [selectValue, setSelectValue] = useState(allTransactions);
  const handleChange = (e) => {
    if (e === "expense") {
      const expense = allTransactions.filter((item) => item.type === "Expense");
      setSelectValue(expense);
    } else if (e === "income") {
      const income = allTransactions.filter((item) => item.type === "Income");
      setSelectValue(income);
    } else {
      setSelectValue(allTransactions);
    }
  };

  return (
    <div className="transaction-body">
      <p className="transaction-header">Transaction details</p>
      <div className="transaction-content">
        <select
          className="dropDown"
          onClick={(e) => handleChange(e.target.value)}
        >
          <option value="all" className="dropdown-item" defaultValue>
            All Transaction
          </option>
          <option value="income" className="dropdown-item">
            Income
          </option>
          <option value="expense" className="dropdown-item">
            Expense
          </option>
        </select>
      </div>
      <div className="transaction-details">
        <AllTransaction value={selectValue} />
      </div>
    </div>
  );
}
