import { Component } from "react";
import { Form, SumbmitButton, Input, Label } from "./ContactForm.styled";

export class ContactForm extends Component {
    state = {
      name: '',
      number: ''
    }
    

    handleInputChange = (e) => {
        const {name, value} = e.currentTarget
    
        this.setState({
          [name]: value
        })
    }

    render() {
        return (
            <Form action="" onSubmit={(e) => this.props.handleSubmit(e, this.state.name, this.state.number)}>
              <Label>
                Name:
                <Input
                  type="text"
                  name="name"
                  onChange={this.handleInputChange}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </Label>
              <Label>
                Number: 
                <Input
                  type="tel"
                  name="number"
                  onChange={this.handleInputChange}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              </Label>
              <SumbmitButton type="submit">
                Submit
              </SumbmitButton>
            </Form>
        )
    }
}