import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {


  let [value, setValue] = useState(0);

  useEffect(()=> {
    console.log("UseEffect");
    document.title = `Notifications (${value})`;

  }); // If you leave the dependency array empty then the useeffect will only work for 1st render


  return <>
    <section>
      <h2>New notifications: {value}</h2>
      <button className="btn" onClick={()=>setValue(value+1)}>Increase</button>
    </section>
  </>;
};

export default UseEffectBasics;
