import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';

const CheckOut = () => {
    const course = useLoaderData()
    console.log(course);
    const handlePayment = () => {
        toast.success("payment done")
    }
    return (
        <div className='text-center border-2 my-32 '>
              
              <p className='text-xl '>Course Name:{course.name}</p>
             <p className='text-xl mt-12'>Total Rs: {course.detail[0].price}$</p>
             <button className='btn btn-primary mt-12' onClick={handlePayment}>Pay</button>

             <Footer></Footer>
        </div>
    );
};

export default CheckOut;