import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import Ciudad from "./components/Ciudad.jsx";
import About from "./components/About.jsx";

import React, { useState } from "react";
import { Route , Switch} from "react-router-dom";
import "./App.css";

function App() {
  const [cities, setCities] = useState([]);
  let [showModalAdd, setShowModalAdd] = useState(false);
  let [cityCard, setCityCard] = useState();
  

  function onSearch(ciudad) {
    const apiKey = "8a19b5e768f5491a8493d4350e5b11e4";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: Math.round(recurso.main.temp),
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    // SE PUEDE HACER UNA FUNCION CON FIND  QUE SI DETECTA UNA CIUDAD NO LA VUELVE A CARGAR
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />

<Switch>
      <Route exact path="/about" component={About} />

      <Route
        path="/"
        render={() => (
          <Cards
            cities={cities}
            onClose={onClose}
            setShowModalAdd={setShowModalAdd}
            setCityCard={setCityCard}
          />
        )}
      />

      
      </Switch>
      {showModalAdd && (
        <Ciudad city={onFilter(cityCard)} setShowModalAdd={setShowModalAdd} />
      )}
    </div>
  );
}

export default App;
