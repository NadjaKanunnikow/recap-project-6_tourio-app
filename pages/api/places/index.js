import Place from "@/db/models/Place";
import dbConnect from "@/db/dbConnect";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const place = await Place.find();

    return response.status(200).json(place);
  }
  if (request.method === "POST") {
    try {
      const placeData = request.body;
      await Place.create(placeData);

      console.log("placedat", placeData);
      response.status(201).json({ status: "Place created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
