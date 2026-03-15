// npm install bcrypt
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
export const POST = async (request) =>{
      // const newUser = await request.json();
      try{
              const newUser = await request.json();
            const db = await connectDB();
            const userCollection = db.collection('users')
            const exist = await userCollection.findOne({email : newUser.email})
            if(exist){
                  return NextResponse.json(
                        {message : "User Exists"},{status : 409})
            }
            const hashedPassword = bcrypt.hashSync(newUser.password, 10);
            const resp = await userCollection.insertOne({...newUser,password: hashedPassword})
            console.log("Inserted:", resp);
            return NextResponse.json({message : "user created"},{status : 200})
      } catch (error){
             return NextResponse.json({message : "Something Went Wrong", error},{status : 500})

      }
}

