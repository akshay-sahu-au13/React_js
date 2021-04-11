import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  let [user, setUser] = useState('User');
  let [isLoading, setIsLoading] = useState(true);
  let [isError, setIsError] = useState(false);

  useEffect(()=> {
    fetch(url).then(res=> {
      if (res.status >= 200 && res.status < 300){
        return res.json()
      }
      setIsLoading(false);
      setIsError(true);
      throw new Error(res.statusText);
    }).then(user=> {
      const {login} = user;
      setIsLoading(false);
      setUser(login);
    }).catch(e=>{
      console.log(e)
    })
  },[])

  if (isLoading){
    return <>
      <div>
        <h1>Loading...</h1>
      </div>
    </>
  }

  if (isError){
    return <>
      <div>
        <h1>Error...</h1>
      </div>
    </>
  }

  return <>
    <div>
      <h1>{user}</h1>
    </div>
  </>;
};

export default MultipleReturns;
