import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import BrandImage from "../../assets/Name.png";
import {AiOutlineClose , AiOutlineMenu} from "react-icons/ai"


const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-orange-500 text-white h-20 md:p-5  md:flex  ">
      <div className="flex">
        <h1 className="text-2xl">Fyjus</h1>
        <img src={BrandImage} className="rounded-xl w-9 ml-3" alt="" />
      </div>

      <ul className=" md:flex">
        {user?.photoURL && (
          <Link className="">
            <img src={user?.photoURL} alt="" className="w-10 h-10 rounded-xl" />
          </Link>
        )}
        <Link to="/" className="ml-3">
          Home
        </Link>
        <Link className="ml-3" to="/course">
          Course
        </Link>

        {user?.uid ? (
          <Link className="ml-3" onClick={handleLogOut}>
            Log Out
          </Link>
        ) : (
          <>
            <Link className="ml-3" to="/register">
              Register
            </Link>
            <Link className="ml-3" to="/login">
              Login
            </Link>
          </>
        )}
        <Link className="ml-3">Blog</Link>
        <Link className="ml-3">FAQ</Link>
      </ul>
      <div className="md:hidden">
          <AiOutlineMenu></AiOutlineMenu>
          <AiOutlineClose></AiOutlineClose>
      </div>
    </div>
  );
};

export default Navbar;
