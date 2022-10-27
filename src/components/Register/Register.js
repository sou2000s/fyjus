import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import {FcGoogle }  from "react-icons/fc";
import {AiFillGithub} from "react-icons/ai"
import { useState } from 'react';
import toast from 'react-hot-toast';
const Register = () => {
 const {createUser , handleGoogleAuthantiCation , handleGithubAuthenTication , setUserProfile,userNameAndPhoto} = useContext(AuthContext);
 const navigate = useNavigate();
 const [error ,setErorr] = useState("")
//    function
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const PhotoURL = form.PhotoURL.value;
        // console.log(name , email , password , PhotoURL);
        

        createUser(email,password)
        .then(res => {
            console.log(res.user);
            hansleUserNameAndPhoto(name , PhotoURL)
            
             
              // setUserProfile(name  , PhotoURL)
              toast.success(`welcome ${name}`  )
              setErorr("")
              navigate('/')
              
            
        }) 
        .catch(error => setErorr(error.message))
    }
  
 const hansleUserNameAndPhoto = (name  , photoURL) => {
  const profile = {
    displayName: name,
    photoURL: photoURL,
  }
   userNameAndPhoto(profile)
   .then((res)=>{
    // console.log(res.user)
    setUserProfile(profile)      
  })
   .catch(error => console.error(error))
 }

  //  google sign up 
   const handleGoogleSignUp = () => {
    handleGoogleAuthantiCation()
    .then(()=>{navigate('/')})
    .catch( error =>setErorr(error.message) )

   }

   const handleGithubSignUp = () => {
    handleGithubAuthenTication()
    .then(()=>{navigate('/')})
    .catch(error => setErorr(error.message))
   }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" placeholder="PhotoURL" name='PhotoURL' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email"  name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
           
            <Link  className="label-text-alt link link-hover" to="/login">Allready have accout?Login</Link>
          </label>
          <p className='text-red-700'>{error}</p>
        </div>
        <div className='flex  justify-center hover:cursor-pointer'>
         <FcGoogle onClick={handleGoogleSignUp} className='mr-3 text-2xl'></FcGoogle>
        <AiFillGithub onClick={handleGithubSignUp} className='ml-3  text-2xl'></AiFillGithub>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Register</button>
        </div>

      </form>
    </div>
  </div>
</div>

    );
};

export default Register;