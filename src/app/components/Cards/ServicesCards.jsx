// "use client"
import Image from 'next/image';
// import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
const ServicesCards = ({service}) => {
            const {_id, title, img, price} = service || {};

      return (
              <div className="card shadow-sm">
            <figure className="px-10 pt-10">
              <Image
                src={img}
                 width={400} height={400} 
                alt="Shoes"
                className="rounded-xl " />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-[16px] font-bold">{title}</h2>
            
             <div className="flex items-center"> <p className="text-[#FF3811] text-[11px] font-semibold">Price: {price}</p>
             {/* <Link> */}
              <FaArrowRight className="text-[#FF3811] text-[10px] font-semibold"></FaArrowRight>
              {/* </Link> */}
            </div>
             
            </div>
          </div>
      );
};

export default ServicesCards;


