import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({course}) => {
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{course.name}</h2>
    <p>{course.courseId}</p>
    <div className="card-actions justify-end">
      <Link to={`/courseDetails/${course.courseId}`} className="btn btn-primary">Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;