import React from "react";
import "../Account.css";
import "./RenderDetails.css";

export default function RenderDetails({ accountValue }) {
  return (
    <div className="account-main">
      <div className="account-head">
        <span className="account-heading">{accountValue.type}</span>
        <span className="account-number">{accountValue.number}</span>
      </div>
      <div>
        <span className="account-item">
          Balance:
          <span className="account-item-number">+ {accountValue.balance}</span>
        </span>
        <span className="account-item">
          Available:
          <span className="account-item-number">
            + {accountValue.available}
          </span>
        </span>
      </div>
    </div>
  );
}
