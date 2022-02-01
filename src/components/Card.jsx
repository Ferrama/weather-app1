import React from "react";
import "./Card.css";

import { IoClose } from "react-icons/io5";
import Humedad from "../humedad.png";
import Viento from "../viento.png";
import Max from "../temperatura.png";

export default function Card({
  max,
  wind,
  name,
  img,
  onClose,
  id,
  setCityCard,
  setShowModalAdd,
  temp,
  weather,
}) {
  function handleOnClose() {
    if (typeof onClose === "function") onClose(id);
  }

  function handleClick(e) {
    if (typeof onClose === "function") {
      setCityCard(id);
      setShowModalAdd(true);
    }
  }

  return (
    <div className="card">
      <div className="d-flex justify-around">
        <h5 class="flex pl-3 pt-2">{name}</h5>
        <div id="closeIcon" className="row">
          <button onClick={handleOnClose} className="closeButton">
            <IoClose />
          </button>
        </div>
      </div>
      <div class="d-flex flex-column temp ">
        <h1 class="mb-0 font-weight-bold" id="heading">
          {temp} °
        </h1>{" "}
        <span class="small grey" value={id} onClick={(e) => handleClick(e)}>
          {" "}
          Ver Detalles
        </span>
      </div>
      <div class="div-inf">
        <div class="temp-details">
          <p class="my-0">
            {" "}
            <img src={Viento} height="35px" alt="img" /> <span> {wind} </span>{" "}
          </p>
          <p class="my-0">
            {" "}
            <img src={Humedad} aria-hidden="true" height="35px" alt="img"/>{" "}
            <span> 84% </span>{" "}
          </p>
          <p class="my-1">
            {" "}
            <img src={Max} height="35px" alt="img"/> <span> {max} </span>{" "}
          </p>
        </div>
        <div className="div-img">
          {" "}
          <img
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            width="100px" alt="img"
          />{" "}
        </div>
      </div>
    </div>
  );
}
