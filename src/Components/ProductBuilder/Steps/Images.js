import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import app from "../../../Firebase";
import ImageEditor from "../../ImageEditor/ImageEditor";
import Modal from "../../Modal/Modal";
import "./Steps.css";

function Images(props) {
  const [imagesArray, setImagesArray] = useState();
  const [modal, setModal] = useState(false);
  const [src, setSrc] = useState("");
  const [index, setIndex] = useState();
  const [loaded, setLoaded] = useState(false);
  const uploadImgRef = useRef();
  const imgRef = useRef();
  useEffect(() => {
    if (props.images && imagesArray === undefined) {
      setImagesArray(props.images);
    }
  }, [props.images, imagesArray, loaded]);

  // let hi = [
  //   "https://i.ibb.co/3dyvcrM/41-UNq-Jn-Jj-BL.jpg",
  //   "https://i.ibb.co/k2bVrL1/61y-FF-9-UYSL-SL1500.jpg",
  //   "https://i.ibb.co/WB3MqH4/511-BIN6-Cj4-L.jpg",
  //   "https://i.ibb.co/jfHJCF6/71ob-Vzm-NQL-SL1200.jpg",
  //   "https://i.ibb.co/3dyvcrM/41-UNq-Jn-Jj-BL.jpg",
  //   "https://i.ibb.co/k2bVrL1/61y-FF-9-UYSL-SL1500.jpg",
  //   "https://i.ibb.co/WB3MqH4/511-BIN6-Cj4-L.jpg",
  //   "https://i.ibb.co/jfHJCF6/71ob-Vzm-NQL-SL1200.jpg",
  //   "https://i.ibb.co/3dyvcrM/41-UNq-Jn-Jj-BL.jpg",
  //   "https://i.ibb.co/k2bVrL1/61y-FF-9-UYSL-SL1500.jpg",
  //   "https://i.ibb.co/WB3MqH4/511-BIN6-Cj4-L.jpg",
  //   "https://i.ibb.co/jfHJCF6/71ob-Vzm-NQL-SL1200.jpg",
  // ];

  const handleRemoveItem = (idx) => {
    const temp = [...imagesArray];
    temp.splice(idx, 1);
    setImagesArray(temp);
  };

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    let uuid = require("uuid");
    if (file) {
      const storageRef = app.storage().ref();
      const fileRef = storageRef.child(uuid.v4());
      await fileRef.put(file);
      const fileUrl = await fileRef.getDownloadURL();
      let array = imagesArray;
      array.push(fileUrl);
      setImagesArray(array);
      setLoaded(!loaded);
      props.parentCallback(array);
    }
  };
  const handleEditedImage = (index, url) => {
    const temp = [...imagesArray];
    temp.splice(index, 1, url);
    setImagesArray(temp);
    props.parentCallback(temp);
  };
  return (
    <div className="steps-container">
      <h1>Images</h1>
      <div className="image-upload">
        <label
          htmlFor="imageUpload"
          onClick={() => {
            if (imagesArray.length <= 12) {
              uploadImgRef.current.click();
            } else {
              window.alert("You can't have more then 12 images");
            }
          }}
        >
          Upload Image
        </label>

        <input
          style={{ display: "none" }}
          type="file"
          name="img"
          accept="image/*"
          onChange={handleUploadImage}
          ref={uploadImgRef}
        />
      </div>

      <div className=" images-container">
        <Modal show={modal} handleClose={() => setModal(false)}>
          <ImageEditor
            src={src}
            parentCallback={(data) => {
              handleEditedImage(index, data);
            }}
          />
        </Modal>

        {imagesArray &&
          imagesArray.map((image, index) => (
            <div key={index} className="inside-map-container">
              <img
                ref={imgRef}
                alt={index}
                src={image}
                onClick={(e) => {
                  setSrc(e.target.src);
                  setIndex(index);
                  setModal(true);
                }}
              />
              <span
                className="image-remover"
                onClick={() => handleRemoveItem(index)}
              >
                &times;
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Images;
