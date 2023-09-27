import Place from "@/db/models/Place";
import dbConnect from "@/db/dbConnect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const place = await Place.findById(id);

    if (!place) {
      return response.status(404).json({ status: "Not found" });
    }

    response.status(200).json(place);
  }
  if (request.method === "PUT") {
    const newPlaceData = request.body;
    await Place.findByIdAndUpdate(id, newPlaceData);
    response.status(200).json({ status: `Place ${id} updated!` });
  }
}
