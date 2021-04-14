import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({firstName:"", email:"", age:""});

  const handleChange = (e)=> {
    // console.log(e.target.value);
    let name = e.target.name;
    let value = e.target.value;

    setPerson({...person, [name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
    
      const newPerson = { ...person, id: new Date().getTime().toString()}
      setPeople([...people, newPerson]);
  
      setPerson({ firstName: "", email: "", age: "" })
    } else {
      console.log('empty values');
    }
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={person.age}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
