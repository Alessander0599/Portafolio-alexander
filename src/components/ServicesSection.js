import React from 'react';
import { MdDesktopMac, MdPhonelinkSetup,MdSecurity } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="Que puedo hacer por ti" heading="Servicios" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Diseño Web"
            desc="Desarrollo sitios web de alto rendimiento de acuerdo a sus especificaciones"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Aplicativo Movil"
            desc="Desarrollo de aplicativos moviles con interfazes unicas para la comodidad del usuario"
          />
          <ServicesSectionItem
            icon={<MdSecurity />} 
            title="Analista de Red"
            desc="Conocimiento de redes WAN/LAN Redes de datos/Voz/Internet"
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
