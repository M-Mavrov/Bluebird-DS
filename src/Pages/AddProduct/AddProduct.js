import React, { useRef, useState } from "react";
import Button from "../../Components/Buttons/Button";
import ProductTable from "../../Components/ProductTable/ProductTable";
import "./AddProduct.css";
import { useEffect } from "react";
import { useDB } from "../../contexts/DBContext";
import { firestore } from "../../Firebase";

import ProductBuilder from "../../Components/ProductBuilder/ProductBuilder";

function AddProduct() {
  const [state, setstate] = useState();
  const [removedProduct, setRemovedProduct] = useState(false);
  const [product, setProduct] = useState();
  const [edit, setEdit] = useState(false);
  const { dbProducts, dbState, updateDb, deleteFromDb } = useDB();
  const inputRef = useRef();
  const tableHeader = [
    "Edit",
    "Image",
    "Item Info",
    "Profit",
    "Price",
    "Stock",
    "Alerts",
    "Action",
    "END",
  ];

  useEffect(() => {
    if (dbState) {
      setstate(dbState.uneditedProducts);
    }
  }, [removedProduct, dbState, edit]);
  const handleAddProduct = () => {
    //just for simulation\

    let product = `product${Object.keys(state).length + 1}`;

    if (dbProducts[product] !== undefined) {
      updateDb({
        uneditedProducts: {
          ...state,
          [`${product}`]: dbProducts[product],
        },
      });
      setstate({ ...state, [`${product}`]: dbProducts[product] });
    }
  };

  return (
    <div className="addproduct-container">
      {edit && state !== undefined ? (
        <ProductBuilder
          state={dbProducts[product]}
          product={product}
          saved={() => {
            setEdit(!edit);
            deleteFromDb(`uneditedProducts.${product}`);
          }}
          close={() => setEdit(!edit)}
        />
      ) : (
        <div>
          <h2>Add Product</h2>
          <div className="flexed">
            <input ref={inputRef} />
            <Button
              buttonSize="btn--medium"
              buttonColor="green"
              onClick={() => {
                inputRef.current.value = "";
                handleAddProduct();
              }}
            >
              Add
            </Button>
          </div>
          <ProductTable
            edit={(data) => {
              setProduct(data);
              setEdit(!edit);
            }}
            tableHeader={tableHeader}
            tableRow={state}
            actionName="hello"
            removeProduct={(data) => {
              setRemovedProduct(!removedProduct);
              setProduct(data);
              deleteFromDb(`uneditedProducts.${data}`);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default AddProduct;
