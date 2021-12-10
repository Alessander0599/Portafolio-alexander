import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';
import {db} from '../firebase'
import { toast } from 'react-toastify';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

const ContactSection = () => {

  const AddUser = async (linkObject) => {
    await db.collection('Usuarios').doc().set(linkObject);
    toast.info('Se ha enviado correctamente los datos', {
      autoClose:'8000'
    })
  }

  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contacto" subheading="Pornese en contacto" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+51 922253827" />
            <ContactInfoItem icon={<MdEmail />} text="jairoalex1199@gmail.com" />
            <ContactInfoItem text="Lima, Perú" />
          </div>
          <div className="right">
            <ContactForm AddUser={AddUser}/>
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}

export default ContactSection;
