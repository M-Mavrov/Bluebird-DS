import React, { useRef, useState } from "react";
import Button from "../Buttons/Button";
import "./SignUpForm.css";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { firestore } from "../../Firebase";
import { useSelector } from "react-redux";

function SignUpForm(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const familyName = useRef();
  const firstName = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  const plans = useSelector((state) => state.plans);

  const getTime = () => {
    const today = new Date();
    const endDate = new Date(
      today.setDate(today.getDate() + 30)
    ).toLocaleString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return endDate;
  };
  async function handleSubmit(event) {
    event.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match!");
    }
    try {
      setError("");

      await signup(emailRef.current.value, passwordRef.current.value).then(
        (data) => {
          if (data) {
            firestore
              .collection("Users")
              .doc(emailRef.current.value)
              .set({
                userFirstName: firstName.current.value,
                userFamilyName: familyName.current.value,
                plan: plans.plans.name,
                subscription: getTime(),
                vero: ["To remove names click 🡆 "],
                settings: {
                  EbayFee: "",
                  PayPalEmail: "",
                  PaypalFee: "",
                  additionalProfit: "",
                  city: "",
                  country: "United States",
                  multiply: "",
                  noshipingcost: "",
                  notprimestock: "",
                  npLong: "14-Days(Recommended)",
                  npShort: "7-Days(Recommended)",
                  payment: "Paypal: Immediete pay",
                  prime: "2-days (Recommended)",
                  fillImages: "",
                  quantity: "",
                  returns:
                    "30-Days Returns Accepted, Seller Pays (Recommended)",
                  zip: "",
                },
                editorValue: "<p>Edit text here</p>",
              });
            history.push("/");
          }
        }
      );
    } catch {
      setError("Failed to create an account");
    }
  }

  return (
    <div>
      <form className="sign-up" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {error && <p className="error">{error}</p>}
        <label>First Name</label>
        <input ref={firstName} name="first-name" />
        <label>Family Name</label>
        <input ref={familyName} name="family-name" />
        <label>Email</label>
        <input ref={emailRef} name="email" />
        <label>Password</label>
        <input ref={passwordRef} name="password" type="password" />
        <label>Confirm Password</label>
        <input
          ref={confirmPasswordRef}
          name="confirm password"
          type="password"
        />

        <div className="sign-up-btn">
          <Button buttonSize="btn--large" buttonColor="green" type="submit">
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
