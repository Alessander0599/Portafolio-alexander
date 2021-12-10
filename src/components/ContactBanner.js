import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
  .texto{
    max-width: 500px;
    margin: 0 auto;
    font-size: 1.8rem;
    line-height: 1.3em;
    @media only screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
  
`;
 
export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <label className="texto">Tienes algun proyecto en mente</label>
          <h3 className="contactBanner__heading">Dejame ayudarte</h3>
          <Button btnText="Contactame" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
