import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  // console.log(course)
  const { detail } = course;
  console.log(detail);
  return (
    <div>
      <h1 className="text-center text-5xl">Course Details</h1>
      <div className=" mx-auto mt-8 w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={course.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course.name}</h2>
          <p>Duration: {detail[0].duration}</p>
          <p>
            {detail[0].project ? (
              <span>Projects: {detail[0].project}</span>
            ) : (
              <span>Subjects: {detail[0].sucject_Cover}</span>
            )}
          </p>
          {detail[0].total_module && (
            <p>Total Module: {detail[0].total_module}</p>
          )}

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
    </div>
  );
};

export default CourseDetails;

{
  /* <span className='text-xl'>Subjects:</span> {detail.map(cd => <ul><li className='text-xl'>{cd.sucject_Cover}</li></ul>)} */
}
