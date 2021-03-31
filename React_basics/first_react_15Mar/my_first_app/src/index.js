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

// ------------------------------------- -till 30th March - ------------------------------------- //
// function BookList() {
//   return (
//     <section className = 'booklist'>
//       <Book/>
//       <Book/>
   
//     </section>
//   );
// }

// const Book = ()=> {
//   return (
//   <article className ='book'>
    
//     <img src="https://images-na.ssl-images-amazon.com/images/I/518saTcnTvL._SX330_BO1,204,203,200_.jpg" alt="Book"/>
//     <h1>A Brief History of Modern India </h1>
//     <h4 >Rajiv Ahir</h4>
  
//   </article>
  
//   );
// }

// ------------------------------------- -31st March - ------------------------------------- //

// function BookList() {
//   return (
//     <section className='booklist'>
//       <Book />
//       <Book />

//     </section>
//   );
// }

// const img = "https://images-na.ssl-images-amazon.com/images/I/518saTcnTvL._SX330_BO1,204,203,200_.jpg";
// const title = 'A Brief History of Modern India';
// const author = "Rajiv Ahir";

// const Book = () => {
//   return (
//     <article className='book'>

//       <img src={img} alt="Book" />
//       <h1>{title} </h1>
//       <h4 >{author}</h4>

//     </article>

//   );
// }

// --------------------------------Making the fields Dynamic-------------------------------------------//

// function BookList() {
//   return (
//     <section className='booklist'>
//       <Book role="developer"/>
//       <Book myname="Akshay"/>

//     </section>
//   );
// }

// const img = "https://images-na.ssl-images-amazon.com/images/I/518saTcnTvL._SX330_BO1,204,203,200_.jpg";
// const title = 'A Brief History of Modern India';
// const author = "Rajiv Ahir";

// const Book = (props) => {
//   console.log(props)
//   return (
//     <article className='book'>

//       <img src={img} alt="Book" />
//       <h1>{title} </h1>
//       <h4 >{author}</h4>
//       {/* for testing props */}
//       <h4>{props.role}</h4>  
//       <h4>{props.myname}</h4> 
//     </article>

//   );
// }

// --------------------------------Making the fields Dynamic 2-------------------------------------------//


// const book1 = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/518saTcnTvL._SX330_BO1,204,203,200_.jpg",
//   title: 'A Brief History of Modern India',
//   author: "Rajiv Ahir"
// }

// const book2 = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/51NHKZC1a0L._SX324_BO1,204,203,200_.jpg",
//   title: "Grandma's Bag of Stories",
//   author: "Sudha Murty"
// }


// function BookList() {
//   return (
//     <section className='booklist'>
//       <Book img={book1.img} title={book1.title} author={book1.author} ></Book>
//       <Book img={book2.img} title={book2.title} author={book2.author} ></Book>

//     </section>
//   );
// }


// const Book = (props) => {
//   console.log(props);
//   const { img, title, author } = props;
//   return (
//     <article className='book'>

//       <img src={img} alt="Book" />
//       <h1>{title} </h1>
//       <h4 >{author}</h4>

//     </article>

//   );
// }

// --------------------------------Making the fields Dynamic 3-------------------------------------------//

// const book1 = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/518saTcnTvL._SX330_BO1,204,203,200_.jpg",
//   title: 'A Brief History of Modern India',
//   author: "Rajiv Ahir"
// }

// const book2 = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/51NHKZC1a0L._SX324_BO1,204,203,200_.jpg",
//   title: "Grandma's Bag of Stories",
//   author: "Sudha Murty"
// }


// function BookList() {
//   return (
//     <section className='booklist'>
//       <Book img = {book1.img} title = {book1.title} author = {book1.author} ></Book>
//       <Book img={book2.img} title={book2.title} author={book2.author} ></Book>

//     </section>
//   );
// }


// const Book = ({img, title, author}) => {
//   // console.log(props)
//   return (
//     <article className='book'>

//       <img src={img} alt="Book" />
//       <h1>{title} </h1>
//       <h4 >{author}</h4>

//     </article>

//   );
// }

// ------------------------------- Children prop(content between opening and closing tag of Component) --------------------------- /

const book1 = {
  img: "https://images-na.ssl-images-amazon.com/images/I/518saTcnTvL._SX330_BO1,204,203,200_.jpg",
  title: 'A Brief History of Modern India',
  author: "Rajiv Ahir"
}

const book2 = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51NHKZC1a0L._SX324_BO1,204,203,200_.jpg",
  title: "Grandma's Bag of Stories",
  author: "Sudha Murty"
}


function BookList() {
  return (
    <section className='booklist'>
      <Book img={book1.img} title={book1.title} author={book1.author} ><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas libero, ea nostrum aperiam beatae aliquam laborum facilis perspiciatis soluta veritatis!</p></Book>
      <Book img={book2.img} title={book2.title} author={book2.author} ></Book>

    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // console.log(props)
  return (
    <article className='book'>

      <img src={img} alt="Book" />
      <h1>{title} </h1>
      <h4 >{author}</h4>
      {children}

    </article>

  );
}

ReactDom.render(<BookList/>, document.getElementById('root'));
