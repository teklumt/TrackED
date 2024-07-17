import { connectToDB } from "@/utils/database";
import Documents from "@/models/documents";

export const POST = async (request) => {
  try {
    await connectToDB();

    const { _id, status } = await request.json();
    const documents = await Documents.findOne({ _id }).exec();
    documents.status = status;
    await documents.save();

    return new Response(JSON.stringify(documents), {
      status: 200,
    });
  } catch (error) {
    console.error("Database error:", error);
    return new Response(JSON.stringify({ message: "Failed to update data" }), {
      status: 500,
    });
  }
};
