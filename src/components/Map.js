import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/mapa.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Aqui estoy!</h3>
          <PText>Carabayllo - Lima, Perú</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/dir/Carabayllo/-11.8789317,-77.0316454/@-11.879018,-77.0314524,18z/data=!4m9!4m8!1m5!1m1!1s0x9105d86e4d52c0dd:0x5693f4015603d26a!2m2!1d-77.0233781!2d-11.8818631!1m0!3e3"
            target="_blank"
            rel="noreferrer"
          >
            Abrir Google Maps
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
