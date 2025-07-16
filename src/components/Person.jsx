import React, { useState } from 'react'

const Person = () => {
    const[person,setPerson]=useState({name:"Abhishek",age:25,city:"Bhopal"});
  return (
    <div>
        <h1>{person.city}</h1>
    </div>
  )
}

export default Person