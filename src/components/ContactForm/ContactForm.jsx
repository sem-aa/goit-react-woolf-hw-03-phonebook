import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name } = e.target;
    this.setState(prevState => ({ prevState, [name]: e.target.value }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.name || !this.state.number) {
      return alert('The name and number field must be filled in');
    }
    this.props.addContact({ ...this.state, id: nanoid() });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={style.form} onSubmit={this.onSubmit}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            value={this.state.name}
            required
          />
        </label>
        <label className={style.label}>
          Number
          <input
            className={style.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            value={this.state.number}
            required
          />
        </label>
        <button className={style.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
