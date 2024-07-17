import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import User from "@/models/users";

export async function POST(request) {
  const data = await request.formData();
  const file = data.get("photo");

  if (!file) {
    return NextResponse.json({ success: false, message: "No file uploaded" });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = `public/uploads/${Date.now()}-${file.name}`;
  await writeFile(path, buffer);

  try {
    await connectToDB();

    const newUser = new User({
      fname: data.get("fname"),
      lname: data.get("lname"),
      email: data.get("email"),
      password: data.get("password"),
      ID: data.get("ID"),
      type: data.get("type"),
      photo: path,
      subscrbition: data.get("subscrbition"),
    });

    await newUser.save();

    return NextResponse.json({
      success: true,
      message: "File uploaded and data saved successfully",
      data: newUser,
    });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to save data",
      details: error.message,
    });
  }
}
