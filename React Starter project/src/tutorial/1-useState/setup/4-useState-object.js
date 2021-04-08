import React, { useState } from 'react';

const UseStateObject = () => {

  let [person, setPerson] = useState({
    name:"Akshay",
    age:28,
    message:"useState with an Object"
  });

  function changeMsg(){
    if (person.message !== "Message Changed"){
      setPerson({ ...person, message: "Message Changed" })
    } else {
      setPerson({ ...person, message: "useState with an Object" })
    }
    
      }
  function changeName() {
    if (person.name !== "Axxy") {
      setPerson({ ...person, name: "Axxy" })
    } else {
      setPerson({ ...person, name: "Akshay" })
    }

  }
  function changeAge() {
    if (person.age !== 29) {
      setPerson({ ...person, age: 29 })
    } else {
      setPerson({ ...person, age: 28 })
    }

  }

  return <>
  <br/><br/>
    <h3 className="item">{person.name} <button onClick={()=>changeName()}>Change</button></h3>
    <h3 className="item">{person.age} <button onClick={() => changeAge()}>Change</button></h3>
    <h3 className="item">{person.message} <button onClick={() => changeMsg()}>Change</button></h3>
    <button className="btn" onClick={()=> changeMsg()}>Change Message</button>
  </>;
};

export default UseStateObject;
