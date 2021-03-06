import React from "react";
import "./Pricing.css";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { useDispatch } from "react-redux";
import * as actions from "../../store/Actions";

function Pricing() {
  const dispatch = useDispatch();

  return (
    <div className="pricing__section">
      <div className="pricing__wrapper">
        <h1 className="pricing__heading">Pricing</h1>
        <div className="pricing__container">
          <Link to="/get-started" className="pricing__container-card">
            <div className="pricing__container-cardinfo">
              <div className="icon"></div>
              <h3>Starter</h3>
              <h4>$8.99</h4>
              <p>per month</p>
              <ul className="pricing__container-features">
                <li>100 Listings </li>
                <li>2% Cash Back</li>
                <li>$1,000 Limit</li>
              </ul>
              <Button
                buttonSize="btn--medium"
                buttonColor="primary"
                onClick={() =>
                  dispatch(actions.addPlan({ name: "starter", value: false }))
                }
              >
                Get Started
              </Button>
            </div>
          </Link>
          <Link to="/get-started" className="pricing__container-card">
            <div className="pricing__container-cardinfo">
              <div className="icon"></div>
              <h3>Silver</h3>
              <h4>$29.99</h4>
              <p>per month</p>
              <ul className="pricing__container-features">
                <li>500 Listings </li>
                <li>2% Cash Back</li>
                <li>$5,000 Limit</li>
              </ul>
              <Button
                buttonSize="btn--medium"
                buttonColor="primary"
                onClick={() =>
                  dispatch(actions.addPlan({ name: "silver", value: false }))
                }
              >
                Get Started
              </Button>
            </div>
          </Link>
          <Link to="/get-started" className="pricing__container-card">
            <div className="pricing__container-cardinfo">
              <div className="icon"></div>
              <h3>Gold</h3>
              <h4>$49.99</h4>
              <p>per month</p>
              <ul className="pricing__container-features">
                <li>1000 Listings </li>
                <li>3.5% Cash Back</li>
                <li>$10,000 Limit</li>
              </ul>
              <Button
                buttonSize="btn--medium"
                buttonColor="primary"
                onClick={() =>
                  dispatch(actions.addPlan({ name: "gold", value: false }))
                }
              >
                Get Started
              </Button>
            </div>
          </Link>
          <Link to="/get-started" className="pricing__container-card">
            <div className="pricing__container-cardinfo">
              <div className="icon"></div>
              <h3>Diamond</h3>
              <h4>$99.99</h4>
              <p>per month</p>
              <ul className="pricing__container-features">
                <li>Unlimited Listings </li>
                <li>5% Cash Back</li>
                <li>$20,000 Limit</li>
              </ul>
              <Button
                buttonSize="btn--medium"
                buttonColor="primary"
                onClick={() =>
                  dispatch(actions.addPlan({ name: "diamond", value: false }))
                }
              >
                Get Started
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Pricing;
