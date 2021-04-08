import React, { useState } from 'react';

const UseStateBasics = () => {
  let title = "Random Title";

  let [text, setText] = useState(title);
  function changeTitle() {
    setText("Welcome to react hooks 'useState'")
  }

  console.log(text, setText);
  
  return (
  <React.Fragment>
    <h2>{text}</h2>
      <button type="button" class="btn" onClick={()=>changeTitle()}>Change title</button>
  </React.Fragment>

  )
};

export default UseStateBasics;
