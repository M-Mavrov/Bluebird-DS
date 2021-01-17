import React, { useRef } from "react";
import { useState } from "react";
import "./ImageEditor.css";
import SidebarItem from "./SidebarItem";
import Slider from "./Slider";
import app from "../../Firebase";

const defaultOptions = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 10,
    },
    unit: "px",
  },
  {
    name: "Invert",
    property: "invert",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
];
function ImageEditor(props) {
  const [options, setOptions] = useState(defaultOptions);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedOption = options[selectedIndex];
  const canvasRef = useRef();

  const imgRef = useRef();
  const hiddenBtn = useRef();

  const drawImg = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = imgRef.current;
    ctx.filter = getImageStyle();
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  };

  function handleSliderChange({ target }) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedIndex) return option;
        return { ...option, value: target.value };
      });
    });
    drawImg();
  }
  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });
    return filters.join(" ");
  }

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    let uuid = require("uuid");
    const storageRef = app.storage().ref();
    const ref = storageRef.child(uuid.v4());
    let url = canvas.toDataURL("image/png");
    ref
      .putString(url, "data_url")
      .then(function () {
        return ref.getDownloadURL();
      })
      .then((data) => {
        props.parentCallback(data);
      });
  };

  return (
    <div className="image-editor">
      <div className="image-container">
        <canvas
          className="image-editor-canvas"
          ref={canvasRef}
          width={imgRef.current !== undefined ? imgRef.current.width : "1070px"}
          height={
            imgRef.current !== undefined ? imgRef.current.height : "750px"
          }
        />

        <img
          ref={imgRef}
          className="image-editor-img"
          src={props.src}
          alt="img"
          style={{ display: "none" }}
          crossOrigin="anonymous"
        />
      </div>
      <div className="image-editor-sidebar">
        {options.map((option, index) => (
          <SidebarItem
            key={index}
            name={option.name}
            active={index === selectedIndex}
            handleClick={() => setSelectedIndex(index)}
          />
        ))}

        <button
          className="image-editor-btn "
          name="Save Changes"
          onClick={saveCanvas}
        >
          Save Changes
        </button>
        <button ref={hiddenBtn} onClick={drawImg} style={{ display: "none" }}>
          Save Changes
        </button>
      </div>
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
      />
    </div>
  );
}

export default ImageEditor;
