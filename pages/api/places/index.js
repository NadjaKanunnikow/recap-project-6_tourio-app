import Place from "@/db/models/Place";
import dbConnect from "@/db/dbConnect";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const place = await Place.find();

    return response.status(200).json(place);
  }
}
