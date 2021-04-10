import React, { useState } from 'react';



const UseStateCounter = () => {
  const [number, setNumber] = useState(0);
  function increase(num) {
    setNumber(num + 1)
  }
  function reset(num) {
    setNumber(0)
  }
  function decrease(num) {
    setNumber(num - 1)
  }
  return <>
    <section style={{ margin: '30px auto' }}>
      <h2 >Counter</h2>
      <h1>{number}</h1>
      <button className="btn" onClick={()=>increase(number)}>Increase</button>
      <button className="btn" onClick={() => reset(number)}>Reset</button>
      <button className="btn" onClick={() => decrease(number)}>Decrease</button>
    </section>
  
  </>;
};

export default UseStateCounter;
