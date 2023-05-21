// REACT & REDUX IMPORTS:
import React from "react";
import { useSelector } from "react-redux";

// STYLES IMPORTS:
import classes from "./Contact.module.css";

// COMPONENTS IMPORTS:
import CartModal from "../components/main/CartModal";

// LEAFLET MAP IMPORTS:
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contact = () => {
  // Fetching data about wether modal with a cart must be shown:
  const modalIsShown = useSelector((state) => state.ui.isShown);

  return (
    <div className={classes["contact"]}>
      {modalIsShown && <CartModal />}
      <MapContainer
        className={classes["contact-map"]}
        center={[52.2198, 21.018]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[52.2198, 21.018]}>
          <Popup className={classes["contact-map-popup"]}>Ningyo Ramen</Popup>
        </Marker>
      </MapContainer>
      <div className={classes["contact-details"]}>
        <div className={classes["contact-details-text-container-box"]}>
          <span className={classes["contact-details-text-header"]}>
            ADRESS:
          </span>
          <span className={classes["contact-details-text-info"]}>
            Ningyo in Warsaw
          </span>
          <span className={classes["contact-details-text-info"]}>
            Plac Zbawiciela 1
          </span>
        </div>
        <div className={classes["contact-details-text-container-box"]}>
          <span className={classes["contact-details-text-header"]}>HOURS:</span>
          <span className={classes["contact-details-text-subheader"]}>
            Monday - Friday
          </span>
          <span className={classes["contact-details-text-info"]}>
            lunch 11:30 - 14:00
          </span>
          <span className={classes["contact-details-text-info"]}>
            dinner 16:00 - 23:00
          </span>
          <span className={classes["contact-details-text-subheader"]}>
            Saturday - Sunday
          </span>
          <span className={classes["contact-details-text-info"]}>all day</span>
        </div>
        <div className={classes["contact-details-text-container-box"]}>
          <span className={classes["contact-details-text-header"]}>EMAIL:</span>
          <span className={classes["contact-details-text-info"]}>
            ningyo_ramen@ramen.com
          </span>
        </div>
        <div className={classes["contact-details-text-container-box"]}>
          <span className={classes["contact-details-text-header"]}>
            CONNECT WITH US:
          </span>
          <span className={classes["contact-details-text-info"]}>
            <a href="#">Facebook</a>
          </span>
          <span className={classes["contact-details-text-info"]}>
            <a href="#">Instagram</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
