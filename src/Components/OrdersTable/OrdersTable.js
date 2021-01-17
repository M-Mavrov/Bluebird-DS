import React from "react";

import { useDB } from "../../contexts/DBContext";

const OrdersTable = (props) => {
  const { dbState, addPercent } = useDB();

  const calculateSellPrice = (num) => {
    const breakEvenPrice = +((+num / 100) * (+addPercent + 100));
    const sellPrice =
      (breakEvenPrice / 100) * (+dbState.settings.additionalProfit + 100);
    return sellPrice.toFixed(2);
  };
  const calculateProfit = (num) => {
    const breakEvenPrice = +((+num / 100) * (+addPercent + 100));
    const sellPrice =
      (breakEvenPrice / 100) * (+dbState.settings.additionalProfit + 100);
    return (sellPrice - breakEvenPrice).toFixed(2);
  };

  return (
    <div className="product-table-container">
      <table>
        <thead>
          <tr>
            {props.tableHeader.map((row, index) => (
              <th key={index} value={row}>
                {row}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.tableRow !== undefined &&
            Object.keys(props.tableRow)
              .sort()
              .map((keys, index) => (
                <tr key={index}>
                  <td>{props.tableRow[keys].date}</td>
                  <td>
                    <img alt={index} src={props.tableRow[keys].img} />
                  </td>
                  <td>{props.tableRow[keys].title}</td>
                  <td className="box-container">
                    {calculateProfit(props.tableRow[keys].price.buyPrice) *
                      props.tableRow[keys].quantity}
                  </td>
                  <td className="price ">
                    <div className="sell flexed">
                      <p> Sell</p>
                      <div>
                        {calculateSellPrice(
                          props.tableRow[keys].price.buyPrice
                        )}
                      </div>
                    </div>
                    <div className="buy flexed">
                      <p> Buy</p>{" "}
                      <div>{props.tableRow[keys].price.buyPrice}</div>
                    </div>
                  </td>

                  <td>
                    <div className="box-container">
                      {props.tableRow[keys].quantity}
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
