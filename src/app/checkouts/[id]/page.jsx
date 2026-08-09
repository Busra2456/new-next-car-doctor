"use client"

import Image from 'next/image';
import { getServicesDetails } from '@/services/getServices';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import {toast } from 'react-toastify';


const checkout = () => {
      const params = useParams();
            const id = params.id;
            const {data} = useSession();
            const [service,setService] = useState({});
            const loadService = async () =>{
                 
                    const details = await getServicesDetails(id);
                    setService(details.service);
                
                   }
            const {_id,title, img, price, } = service || {};

            const handleBooking =async (event) =>{
            event.preventDefault();
            const form = event.target;
           
            const newBooking = {
                  email : data?.user?.email,
                  name : data?.user?.name,
                  address : form.address.value,
                  phone : form.phone.value,
                  date : form.date.value,
                  serviceID : _id,
                  serviceTitle : title,
                  price : price,
                  img :img
                 
            }
            const resp = await fetch('/checkouts/api/new-booking', {
  method: "POST",
  body: JSON.stringify(newBooking),
  headers: {
    "content-type": "application/json",
  },
});

const response = await resp.json();
if (resp.ok) {
  toast.success(response?.message || "Booking created successfully");
  event.target.reset();
} else {
  toast.error(response?.message || "Booking failed");
}



           

      }

      useEffect(() => {
            if (params?.id){
            loadService();}
      },[params?.id])
      return (
            <div>
                     <div className='container mx-auto'>
                                      <div className="relative h-72">
                                         <Image
                                                        src={img}
                                                         width={1020} height={1080} 
                                                        alt="service"
                                 className="absolute top-0 left-0 object-cover w-full h-72" 
                                 style={{width:"90vw"}}
                                 />
                                          <div className="absolute top-0 left-0 flex items-center justify-center h-full">
                                                <h1 className="flex justify-center text-3xl font-bold text-white">
                                                     Checkout {title}
                                                </h1>
                                          </div>
                  
                                  </div>
                                 <div>
                                     <form 
                                     onSubmit={handleBooking}
                                     >
                  <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 ">
                
                
         <div className="">
        
          <input type="text" name="name" 
          defaultValue={data?.user?.name} 
          className="w-full input" placeholder="Service Name" />
          
         </div>
         <div>
         
         <input defaultValue={new Date().toISOString().split("T")[0]} type="date" name="date" className="w-full input" />
         </div>
         
        
          <div>
         
          <input type="text" name="email" className="w-full input"
           defaultValue={data?.user?.email} 
           placeholder="email"  />
          
          </div>
          <div>
         
          <input type="text"
           defaultValue={price} 
           readOnly
           name='price'
           className="w-full input" placeholder="Price" />
         
          </div>
           <div className="">
        
          <input type="text" name="phone" 
          className="w-full input" placeholder="Your phone" />
          
         </div>

          <div className="">
        
          <input type="text" name="address" 
          className="w-full input" placeholder="Your address" />
          
         </div>
        
        
      </div>
      
      <div className="my-6">
            <input  className="btn btn-neutral bg-[#FF3811]  border-[#FF3811] w-full" type="submit" value="Order Confirm" />
      </div>
                
                  </form>
                                 </div>
                  
                                  </div>
                  
            </div>
      );
};

export default checkout;