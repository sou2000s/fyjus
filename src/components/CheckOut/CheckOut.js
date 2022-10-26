import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData()
    console.log(course);
    return (
        <div className='text-center border-2 my-32 '>
              
              <p className='text-xl '>Course Name:{course.name}</p>
             <p className='text-xl mt-12'>Total Rs: {course.detail[0].price}$</p>
             <button className='btn btn-primary mt-12'>Pay</button>
        </div>
    );
};

export default CheckOut;