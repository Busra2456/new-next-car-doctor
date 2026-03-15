"use client"
import React from 'react';
// import { Link, useLocation, 
//   useNavigate
//  } from 'react-router-dom';
import {BsGithub, BsGoogle} from "react-icons/bs"
import Image from 'next/image';
import img from '../../../public/assets/images/login/login.svg'
import Link from 'next/link';

const page = () => {
//       const { signIn} = useContext(AuthContext);  
//   const location = useLocation();
//   const navigate = useNavigate()
  // console.log(location)

      // const handleLogin = event =>{
      //       event.preventDefault()
      //       const form = event.target;
      //       const email = form.email.value;
      //       const password = form.password.value;
            

      //       signIn(email, password)
      //       .then((result)=>{
      //         const loggedInUser= result.user;
      //         // console.log(loggedInUser);
      //         const user = {email}
      //         // navigate(location?.state ? location?.state : '/')
      //         // ------------------------- get access token --------------------------------
      //         axios.post('https://bd-car-doctor.vercel.app/jwt',user,{
      //         withCredentials: true}
      //       )
      //         .then(res =>{
      //           // console.log(res.data)
      //           if(res.data.success){
      //              navigate(location?.state ? location?.state : '/')
      //           }
      //         })
              

      //       })
      //       .catch(error =>
      //         console.log(error)
      //       )
      // }
      return (
                 <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" mr-12 w-1/2">
      <Image src={img} alt="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-3xl font-bold text-center">Login</h1>
       <form
      //   onSubmit={handleLogin}
        >
             <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          
          <input className="btn bg-[#FF3811] mt-4 text-xl  text-white px-3" type="submit" value="Login" />
        </fieldset>
        </form>
        <div className='text-center'>
            <button className='text-xl px-4 py-2'> <BsGoogle/></button>
            <button className='text-xl px-4 py-2'> <BsGithub/></button>
        </div>
        <p className='my-2 text-center'>New to Car Doctors <Link href="/signup" className='text-[#FF3811] font-bold' >Sign Up</Link></p>
      </div>
    </div>
  </div>
</div>
      );
};

export default page;