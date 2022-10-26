import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData()
    console.log(course);
    return (
        <div>
              {course.name}
              {course.detail[0].duration}
        </div>
    );
};

export default CheckOut;