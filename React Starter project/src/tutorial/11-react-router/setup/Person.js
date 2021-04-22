import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const {id} = useParams();
  const Name = data.filter(item => parseInt(id) === item.id)
  const {name} = Name[0]
  console.log(name)
  return (
    <div>
      <h1>
    {name}
      </h1>
      <button className="btn"><Link to="/people">Back to people</Link></button>
    </div>
  );
};

export default Person;
