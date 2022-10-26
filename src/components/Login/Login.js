import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import {FcGoogle} from "react-icons/fc"
import { useState } from 'react';
const Login = () => {
    const [errors , setErrors]  = useState()
    const {handleGoogleAuthantiCation , login} = useContext(AuthContext)
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"  
    const navigate = useNavigate()

//   email , password auth
   const  handleLogin = e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email , password);

    login(email , password) 
    .then(res =>
      
      { form.reset()
        navigate(from, { replace: true })
      setErrors("")}
         )
    .catch(error => setErrors(error.message))
   } 


    // google auth
    const handleGoogleLogin = () => {
        handleGoogleAuthantiCation()
        .then(res => {
            console.log(res.user);
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <Link  className="label-text-alt link link-hover">Forgot password?</Link>
            <p  className="label-text-alt ml-7 link link-hover">Dont have Account? <Link to='/register'>Register</Link> </p>
          </label>
          <p className='text-red-700'>{errors}</p>
        </div>
        <FcGoogle onClick={handleGoogleLogin}></FcGoogle>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;