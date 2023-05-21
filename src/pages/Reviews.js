// REACT & REDUX IMPORTS:
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// STYLES IMPORTS:
import classes from "./Reviews.module.css";

// COMPONENTS IMPORTS:
import CartModal from "../components/main/CartModal";
import Button from "../components/UI/Button";
import Review from "../components/UI/Review";

const Reviews = () => {
  // Fetching data about wether modal with a cart must be shown:
  const modalIsShown = useSelector((state) => state.ui.isShown);

  // Creating states for review fields:
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [date, setDate] = useState("");
  const [emptyReviewError, setEmptyReviewError] = useState(true);

  // Checking validity of the form:
  useEffect(() => {
    if (
      name.trim().length > 0 &&
      title.trim().length > 0 &&
      review.trim().length > 0 &&
      date.trim().length > 0
    ) {
      setEmptyReviewError(false);
    } else {
      setEmptyReviewError(true);
    }
  }, [name, title, review, date]);

  // Fetching reviews that will be displayed on the page:
  const reviews = JSON.parse(localStorage.getItem("reviews"));

  // Handler for publishing the reviews:
  const onPublishHandler = (event) => {
    event.preventDefault();

    if (emptyReviewError) return;

    const allReviews = JSON.parse(localStorage.getItem("reviews")) || [];

    const newReview = {
      name: name,
      title: title,
      review: review,
      date: date,
      id: allReviews.length + 1,
    };

    allReviews.push(newReview);

    localStorage.setItem("reviews", JSON.stringify(allReviews));

    setName("");
    setTitle("");
    setReview("");
    setDate("");
  };

  return (
    <div className={classes.reviews}>
      {modalIsShown && <CartModal />}

      <div className={classes["reviews-container"]}>
        <h1 className={classes["reviews-headers"]}>LEAVE YOUR REVIEW!</h1>
        <form className={classes["review-form"]}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          <label>Review:</label>
          <textarea
            type="text"
            value={review}
            onChange={(event) => setReview(event.target.value)}
          />
          <div className={classes["reviews-publish-button"]}>
            <Button onClick={onPublishHandler} formIsValid={!emptyReviewError}>
              PUBLISH
            </Button>
          </div>
          {emptyReviewError && (
            <span className={classes["review-form-not-filled"]}>
              Please fill all of the field to leave a review!
            </span>
          )}
        </form>
        <h1 className={classes["reviews-headers"]}>OUR CLIENTS REVIEWS:</h1>
        {!reviews && (
          <span className={classes["reviews-empty"]}>
            There are no reviews yet...
          </span>
        )}
        {reviews &&
          reviews.map((item) => (
            <Review
              name={item.name}
              title={item.title}
              review={item.review}
              date={item.date}
              key={item.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Reviews;
