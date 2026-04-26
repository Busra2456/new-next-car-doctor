 
import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, context) => {
  try {
    const params = await context.params;
    const { id } = params;

    const db = await connectDB();
    const servicesCollection = db.collection("services");

    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid ID" },
        { status: 400 }
      );
    }

    const service = await servicesCollection.findOne({
      _id: id,
    });

    if (!service) {
      return NextResponse.json(
        { message: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ service }, { status: 200 });

  } catch (error) {
    console.error("ERROR:", error);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
};
