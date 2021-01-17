import React, { useCallback, useEffect, useState } from "react";

import Chart from "../../Components/Chart/Chart";
import OrdersTable from "../../Components/OrdersTable/OrdersTable";
import { useDB } from "../../contexts/DBContext";

import "./Orders.css";

function Orders() {
  const [state, setState] = useState();
  const [update, setUpdate] = useState(false);
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
  }, [dbState, sortState, update]);

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
          <button onClick={() => setUpdate(!update)}>click for state</button>
          <button
            onClick={() => {
              var array = [
                { toDate: "02-01-2021" },
                { toDate: "19/01/2021" },
                { toDate: "27/01/2021" },
                { toDate: "7/01/2021" },
                { toDate: "17/01/2021" },
                { toDate: "11/01/2021" },
                { toDate: "21/12/2020" },
              ];
              function parseISOString(s) {
                var b = s.split(/\D+/);
                return new Date(
                  Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6])
                );
              }
              console.log(parseISOString(array[0].toDate));
              array.sort(function (a, b) {
                return (
                  Math.abs(Date.now() - new Date(a.toDate)) -
                  Math.abs(Date.now() - new Date(b.toDate))
                );
              });

              console.log(array);
            }}
          >
            sorting
          </button>
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
