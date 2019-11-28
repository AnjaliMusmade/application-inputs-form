import React, { Component as C } from "react";

export default class InputBoxFocusClass extends C {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      address: "",
      sameAddress: "",
      gender: "",
      state: ""
    };
    this.Handler = this.Handler.bind(this);
  }

  //get the event triggered after each control changed
  Handler = e => {
    let { value, name, type, checked } = e.target;
    if (type === "checkbox") {
      this.setState({
        [name]: checked
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <h2>Enter the Information</h2>
          First Name:{" "}
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            value={this.state.firstname}
            onChange={this.Handler}
          />
          <br />
          <br />
          Last Name:{" "}
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={this.state.lastname}
            onChange={this.Handler}
          />
          <br />
          <br />
          Address:{" "}
          <textarea
            name="address"
            placeholder="Address"
            value={this.state.address}
            onChange={this.Handler}
          />
          <br />
          <br />
          Is Billing Address Same:{" "}
          <input
            type="checkbox"
            name="sameAddress"
            value={this.state.sameAddress}
            onChange={this.Handler}
          />
          <br />
          <br />
          Gender:{" "}
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={this.Handler}
          />{" "}
          Female{" "}
          <input
            type="radio"
            value="Male"
            name="gender"
            onChange={this.Handler}
          />{" "}
          Male
          <br />
          <br />
          State:{" "}
          <select name="state" onChange={this.Handler}>
            <option />
            <option>MH</option>
            <option>UP</option>
            <option>MP</option>
            <option>J&K</option>
          </select>
        </div>
        <hr />
        <h2>Summary:</h2>
        <br />
        First Name:<label>{this.state.firstname}</label>
        <br />
        Last Name:<label>{this.state.lastname}</label>
        <br />
        Address:<label>{this.state.address}</label>
        <br />
        Is Billing Address Same?
        <label>{this.state.sameAddress ? "True" : "False"}</label>
        <br />
        Gender:<label>{this.state.gender}</label>
        <br />
        State:<label>{this.state.state}</label>
        <hr />
      </div>
    );
  }
}
