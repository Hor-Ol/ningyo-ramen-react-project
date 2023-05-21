// REACT & REDUX IMPORTS:
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

// STYLES IMPORT:
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  // Selecting data for particular product that will have to be displayed:
  const { title, quantity, total, price, id } = props.item;

  // Event handers for increasing and decresing amount of items in the cart:
  const increaseAmountHandler = () => {
    dispatch(cartActions.addToCart({ id, title, price }));
  };

  const decreaseAmountHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <li className={classes.item}>
      <h2>{title}</h2>
      <div className={classes.quantity}>
        x <span>{quantity}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={decreaseAmountHandler}>
          -
        </button>
        <button className={classes.button} onClick={increaseAmountHandler}>
          +
        </button>
      </div>
      <div className={classes.price}>
        {total.toFixed(2)} ZŁ{" "}
        <span className={classes.itemprice}>({price.toFixed(2)} ZŁ/item)</span>
      </div>
    </li>
  );
};

export default CartItem;
