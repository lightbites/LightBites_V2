import React, { Component } from "react";


export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      address: "",
    };
  }

  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    

    var url = "/api/customers";
    const data = {firstname: this.state.firstname, lastname: this.state.lastname, email: this.state.email};
    
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        "Content-Type": "application/json"
      }
    }).then(res => res.json()) 
      .then(res => console.log("Success:", res))
      .catch(error => console.error("Error:", error));
  }


  componentDidMount() {
    fetch("/api/customers")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            firstname: result.firstname,
            lastname: result.lastname,
            email: result.email,
            address: result.address
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error
          });
        }
      )
      .then(console.log(res));
  }


  render() {
    const { firstname, lastname, email, address, error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={this.onChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={this.onChange}
            placeholder="Last Name"
          />
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.onChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="address"
            value={address}
            onChange={this.onChange}
            placeholder="Address"
          />
          <button type="submit">Submit</button>
        </form>
      );
    }}
}
