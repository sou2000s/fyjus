import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import BrandImage from "../../assets/Name.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import {MdDarkMode , MdOutlineLightMode} from "react-icons/md"

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [theme , setTheme] = useState(true);
  let activeStyle = {
    textDecoration: "underline",
  };

  const handleTheme = () => {
    setTheme(!theme)
  }

  const handleMenuBar = () => {
    setOpen(!open);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-[#e1c9c7] text-white h-20 md:p-5  flex justify-around ">
      <div className="flex md:mt-0 mt-4">
        <h1 className="text-2xl">Fyjus</h1>
        <img src={BrandImage} className="rounded-xl h-10  w-9 ml-3" alt="" />
      </div>

      <ul
        className={` md:flex text-black ml-40 ease-in duration-500  bg-[#e1c9c7] px-36 md:mr-0 mr-40 md:p-0 md:static z-[20] absolute ${
          open ? "top-20 " : "top-[-250px]"
        }`}
      >
        {user?.photoURL && (
          <li>
            {" "}
            <Link className="">
            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>

        
              <img
                src={user?.photoURL}
                alt=""
                className="w-10 h-10 rounded-xl"
              />    </div>
            </Link>
          </li>
        )}
        <li>
          <NavLink to="/home" className="ml-3"
           style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="ml-3" to="/course" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Courses
          </NavLink>
        </li>

        {user?.uid ? (
          <li>
            <Link className="ml-3" onClick={handleLogOut}>
              LogOut
            </Link>
          </li>
        ) : (
          <>
            <li>
              <NavLink className="ml-3" to="/register" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                Register
              </NavLink>
            </li>
            <li>
              <NavLink className="ml-3" to="/login" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                Login
              </NavLink>
            </li>
          </>
        )}
        <li>
          {" "}
          <NavLink className="ml-3" to='/blog' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Blog</NavLink>
        </li>
        <li>
          <NavLink className="ml-3"  to='/faq'  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>FAQ</NavLink>
        </li>
        <li onClick={handleTheme} className="text-xl ml-3">
           {theme ? <MdOutlineLightMode /> : <MdDarkMode  />}
        </li>
      </ul>
      <div className="md:hidden mt-5 text-xl text-black" onClick={handleMenuBar}>
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

   
    </div>
  );
};

export default Navbar;
