import React from "react";
import { useState } from "react";

export default function Textbox(props) {
  function wordsCountFn(text) {
    var cnt = 0;
    var start = false;
    var len = text.length;
    if (!text) {
      start = false;
      return 0;
    }
    if ((text[len - 1] === " ") | (text[len - 1] === "\n")) {
      len--;
    }
    for (var i = 0; i < len; i++) {
      if ((text[i] === " ") | (text[i] === "\n")) {
        if ((text[i + 1] !== " ") & (text[i + 1] !== "\n") & start) {
          cnt++;
        }
      } else {
        if (!start) {
          cnt++;
          start = true;
        }
      }
    }
    return cnt;
  }
  function handleUpperCase() {
    setText(text.toUpperCase());
  }
  function handleLowerCase() {
    setText(text.toLowerCase());
  }
  function handleOnChange(event) {
    setText(event.target.value);
    setWordCount(wordsCountFn(event.target.value));
  }
  const [text, setText] = useState("Enter text here");
  const [wordCount, setWordCount] = useState(0);
  return (
    <>
      <div className={`mx-3 my-box-3 bg-${!props.mode ? "light" : "dark"} text-${props.mode ? "light" : "dark"}`}>
        <label htmlFor="my-box" className="form-label">
          {props.heading}
        </label>
        <textarea
          className={`form-control bg-${!props.mode ? "light" : "dark"} text-${props.mode ? "light" : "dark"}`}
          id="exampleFormControlTextarea1"
          rows="3"
          value={text}
          onChange={handleOnChange}></textarea>
        <button className="btn btn-primary m-1" onClick={handleUpperCase}>
          To Uppercase
        </button>
        <button className="btn btn-primary m-1" onClick={handleLowerCase}>
          To Lowercase
        </button>
      </div>

      <div className="container my-3">
        <h1>Text Summary</h1>
        <p>
          {wordCount} words and {text.length} characters
        </p>
        <p>{0.008 * wordCount} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
