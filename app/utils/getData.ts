import data from "@/app/data/data.json";

export const getData = async () => {
  try {
    return Promise.resolve(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
