import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";


export const GET = async (request, {params}) =>{
      const db = await connectDB()
      const servicesCollection = db.collection('services')
      try { 
     const service = await servicesCollection.findOne({id : params._id});
     return NextResponse.json({service})  
      } catch (error){
            console.log(error);
      }
}