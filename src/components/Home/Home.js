import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Are You Looking For Best Online Course?
            </h1>
            <p className="mb-5 ">
              Lets check Out Our Courses. We provide quality Education with Top
              Teachers.
            </p>
            <Link to="/course" className="btn btn-primary">
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
            
     
    </div>
  );
};

export default Home;
