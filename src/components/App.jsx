import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactList/ContactList';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const savedContacts = window.localStorage.getItem('userContacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        'userContacts',
        JSON.stringify(this.state.contacts)
      );
    }
  }
  onDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };
  addContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      return alert('This Contact is already in contacts');
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
      };
    });
  };
  updateFilter = filterName => {
    this.setState({
      filter: filterName,
    });
  };
  render() {
    const { contacts, filter } = this.state;
    let filteredContacts;
    if (contacts.length !== 0) {
      filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return (
      <main>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        {contacts.length !== 0 && (
          <div>
            <h2>Contacts</h2>
            <SearchBar filter={filter} onUpdateFilter={this.updateFilter} />
            <ContactsList
              contacts={filteredContacts}
              onDelete={this.onDelete}
            />
          </div>
        )}
      </main>
    );
  }
}
