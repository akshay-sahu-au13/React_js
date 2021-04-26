import React from 'react';
import ClassComp from './Class';

function App() {
  return (
    <>
      <div className="container">
        <h1>This is a functional component</h1>
        <img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="functional comp" height="300"/>
      </div>
      <ClassComp /> 
    </>
  );
}

export default App;
