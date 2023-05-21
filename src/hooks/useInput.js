// REACT & REDUX IMPORTS:
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// IMPORTING REDUX ACTIONS:
import { cartActions } from "../store/cartSlice";

const useInput = (inputValue, validateInputValue) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(inputValue);

  const valueIsValid = validateInputValue(value);

  const currentCart = useSelector((state) => state.cart);

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
    dispatch(
      cartActions.registerUserData({
        ...currentCart,
        [e.target.name]: e.target.value,
      })
    );
  };

  const reset = () => {
    setValue("");
  };

  return {
    value,
    valueIsValid,
    valueChangeHandler,
    reset,
  };
};

export default useInput;
