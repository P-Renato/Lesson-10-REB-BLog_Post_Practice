import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-100 flex gap-x-4 px-6 py-4">
      <nav className="me-auto">
        <ul className="flex gap-x-2 text-gray-600">
          <li className=" hover:text-orange-800 cursor-pointer">
            {" "}
            <NavLink to="/" >Home</NavLink>
            
          </li>
          <li className=" hover:text-orange-800 cursor-pointer">
            <NavLink to="/posts" >Posts</NavLink>
            
          </li>
          <li className=" hover:text-orange-800 cursor-pointer">
            <NavLink to="/about" >About</NavLink>
            
          </li>
        </ul>
      </nav>
      <NavLink to="/login" className="text-gray-600">Login🚪</NavLink>
    </header>
  );
}

export default Header;
