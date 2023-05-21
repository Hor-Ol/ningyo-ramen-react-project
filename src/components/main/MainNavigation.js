// REACT, ROUTER & REDUX IMPORTS:
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

// STYLES IMPORTS:
import classes from "./MainNavigation.module.css";

// COMPONENTS IMPORTS:
import Overlay from "../../components/UI/Overlay";

// IMAGES IMPORTS:
import Logo from "../../imgs/logos/logo-1.png";

// REDUX ACTIONS IMPORTS:
import { uiActions } from "../../store/uiSlice";

const MainNavigation = () => {
  const dispatch = useDispatch();

  // Selecting vertical position on the page, page width, current location and the status of visibility of burger menu that will be needed for the proper display on the navigation:
  const scrollY = useSelector((state) => state.ui.scrollY);

  const width = useSelector((state) => state.ui.width);

  const location = useLocation().pathname;

  const hiddenMenuIsShown = useSelector((state) => state.ui.hiddenMenuIsShown);

  // Handler for opening and closing burger menu:
  const onBurgerClickHandler = () => {
    dispatch(uiActions.hiddenMenuIsShown());
  };

  return (
    <>
      {width <= 700 && (
        <div
          className={
            location === "/" ? classes["main-welcome-nav"] : classes["main-nav"]
          }
        >
          <ul className={classes["main-nav-list"]}>
            <li>
              <NavLink className={classes["main-nav-logo-link"]} to="/">
                <img
                  className={classes.logo}
                  src={Logo}
                  alt="Ningyo Ramen Logo Sign"
                />
              </NavLink>
            </li>
            {!hiddenMenuIsShown ? (
              <li
                className={
                  classes[`main-nav-burger${scrollY > 150 ? "-floating" : ""}`]
                }
                onClick={onBurgerClickHandler}
              >
                <ion-icon name="menu-outline"></ion-icon>
              </li>
            ) : (
              <li
                className={
                  classes[`main-nav-burger${scrollY > 150 ? "-floating" : ""}`]
                }
                onClick={onBurgerClickHandler}
              >
                <ion-icon name="close-outline"></ion-icon>
              </li>
            )}
          </ul>
          {hiddenMenuIsShown && (
            <nav className={classes["main-welcome-hidden"]}>
              <Overlay>
                <ul className={classes["main-nav-list-hidden"]}>
                  <li>
                    <NavLink
                      className={classes["main-nav-link"]}
                      to="about"
                      onClick={onBurgerClickHandler}
                    >
                      ABOUT US
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={classes["main-nav-link"]}
                      to="menu"
                      onClick={onBurgerClickHandler}
                    >
                      MENU
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={classes["main-nav-link"]}
                      to="reviews"
                      onClick={onBurgerClickHandler}
                    >
                      REVIEWS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={classes["main-nav-link"]}
                      to="contact"
                      onClick={onBurgerClickHandler}
                    >
                      CONTACT US
                    </NavLink>
                  </li>
                </ul>
              </Overlay>
            </nav>
          )}
        </div>
      )}

      {width > 700 && (
        <nav
          className={
            location === "/" ? classes["main-welcome-nav"] : classes["main-nav"]
          }
        >
          <ul className={classes["main-nav-list"]}>
            <li>
              <NavLink className={classes["main-nav-link"]} to="about">
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink className={classes["main-nav-link"]} to="menu">
                MENU
              </NavLink>
            </li>
            <li>
              <NavLink className={classes["main-nav-logo-link"]} to="/">
                <img
                  className={classes.logo}
                  src={Logo}
                  alt="Ningyo Ramen Logo Sign"
                />
              </NavLink>
            </li>
            <li>
              <NavLink className={classes["main-nav-link"]} to="reviews">
                REVIEWS
              </NavLink>
            </li>
            <li>
              <NavLink className={classes["main-nav-link"]} to="contact">
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default MainNavigation;
