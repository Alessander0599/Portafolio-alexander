import React, {useState} from 'react';
import styled from 'styled-components';


const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const ContactForm = (props) => {
  
  const ValoresInicio = {
    name: '',
    email: '',
    description: ''
  };

  const [values, setValues] = useState(ValoresInicio);

  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({...values, [name]:value})
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
    props.AddUser(values);
  };
 

  return (
    <>
      <FormStyle onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Nombre completo
            <input 
              required
              type="text"
              name="name"
              maxLength={30}
              onChange={handleInputChange}
              />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Correo Electronico
            <input
              required
              type="email"
              name="email"
              maxLength={30}
              onChange={handleInputChange}
              />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Mensaje
            <textarea
              name="description"
              onChange={handleInputChange}
              />
          </label>
        </div>
        <input type="submit" value="Enviar"  className="btn-block"></input>
      </FormStyle>
    </>
  );
}

export default ContactForm;
