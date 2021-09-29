import React from "react";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function Banner() {
  const dateNow = new Date();

  return (
    <div className="banner-main">
      <div className="banner-heading">
        <div className="banner-wrap">
          <FontAwesomeIcon icon={faClock} className="banner-clock" />
          {/* <FontAwesomeIcon icon={["fas", "clock"]} /> */}
          <div>
            <span className="banner-heading-content">Welcome Back Jane</span>
            <span
              className="banner-heading-content"
              style={{ fontSize: "0.9rem" }}
            >
              {dateNow.toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      <div className="banner-body">
        <div>
          <span className="banner-body-label">Savings Account</span>
          <span className="banner-body-amount">$234,567.00</span>
        </div>
        <div>
          <span className="banner-body-label">Current Account</span>
          <span className="banner-body-amount">$234,567.00</span>
        </div>
      </div>
    </div>
  );
}
