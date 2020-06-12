import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    username: '',
    email: '',
    pass: '',
    accept: false,

    errors: {
      username: false,
      email: false,
      pass: false,
      accept: false,
    }
  }

  messages = {
    username_incorrect: 'Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji',
    email_incorrect: 'Brak @ w emailu',
    password_incorect: 'Hasło musi mieć 8 znaków',
    accept_incorrect: 'Nie potwierdzona zgoda'

  }

  handleChange = (e) => {
    const name = e.target.name
    const type = e.target.type;


    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;
      // const checked = e.target.checked;
      this.setState({
        [name]: value
      })
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      console.log(checked);
      this.setState({
        [name]: checked
      })

    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">Twoje imię:
            <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange} />
            {this.state.errors.username && <span>{this.messages.username_incorrect}</span>}
          </label>

          <label htmlFor="user">Twój adres email:
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
            {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
          </label>

          <label htmlFor="password">Twóje password:
            <input type="password" id="password" name="pass" value={this.state.email} onChange={this.handleChange} />
            {this.state.errors.pass && <span>{this.messages.password_incofalse}</span>}
          </label>

          <label htmlFor="accept">
            <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange}
            />Wyrażam zgodę wszelaką
            </label>
          {this.state.errors.accept && <span>{this.messages.accept_incorrect}</span>}

          <button>Zapisz się</button>
        </form>
      </div>
    );
  }
}

export default App;
