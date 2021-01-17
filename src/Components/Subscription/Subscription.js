import React, { useEffect } from "react";
import { useState } from "react";
import "./Subscription.css";
import { Link } from "react-router-dom";
import { useDB } from "../../contexts/DBContext";

function Subscription() {
  const [subs, setSubs] = useState();
  const [activePlan, setActivePlan] = useState();
  const { dbState } = useDB();
  useEffect(() => {
    if (dbState) {
      setSubs(dbState.subscription);
      setActivePlan(dbState.plan);
    }
  }, [dbState]);

  return (
    <div className="subs-container">
      <h3>
        ⚠ Your subscription expires on: <span id="subs">{subs}</span>
      </h3>
      <h3>
        Current active plan: <span id="active-plan">{activePlan} </span>{" "}
      </h3>
      <p>
        To change your currently active plan, extend its duration or renew it,
        please <Link to="/contact-us">contact us</Link>.
      </p>
      <h3>
        Your plan may be automatically modified, frozen or terminated by a
        member of our team at any time in the following cases:
      </h3>
      <ul>
        <li>We have changed the terms of your chosen plan.</li>
        <li>In case of promotions or expiration of an existing one.</li>
        <li>You did not pay on time or the payment was unsuccessful.</li>
        <li>To protect you from unwanted consequences on your eBay account.</li>
      </ul>
    </div>
  );
}

export default Subscription;
