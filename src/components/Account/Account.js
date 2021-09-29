import React, { useState } from "react";
import "./Account.css";
import RenderDetails from "./RenderDetails/RenderDetails";

const myAccounts = [
  {
    type: "Savings Account",
    name: "John Doe",
    number: "123456 789101",
    balance: "$22,398.02",
    available: "$1,455.09",
  },
  {
    type: "Current Account",
    name: "Doe John",
    number: "654321 109876",
    balance: "$33,253.00",
    available: "$55,444.00",
  },
  {
    type: "Personal Account",
    name: "Joe Don",
    number: "789012 09864",
    balance: "$23,323.00",
    available: "$54,554.00",
  },
];

export default function Account() {
  const [selectAccounts, setSelectAccounts] = useState(myAccounts[0]);
  const handleChange = (e) => {
    if (e === "Savings") {
      setSelectAccounts(myAccounts[0]);
    } else if (e === "Current") {
      setSelectAccounts(myAccounts[1]);
    } else {
      setSelectAccounts(myAccounts[2]);
    }
  };

  return (
    <>
      <div className="account-body">
        <span className="account-content">My Accounts</span>
        <button className="account-content transfer-button">
          New Transfer
        </button>
      </div>
      <select
        className="dropdown"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      >
        <option className="dropdown-item">Current</option>
        <option className="dropdown-item">Savings</option>
        <option className="dropdown-item">Personal</option>
      </select>
      <div className="account-display">
        <RenderDetails accountValue={selectAccounts} />
        {/* <Savings savings={myAccounts[0]} /> */}
        {/* <Personal personal={myAccounts[2]} /> */}
      </div>
    </>
  );
}
