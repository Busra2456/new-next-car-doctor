import Image from "next/image";
import Link from "next/link";

const BookingRow = ({booking,
       handleDelete,
      }) => {
       const {_id,date,serviceTitle,price,img,status} = booking;
      return (
          <tr>
            <th>{_id}
            
             
            </th>
            <td>
              
                <div className="avatar">
                  <div className="rounded h-24 w-24">
                     <Image
                                   src={img}
                                    width={50} height={50} 
                                   alt="Shoes"
                                   className="rounded-xl " />
                  </div>
                 
               
               
              </div>
            </td>
            <td>
            {serviceTitle}
              
            </td>
            <td>{date} </td>
            <td>${price} </td>
            <th>
             
              {status === 'confirm' ? <span className="fond-bold text-primary" >Confirmed</span>
              : <button 
            //   onClick={() => handleBookingConfirm(_id)} 

              className="btn btn-ghost text-zinc-700 text-[9px]  btn-xs"> please Confirm</button>}
            </th>
            <th >
             
              <Link href={`/my-bookings/update/${_id}`}><button className="btn-ghost px-6 py-3 text-white font-bold bg-green-600">Edit</button></Link></th>
                <th>
                <button onClick={() =>{handleDelete(_id)}} className="btn-secondary bg-red-800  px-6 py-3 text-white font-bold">Delete</button>
             
              </th>
          </tr>
      );
};

export default BookingRow;