import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const mesaure = () => {
    setValue(window.innerWidth)
  };

  let [value, setValue] = useState(()=>{
    console.log(window.innerWidth)
    return window.innerWidth
  });
  useEffect(()=>{
    console.log("UseEffect");
    window.addEventListener('resize', mesaure);
    return ()=> {
      console.log("Remove effect");
      window.removeEventListener('resize', mesaure)
    }
  },[]);


  return <>
    <h3 style={{margin:'3rem auto'}}>Window Width is {value}px</h3>
  
  </>;
};

export default UseEffectCleanup;
