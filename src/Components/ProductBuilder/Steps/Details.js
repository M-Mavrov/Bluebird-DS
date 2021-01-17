import React, { useRef, useState } from "react";
import "./Steps.css";

function Details(props) {
  const [state, setState] = useState(props.state);
  const newDetail = useRef();

  const handleDetailsChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      details: {
        ...state.details,
        [e.target.name]: value,
      },
    });
  };

  const handledAditionalDetail = (e) => {
    const value = e.target.value;

    if (value !== "") {
      setState({
        ...state,
        [newDetail.current.value]: value,
      });
    }
  };
  return (
    <div className="steps-container">
      <div>
        <h2>Product Details</h2>
        <div className="details-container">
          {state &&
            Object.keys(state).map((key, index) => (
              <div key={index} className="product-detail ">
                <label>{key}</label>
                <input
                  defaultValue={state[key]}
                  name={key}
                  onChange={handleDetailsChange}
                />
              </div>
            ))}
          <div className="additional-detail ">
            <label>Add New Product Detail</label>

            <input
              ref={newDetail}
              placeholder="Detail Name "
              onFocus={(e) => (e.target.value = "")}
            />
            <input
              placeholder="Detail Value "
              onFocus={(e) => (e.target.value = "")}
              onBlur={handledAditionalDetail}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
