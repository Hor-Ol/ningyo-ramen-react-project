// REACT IMPORTS:
import React from "react";

// STYLES IMPORT:
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      onClick={props.onClick}
      style={props.style}
      disabled={props.formIsValid === false}
    >
      {props.children}
    </button>
  );
};

export default Button;
