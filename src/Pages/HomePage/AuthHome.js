import React, { useEffect, useState } from "react";
import ProductBuilder from "../../Components/ProductBuilder/ProductBuilder";
import ProductTable from "../../Components/ProductTable/ProductTable";
import { useDB } from "../../contexts/DBContext";

function AuthHome() {
  const [state, setstate] = useState();
  const [removedProduct, setRemovedProduct] = useState(false);
  const [product, setProduct] = useState();
  const [edit, setEdit] = useState(false);
  const { dbProducts, dbState, deleteFromDb } = useDB();
  const tableHeader = [
    "Edit",
    "Image",
    "Item Info",
    "Profit",
    "Price",
    "Quantity",
    "Alerts",
    "Action",
    "END",
  ];
  useEffect(() => {
    if (dbState) {
      setstate(dbState.products);
    }
  }, [removedProduct, dbState, edit]);
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
              deleteFromDb(`products.${data}`);
            }}
          />
        </div>
      )}
    </div>
  );
}
export default AuthHome;
