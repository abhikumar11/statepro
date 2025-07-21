import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
     return (
          <div className="min-h-screen flex flex-col">
               <nav className="bg-teal-600 text-white py-4">
                    <ul className="flex gap-10 justify-center font-semibold">
                         <li>
                              <Link className="px-3 py-2 rounded hover:bg-teal-700 transition" to={"/"}>Home</Link>
                         </li>
                         <li>
                              <Link  className="px-3 py-2 rounded hover:bg-teal-700 transition" to={"/about"}>About</Link>
                         </li>
                         <li>
                              <Link  className="px-3 py-2 rounded hover:bg-teal-700 transition" to={"/services"}>Services</Link>
                         </li>
                         <li>
                              <Link  className="px-3 py-2 rounded hover:bg-teal-700 transition" to={"/contact"}>Contact</Link>
                         </li>
                    </ul>
               </nav>
               <main className="flex-grow p-4 bg-slate-50 text-slate-800">
                    <Outlet />
               </main>
               <footer className="bg-yellow-100 text-teal-800 text-center py-4 border-t">
                    <h1 className="text-gray-700">This is footer</h1>
               </footer>
          </div>
     );
};

export default Layout;
