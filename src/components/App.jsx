import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css'

const App = () => {
  
  return (
    <div className={css.formWrapper}>
      <h1 className={css.formTitle}>Phonebook</h1>
      <ContactForm/>
      <h2 className={css.formTitle}>Contacts</h2>
      <Filter/>
      <ContactList/>
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

export default App;
