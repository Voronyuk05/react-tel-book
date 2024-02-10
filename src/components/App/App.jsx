import { Component } from "react"
import { nanoid } from 'nanoid'
import { ContactForm } from "components/ContactForm/ContactForm"
import { ContactList } from "components/ContactList/ContactList"
import { Filter } from "components/Filter/Filter"
import { Container } from "./App.styled"

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)
    if (contacts) {
      this.setState({
        contacts: parsedContacts
      }) 
    }   
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }


  handleSubmit = (e, name, number) => {
    e.preventDefault()

    if (this.state.contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      alert('This contact already exists!');
      return;
    }

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name: name,
          number: number
        }
      ]
    }))
  }

  handleDelete = (contactId) => {
    this.setState((prevState) =>({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  handleFilterChange = (e) => {
    this.setState({
      filter: e.currentTarget.value
    })
  }

  render () {
    return (
      <Container>
        <ContactForm handleSubmit={this.handleSubmit}/>
        <Filter filter={this.state.filter} handleFilterChange={this.handleFilterChange}/>
        <ContactList filter={this.state.filter} contacts={this.state.contacts} handleDelete={this.handleDelete} />
      </Container>
    );
  }
};
