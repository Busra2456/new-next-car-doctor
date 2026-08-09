import { connectDB } from "@/lib/connectDB";
import ServicesCards from "../Cards/ServicesCards";

const Services = async () => {
  const db = await connectDB();
  const servicesCollection = db.collection("services");

  let services = [];

  try {
    services = await servicesCollection.find().toArray();
  } catch (error) {
    console.log("Error fetching services:", error);
  }

  return (
    <div>
      <div className="max-w-2xl mx-auto mt-4 space-y-2 text-center">
        <h3 className="text-[#FF3811] text-2xl font-bold">
          Services
        </h3>

        <h2 className="text-5xl font-semibold">
          Our Service Area
        </h2>

        <p className="font-semibold text-zinc-400">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.length > 0 &&
          services.map((service) => (
            <ServicesCards
              service={service}
              key={service._id.toString()}
            />
          ))}
      </div>
    </div>
  );
};

export default Services;