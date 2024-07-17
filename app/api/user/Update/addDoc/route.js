import { connectToDB } from "@/utils/database";
import User from "@/models/users";
export const PATCH = async (request) => {
  try {
    const data = await request.json();
    await connectToDB();
    const user = await User.findOneAndUpdate(
      { email: data.owner },
      { $push: { Documents: data.Documents } }
    )
      .select("+password")
      .exec();
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 401,
      });
    }
    return new Response(
      JSON.stringify({ message: "Document added successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Database error:", error);
    return new Response(JSON.stringify({ message: "Failed to add document" }), {
      status: 500,
    });
  }
};
