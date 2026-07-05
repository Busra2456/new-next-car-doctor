"use client"
import React from 'react';
import Image from 'next/image';
import img from '../../../public/assets/images/login/login.svg'
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import SocialSignin from '../components/Shared/SocialSignin';
import { useRouter} from 'next/navigation';

const page = () => {
          const router = useRouter();
const { data: session, status } = useSession();          // const { session } = useSession();
          // const searchParams = useSearchParams();
          // const path = searchParams.get('redirect')
            const handleLogin = async (event) =>{
            event.preventDefault()
            const email = event.target.email.value;
            const password =event.target.password.value;
            const resp = await signIn('credentials',{
              email, 
              password, 
              redirect : false,
              callbackUrl :'/',
            });
          //  if(resp.status === 200){
          //          router.push('/')
          //     }
             if (resp?.ok) {
  router.push("/");
}

         
      }
      return (
                 <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row">
    <div className="w-1/2 mr-12 ">
      <Image src={img} alt="" />
    </div>
    <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
      <div className="card-body">
      <h1 className="text-3xl font-bold text-center">Login</h1>
       <form
        onSubmit={handleLogin}
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
        <SocialSignin/>
      
        <p className='my-2 text-center'>New to Car Doctors <Link href="/signup" className='text-[#FF3811] font-bold' >Sign Up</Link></p>
      </div>
    </div>
  </div>
</div>
      );
};

export default page;