"use client"
import Image from 'next/image';
// import { getServicesDetails } from '@/services/getServices';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';
// import {toast } from 'react-toastify';

const page = () => {
       const params = useParams();
                  const id = params.id;
                  const {data} = useSession();
                  const [booking,setBooking] = useState({});
                  const loadBooking = async () =>{
                        const bookingDetail =await fetch(`http://localhost:3000/my-bookings/api/booking/${id}`);
                        const data = await bookingDetail.json();
                        setBooking(data.data);
                       
                          const details = await getServicesDetails(id);
                          setService(details.service);
                      
                         }
                         console.log("kkkkkkkkk",booking)
                  const {_id,title, img, price, } = booking || {};
      
                  const handleUpdateBooking = async (event) =>{
                  event.preventDefault();
                  const form = event.target;
                 
                  const updateBooking = {
                       
                        address : form.address.value,
                        phone : form.phone.value,
                        date : form.date.value,
                       
                       
                  }
                   const resp = await fetch(`http://localhost:3000/my-bookings/api/booking/${id}`,{
                        method:"PATCH",
                        body:JSON.stringify(updateBooking),
                        headers:{
                              "content-type" : "application/json"
                        },
                   },
                   
                  )
                  if(resp.status === 200){
                        toast.success("updated successfully")
                   }
                   const response = await resp?.json()
                   toast.success(response?.message)
                   event.target.reset()
                 
      
            }
      
            useEffect(() => {
                  if (params?.id){
                  loadBooking();}
            },[params?.id])
      return (
               <div>
                                 <div className='container mx-auto'>
                                                  <div className="relative h-72">
                                                     <Image
                                                                    src={img}
                                                                     width={1020} height={1080} 
                                                                    alt="service"
                                             className="absolute h-72 w-full left-0 top-0 object-cover" 
                                             style={{width:"90vw"}}
                                             />
                                                      <div className="absolute h-full left-0 top-0 flex items-center justify-center">
                                                            <h1 className="text-white text-3xl font-bold flex justify-center">
                                                                 Update Booking
                                                                  {title}
                                                            </h1>
                                                      </div>
                              
                                              </div>
                                             <div>
                                                 <form 
                                                 onSubmit={handleUpdateBooking}
                                                 >
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ">
                            
                            
                     <div className=" ">
                    
                      <input type="text" name="name" 
                      defaultValue={data?.user?.name} 
                      className="input w-full" placeholder="Service Name" />
                      
                     </div>
                     <div>
                     
                     <input 
                  //    defaultValue={new Date().toISOString().split("T")[0]}
                  defaultValue={booking.date} 
                     
                     type="date" name="date" className="input w-full" />
                     </div>
                     
                    
                      <div>
                     
                      <input type="text" name="email" className="input w-full"
                       defaultValue={data?.user?.email} 
                       placeholder="email"  />
                      
                      </div>
                      <div>
                     
                      <input type="text"
                       defaultValue={booking.price} 
                       readOnly
                       name='price'
                       className="input w-full" placeholder="Price" />
                     
                      </div>
                       <div className=" ">
                    
                      <input type="text" name="phone" 
                      defaultValue={booking.phone} 
                      className="input w-full" placeholder="Your phone" />
                      
                     </div>
            
                      <div className=" ">
                    
                      <input
                        defaultValue={booking.address} 
                       type="text" name="address" 
                      className="input w-full" placeholder="Your address" />
                      
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

export default page;