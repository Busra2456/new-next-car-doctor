import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";


export const GET = async (request, context ) =>{
      const params = await context.params;
  const email = params.email;
      const db = await connectDB()
      const bookingsCollection = db.collection('bookings')
      try { 
     const myBookings = await bookingsCollection.find({email : email}).toArray();
     return NextResponse.json({myBookings})  
      } catch (error){
            console.log(error);
      }
}