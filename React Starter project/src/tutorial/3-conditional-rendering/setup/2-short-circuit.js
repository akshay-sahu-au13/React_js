import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  let [text, setText] = useState('');
  let [isError, SetisError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return <>
    <h1>{text || "Hello world"}</h1>
    <button className="btn" onClick={()=> SetisError(!isError)}>toggle error</button>
    {/* <h1>{text && "John Doe"}</h1> */}
    {/* <h1>{!text && "John Doe"}</h1> */}
    
    { isError && <h1>Error...</h1> }
    {isError? <h1>Error from ternery...</h1>: <div>
      <p>There are No Errors...</p>
    </div> }
  </>;
};

export default ShortCircuit;
