import React, {useState} from 'react';
//hooks
// useState, useEffect, useRef, useReducer
const Book = ()=> {
  let title = "Welcome to my First react App";
  let data = [
    {
      name:"Komal",
      age:"28",
      job:"Web developer"
    },
    {
       name:"Akshay",
      age:"27",
      job:"Teacher"
    }
  ]
  const [newTitle, setNewTitle] = useState(title);
  const [people, setPeople] = useState([]);
  const changeTitle = ()=> {
    if (newTitle === title){
      setNewTitle("I am a new title");
    } else {
      setNewTitle(title);
    }
  }

  const showPeople = ()=> {
    setPeople(data);
  }

  return <>
    <div className="container">
      <h1>{newTitle}</h1>
      <button className="btn" onClick={changeTitle}>Change Message</button>
      <button className="btn" onClick = {showPeople}>Show People</button>
    </div>
    <div className="container">
      {
        people.map((person)=>{
          return <>
            <div className="item">
              <h4>{person.name}</h4>
              <h4>{person.age}</h4>
              <p>{person.job}</p>
            </div>
          </>
        })
      }
      
    </div>
    
  </>
}

export default Book;