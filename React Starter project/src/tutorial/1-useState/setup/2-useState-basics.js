import React, { useState } from 'react';

const UseStateBasics = () => {
  let title = "Random Title";
  let changedTitle = "Welcome to react hooks 'useState'"
  let [text, setText] = useState(title);
  function changeTitle() {
    if (text == title){
      setText(changedTitle);
      title = "Welcome to react hooks 'useState'";
    } else {
      title = "Random Title";
      setText(title)
    }
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
