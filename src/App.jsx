import { useState } from "react"

const App = () => {
  const [title,setTitle]=useState("abhishek")
  return (
    <div>
      <h1>App-{title}</h1>
      </div>
  )
}

export default App