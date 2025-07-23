import React, { useState } from 'react'

const LocalForm = () => {
    const [frmData,setFrmData]=useState({username:"",email:"",password:""})
    const handleInput=(e)=>{
            const {name,value}=e.target;
            setFrmData({...frmData,[name]:value});
    }
    const handleSubmit=(e)=>{
            e.preventDefault();
            localStorage.setItem("userdata",JSON.stringify(frmData));
    }
  return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
           <label htmlFor="">Username</label>
           <input type='text'  name='username' onChange={handleInput}/>
           <br/><br/>
            <label htmlFor="">Email</label>
           <input type='email' name='email' onChange={handleInput}/>
           <br/><br/>
            <label htmlFor="">Password</label>
           <input type='password' name='password' onChange={handleInput}/>
           <br/><br/>
           <input type='submit' value="Sign Up" onChange={handleInput}/>
        </form>
    </div>
  )
}

export default LocalForm