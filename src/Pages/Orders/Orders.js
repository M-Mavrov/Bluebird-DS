import React, { useCallback, useEffect, useState } from "react";
import Chart from "../../Components/Chart/Chart";
import OrdersTable from "../../Components/OrdersTable/OrdersTable";
import { useDB } from "../../contexts/DBContext";
import "./Orders.css";

function Orders() {
  const [state, setState] = useState();
  const { dbState } = useDB();

  const tableHeader = [
    "Date",
    "Image",
    "Product",
    "Profit",
    "Price",
    "Quantity",
  ];
  const sortState = useCallback((obj) => {
    let array = Object.keys(obj).map((keys) => obj[keys]);

    array.sort(function (a, b) {
      return (
        Math.abs(Date.now() - new Date(a.date)) -
        Math.abs(Date.now() - new Date(b.date))
      );
    });

    return array;
  }, []);
  useEffect(() => {
    if (dbState) {
      setState(sortState(dbState.products));
    }
  }, [dbState, sortState]);

  const setChartData = () => {
    let value = Object.keys(state).map((keys) => {
      return {
        date: state[keys].date,
        value: state[keys].quantity,
      };
    });

    return value;
  };
  return (
    <div className="orders-container">
      {state !== undefined ? (
        <div>
          <Chart data={setChartData()} />
          <OrdersTable
            tableRow={state}
            tableHeader={tableHeader}
            actionName="details"
          />
        </div>
      ) : (
        <p>spinner</p>
      )}
    </div>
  );
}

export default Orders;
