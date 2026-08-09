"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import BookingRow from '../components/BookingRow';

const page = () => {
         
      //  const params = useParams();
      //             const id = params.id;
      const [bookings,setBookings] = useState([])
                  const session = useSession();
               const loadData = async () => {
  if (!session?.data?.user?.email) return;

  const resp = await fetch(
    `/my-bookings/api/${session.data.user.email}`
  );

  const data = await resp.json();
  setBookings(data?.myBookings || []);
};
                        //  console.log(data)

                         const handleDelete = async (id) => {
            const deleted = await fetch(
  `/my-bookings/api/booking/${id}`,
  {
    method: "DELETE",
  }
);
             const resp = await deleted.json();
            
          
            if( resp?.response?.deletedCount > 0){
                loadData()     
            }
             
           
            }
                        useEffect(() => {
  loadData();
}, [session?.data?.user?.email]);
      return (
            <div className='container mx-auto'>
                 <div className="relative h-72">
                                        <Image
                                        className="absolute top-0 left-0 object-cover w-full h-72"
                                        src={"/assets/images/about_us/parts.jpg"}
                                        alt="service"
                                        width={1920}
                                        height={1080}
                                        style={{width: "90vw"}}
                                        />
                                        <div className="absolute top-0 left-0 flex items-center justify-center h-full">
                                              <h1 className="flex justify-center text-3xl font-bold text-white">
                                                   My Bookings
                                              </h1>
                                        </div>
                
                                </div>
                                 <div>
                  {/* <h2 className="text-5xl">your bookings: {bookings.length} </h2> */}

                  <div className="overflow-x-auto">
  <table className="table">
  <thead>
  <tr>
        <th>
        <label>
                <input type="checkbox" className="checkbox" />
              </label>
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
  
  
      
    {
     bookings.map(booking => <BookingRow
     key={booking._id}
     booking={booking}
     handleDelete={handleDelete}
//      handleBookingConfirm ={handleBookingConfirm}
     ></BookingRow>)
   }
     
      
    
    
  
      </thead>
  </table>
</div>
            </div>
            </div>
      );
};

export default page;