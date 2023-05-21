// REACT & REDUX IMPORTS:
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// STYLES IMPORTS:
import classes from "./CartModal.module.css";

// COMPONENTS IMPORTS:
import CartItem from "../UI/CartItem";
import Overlay from "../UI/Overlay";
import Button from "../UI/Button";

// CUSTOM HOOK IMPORTS:
import useInput from "../../hooks/useInput";

// REDUX ACTIONS IMPORTS:
import { cartActions } from "../../store/cartSlice";
import { uiActions } from "../../store/uiSlice";

const CartModal = (props) => {
  const dispatch = useDispatch();

  // Creating states for form validity and status of the order:
  const [formIsValid, setFormIsValid] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Creating objects for name, surname, address, number and comment form fields data with the use of custom hook:
  const {
    value: name,
    valueIsValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    reset: nameReset,
  } = useInput(
    useSelector((state) => state.cart.name),
    (value) => value.trim().length > 0
  );

  const {
    value: surname,
    valueIsValid: surnameIsValid,
    valueChangeHandler: surnameChangeHandler,
    reset: surnameReset,
  } = useInput(
    useSelector((state) => state.cart.surname),
    (value) => value.trim().length > 0
  );

  const {
    value: number,
    valueIsValid: numberIsValid,
    valueChangeHandler: numberChangeHandler,
    reset: numberReset,
  } = useInput(
    useSelector((state) => state.cart.number),
    (value) => value.trim().length === 9
  );

  const {
    value: address,
    valueIsValid: addressIsValid,
    valueChangeHandler: addressChangeHandler,
    reset: addressReset,
  } = useInput(
    useSelector((state) => state.cart.address),
    (value) => value.trim().length > 0
  );

  const {
    value: comment,
    valueChangeHandler: commentChangeHandler,
    reset: commentReset,
  } = useInput(
    useSelector((state) => state.cart.comment),
    (value) => value.trim().length > 0
  );

  // Veryfing the validity of the form with every change of form data:
  useEffect(() => {
    nameIsValid && surnameIsValid && numberIsValid && addressIsValid
      ? setFormIsValid(true)
      : setFormIsValid(false);
  }, [nameIsValid, surnameIsValid, numberIsValid, addressIsValid]);

  // Event handler for closing a cart:
  const onCloseHandler = () => {
    dispatch(uiActions.toggle());
    setOrderPlaced(false);
  };

  // Event hander for placing an order:
  const onOrderHandler = () => {
    dispatch(
      // Necessary data about the buyer and his order are registered and sent to redux storage:
      cartActions.registerUserData({ name, surname, number, address, comment })
    );

    // Action for placing an order is called:
    dispatch(cartActions.placeOrder());

    // Consumer and order data are cleaned:
    nameReset("");
    surnameReset("");
    addressReset("");
    numberReset("");
    commentReset("");
    setOrderPlaced(true);
  };

  // Selecting data about picked menu items and total cart price that will have to be shown on the page:
  const cartItems = useSelector((state) => state.cart.items);

  const totalCartPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <Overlay>
      <div className={classes["cart-modal"]}>
        <h1 className={classes["cart-modal-header"]}>YOUR ORDER: </h1>
        <div className={classes["cart-modal-container"]}>
          {!orderPlaced && cartItems.length === 0 && (
            <span className={classes["cart-modal-empty"]}>
              Your cart is empty...
            </span>
          )}
          {!orderPlaced &&
            cartItems.map((item) => (
              <CartItem
                key={item.name}
                item={{
                  title: item.name,
                  quantity: item.quantity,
                  total: item.totalPrice,
                  price: item.price,
                  id: item.name,
                }}
              />
            ))}
          {orderPlaced && (
            <span className={classes["cart-modal-placed-order"]}>
              Your order was placed successfuly and will arrive soon! &#128516;
              &#127836; &#127861;
            </span>
          )}
        </div>
        {!orderPlaced && (
          <h2 className={classes["cart-modal-total-cost"]}>
            TOTAL COTS: {totalCartPrice.toFixed(2)} ZŁ{" "}
          </h2>
        )}
        {cartItems.length !== 0 && (
          <form className={classes["cart-modal-form"]}>
            <div className={classes["cart-modal-form-inputs-container"]}>
              <label htmlFor="name">Please enter your name:</label>
              <input
                type="text"
                name="name"
                placeholder="Jan"
                value={name}
                onChange={nameChangeHandler}
                required
              />
              {!nameIsValid && (
                <span className={classes["cart-modal-from-inputs-invalid"]}>
                  Please enter valid name!
                </span>
              )}
            </div>
            <div className={classes["cart-modal-form-inputs-container"]}>
              <label htmlFor="surname">Please enter your surname:</label>
              <input
                type="text"
                name="surname"
                placeholder="Kowalski"
                value={surname}
                onChange={surnameChangeHandler}
                required
              />
              {!surnameIsValid && (
                <span className={classes["cart-modal-from-inputs-invalid"]}>
                  Please enter valid surname!
                </span>
              )}
            </div>
            <div className={classes["cart-modal-form-inputs-container"]}>
              <label htmlFor="number">Please enter contact number:</label>
              <input
                type="text"
                name="number"
                value={number}
                placeholder="123456789"
                onChange={numberChangeHandler}
                required
              />
              {!numberIsValid && (
                <span className={classes["cart-modal-from-inputs-invalid"]}>
                  Please enter valid 9 digit phone number!
                </span>
              )}
            </div>
            <div className={classes["cart-modal-form-inputs-container"]}>
              <label htmlFor="address">Please enter delivery adress:</label>
              <input
                type="text"
                name="address"
                value={address}
                placeholder="Tokyo str. 1/1"
                onChange={addressChangeHandler}
                required
              />
              {!addressIsValid && (
                <span className={classes["cart-modal-from-inputs-invalid"]}>
                  Please enter a valid street number!
                </span>
              )}
            </div>
            <div className={classes["cart-modal-form-inputs-container"]}>
              <label htmlFor="comment">
                Provide additional comments to your order if you want:
              </label>
              <textarea
                type="text"
                name="comment"
                value={comment}
                onChange={commentChangeHandler}
              />
            </div>
          </form>
        )}
        <div className={classes["cart-modal-buttons-container"]}>
          <Button onClick={onCloseHandler}>CLOSE</Button>
          <Button formIsValid={formIsValid} onClick={onOrderHandler}>
            ORDER
          </Button>
        </div>
      </div>
    </Overlay>
  );
};

export default CartModal;
