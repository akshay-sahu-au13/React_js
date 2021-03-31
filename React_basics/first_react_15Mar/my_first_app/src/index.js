import React from 'react';
import ReactDom from 'react-dom';
// Import CSS
import './index.css';



// stateless functional component
// always return JSX

// --- JSX RULES ---
// return single element
// div/ section/ article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting


//----Testing components---//

// function Greeting() {
//   return (
//   <header>
//     <h4> Hello, Akshay here, and this is my first react app.. </h4>
//     <ul><li><a href="#">Sample link</a></li></ul>
//     <div>
//       <Person/>
//       <Message/>
//     </div>
//   </header>
//   );
// }

// const Person = ()=> <h1>AKSHAY SAHU</h1>
// const Message = ()=> <p>Heyy there, I am learning React right now...</p>

//----------Another method------------//
// const Greeting = ()=> {
//   return React.createElement('h1', {}, 'Hello there, this also works')
// }

// ReactDom.render(<Greeting />  , document.getElementById('root'));

function BookList() {
  return (
    <section className = 'booklist'>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}

const Book = ()=> {
  return (
  <article className ='book'>
    
    <img src="https://images-na.ssl-images-amazon.com/images/I/518saTcnTvL._SX330_BO1,204,203,200_.jpg" alt="Book"/>
    <h1>A Brief History of Modern India </h1>
    <h4 >Rajiv Ahir</h4>
  
  </article>
  
  );
}


ReactDom.render(<BookList/>, document.getElementById('root'));
