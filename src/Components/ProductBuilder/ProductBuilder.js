import React, { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import "./ProductBuilder.css";
import Description from "./Steps/Description";
import Details from "./Steps/Details";
import Title from "./Steps/Title";
import { useDB } from "../../contexts/DBContext";
import Images from "./Steps/Images";
import Price from "./Steps/Price";

function ProductBuilder(props) {
  const [state, setState] = useState();
  const [updated, setUpdated] = useState(false);
  const [init, setInit] = useState(false);
  const [settings, setSetting] = useState();
  const [editorValue, setEditorValue] = useState();
  const { dbState, updateDb, addPercent } = useDB();

  const [updatedProduct, setUpdatedProduct] = useState(null);

  useEffect(() => {
    if (props.product) {
      setInit(true);
      setSetting(dbState.settings);
      setEditorValue(dbState.editorValue);
      setState({ ...props.state, quantity: dbState.settings.quantity });
    }
  }, [props.product, dbState, addPercent, props.state, updated]);

  const updateDbProduct = () => {
    const price = calculatePrice();
    let today = new Date().toISOString().split("T")[0];
    if (updatedProduct !== null) {
      updateDb({
        [`products.${props.product}`]: { ...updatedProduct, date: today },
      });
    } else {
      updateDb({
        [`products.${props.product}`]: {
          ...state,
          ...price,
          date: today,
        },
      });
    }
  };

  const calculatePrice = () => {
    const calculatePercent = (num, per) => {
      return ((+num / 100) * (+per + 100)).toFixed(2);
    };
    const buyPrice = state.price.buyPrice;
    const breakEvenPrice = calculatePercent(buyPrice, addPercent);
    const sellPrice = calculatePercent(
      breakEvenPrice,
      settings.additionalProfit
    );
    const profit = (+sellPrice - +breakEvenPrice).toFixed(2);
    return {
      breakEvenPrice: breakEvenPrice,
      price: {
        buyPrice: buyPrice,
        sellPrice: sellPrice,
      },
      profit: profit,
    };
  };
  return (
    <div>
      {init ? (
        <div className="product-builder-container">
          <div>
            <Title
              title={state.title}
              alerts={state.alerts}
              parentCallback={(data) => {
                setUpdatedProduct({ ...state, title: data });
              }}
            />
            <Images
              images={state.img}
              settings={settings}
              parentCallback={(data) => {
                setUpdatedProduct({ ...state, img: data });
              }}
            />

            <Price
              state={{
                price: { buyPrice: state.price.buyPrice },
                addPercent: addPercent,
                additionalProfit: settings.additionalProfit,
                quantity: settings.quantity,
              }}
              parentCallback={(data) => {
                setUpdatedProduct({ ...state, ...data });
              }}
            />
            <Details
              state={{
                city: settings.city,
                country: settings.country,
                zip: settings.zip,
                ...state.details,
              }}
              parentCallback={(data) =>
                setUpdatedProduct({ ...state, ...data })
              }
            />
            <Description
              alerts={state.alerts}
              desc={state.desc.concat(editorValue)}
              parentCallback={(data) => {
                setUpdatedProduct({ ...state, desc: data });
              }}
            />
          </div>
          <div className="upload-btn">
            <Button
              buttonColor="green"
              buttonSize="btn--large"
              onClick={() => {
                setUpdated(!updated);
                updateDbProduct();
                props.saved();
              }}
            >
              Update Product
            </Button>
          </div>
          <div className="close-btn">
            <Button
              buttonColor="red"
              buttonSize="btn--large"
              onClick={() => props.close()}
            >
              Close Editor
            </Button>
          </div>
        </div>
      ) : (
        <h1>Spinner</h1>
      )}
    </div>
  );
}

export default ProductBuilder;
