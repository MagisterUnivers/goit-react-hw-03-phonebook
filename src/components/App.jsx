import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    // console.log(e);
    // console.log(name, number);
    const USER_NAME = name.value;
    const USER_NUMBER = number.value;
    const ARRAY_NAMES = this.state.contacts.map(contact => {
      return contact.name;
    });

    if (!ARRAY_NAMES.includes(USER_NAME))
      this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            { name: USER_NAME, number: USER_NUMBER, id: nanoid() },
          ],
        };
      });
    else {
      alert(`${USER_NAME} already in contacts`);
    }
    e.target.reset();
  };

  handleChange = evt => {
    const { name } = evt.target;
    this.setState({
      [name]: evt.target.value,
    });
  };

  changeId = id => {
    // const newContacts = this.state.contacts.filter(
    //   contact => contact.id !== id
    // );
    // this.setState({ contacts: newContacts });
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <>
        <ContactForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Filter
          filteredContacts={this.filteredContacts}
          handleChange={this.handleChange}
        />
        <ContactsList contacts={filteredContacts} changeId={this.changeId} />
      </>
    );
  }
}
