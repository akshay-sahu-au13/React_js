import React from 'react';
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: null,
      age: null,
      email: null,
      error: false
    }
  }

  render(){
    return <>
      <div className="container">
        <form  className="form">

          <div className="form-grp"><label htmlFor="name">Name: <input type="text" id="name" /></label></div>
          <div className="form-grp"><label htmlFor="age">Age: <input type="number" id="age" /></label></div>
          <div className="form-grp"><label htmlFor="email">Email: <input type="text" id="email"/> </label></div>
          <button type="submit">Login</button>
        </form>
        <div className="error">
          {}
        </div>
      </div>

    </>
  }
}

