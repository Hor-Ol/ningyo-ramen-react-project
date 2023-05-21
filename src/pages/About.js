// REACT & REDUX IMPORTS:
import React from "react";
import { useSelector } from "react-redux";

// STYLES IMPORTS:
import classes from "./About.module.css";

// COMPONENTS IMPORTS:
import CartModal from "../components/main/CartModal";

// IMAGES IMPORTS:
import FounderImg from "../imgs/atmosphere/founder-photo-2-o.jpg";

const About = () => {
  // Fetching data about wether modal with a cart must be shown:
  const modalIsShown = useSelector((state) => state.ui.isShown);

  return (
    <>
      {modalIsShown && <CartModal />}
      <div className={classes["about-us-container"]}>
        <div
          className={classes["about-us-img"]}
          alt="Photo of cook making ramen noodles"
        />
        <div className={classes["about-us-text"]}>
          <h1 className={classes["about-us-text-h1"]}>
            会社情報 ABOUT US 会社情報
          </h1>
          <h2 className={classes["about-us-text-h2"]}>THE WAY OF THE RAMEN</h2>
          <p className={classes["about-us-text-description"]}>
            Since we started our amazing journey in 2018 we’ve wanted to create
            the best ramen experience in the amazing authentic atmosphere.
            Create a part of Tokyo or Osaka in the middle of European city.
            Somhere both locals, tourists and Japanese expats can come to
            experience true Japanese ramen, dive into Japaneese cuisine and
            culture, enjoy it and forget about small wordly problems. We're
            devoted to Japapnese way, that's why in our ramen bar you can expect
            get true taste of the country of the rising sun, be it amazing thick
            and tasty ramen broth or relaxing sip of sake of Japanese beer.
            Despite creating an amazing atmosphere, we're first and foremost
            making top notch ramen. As far as we're concerned, a great bowl of
            ramen starts with a great meat & broth and we take ours seriously.
            We don’t just sell our ramen, we make it. It takes ages, but we
            wouldn’t change a thing.
          </p>
          <div className={classes["about-us-quote-container"]}>
            <img
              className={classes["about-us-quote-img"]}
              src={FounderImg}
              alt="Balck and white photo of Janina Kowalska - the Ningyo Ramen founder and inspirator"
            ></img>
            <blockquote className={classes["about-us-quote"]}>
              "If you adore ramen and are a long-time ramen eater, we will give
              you the suprise tastes you were long missing. if you’re a rookie
              ramen-eater, prepare to be amazed. Here everything is in place,
              from the wooden japaneese furniture rich in traditional ornaments
              & hand-made bar counter to hits from the top 10 japanese music
              charts sounding out of the speakers. The ramen is tasty and the
              service is amazing."
              <p>
                <br />
                Janina Kowalska - the Ningyo Ramen founder & inspirator
                <br />
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
