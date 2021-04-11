import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  let [value, setValue] = useState(()=>{
    console.log(window.innerWidth)
    return window.innerWidth
  });
  useEffect(()=>{
    console.log("UseEffect");
    window.addEventListener('resize', ()=> {
      setValue(window.innerWidth)
    })
  },[])


  return <>
    <h3 style={{margin:'3rem auto'}}>Window Width is {value}px</h3>
  
  </>;
};

export default UseEffectCleanup;
