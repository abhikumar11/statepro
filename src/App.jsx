import { useState } from "react"
import Counter from "./components/counter"

const App = () => {
  const [title,setTitle]=useState("abhishek")
  const [age,setAge]=useState(23)
  const [contact,setContact]=useState(123456789)

  const fun=()=>{
    setTitle("vikas");
  }
  const fun2=()=>{
    setAge(50);
  }
  return (
    <div>
      <h1>My name is {title} and my age is {age}</h1>
      <h2>Contact No-{contact}</h2>
      <button onClick={fun}>Change Name</button>
      <button onClick={fun2}>Change Age</button>
      <button onClick={()=>setContact(9876543210)}>Change Contact</button>
      <Counter/>
      </div>
  )
}

export default App