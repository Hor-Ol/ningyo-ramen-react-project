// REACT IMPORTS:
import React from "react";

// IMPORTING STYLES:
import classes from "./Review.module.css";

const Review = (props) => {
  return (
    <div className={classes["review"]}>
      <div className={classes["review-container"]}>
        <h2 className={classes["review-title"]}>Title: {props.title}</h2>
        <div className={classes["review-name-date-container"]}>
          <span className={classes["review-name"]}>
            Client Name: {props.name}
          </span>
          <span className={classes["review-date"]}>
            Review date: {props.date}
          </span>
        </div>
        <span className={classes["review-text"]}>{props.review}</span>
      </div>
    </div>
  );
};

export default Review;
