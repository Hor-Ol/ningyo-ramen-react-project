// REACT & REDUX IMPORTS:
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// STYLES IMPORTS:
import classes from "./Cart.module.css";

// REDUX ACTIONS IMPORTS:
import { uiActions } from "../../store/uiSlice";

// IMPORTING IMAGE FOR A CART:
const cartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    />
  </svg>
);

const Cart = () => {
  const dispatch = useDispatch();

  // Extracting cart items amount to dispay for the cart:
  const cartItemsCount = useSelector((state) => state.cart.totalQuantity);

  // Event handler for showing and closing a cart:
  const onCartClickHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <div className={classes.cart} onClick={onCartClickHandler}>
      <div className={classes["cart-icon-container"]}>
        <div className={classes["cart-icon"]}>{cartIcon} </div>
      </div>
      <div className={classes["cart-counter-container"]}>{cartItemsCount}</div>
    </div>
  );
};

export default Cart;
