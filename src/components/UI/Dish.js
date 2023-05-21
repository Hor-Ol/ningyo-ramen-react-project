// REACT & REDUX IMPORTS:
import React from "react";
import { useDispatch } from "react-redux";

// STYLES IMPORTS:
import classes from "./Dish.module.css";

// COMPONENTRS IMPORTS:
import { cartActions } from "../../store/cartSlice";

const Dish = (props) => {
  const dispatch = useDispatch();

  // Storing props in variables:
  const name = props.name;
  const price = props.price;
  const description = props.description;
  const ingridients = props.ingridients;
  const suitable = props.suitable;
  const spicy = props.spicy;
  const vegan = props.vegan;

  // Storing images in variables:
  const spicyImg = (
    <ion-icon name="flame" style={{ color: "orangered" }}></ion-icon>
  );
  const veganImg = <ion-icon name="leaf" style={{ color: "green" }}></ion-icon>;

  const cartIcon = <ion-icon name="cart-outline"></ion-icon>;

  // Creating event handler for adding dish to the cart:
  const addToCartHandler = (props) => {
    dispatch(
      cartActions.addToCart({
        name: name,
        id: name,
        price: price,
        description: description,
      })
    );
  };

  return (
    <div className={classes["menu-dish-container"]}>
      <div className={classes["menu-dish-icons"]}>
        {spicy && spicyImg}
        {vegan && veganImg}
      </div>
      <span className={classes["menu-dish-name"]}>{name}</span>
      <span className={classes["menu-dish-price"]}>{price} ZŁ</span>
      <button
        className={classes["menu-dish-add-button"]}
        type="button"
        onClick={addToCartHandler}
      >
        {cartIcon}
      </button>
      <span className={classes["menu-dish-description"]}>{description}</span>
      <span className={classes["menu-dish-ingridients"]}>{ingridients}</span>
      <span className={classes["menu-dish-suitable"]}>{suitable}</span>
    </div>
  );
};

export default Dish;
