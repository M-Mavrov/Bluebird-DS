import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useDB } from "../../contexts/DBContext";
import { firestore } from "../../Firebase";
import "./Vero.css";

function Vero() {
  const [vero, setVero] = useState([]);
  const { currentUser } = useAuth();
  const veroRef = useRef();
  const { dbState } = useDB();
  const handleRemoveItem = (idx) => {
    const temp = [...vero];
    temp.splice(idx, 1);
    setVero(temp);
  };
  const handleVeroChange = (event) => {
    const value = veroRef.current.value;
    if (value !== "") {
      setVero((prev) => [...prev, value]);
      veroRef.current.value = "";
    }
  };
  useEffect(() => {
    if (vero.length === 0 && dbState) {
      setVero(dbState.vero);
    }

    if (vero.length !== 0 && vero !== dbState) {
      firestore
        .collection("Users")
        .doc(currentUser.email)
        .update({ vero: vero });
    }
  }, [currentUser, vero, dbState]);

  const mapVero = () =>
    vero.map((name, index) => (
      <div className="vero-items-container" key={index}>
        <p className="vero-items">
          {name}
          <span
            className="vero-remover"
            onClick={() => handleRemoveItem(index)}
          >
            &times;
          </span>
        </p>
      </div>
    ));

  return (
    <div>
      <p>
        If you don't know what a VERO is, you can find out on our{" "}
        <Link to="/guide">Guide</Link> page.
      </p>
      <h3>
        Please do NOT add names ( brands ) that are not VERO, as you will not be
        able to list them afterwards!
      </h3>
      <h3>You can NOT add more than one name ( brand ) at a time !</h3>
      {vero && mapVero()}
      <input
        ref={veroRef}
        name="Add VERO"
        placeholder="Add to VERO list"
        onKeyPress={(event) => {
          event.key === "Enter" && handleVeroChange();
        }}
        onBlur={handleVeroChange}
      />
    </div>
  );
}

export default Vero;
