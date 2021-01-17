import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useDB } from "../../contexts/DBContext";
import Button from "../Buttons/Button";
import "./SupplierSettings.css";

function SupplierSettings() {
  const [stateTax, setStateTax] = useState();
  const { dbState, updateDb } = useDB();
  const stateTaxRef = useRef();
  const data = {
    stateTax: stateTax,
  };

  useEffect(() => {
    if (dbState) {
      setStateTax(dbState.stateTax);
    }
  }, [dbState]);

  const handleSubmit = () => {
    updateDb(data);
  };
  return (
    <div className="sup-container">
      <h3>State tax (%)</h3>
      <p>
        For USA sellers, State Tax % is average percent tax which you have to
        pay for different states on Amazon.com ~ 8% ( suggested )
      </p>
      <ul>
        <li>Here you can add bank or other kind of taxes that you pay.</li>
        <li> Not connected with Tax table in ebay!</li>
      </ul>
      <input
        ref={stateTaxRef}
        name="State Tax"
        placeholder="State Tax %"
        onBlur={() => {
          const value = +stateTaxRef.current.value;

          setStateTax(value.toFixed(2));
        }}
        defaultValue={stateTax}
      />
      <Button
        onClick={handleSubmit}
        buttonSize="btn--large"
        buttonColor="green"
        type="submit"
      >
        Save changes
      </Button>
    </div>
  );
}

export default SupplierSettings;
