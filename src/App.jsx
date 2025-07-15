import { useState } from "react"
import Counter from "./components/counter"
import ColourChanger from "./components/ColourChanger"
import ArrayIteration from "./components/ArrayIteration"

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
     {/* <ColourChanger/> */}
     {/* <Counter/> */}
     <ArrayIteration/>
      </div>
  )
}

export default App