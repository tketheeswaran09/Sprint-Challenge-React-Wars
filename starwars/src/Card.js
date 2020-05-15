import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import axios from 'axios';

const StyledCard = styled.div`
  height: 30em;
  width: 20em;
  margin: 1em;
  background: black;
  border-radius: 5px;
  color: white;
  opacity: 0.7;

  h1 {
    opacity: 1;
  }

  img {
    opacity: 1;
    height: 150px;
  }
`;

function Card(props) {
  const [imgUrl, setImgUrl] = useState('');

  function format(nameStr) {
    return nameStr
      .replace('-', ' ')
      .split(' ')
      .join('+');
  }

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=13607075-ec74584ffac8a1f4eceb3653b&q=${format(
          props.data.name
        )}&image_type=photo`
      )
      .then(response => setImgUrl(response.data.hits[0].webformatURL))
      .catch(error => console.log(error));
  });
  return (
    <div className="card-container">
      <StyledCard>
        <h1> {props.data.name} </h1>
        <h3> Birth Year: {props.data.birth_year} </h3>
        <h3>
          Height: {props.data.height}cm
        </h3>
        <h3>
          Weight: {props.data.mass}kg
        </h3>
        <h3> Homeworld: </h3>
        <img className="card-image" src={imgUrl} alt="character" />
      </StyledCard>
    </div>
  );
}

export default Card;
