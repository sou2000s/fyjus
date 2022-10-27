import jsPDF from "jspdf";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";

const CourseDetails = () => {
  const course = useLoaderData();
  // console.log(course)
  const { detail } = course;
  console.log(detail);

  const pdfGenterator = () => {
    let doc = new jsPDF("landscape" , "px" , "a4" , "false")
    doc.setFont("" , "bold")
    doc.text(60 , 60 , "Course name:" )
    doc.text(60 , 80 , "Price:" )
    doc.text(60 , 100 , "Duration:" )
    doc.setFont("" , "normal")
    doc.text(150 , 60 ,`${course.name}`)
    doc.text(100 , 80 ,`${course.price}`)
    doc.text(140 , 100 ,`${detail[0].duration}`)
    doc.save(`${course.name}.pdf`)
  }
  return (
    <div>
    
      <div  onClick={pdfGenterator} className="flex  mt-5 justify-center">
      <h1 className="text-center text-xl md:text-6xl">Course Details</h1>
      <button className="btn  btn-primary w-36  md:w-52 ml-8">Download Pdf</button>
      </div>
      <div className=" mx-auto mt-8 md:w-96 w-60 bg-base-100 shadow-xl">
        <figure>
          <img src={course.image} className="md:w-full w-44" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course.name}</h2>
          <h1 className="text-center text-xl">Description</h1>
          <p>Duration: {detail[0].duration}</p>
          <p>
            {detail[0].project ? (
              <span>Projects: {detail[0].project}</span>
            ) : (
              <span><small className="text-xl">Subjects</small>: {detail[0].sucject_Cover}</span>
            )}
          </p>
          {detail[0].total_module && (
            <p>Total Module: {detail[0].total_module}</p>
          )}
          <p>Price:{detail[0].price}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/checkout/${course.courseId}`}
              className="btn btn-primary"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
     
      <Footer></Footer>
    </div>
  );
};

export default CourseDetails;


