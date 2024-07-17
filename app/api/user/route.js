import { connectToDB } from "@/utils/database";
import User from "@/models/users";

export const GET = async (req) => {
  try {
    await connectToDB();
    const user = await User.find();
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch the data", error);
    return new Response(
      JSON.stringify({ message: "Failed to fetch the data" }),
      { status: 500 }
    );
  }
};
