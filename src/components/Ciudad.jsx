import React from "react";
import "./Ciudad.css";
import { IoClose } from "react-icons/io5";
import Temperatura from "../celsius.png";
import Viento from "../ventoso.png";
import Nubes from "../nublado.png";
import Mundo from "../ecuador.png";

export default function Ciudad({ city, setShowModalAdd }) {
  function handleCloseCard() {
    setShowModalAdd(false);
  }

  if (city) {
    return (
      <div className="modal">
        <div className="modalmain">
          <h4>{city.name}</h4>

          <button onClick={handleCloseCard} className="closeButton">
            <IoClose />
          </button>

          <div className="detail">
            <div className="temperatura">
              <img src={Temperatura} alt="" height="50px" />
              <div>
                 {city.max} - ${city.min} ºC
              </div>
            </div>
            <div className="viento">
              <img src={Viento} alt="" height="50px" />
              
              <div>  {city.wind} km/h</div>
            </div>
            <div className="nubes">
              <img src={Nubes} alt="" height="50px" />
              <div> {city.clouds}</div>
            </div>
            <div className="mundo">
              <img src={Mundo} alt="" height="50px" />
              <div className="latitud">
              <div>{city.latitud}º </div>
              <div>{city.longitud}º</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
