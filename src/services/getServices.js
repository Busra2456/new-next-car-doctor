import axios from "axios";

export const getServices = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    if (!baseUrl) {
      throw new Error("NEXT_PUBLIC_BASE_URL is not configured");
    }

    const res = await axios.get(`${baseUrl}/services/api/get-all`);

    return res.data;
  } catch (error) {
    console.log("Error fetching services:", error);
    return { services: [] };
  }
};

export const getServicesDetails = async (id) => {
  try {
    const res = await fetch(`/services/api/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch service details");
    }

    return await res.json();
  } catch (error) {
    console.log("Error fetching service details:", error);
    return {};
  }
};