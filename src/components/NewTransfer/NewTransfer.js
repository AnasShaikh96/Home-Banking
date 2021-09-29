import React from "react";
import "./NewTransfer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function NewTransfer() {
  return (
    <>
      <div className="transfer-wrap">
        <h3 className="transfer-head">New Transfer</h3>
        <div className="transfer-body">
          <div className="card">
            <span className="transfer-body-heading">
              1. Choose an Origin Account
            </span>
            <div className="transfer-card">
              <span className="transfer-child-name">Current Account</span>
              <span className="transfer-child-number">83409 3459 0843</span>
              <span className="transfer-child-amount">$-12,344 </span>
            </div>
            <div className="transfer-card">
              <span className="transfer-child-name">Savings Account</span>
              <span className="transfer-child-number">08084 38340 9345</span>
              <span className="transfer-child-amount">$ 1,098.00 </span>
            </div>
            <div className="transfer-card">
              <span className="transfer-child-name">Christopher Account</span>
              <span className="transfer-child-number">08084 38340 93459</span>
              <span className="transfer-child-amount">$ 2,677.00 </span>
            </div>
          </div>
          <div>
            <span className="transfer-body-heading">
              2. Choose a Destination Account
            </span>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="transfer-header">NEW ACCOUNT</span>
              <FontAwesomeIcon icon={faPlus} className="icon" />
            </div>
            <div className="transfer-card">
              <span className="transfer-child-name">Current Account</span>
              <span className="transfer-child-number">83409 3459 0843</span>
              <span className="transfer-child-amount">$-12,344 </span>
            </div>
            <div className="transfer-card">
              <span className="transfer-child-name">Christopher Account</span>
              <span className="transfer-child-number">08084 38340 93459</span>
              <span className="transfer-child-amount">$ 2,677.00 </span>
            </div>
          </div>
          <div>
            <span className="transfer-body-heading">3. Transfer Data</span>
            <form>
              <label className="labelAmount">Amount</label>
              <input type="text" className="inputAmount" placeholder="$" />
              <div>
                <label className="labelRadio">
                  <input type="radio" name="new" /> Immediate
                </label>
                <label className="labelRadio">
                  <input type="radio" name="new" />
                  Choose date
                </label>
                <label className="labelDate">Choose a date</label>
                <input type="date" className="inputDate" placeholder="" />
              </div>
              <label className="labelConcept">Concept</label>
              <input
                typ="text"
                placeholder="Description"
                className="inputConcept"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
