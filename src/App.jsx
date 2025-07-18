import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"

const App = () => {
  return (

    <div>
        <h1>this is app page</h1>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  )
}

export default App