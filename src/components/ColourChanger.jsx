import { useState } from "react"

const ColourChanger = () => {
    const [color,setColor]=useState("White");
    const [name,setName]=useState("White");

    const fun=(color,name)=>{
        setColor(color);
        setName(name);
    }
  return (
    <div  style={{height:"100vh",backgroundColor:color}}>
        <h1 style={{textAlign:"center"}}>{name}</h1>
        <button onClick={()=>fun("red","Red")}>Red</button>
        <button onClick={()=>fun("green","Green")}>Green</button>
        <button onClick={()=>fun("yellow","Yellow")}>Yellow</button>
        <button onClick={()=>fun("blue","Blue")}>Blue</button>
    </div>
  )
}
export default ColourChanger