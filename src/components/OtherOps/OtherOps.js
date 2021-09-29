import React from "react";
import "./OtherOps.css";
import Accordion from "./Accordion/Accordion";
export default function OtherOps() {
  return (
    <div className="otherops-wrapper">
      <span className="otherops-head">Other Operations </span>
      <div className="otherops-body">
        <Accordion title="My Deposits" content="some content" />
        <Accordion title="Loans" content="some content" />
        <Accordion title="Credit Lines" content="some content" />
        <Accordion title="Trade and Finance" content="some content" />
      </div>
    </div>
  );
}
