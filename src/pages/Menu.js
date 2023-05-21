// REACT & REDUX IMPORTS:
import React from "react";
import { useSelector } from "react-redux";

// STYLES IMPORTS:
import classes from "./Menu.module.css";

// COMPONENTS IMPORTS:
import Dish from "../components/UI/Dish";
import CartModal from "../components/main/CartModal";

// IMAGES IMPORTS:
import appetizerImg from "../imgs/food/side-dish-4-o.jpg";
import ramenImg from "../imgs/food/menu-tantanmen-o.jpg";
import drinksImg from "../imgs/food/menu-oolong-tea-o.jpg";
import desertImg from "../imgs/food/menu-yuzu-sorbet-o.jpg";

const Menu = () => {
  // Fetching data about wether modal with a cart must be shown:
  const modalIsShown = useSelector((state) => state.ui.isShown);

  return (
    <>
      {modalIsShown && <CartModal />}
      <div className={classes["menu-container"]}>
        <div className={classes["menu-section-container"]}>
          <h1>APPETIZERS:</h1>
          <Dish
            name="EDAMAME"
            price="15.50"
            description="Served with sea salt OR sweet + spicy sesame"
            ingridients="Contains: Soy, Cereals containing gluten, Seseme"
            suitable="Suitable for: Vegetarians, Vegans"
            spicy={true}
            vegan={true}
          />
          <Dish
            name="FRIED CHICKEN"
            price="20.00"
            description="Yuzu kosho mayo"
            ingridients="Contains: Soy, cereals containing gluten, Sesame, garlic onion, Fish (Yuzu Mayo)"
            suitable="Suitable for: Meat eaters"
            spicy={false}
            vegan={false}
          />
          <Dish
            name="PIG BONES"
            price="23.50"
            description="Served with sweet spicy sesame"
            ingridients="Contains: Soy, cereals containing gluten, Sesame, garlic onion."
            suitable="Suitable for: Meat eaters"
            spicy={true}
            vegan={false}
          />
        </div>
        <div className={classes["menu-img-container"]}>
          <img className={classes["menu-img"]} src={appetizerImg}></img>
        </div>
        <div className={classes["menu-img-container"]}>
          <img className={classes["menu-img"]} src={ramenImg}></img>
        </div>
        <div className={classes["menu-section-container"]}>
          <h1>RAMENS:</h1>
          <Dish
            name="TANTANMEN"
            price="45.00"
            description="Pork mince & chashu pork, sesame, chilli bits, bok choy, beansprouts + Clarence Court egg"
            ingridients="Contains: pork, egg, sesame, chilli"
            suitable="Suitable for: Meat eaters"
            spicy={true}
            vegan={false}
          />
          <Dish
            name="MUSHROOM RAMEN"
            price="43.00"
            description="Shiitake mushrooms, asparagus, bok choy, beansprouts, mushroom butter, silken tofu, garlic, Clarence Court egg + noodles"
            ingridients="Contains: Soy, cereals containing gluten, milk (butter), egg, garlic, onion"
            suitable="Suitable for: Vegetarians, halal"
            spicy={false}
            vegan={true}
          />
          <Dish
            name="TONKOTSU"
            price="45.50"
            description="Chashu pork belly, spring onion, bamboo, beansprouts, burnt garlic + Clarence Court egg"
            ingridients="Contains: Soy, cereals containing gluten, milk (butter), egg, garlic, onion"
            suitable="Suitable for: Meat eaters"
            spicy={false}
            vegan={false}
          />
        </div>
        <div className={classes["menu-section-container"]}>
          <h1>DRINKS:</h1>
          <Dish
            name="OOLONG TEA"
            price="10.00"
            description="Traditional Chinese partially fermented tea"
            ingridients="Contains: -"
            suitable="Suitable for: Vegetarians, Vegans"
            spicy={false}
            vegan={true}
          />
          <Dish
            name="CALPIS"
            price="15.00"
            description="Japanese dairy soft drink"
            ingridients="Contains: milk products"
            suitable="Suitable for: Vegetarians"
            spicy={false}
            vegan={true}
          />
          <Dish
            name="MATCHA"
            price="12.00"
            description="Japaneese stone ground green tea"
            ingridients="Contains: -"
            suitable="Suitable for: Vegetarians, Vegans"
            spicy={false}
            vegan={true}
          />
        </div>
        <div className={classes["menu-img-container"]}>
          <img className={classes["menu-img"]} src={drinksImg}></img>
        </div>
        <div className={classes["menu-img-container"]}>
          <img className={classes["menu-img"]} src={desertImg}></img>
        </div>
        <div className={classes["menu-section-container"]}>
          <h1>DESERTS:</h1>
          <Dish
            name="MOCHI ICE CREAM"
            price="14.00"
            description="Hong kong milk tea / mango & passion fruit / vegan miso chocolate & cookie dough / mixed"
            ingridients="Contains: milk, mangi, passion fruit"
            suitable="Suitable for: Vegetarians"
            spicy={false}
            vegan={true}
          />
          <Dish
            name="SAKURA ROLL"
            price="10.50"
            description="Sakura flavored swiss roll with cream and adzuki beans"
            ingridients="Contains: cream, beans"
            suitable="Suitable for: Vegetarians"
            spicy={false}
            vegan={true}
          />
          <Dish
            name="YUZU SORBET"
            price="15.00"
            description="Refreshing dessert made from the Japanese citrus fruit juice"
            ingridients="Contains: Sugar, Yuzu liqeur, granulated sugar"
            suitable="Suitable for: Vegetarians, Vegans"
            spicy={false}
            vegan={true}
          />
        </div>
      </div>
    </>
  );
};

export default Menu;
