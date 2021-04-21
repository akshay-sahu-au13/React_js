import React from 'react';
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: null,
      age: null,
      email: null,
      error: false,
      submitted: false
    }
  }

  handleSubmit = (e)=> {
    e.preventDefault();
    if (this.state.name && this.state.age && this.state.email){
      this.setState({error:false, submitted:true})
    } else {
      this.setState({submitted:true, error:true})
    }
  }

  changeName = (e)=> {
    this.setState({name:e.target.value})
  }
  changeAge = (e) => {
    this.setState({ age: e.target.value })
  }
  changeEmail = (e) => {
    this.setState({ email: e.target.value })
  }
  render(){
    return <>
      <div className="container">
        <form  className="form" onSubmit={(e)=> this.handleSubmit(e)}>

          <div className="form-grp"><label htmlFor="name">Name: <input type="text" id="name" value={this.state.name} onChange={(e)=>this.changeName(e)} /></label></div>
          <div className="form-grp"><label htmlFor="age">Age: <input type="number" id="age" value={this.state.age} onChange={(e) => this.changeAge(e)} /> </label> </div>
          <div className="form-grp"><label htmlFor="email">Email: <input type="text" id="email" value={this.state.email} onChange={(e) => this.changeEmail(e)} /> </label></div>
          <button type="submit">Login</button>
        </form>
        <div className={this.state.submitted?"show":"hide"}>
          <span className={this.state.error?"error":"no-error"}>{this.state.error?"Error! Please fill all the fields": "Form Submitted successfully"}</span>
        </div>
      </div>

    </>
  }
}

