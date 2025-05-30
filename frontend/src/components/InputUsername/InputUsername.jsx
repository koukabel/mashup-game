import React, { useState } from "react";
import PropTypes from "prop-types";
import "./InputUsername.scss";

function InputUserName({ isReady }) {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const specialCharsRegex = /[^\w\s]/;
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    const { value } = event.target;
    if (!specialCharsRegex.test(value)) {
      setInputValue(value);
      setText(value);
    }
    return value;
  }
  function handleSubmit(event) {
    setName(text);
    setInputValue("");
    event.preventDefault();
    if (text.length !== 0) {
      isReady(true);
    }
  }

  return (
    <div className="input-username">
      <h1 className="pseudo">{name && `Hello ${name}!`} </h1>
      <form
        className="form-username"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          required
          type="text"
          id="input"
          className="input-text"
          value={inputValue}
          onChange={(e) => {
            handleInputChange(e);
          }}
          placeholder="   Type in your pseudo"
          maxLength={15}
        />
        <button className="play" type="submit">
          Validate
        </button>
      </form>
    </div>
  );
}

export default InputUserName;
InputUserName.propTypes = {
  isReady: PropTypes.func.isRequired,
};
