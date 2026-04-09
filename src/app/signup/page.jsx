"use client"
import React from 'react';

import {BsGithub, BsGoogle} from "react-icons/bs"
import Image from 'next/image';
import img from '../../../public/assets/images/login/login.svg'
import Link from 'next/link';

const page = () => {


      const handleSignUp =async (event)=>{
            event.preventDefault();
            const newUser = {
              name :event.target.name.value,
              email :event.target.email.value,
              password :event.target.password.value,

            };
            // console.log(newUser)
             const resp = await fetch("http://localhost:3000/signup/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
  });
  //  const data = await resp.json();
  // console.log(resp);
  if(resp.status === 200){
    event.target.reset()
  }
            
          }
      return (
             <div className="hero bg-base-200 min-h-screen">
           <div className="hero-content flex-col lg:flex-row">
             <div className=" mr-12 w-1/2">
               <Image src={img} alt="" />
             </div>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
               <div className="card-body">
               <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handleSignUp}>
                      <fieldset className="fieldset">
                   <label className="label">Name</label>
                   <input type="name" name='name' className="input" placeholder="Name" />

                   <label className="label">Email</label>
                   <input type="email" name='email' className="input" placeholder="Email" />
                   <label className="label">Confirm Password</label>
                   <input type="password" name='password' className="input" placeholder="Password" />
                   <div><a className="link link-hover">Forgot password?</a></div>
                   
                   <input className="btn bg-[#FF3811] mt-4 text-xl  text-white px-3" type="submit" value="Sign Up" />
                 </fieldset>
                 </form>
                  <div className='text-center'>
                             <button className='text-xl px-4 py-2'> <BsGoogle/></button>
                             <button className='text-xl px-4 py-2'> <BsGithub/></button>
                         </div>
                 <p className='my-4 text-center '>Already Have an Account<Link href="/login" className='text-[#FF3811] font-bold ml-2' >Login</Link></p>
               </div>
             </div>
           </div>
         </div>
      );
};

export default page;