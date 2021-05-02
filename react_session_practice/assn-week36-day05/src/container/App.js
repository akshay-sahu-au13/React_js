import React from 'react';
import './App.css';
import TextInput from '../components/textInput';
import NumberInput from '../components/numberInput';
import EmailInput from '../components/emailInput';
import SelectInput from '../components/selectInput';
import Button from '../components/button';
import DateInput from '../components/dateInput';



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
      <TextInput name="title" label="Title" value={this.state.title} changeHandler={this.changeHandler} /> 
      <TextInput name="firstName" label="First Name" value={this.state.firstName} changeHandler={this.changeHandler} />
      <TextInput name="lastName" label="Last Name" value={this.state.lastName} changeHandler={this.changeHandler} />
      <TextInput name="address" label="Address" value={this.state.address} changeHandler={this.changeHandler} />
      <TextInput name="address2" label="Address" value={this.state.address2} changeHandler={this.changeHandler} />
      <TextInput name="city" label="City" value={this.state.city} changeHandler={this.changeHandler} />
      <TextInput name="state" label="State/region" value={this.state.state} changeHandler={this.changeHandler} />
      <NumberInput name="postalCode"  label="Postal Code" value={this.state.postalCode} changeHandler={this.changeHandler}/>
      <TextInput name="country" label="Country" value={this.state.country} changeHandler={this.changeHandler} />
      <NumberInput name="phone" label="Phone" value={this.state.phone} changeHandler={this.changeHandler} />
      <NumberInput name="fax" label="Fax" value={this.state.fax} changeHandler={this.changeHandler} />
      <EmailInput name="email" label="Email" value={this.state.email} changeHandler={this.changeHandler} />
      <TextInput name="ccHolder" label="Credit Card Holder" value={this.state.ccHolder} changeHandler={this.changeHandler} />
      <SelectInput name="creditCard" label="Credit Card" choices={["Visa", "AMEX", "Platinum", "Others"]}/> 
      <NumberInput name="ccNumber" label="Credit Card Number" value={this.state.ccNumber} changeHandler={this.changeHandler} />
      <DateInput name="expDate" label="Expiration Date" value={this.state.expDate} changeHandler={this.changeHandler} />
      <Button label="Submit" lass="btn" />
    </>
  }

}

export default App;
