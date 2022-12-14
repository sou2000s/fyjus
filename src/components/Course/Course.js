import React from "react";
import { useState } from "react";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import {BiCategory} from "react-icons/bi"
import Footer from "../Footer/Footer";
const Course = () => {
  const categoties = useLoaderData();
  const [selectCategory , setSelectedCategory] = useState("");
  let activeStyle = {
    textDecoration: "underline",
  };
  return (

   <div className="bg-[#daa877]">
         <h1 className="text-center text-4xl mb-6">Courses</h1>
    <div className="md:flex ">
  
      <div className=" mt-8   md:block hidden  h-screen text-black">
      <h1 className="text-4xl ml-9 mb-9 md:block hidden">Categories</h1>
       <div className="">
           {categoties.map((category) => (
          <NavLink
            to={`course/${category.categoryId}`}
            className="text-center  mt-10 text-xl w-56"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            <h1 className="mb-10">{category.name}</h1>
          </NavLink>
        ))}
       </div>

        
      </div>
      <div className="dropdown md:ml-0 ml-20 md:hidden">
  <label tabIndex={0} className="">Select Category<BiCategory/> </label>
   <p className="md:hidden ml-6 text-xl">{selectCategory}</p>
  <ul tabIndex={0} className=" dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-52">
    {
      categoties.map(category => <li><NavLink
        style={({ isActive }) =>
          isActive ? activeStyle : undefined} 
          onClick={()=>setSelectedCategory(category.name)} to={`course/${category.categoryId}`}>{category.name}</NavLink></li>)
    }
  </ul>
</div> 
    

      <div className="md:ml-20 ml-5 ">
        <Outlet></Outlet>
      </div>
    </div>
    
       <Footer></Footer>
     
    </div>
  );
};

export default Course;
