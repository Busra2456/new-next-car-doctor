// import { MongoClient, ServerApiVersion } from "mongodb";

// let db
// export const connectDB = async () =>{
//   if(db) return db;
//   try{
//             const uri = process.env.MONGODB_URI;
//             const client = new MongoClient(uri,{
//                   serverApi:{
//                         version:ServerApiVersion.v1,
//                         strict: true,
//                         deprecationErrors: true,
//                   }
//             });
//                await client.connect();
//             db = client.db('car-doctor')
//             return db;
//       } catch (error){
//       console.log(error)
//   }
// }
import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDB = async () => {
  if (db) return db;

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }

  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();

    db = client.db("car-doctor");

    console.log("MongoDB connected successfully");

    return db;
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
};