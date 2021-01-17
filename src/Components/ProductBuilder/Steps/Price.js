import React, { useCallback, useState } from "react";
import "./Steps.css";
function Price(props) {
  const calculatePercent = useCallback((num, per) => {
    return ((+num / 100) * (+per + 100)).toFixed(2);
  }, []);
  const [state, setState] = useState(() => {
    const buyPrice = props.state.price.buyPrice;
    const breakEvenPrice = calculatePercent(buyPrice, props.state.addPercent);
    const sellPrice = calculatePercent(
      breakEvenPrice,
      props.state.additionalProfit
    );
    const profit = (+sellPrice - +breakEvenPrice).toFixed(2);
    const obj = {
      quantity: props.state.quantity,
      price: {
        buyPrice: buyPrice,
        sellPrice: sellPrice,
      },
      breakEvenPrice: breakEvenPrice,
      profit: profit,
    };
    return obj;
  });
  const handleProfitChange = (e) => {
    const value = e.target.value;
    const newPrice = (+state.breakEvenPrice + +value).toFixed(2);
    const obj = {
      ...state,
      price: {
        ...state.price,
        sellPrice: newPrice,
      },
      profit: value,
    };
    console.log(obj);
    setState(obj);
    props.parentCallback(obj);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const obj = {
      ...state,
      [e.target.name]: value,
    };
    setState(obj);
    props.parentCallback(obj);
  };
  return (
    <div className="steps-container">
      <div>
        <h2>Price</h2>
        <div className="details-container flexed">
          <div>
            <div className="sell flexed">
              <p> Sell</p>
              <div>{state.price.sellPrice}</div>
            </div>
            <div className="buy flexed">
              <p> Buy</p> <div> {state.price.buyPrice}</div>
            </div>
          </div>

          <div className="profit-qty ">
            <label>Profit</label>
            <input
              defaultValue={state.profit}
              type="number"
              name="profit"
              onChange={handleProfitChange}
            />

            <label>Quantity</label>
            <input
              value={state.quantity}
              name="quantity"
              type="number"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
