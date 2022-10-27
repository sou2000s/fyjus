import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import {FcGoogle  } from "react-icons/fc";
import {BsGithub} from "react-icons/bs" 
import { useState } from 'react';
import toast from 'react-hot-toast';
const Login = () => {
    const [errors , setErrors]  = useState()
    const [email , setEmail] = useState("")
    const {handleGoogleAuthantiCation ,handleGithubAuthenTication ,user, passwordReset,login} = useContext(AuthContext)
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
        // console.log(res.user);
        toast.success("login success full")
        navigate(from, { replace: true })
      setErrors("")}
         )
    .catch(error => setErrors(error.message))
   } 


    // google auth
    const handleGoogleLogin = () => {
        handleGoogleAuthantiCation()
        .then(res => {
        
            navigate(from, { replace: true })
        })
        .catch(error =>setErrors(error.message))
    }

    // git hub
     
    const handleGitHubLogin = () =>{
      handleGithubAuthenTication()
      .then(()=>{ navigate(from, { replace: true })})
      .catch(error =>setErrors(error.message))
    }

    const handlePasswordReset = () => {
      passwordReset(email)
      .then(()=>{
        toast.success("a email sned to your email , Please check")
      })
      .catch(error => setErrors(error.message))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} name='email' className="input input-bordered"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <Link  className="label-text-alt link link-hover" onClick={handlePasswordReset}>Forgot password?</Link>
            
            <p  className="label-text-alt ml-7 link link-hover">Dont have Account? <Link to='/register'>Register</Link> </p>
          </label>
          <p className='text-red-700'>{errors}</p>
        </div>
        <div className='flex justify-center'>
        <FcGoogle onClick={handleGoogleLogin} className=" text-2xl"/>
        <BsGithub onClick={handleGitHubLogin} className=" text-2xl ml-4"/>
        </div>
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