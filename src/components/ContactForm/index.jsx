import { Component } from 'react';
import { Form } from './ContactForm.styled';
import { FormItem } from './ContactFormItem.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({ name: '', number: '' });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <label htmlFor="inputName">Name</label>
          <input
            name="name"
            type="text"
            id="inputName"
            value={name}
            onChange={this.handleChange}
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </FormItem>
        <FormItem>
          <label htmlFor="inputNumber">Number</label>
          <input
            name="number"
            type="tel"
            id="inputNumber"
            value={number}
            onChange={this.handleChange}
            required
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          />
        </FormItem>
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}

export default ContactForm;
