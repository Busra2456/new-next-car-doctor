
import { getServices } from "@/services/getServices";
import ServicesCards from "../Cards/ServicesCards";

const Services =async () => {
      const {services} =await getServices();
      // console.log(services)
      //   const [services, setServices] = useState([]);
      //     const [search,setSearch] = useState('')
      // const [asc,setAsc] = useState(true);
     

  

 

     
    
      // useEffect(() =>{
      //       // fetch(`http://localhost:3000/services?sort=${asc?'asc':'desc'}&search=${search}`)
      //       fetch("/services.json")
           
      //       .then(res => res.json())
      //       .then(data => setServices(data))
      // } ,[
      //       // asc,search
      // ])
      

      // const handleSearch = e =>{
      //       e.preventDefault();
      //       const searchText = e.target.search.value ;
      //       // console.log(searchText);
      //       setSearch(searchText);
      // }
      return (
            <div>
                    <div className="text-center mt-4 max-w-2xl mx-auto space-y-2">
                        <h3 className="text-[#FF3811] text-2xl font-bold">Services</h3>
                        <h2 className="text-5xl font-semibold "> Our Service Area</h2>
                        <p className="font-semibold text-zinc-400">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                        

                        {/* <form onSubmit={handleSearch}>
                             <input type="text" name="search" id="" />
                             <input type="submit" value="search" className="btn" />
                        </form>  */}
                  {/* <button 
                        className="btn btn-secondary"
                        onClick={() => setAsc(!asc)}>
                       {asc ?'Price: High to Low':' Price: Low To Hight'}
                        </button> */}
                  </div> 
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                       {/* {
                        services.map((service) => (<ServicesCards key={service._id} services={service} ></ServicesCards>))
                       } */}
                       { services?.length > 0 &&
                        services?.map(service =>(<ServicesCards service={service} key={service._id}></ServicesCards>))
                       }
                  </div>
            </div>
      );
};

//  const services = [
//     {
//         "_id": "635a0c0b64a6d231228942ae",
//         "service_id": "04",
//         "title": "Engine Oil Change",
//         "img": "https://i.ibb.co/T2cpBd5/888.jpg",
//         "price": "20.00",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//         "facility": [
//             {
//                 "name": "Instant Car Services",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "24/7 Quality Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Easy Customer Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Quality Cost Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             }
//         ]
//     },
//     {
//         "_id": "635a0c0b64a6d231228942af",
//         "service_id": "05",
//         "title": "Battery Charge",
//         "img": "https://i.ibb.co/ydCbDN3/5555.jpg",
//         "price": "20.00",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//         "facility": [
//             {
//                 "name": "Instant Car Services",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "24/7 Quality Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Easy Customer Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Quality Cost Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             }
//         ]
//     },
//     {
//         "_id": "635b591a1dafe382a9da8c96",
//         "service_id": "01",
//         "title": "Full car Repair",
//         "img": "https://i.ibb.co/R6Z2nFM/55.jpg",
//         "price": "200.00",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//         "facility": [
//             {
//                 "name": "Instant Car Services",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "24/7 Quality Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Easy Customer Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Quality Cost Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             }
//         ]
//     },
//     {
//         "_id": "635b5afc1dafe382a9da8c98",
//         "service_id": "02",
//         "title": "Engine Repair",
//         "img": "https://i.ibb.co/5MvmD2g/88.jpg",
//         "price": "150.00",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//         "facility": [
//             {
//                 "name": "Instant Car Services",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "24/7 Quality Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Easy Customer Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Quality Cost Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             }
//         ]
//     },
//     {
//         "_id": "635b5b691dafe382a9da8c99",
//         "service_id": "03",
//         "title": "Automatic Services",
//         "img": "https://i.ibb.co/wh7t3N3/555.jpg",
//         "price": "30.00",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//         "facility": [
//             {
//                 "name": "Instant Car Services",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "24/7 Quality Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Easy Customer Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Quality Cost Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             }
//         ]
//     },
//     {
//         "_id": "635b5ba51dafe382a9da8c9a",
//         "service_id": "06",
//         "title": "Electrical System",
//         "img": "https://i.ibb.co/KzCG8qr/8888.jpg",
//         "price": "20.00",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//         "facility": [
//             {
//                 "name": "Instant Car Services",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "24/7 Quality Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Easy Customer Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Quality Cost Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             }
//         ]
//     }
// ]

export default Services;