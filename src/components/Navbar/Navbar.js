import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-orange-500 text-white  md:flex justify-around'> 
             <div className='flex'>
                <h1>Name</h1>
                <h1 className='ml-5'>logo</h1>
             </div>
            
            <ul>

            <Link to='/'>Home</Link>
            <Link className='ml-3' to='/course'>Course</Link>
            <Link className='ml-3' to='/register'>Register</Link>
            <Link className='ml-3' to='/login'>Login</Link>
            </ul> 
        </div>
    );
};

export default Navbar;