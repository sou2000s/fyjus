import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const Course = () => {
  const categoties = useLoaderData();
  return (
    <div className="flex">
      <div className=" mt-8 flex flex-col   h-screen text-black">
        {categoties.map((category) => (
          <Link
            to={`course/${category.categoryId}`}
            className="text-center  mt-10 text-xl w-56"
          >
            {category.name}
          </Link>
        ))}

        <label for="cars">Choose a car:</label>

        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="md:ml-20 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Course;
