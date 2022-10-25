import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
     const course = useLoaderData()
    console.log(course)
    const {detail} = course;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{course.name}</h2>
     <p>{detail.map(cd => <small>{cd.price}</small>)}</p>
    <div className="card-actions justify-end">
      <Link to={`/checkout/${course.courseId}`} className="btn btn-primary">Buy Now</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CourseDetails;