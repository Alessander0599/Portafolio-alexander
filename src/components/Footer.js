import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Jairo Alexander</h1>
          <PText FooterStyle="text-align: center;">
            Diseñador y desarrollador web independiente Lima, Perú.
            Hago sitios web de diseño unico con un buen rendimiento.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Navegacion"
            links={[
              {
                title: 'Inicio',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'Acerca de mi',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Proyectos',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contacto',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Informacion de Contacto"
            links={[
              {
                title: '+51 922 253 827',
                path: 'tel:+51 922253827',
              },
              {
                title: 'jairoalex1199@gmail.com',
                path: 'mailto:jairoalex1199r@gmail.com',
              },
              {
                title: 'Carabayllo - Lima,Perú',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Redes sociales"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/jairo.araujo.77312/',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/jairo-alexander-araujo-del-aguila-23839b218/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Todos los Derechos Reservados| Diseñado por ||
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jairo-alexander-araujo-del-aguila-23839b218/">
              ARAUJO DEL AGUILA JAIRO
            </a>
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
