import React, { useState } from 'react'

const MultiForm = () => {
    const [frmData,setFrmData]=useState({name:"",age:null,email:"",city:"",phone:null});
    const handleInput=(e)=>{
        let{name,value}=e.target;
        setFrmData({...frmData,[name]:value})
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(frmData);
    }
  return (
    <div>
     <h1>This is multiform  page</h1> 
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name='name' onChange={handleInput}/>
            <br/><br/>
            <label htmlFor="">Age</label>
            <input type="number" name='age' onChange={handleInput}/>
            <br/><br/>
            <label htmlFor="">Email</label>
            <input type="email" name='email' onChange={handleInput}/>
            <br/><br/>
            <label htmlFor="">City</label>
            <input type="text" name='city'onChange={handleInput}/>
            <br/><br/>
            <label htmlFor="">Phone</label>
            <input type="number" name='phone' onChange={handleInput}/>
            <input type="submit" value="Submit"/>
        </form>
        <h1>{frmData.name}</h1>
        <h1>{frmData.age}</h1>
        <h1>{frmData.email}</h1>
        <h1>{frmData.city}</h1>
        <h1>{frmData.phone}</h1>

    </div>
  )
}

export default MultiForm