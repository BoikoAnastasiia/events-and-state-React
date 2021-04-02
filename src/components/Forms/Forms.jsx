import { Component } from 'react';
import shortid from 'shortid';

class Forms extends Component {
  loginInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  state = { name: '', tag: '', experience: 'nobody', licence: false };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.loginInputId}>
          Name
          <input
            id={this.loginInputId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Second Name
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          ></input>
        </label>
        <button type="submit">Send </button>

        <p>Your level as a developer: </p>
        <label htmlFor="">nobody</label>
        <input
          type="radio"
          name="experience"
          value="nobody"
          onChange={this.handleChange}
          checked={this.state.experience === 'nobody'}
        />
        <label htmlFor="">minijunior</label>

        <input
          type="radio"
          name="experience"
          value="minijunior"
          onChange={this.handleChange}
          checked={this.state.experience === 'minijunior'}
        />
        <label htmlFor="">junior</label>

        <input
          type="radio"
          name="experience"
          value="junior"
          onChange={this.handleChange}
          checked={this.state.experience === 'junior'}
        />

        <label htmlFor="">
          <input type="checkbox" name="licence" /> Agree with licence
        </label>
      </form>
    );
  }
}

export default Forms;

/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        /> */
