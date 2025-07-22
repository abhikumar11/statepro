import { useState } from "react";

const FormHandling = () => {
    const [name,setName]=useState("");
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
        </form>
        <h1>{name}</h1>
    </div>
  )
}

export default FormHandling