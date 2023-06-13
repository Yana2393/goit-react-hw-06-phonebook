import React from 'react';
import { useDispatch } from "react-redux";
import {deleteContact} from './../../redux/contactsSlice.js'
import PropTypes from 'prop-types';
import css from './ContactItem.module.css'

function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(contact.id));
  };
    return (
      <li className={css.listItem}>
        {contact.name} : {contact.number}
        <button className={css.listItemBtn} onClick={onDelete}>Delete</button>
      </li>
    );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
