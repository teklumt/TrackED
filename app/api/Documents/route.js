import { connectToDB } from "@/utils/database";
import Documents from "@/models/documents";

export const GET = async (request) => {
  try {
    await connectToDB();

    const documents = await Documents.find().exec();
    return new Response(JSON.stringify(documents), {
      status: 200,
    });
  } catch (error) {
    console.error("Database error:", error);
    return new Response(JSON.stringify({ message: "Failed to fetch data" }), {
      status: 500,
    });
  }
};
