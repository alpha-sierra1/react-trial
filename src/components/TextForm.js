import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    if (text === text.toUpperCase()) {
      setText(text.toLowerCase());
    } else {
      setText(text.toUpperCase());
    }
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase/LowerCase
        </button>
      </div>
      <div className="container my-2">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length}
          <p>{0.0008 * text.split(" ").length} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </p>
      </div>
    </>
  );
}
