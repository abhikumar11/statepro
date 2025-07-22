import { useState } from "react";

const FormHandling = () => {
    const [name,setName]=useState("");
    const [age,setAge]=useState(null);
    const [email,setEmail]=useState("");
    const [city,setCity]=useState(null);
    const [phone,setPhone]=useState(null);
    const handleInput=(e)=>{
        console.log(e.target.value);
        setName(e.target.value);
    }
  return (
    <div>
     <h1>This is form  page</h1> 
        <form>
            <label htmlFor="">Name</label>
            <input type="text" onChange={handleInput}/>
            <br/><br/>
            <label htmlFor="">Age</label>
            <input type="number" onChange={(e)=>setAge(e.target.value)}/>
            <br/><br/>
            <label htmlFor="">Email</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
            <br/><br/>
            <label htmlFor="">City</label>
            <input type="text" onChange={(e)=>setCity(e.target.value)}/>
            <br/><br/>
            <label htmlFor="">Phone</label>
            <input type="number" onChange={(e)=>setPhone(e.target.value)}/>
        </form>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{email}</h1>
        <h1>{city}</h1>
        <h1>{phone}</h1>

    </div>
  )
}

export default FormHandling