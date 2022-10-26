import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
  const {logOut , user} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }

    return (
        <div className='bg-orange-500 text-white  md:flex justify-around'> 
             <div className='flex'>
                <h1>Name</h1>
                <h1 className='ml-5'>logo</h1>
             </div>
            
            <ul>

            <Link to='/'>Home</Link>
            <Link className='ml-3' to='/course'>Course</Link>
            {
              user?.uid ?    <Link className='ml-3' onClick={handleLogOut}>Log Out</Link> 
              :  
            <>
            <Link className='ml-3' to='/register'>Register</Link>
            <Link className='ml-3' to='/login'>Login</Link>
            </>
            }
            <Link className='ml-3'>Blog</Link>
            <Link className='ml-3'>FAQ</Link>
           
           
            
               {
                user?.email && <p>{user.email}</p>
               }
            </ul> 
        </div>
    );
};

export default Navbar;