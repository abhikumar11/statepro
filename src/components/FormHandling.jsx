import { useState } from "react";

const FormHandling = () => {
    const [name,setName]=useState("");
    const [age,setAge]=useState(null);
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
            <label htmlFor="">Age</label>
            <input type="number" onChange={(e)=>setAge(e.target.value)}/>
        </form>
        <h1>{name}</h1>
        <h1>{age}</h1>
    </div>
  )
}

export default FormHandling