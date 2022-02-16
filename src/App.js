import React from "react";
import DOMPurify from "dompurify";
import logo from "./logo.svg";

export default class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    
        this.setState({value: event.target.value});  
    }

    handleSubmit(event) {
      document.getElementById("label").innerHTML = "Hello there " + DOMPurify.sanitize(this.state.value) + "!";
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}> 
        <img src={logo} alt="Logo" />     
        <h2> Welcome to my Welcoming Page!</h2> 
        <sub>Please don't break it...</sub>
        <br/><br/><br/>
        <label>
            Please enter your name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
          <input type="submit" value="Submit" />
          <br/><br/><br/>
          <label id="label"></label>
        </form>
      );
    }
  }