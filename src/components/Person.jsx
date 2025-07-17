import React, { useState } from 'react'

const Person = () => {
    const[person,setPerson]=useState({name:"Abhishek",age:25,city:"Bhopal"});
    const [flag,setFlag]=useState(false);
  return (
    <div>
        {flag?"":<h1>Hide Me</h1>}
        <button className="border p-2 rounded-2xl" onClick={()=>setFlag(!flag)}>Toggle Here</button>
    </div>
  )
}

export default Person