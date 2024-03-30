import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ name, number, id }) => (
        <li className={styles.item} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className={styles.button}
            onClick={() => onDeleteContact(id)}
            type="button"
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
