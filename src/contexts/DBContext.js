import React, { useContext, useEffect, useState } from "react";
import { firestore } from "../Firebase";
import { useAuth } from "./AuthContext";
import firebase from "firebase/app";
const DBContext = React.createContext();

export function useDB() {
  return useContext(DBContext);
}

function DBProvider({ children }) {
  const [dbState, setDbState] = useState();
  const [updated, setUpdated] = useState();
  const [dbProducts, setProducts] = useState();
  const [addPercent, setAddPercent] = useState();
  const { currentUser } = useAuth();

  useEffect(() => {
    firestore
      .collection("Users")
      .doc(currentUser.email)
      .get()
      .then((doc) => {
        const db = doc.data();
        setDbState(db);
        setAddPercent(
          +db.stateTax + +db.settings.EbayFee + +db.settings.PaypalFee
        );
      });

    firestore
      .collection("Users")
      .doc("products")
      .get()
      .then((doc) => {
        const db = doc.data();
        setProducts(db);
      });
  }, [currentUser.email, updated]);

  const updateDb = (value) => {
    firestore
      .collection("Users")
      .doc(currentUser.email)
      .update(value)
      .then(() => setUpdated(!updated))
      .catch((error) => setUpdated(!updated));
  };
  const deleteFromDb = (value) => {
    updateDb({
      [value]: firebase.firestore.FieldValue.delete(),
    });
  };

  const value = {
    dbState,
    updateDb,
    dbProducts,
    addPercent,
    deleteFromDb,
  };
  return <DBContext.Provider value={value}>{children}</DBContext.Provider>;
}

export default DBProvider;
