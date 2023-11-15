import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container } from './Container.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const isDuplicate = this.state.contacts.some(
      ({ name }) => newContact.name === name
    );
    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    const contactObj = {
      id: nanoid(),
      ...newContact,
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, contactObj],
    }));
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  handleFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handleFilter} />
        <ContactList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
