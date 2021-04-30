import React from 'react';
import './App.css';




class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:"",
      email:"",
      phone:"",
      address:"",
      password:""
    }
  }

  handleSubmit = (e)=> {
    e.preventDefault();
    console.log(this.state)
    this.setState({
      name: "",
      email: "",
      phone: "",
      address: "",
      password: ""
    })
  }

  inputHandler = (e)=> {
    this.setState({ ...this.state,
      [e.target.name]:e.target.value
    })
  }
  render() {
   return(
     <>
      <form className="form" onSubmit={(e)=>this.handleSubmit(e)}>
      <div className="form-grp">
        <label htmlFor="name">  
          Name: <input type="text" name="name" id="name" value={this.state.name} onChange={(e)=>this.inputHandler(e)} />
        </label>
      </div>
         <div className="form-grp">
           <label htmlFor="email">
             Email: <input type="email" name="email" id="email" value={this.state.email} onChange={(e) => this.inputHandler(e)} />
           </label>
         </div>
         <div className="form-grp">
           <label htmlFor="password">
             Password: <input type="password" name="password" id="password" value={this.state.password} onChange={(e) => this.inputHandler(e)} />
           </label>
         </div>
         <div className="form-grp">
           <label htmlFor="address">
            Address: <input type="text" name="address" id="address" value={this.state.address} onChange={(e) => this.inputHandler(e)} />
           </label>
         </div>
         <div className="form-grp">
           <label htmlFor="phone">
             Phone: <input type="number" name="phone" id="phone" value={this.state.phone} onChange={(e) => this.inputHandler(e)} />
           </label>
         </div>

         <button className="btn" type="submit">Submit</button>

      </form>
      
     </>
   )
  }
}


export default App;
