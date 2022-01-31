import React from 'react';
import Card from './Card'
import './Cards.css';



export default function Cards({cities, onClose,setShowModalAdd, setCityCard}) {
  if(cities){
    return (
      
      <div className='cards'>
        {cities.map(c => 
          <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            key={c.id}
            id={c.id}
            setShowModalAdd={setShowModalAdd}
            setCityCard={setCityCard}
            temp={c.temp}
            weather={c.weather}
            wind={c.wind}
          /> )}
      </div>
      
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
