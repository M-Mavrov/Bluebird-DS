import React, { useCallback, useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import DropDown from "../DropDownMenu/DropDown";
import "./Chart.css";

function Chart(props) {
  const [chartData, setChartData] = useState({});
  const [update, setUpdate] = useState(false);
  const dropDownRef = useRef();
  const chart = (labels, data) => {
    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Orders",
          data: data,
          lineTension: 0.1,
          backgroundColor: "#b3c3fc",
          borderColor: " #414d77",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#074f03",
          pointHoverBorderColor: "#2ba758",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
        },
      ],
    });
  };
  const getDaysInMonth = () => {
    let length;
    switch (dropDownRef.current.value) {
      case "14 Days":
        length = 14;
        break;
      case "3 Months":
        length = 63;
        break;
      default:
        length = 31;
        break;
    }
    let day = new Date().getDate() + 1;
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let value = new Array(length)
      .fill("")
      .map(
        (v, i) => new Date(year, month, day - i).toISOString().split("T")[0]
      );
    return value.reverse();
  };
  const handleData = useCallback(() => {
    let array = getDaysInMonth();
    let obj = props.data;
    let count = {};
    let newArray = new Array(array.length).fill(0);
    let index = Object.keys(obj).map((keys) => {
      let i = array.indexOf(obj[keys].date);
      return i;
    });
    index.forEach(function (x) {
      count[x] = (count[x] || 0) + 1;
    });

    Object.keys(count).map((keys) => (newArray[keys] = count[keys]));
    return newArray;
  }, [props.data]);

  useEffect(() => {
    chart(getDaysInMonth(), handleData());
  }, [handleData, update]);
  return (
    <div>
      <div className="something-ss">
        <DropDown
          ref={dropDownRef}
          labelname="Select time period"
          defaultValue="14 Days"
          options={["14 Days", "Last Month", "3 Months"]}
          onChange={() => setUpdate(!update)}
        />
      </div>

      <div style={{ width: "100%", height: "300px" }}>
        <Line
          data={chartData}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: true,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
}

export default Chart;
