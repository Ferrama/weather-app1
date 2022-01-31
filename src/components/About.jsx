import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About(){
    
    return <div className="conteiner" >
        <div className="about">
            
        Esta una aplicación realizada como homework en el bootcamp de Henry. Esta realizada con React y Css puro (sin frameworks). Permite buscar la ciudad por nombre y ver en detalles la misma. La app realiza un pedido a la api openweathermap.org y renderiza el resultado de cada ciudad solicitada.
        </div>
        <div>
        <Link to='/'>
            <div id="testbutton">
            
            </div>
            </Link>
        </div>
    </div>;;
    
}