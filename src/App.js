// REACT & REDUX IMPORTS:
import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// IMPORTED PAGE ELEMENTS:
import MainLayout from "./pages/MainLayout";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";

// IMPORTING CART ACTIONS:
import { cartActions } from "./store/cartSlice";
import { uiActions } from "./store/uiSlice";

// Creating router:
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Welcome /> },
      { path: "about", element: <About /> },
      { path: "menu", element: <Menu /> },
      { path: "contact", element: <Contact /> },
      { path: "reviews", element: <Reviews /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  // Creating addEventlisteners reacting to window resizing and storing current size and vertical page position in redux store. The data is needed for navigation resizing and burger button display:
  window.addEventListener("resize", (event) => {
    const changedWidth = event.target.innerWidth;
    dispatch(uiActions.changeWidth({ width: changedWidth }));
  });

  window.addEventListener("scroll", (event) => {
    const scrollY = window.scrollY;
    dispatch(uiActions.scroll(scrollY));
  });

  // Fetching current cart state on every new page load:
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cart")) !== null) {
      const loadedCart = JSON.parse(localStorage.getItem("cart"));
      dispatch(cartActions.replaceCart(loadedCart));
    }
  }, []);

  // Storing selected cart data in local storage:
  const cart = useSelector((state) => state.cart);

  const cartObj = {
    items: cart.items,
    totalQuantity: cart.totalQuantity,
    totalPrice: cart.totalPrice,
    ordered: cart.ordered,
    name: cart.name,
    surname: cart.surname,
    number: cart.number,
    address: cart.address,
    comment: cart.comment,
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartObj));
  }, [cart]);

  // Placing an order:
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender === true) {
      setFirstRender(false);
    } else if (firstRender === false && cartObj.ordered === true) {
      const allOrders = JSON.parse(localStorage.getItem("orders")) || [];

      const cartOrder = {
        ...cartObj,
        orderNumber: allOrders.length + 1,
      };

      allOrders.push(cartOrder);

      localStorage.setItem("orders", JSON.stringify(allOrders));

      dispatch(
        cartActions.replaceCart({
          items: [],
          totalQuantity: 0,
          totalPrice: 0,
          orderNumber: 0,
          ordered: false,
          name: "",
          surname: "",
          number: "",
          address: "",
          comment: "",
        })
      );
    }
  }, [cart.ordered]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
