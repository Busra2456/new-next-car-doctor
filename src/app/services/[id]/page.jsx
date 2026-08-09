import Image from "next/image";
import Link from "next/link";
import checkout from '../../../../public/assets/images/checkout/checkout.png';

export const metadata = {
      title : "Service Details",
      description : "Service Details Page"
}

const page = async ({params}) => {
      const {id} = await params;
      const res = await fetch(
  `${process.env.NEXT_PUBLIC_BASE_URL}/services/api/${id}`,
  {
    cache: "no-store",
  }
);

if (!res.ok) {
  throw new Error("Service not found"); 
}

const data = await res.json();
const service = data.service;
      
const {_id,title, description,img, price, facility} = service;
      return (
            <div className="w-11/12 mx-auto my-10">
                 
                <div>
                    <div className="relative h-72">
                         <Image
                        className="absolute top-0 left-0 object-cover w-full h-72"
                        src={img}
                        alt="service"
                        width={1920}
                        height={1080}
                        style={{width: "90vw"}}
                        />
                     
                        <div className="absolute top-0 left-0 flex items-center justify-center h-full">
                              <h1 className="flex justify-center text-3xl font-bold text-white">
                                   Details of {title}
                              </h1>
                        </div>

                </div>
                <div className="p-10 bg-gray-100">
                  <h2 className="text-3xl font-bold text-orange-600">{title}</h2>
                  <p>{description}</p>
                </div>

                </div>
                <div className="my-6">
                  <div className="grid grid-cols-3 gap-6">
                        <div className="grid grid-cols-2 col-span-2 gap-6">
                              {facility?.map((item,index)=>(
                                    <div className="p-4 border-t-4 bg-rose-100 border-t-red-500 rounded-xl" key={index}
                                    >
                                          <h2 className="text-xl font-bold">{item?.name}</h2>
                                          <p>{item?.details}</p>

                                    </div>
                                     ))}

                        </div>
                        <div className="p-6 ">
                              <Image className="object-cover h-40" src={checkout} 
                                alt="service"
                                width={500}
                                height={500}
                                style={{width: "90vw"}}/>
                              <div className="flex my-4">
                                    <h2 className="text-xl font-bold ">Price</h2>
                                    <p className="text-2xl text-rose-500">${price}</p>
                              </div>
                              <Link href={`/checkouts/${_id}`} >
                              <button className="w-full px-3 py-2 mt-2 rounded-lg bg-rose-500">Check out</button>
                              </Link>
                        </div>
                  </div>

                </div>
            </div>
          
      );
};

export default page;