import React from 'react';
import './App.css';
import textInput from '../components/textInput';
import numberInput from '../components/numberInput';
import emailInput from '../components/emailInput';
import selectInput from '../components/selectInput';
import button from '../components/button';
import dateInput from '../components/dateInput';



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "",
      firstName: "",
      lastName: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      postalCode: null,
      country: "",
      phone: null,
      fax:null,
      email: "",
      ccholder: "",
      creditCard: "",
      ccNumber: null,
      expDate: null

    } 
  }

  changeHandler = (e)=> {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  render() {
    return <>
      <textInput name="title" label="Title" value={this.state.title} changeHandler={this.changeHandler} /> 
      <textInput name="firstName" label="First Name" value={this.state.firstName} changeHandler={this.changeHandler} />
      <textInput name="lastName" label="Last Name" value={this.state.lastName} changeHandler={this.changeHandler} />
      <textInput name="address" label="Address" value={this.state.address} changeHandler={this.changeHandler} />
      <textInput name="address2" label="Address" value={this.state.address2} changeHandler={this.changeHandler} />
      <textInput name="city" label="City" value={this.state.city} changeHandler={this.changeHandler} />
      <textInput name="state" label="State/region" value={this.state.state} changeHandler={this.changeHandler} />
      <numberInput name="postalCode"  label="Postal Code" value={this.state.postalCode} changeHandler={this.changeHandler}/>
      <textInput name="country" label="Country" value={this.state.country} changeHandler={this.changeHandler} />
      <numberInput name="phone" label="Phone" value={this.state.phone} changeHandler={this.changeHandler} />
      <numberInput name="fax" label="Fax" value={this.state.fax} changeHandler={this.changeHandler} />
      <emailInput name="email" label="Email" value={this.state.email} changeHandler={this.changeHandler} />
      <textInput name="ccHolder" label="Credit Card Holder" value={this.state.ccHolder} changeHandler={this.changeHandler} />
      <selectInput name="creditCard" label="Credit Card" choices={["Visa", "AMEX", "Platinum", "Others"]}/> 
      <numberInput name="ccNumber" label="Credit Card Number" value={this.state.ccNumber} changeHandler={this.changeHandler} />
      <dateInput name="expDate" label="Expiration Date" value={this.state.expDate} changeHandler={this.changeHandler} />
    </>
  }

}

export default App;
