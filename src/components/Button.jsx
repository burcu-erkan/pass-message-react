import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <>
      <button onClick={props.func} type="submit" id="btn">
        Submit
      </button>
    </>
  );
};

export default Button;
