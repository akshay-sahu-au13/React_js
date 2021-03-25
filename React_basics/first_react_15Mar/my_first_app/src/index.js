import React from 'react';
import ReactDom from 'react-dom';

// stateless functional component
// always return JSX

// --- JSX RULES ---
// return single element
// div/ section/ article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function Greeting() {
  return (
  <header>
    <h4> Hello, Akshay here, and this is my first react app.. </h4>
    <ul><li><a href="#">Sample link</a></li></ul>
    <div>
      <Person/>
      <Message/>
    </div>
  </header>
  );
}

const Person = ()=> <h1>Akshay Sahu</h1>
const Message = ()=> <p>Heyy there, I am learning React right now...</p>
//----------Another method------------//
// const Greeting = ()=> {
//   return React.createElement('h1', {}, 'Hello there, this also works')
// }

ReactDom.render(<Greeting />  , document.getElementById('root'));