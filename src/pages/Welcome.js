// REACT & REDUX IMPORTS:
import React from "react";
import { useSelector } from "react-redux";

// STYLES IMPORTS:
import classes from "./Welcome.module.css";

// COMPONENTS IMPORTS:
import CartModal from "../components/main/CartModal";

const Welcome = () => {
  // Fetching window width data that will be needed for background change for small devices:
  const width = useSelector((state) => state.ui.width);

  // Fetching data about wether modal with a cart must be shown:
  const modalIsShown = useSelector((state) => state.ui.isShown);

  return (
    <>
      {modalIsShown && <CartModal />}
      <div
        className={
          width > 1024
            ? classes["welcome-background-img"]
            : classes["welcome-background-img-small"]
        }
        alt={
          width > 1024
            ? "Red banner on the wall with 'Ramnen' written on it"
            : "Ramen bowl with eggs and tasty noodles in it"
        }
      />
    </>
  );
};

export default Welcome;
