//import React, { useState } from "react";
import React from 'react';
import './Searchbar.css'
import { FcSearch } from "react-icons/fc";


export default function SearchBar({onSearch}) {
  
 
      function handleOnSearch(event) {
        event.preventDefault();
        if (typeof onSearch === "function") {
          const input = document.getElementById("inputSearch");
          onSearch(input.value);
          input.value = "";
        }
      }
      return (
        <div className="">
          <form className="searchBar " onSubmit={handleOnSearch}>
            <input id="inputSearch" type="text" placeholder="Buscar Ciudad..." />
            <button className="btnSearch" type="submit">
              <FcSearch/>
            </button>
          </form>
        </div>
      );





}
