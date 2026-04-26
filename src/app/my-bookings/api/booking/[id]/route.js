import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request,context) =>{
      const {params} = context;
      const {id} = await params;
      const db = await connectDB();
      const bookingsCollection = db.collection("bookings");
      try{ 
            const resp = await bookingsCollection.deleteOne({_id: new ObjectId(id)});
      return NextResponse.json({message: "deleted the booking",response : resp})

      } catch(error){
                  return NextResponse.json({message: "Something went wrong"})

      }
}

export const PATCH = async (request,context) =>{
      const {params} = context;
      const {id} = await params;
      const db = await connectDB();
      const bookingsCollection = db.collection("bookings");
      const updateDoc = await request.json();
      try{ 
            const resp = await bookingsCollection.updateOne(
                  {_id: new ObjectId(id)},
                  {
                        $set:{
                              ...updateDoc
                        },
                  },
                  {
                        upsert: true
                  }
            );
      return NextResponse.json({message: "Updated the booking",response : resp})

      } catch(error){
                  return NextResponse.json({message: "Something went wrong"})

      }
}

export const GET = async (request,context) =>{
      const {params} = context;
      const {id} = await params;
      const db = await connectDB();
      const bookingsCollection = db.collection("bookings");
      try{ 
            const resp = await bookingsCollection.findOne({_id: new ObjectId(id)});
      return NextResponse.json({message: "booking found",data : resp})

      } catch(error){
                  return NextResponse.json({message: "Something went wrong"})

      }
}