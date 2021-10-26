import { Component } from "react";
import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handelChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    this.props.handlelAddContact(this.state);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const {
      handelSubmit,
      handelChange,
      state: { name, number },
    } = this;

    return (
      <form onSubmit={handelSubmit}>
        <h1 className={s.title}>Phonebook </h1>
        <label className={s.label}>
          <p className={s.text}>Name</p>
          <input
            type="text"
            className={s.input}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handelChange}
            value={name}
          />
        </label>
        <label>
          <p className={s.text}>Number</p>
          <input
            type="tel"
            className={s.input}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handelChange}
            value={number}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
