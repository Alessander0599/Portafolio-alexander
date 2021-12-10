import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/foto.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import PDF from '../archivo/CV.pdf'

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

const TomatoButton = styled(Button)`
font-size: 2.2rem;
background-color: var(--gray-1);
padding: 0.7em 2em;
border: 2px solid var(--gray-1);
color: black;
border-radius: 8px;
display: inline-block;
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hola, soy<span>Jairo Alexander</span>
              </p>
              <h2 className="about__heading">Bachiller en Ingeniería de Sistemas</h2>
              <div className="about__info">
                <PText >
                  Soy de Lima, Perú. Desde pequeño me apasiono la idea de crear cosas 
                  que pueda ser de utilidad en las personas.
                  <br /> <br />
                  Empeze a programar desde que empeze la Universidad. Me gusta diseñar y codificar
                  utilizando lo ultimo en tecnologia. Muy aparte del desarrollo de software me apasiona 
                  todo lo relacionado con Seguridad de TI, Analisis de Redes y Networking.
                  <br />
                  <br />
                  Mi vision es hacer un mundo mejor. Con las herramientas adecuadas se pueden crear
                  cosas buenas que ayuden al mundo en convertirse en un mejor lugar.
                </PText>
              </div>
              <TomatoButton as="a" href={PDF} target="_blank">Descargar CV</TomatoButton>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Educacion</h1>

              <AboutInfoItem
                title="Colegio"
                items={['Colegio Privado Belén 2010-2015']}
              />
              <AboutInfoItem
                title="Academia"
                items={['Pitagoras 2014-2015']}
              />
              <AboutInfoItem
                title="Universidad"
                items={['Universidad César Vallejo 2016-2021']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Mis Habilidades</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'PHP']}
              />
              <AboutInfoItem
                title="Diseño"
                items={['Photoshop', 'SketchUp',]}
              />
              <AboutInfoItem
                title="Redes"
                items={['CCNA 1', 'CCNA 2','CCNA 3','CyberSecurity',]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Otros</h1>

              <AboutInfoItem
                title="Idioma"
                items={['Ingles-Basico']}
              />
              <AboutInfoItem
                title="Certifications"
                items={['Cisco Certified Network Academy ']}
              />
              
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
