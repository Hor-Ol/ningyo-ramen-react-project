// REACT IMPORTS:
import React from "react";

// IMPORTING STULES:
import classes from "./Overlay.module.css";

const Overlay = (props) => {
  return (
    <div className={classes.overlay} id="overlay">
      {props.children}
    </div>
  );
};

export default Overlay;
