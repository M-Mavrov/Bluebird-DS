import React, { useRef, useState } from "react";

function Title(props) {
  const [newTitle, setNewTitle] = useState(props.title);
  const ref = useRef();
  return (
    <div className="steps-container ">
      <p>{props.alerts.title.vero}</p>
      <p>{props.alerts.title.warning}</p>
      <h1>Title</h1>
      <h3>Guideline :</h3>
      <p>
        Have a well-structured product title. Front-load your titles with
        relevant keywords and organize them in a readable, logical order. Don’t
        use acronyms, like NIB, that buyers may not know or understand.
      </p>
      <h3>Note: The title must not exceed 80 characters, including spaces !</h3>
      <p>Characters left: {80 - newTitle.length}</p>
      <input
        className="title-input"
        ref={ref}
        defaultValue={props.title}
        onChange={() => setNewTitle(ref.current.value)}
        onBlur={(event) => {
          event.preventDefault();
          props.parentCallback(newTitle);
        }}
        maxLength="80"
        minLength="5"
      />
    </div>
  );
}

export default Title;
