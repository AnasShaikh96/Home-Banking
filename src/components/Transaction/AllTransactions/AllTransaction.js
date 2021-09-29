import React from "react";
import "./AllTransaction.css";

export default function AllTransactions({ value }) {
  return (
    <div className="details-table">
      <div className="details-table-body">
        <p>Date</p>
        {value.map((item) => (
          <div className="details-table-item">{item.date}</div>
        ))}
      </div>
      <div className="details-table-body">
        <p>Concept</p>
        {value.map((item) => (
          <div className="details-table-item">{item.concept}</div>
        ))}
      </div>
      <div className="details-table-body">
        <p>Transaction</p>
        {value.map((item) => (
          <div className="details-table-item" style={{ color: item.color }}>
            {item.income}
          </div>
        ))}
      </div>
      <div className="details-table-body">
        <p>Balance</p>
        {value.map((item) => (
          <div className="details-table-item">{item.balance}</div>
        ))}
      </div>
    </div>
  );
}
