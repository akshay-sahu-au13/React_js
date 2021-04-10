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
  function complex(num){
    setTimeout(() => {
      setNumber((prevNumber)=>{
        return prevNumber+1;
      })
    }, 2000);
  }
  return <>
    <section style={{ margin: '30px auto' }}>
      <h2 >Counter</h2>
      <h1>{number}</h1>
      <button className="btn" onClick={()=>increase(number)}>Increase</button>
      <button className="btn" onClick={() => reset(number)}>Reset</button>
      <button className="btn" onClick={() => decrease(number)}>Decrease</button>
    </section>
    <section style={{ margin: '30px auto' }}>
      <h2>Complex Counter</h2>
      <h1>{number}</h1>
      <button className="btn" onClick={()=>complex(number)}>Change Number</button>
    </section>
  
  </>;
};

export default UseStateCounter;
