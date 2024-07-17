import { connectToDB } from "@/utils/database";
import User from "@/models/users";

export const POST = async (request) => {
  try {
    const data = await request.json();

    await connectToDB();

    const user = await User.findOne({ email: data.email })
      .select("+password")
      .exec();
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 401,
      });
    }

    const match = user.password === data.password;
    const type = user.type === data.type;
    if (!match || !type) {
      return new Response(JSON.stringify({ message: "Password incorrect" }), {
        status: 401,
      });
    }

    return new Response(JSON.stringify({ message: "Login successful" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Database error:", error);
    return new Response(JSON.stringify({ message: "Failed to login" }), {
      status: 500,
    });
  }
};
