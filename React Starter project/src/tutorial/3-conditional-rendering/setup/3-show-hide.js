import React, { useState, useEffect } from 'react';

const ShowHide = () => {

  const [show, setShow] = useState(false);

  return <>
    <button className="btn" onClick={()=> setShow(!show)}>show / hide</button>
    <div style={{margin : '3rem'}}>
     {show && <Item></Item>}
    </div>
  </>;
};

const Item =()=> {
  
  let [size, setSize] = useState(window.innerWidth);
  const showSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', showSize);
    return () => {
      window.removeEventListener('resize', showSize);
    }
  })

  return <>
    <h1>Hello there</h1>
    <h2>window size: {size}</h2>
  </>
}

export default ShowHide;
