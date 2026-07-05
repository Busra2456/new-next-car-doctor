import axios from "axios";

 export const getServices = async () =>{
     try{const res =await axios.get('http://localhost:3000/services/api/get-all')
      return res.data;} catch(error){console.log(error);
            return [];
      }
}

 export const getServicesDetails = async (id) =>{
      const res = await fetch(`http://localhost:3000/services/api/${id}`)
      // const data = await res.json();
      const service = res.json()
      return service
      // console.log("API DATA:", data);

      // return data
}