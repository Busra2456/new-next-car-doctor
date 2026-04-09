"use client"
import Image from 'next/image';
import Link from "next/link";
import logo from "../../../../public/assets/logo.svg"
import { FiShoppingCart } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import React from 'react';
import { signOut, useSession } from 'next-auth/react';

//   const {user,  logOut} = useContext(AuthContext);
//   const handleLogOut = () =>{
//     logOut()
//     .then(() =>{

//     })
//     .catch(error => console.log(error))
//   }


      const navItems = [
        {
          title : "Home",
          path : "/"
        },
          {
          title : "About",
          path : "/about"
        },
          {
          title : "Services",
          path : "/services"
        },
          {
          title : "Blog",
          path : "/blog"
        },
         {
          title : "Contacts",
          path : "/contacts"
        },
      ]
      
      // <>
       {/* <li><Link to={'/'}>Home</Link></li>
       <li><Link to={'/About'}>About</Link></li>
       {user?.email? <>
        <li><Link to={'/bookings'}>My Bookings</Link></li>
        <li><button
      //    onClick={handleLogOut}
         >Log Out</button></li>
       
       </> 
       
       :<li><Link to={'/Login'}>Login</Link></li>} */}
      {/* </> */}
const Navbar = () => {
  // const { data: session } = useSession();
  const { data: session, status } = useSession();
  console.log(session)
      return (
        
            <div className="navbar mt-5 bg-base-100 max-w-7xl h-28 mb-4 container mx-auto">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold hover:text-pink-800 duration-300">
                 {/* <div className='flex items-center space-x-6'> */}
                {
                  navItems.map((item) =>(
                    <Link className='font-semibold hover:text-pink-950' href={item.path} key={item.path}>{item.title}</Link>
                  ))
                }
              {/* </div> */}
                </ul>
                 
              </div>
              <Link href="/"
               className=" text-xl "><Image src={logo} alt="logo" width={80} height={40} /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              {/* <ul className="menu menu-horizontal px-1">
            {NavItems}

              </ul> */}
              <div className='flex items-center space-x-6'>
                {
                  navItems.map((item) =>(
                    <Link className='font-semibold hover:text-pink-800 duration-300' href={item.path} key={item.path}>{item.title}</Link>
                  ))
                }
              </div>
            </div>
            <div className="navbar-end">
              <div className='flex space-x-3 items-center'>
              <FiShoppingCart className='text-2xl'/>
              <IoMdSearch  className='text-2xl'/>
            <button className="btn btn-outline text-[#FF3811] btn-warning border-[#FF3811] text-[10px]">Appointment</button>
{/* 
            {status === "authenticated" && (
  <Image
    alt="user"
    className="rounded-full border-[2px] border-[#FF3811]"
    src={session?.user?.image || "/default-user.png"}
    width={40}
    height={40}
  />
)} */}

           { status === 'authenticated'  &&  <div>
              <Image alt="" className='rounded-full border-[2px] border-[#FF3811]' src={session?.user?.image} height={24} width={24}/> 
            </div> }

            {
              status === 'loading' && <h6>Loading...</h6>
            }
          { status === 'unauthenticated' && <Link href={"/login"}>
            <button className='btn btn-outline text-white bg-[#FF3811]'>Login</button></Link> }
           {status === 'authenticated' && <button onClick={() => signOut()} className='btn btn-outline text-white bg-[#FF3811]'>Logout</button>
            }
            </div>
            </div>
          </div>
      );
};

export default Navbar;