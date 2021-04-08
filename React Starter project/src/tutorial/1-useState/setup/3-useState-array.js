import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  let [people, setPeople] = React.useState(data);
  // console.log(people);
  function clickHandler(){
    setPeople([])
  }

  function deleteName(id){
    let new_people = people.filter(item=> id !== item.id);
    setPeople(new_people);
  }

  return <>
  {people.map(item=>{
    let id = item.id;
    return (
      <div className="item" key={id}>{item.name} <button key={id} onClick={() => deleteName(id)}>Remove</button></div>
    
      )
  })}
    <button type="button" className="btn" onClick={() => clickHandler()}>Delete All names</button>
    
  </>;
};

export default UseStateArray;
