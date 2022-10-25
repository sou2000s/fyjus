import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData()
    console.log(course);
    return (
        <div>
              {course.name}
        </div>
    );
};

export default CheckOut;