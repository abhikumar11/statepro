import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"
import Layout from "./components/Layout"
import EffectState from "./components/EffectState"
import FormHandling from "./components/FormHandling"
import MultiForm from "./components/MultiForm"
import LocalForm from "./components/LocalForm"

const App = () => {
  return (

    <div>
          {/* <h1>this is app page</h1>
       <Routes>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes> */}
        {/* <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
          </Route>
        </Routes> */}
        {/* <EffectState/> */}
      {/* <MultiForm/> */}
      <LocalForm/>
    </div>
  )
}

export default App