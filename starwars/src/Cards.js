import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./Card";

function Cards() {
  const [characterData, updateData] = useState([]);

 useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => updateData(response.data.results));
  }, []);

  return (
     <div className="cards-container">
      {characterData.map(item => (
        <Card className={item.name} data={item}></Card>
      ))}
    </div>
  );
}

export default Cards;
