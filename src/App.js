import React, { Component } from "react";
import shortid from "shortid";
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  hendleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  hendleSumbit = (e) => {
    e.preventDefault();
    console.log(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  NameInputId = shortid.generate();
  NumberInputId = shortid.generate();

  render() {
    return (
      <form onSubmit={this.hendleSumbit}>
        <label htmlFor={this.NameInputId}>
          Name
          <input
            id={this.NameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.hendleChange}
            value={this.state.name}
          />
        </label>
        <label htmlFor={this.NumberInputId}>
          Number
          <input
            id={this.NumberInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.hendleChange}
            value={this.state.number}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default App;
