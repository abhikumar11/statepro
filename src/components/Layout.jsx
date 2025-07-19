import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link  className="text-blue-700 underline" to={"/"}>Home</Link></li>
                <li><Link  className="text-blue-700 underline" to={"/about"}>About</Link></li>
                  <li><Link  className="text-blue-700 underline" to={"/services"}>Services</Link></li>
                <li><Link  className="text-blue-700 underline" to={"/contact"}>Contact</Link></li>
        
            </ul>
        </nav>
        <Outlet/>
        <footer>
            <h1>This is footer</h1>
        </footer>
    </div>
  )
}

export default Layout