import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import {addContact} from './../../redux/contactsSlice.js'
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    if (fieldName === 'name') {
      setName(fieldValue);
    } else if (fieldName === 'number') {
      setNumber(fieldValue);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <div className={css.formWrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <p className={css.txt}>Name</p>
        <input className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <p className={css.txt}>Number</p>
        <input className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
        <button className={css.button} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  addNewContact: PropTypes.func,
};

export default ContactForm;
