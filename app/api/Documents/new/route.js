import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import documents from "@/models/documents";

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get("document");

    if (!file) {
      return NextResponse.json({ success: false, message: "No file uploaded" });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = `public/uploads/${Date.now()}-${file.name}`;
    await writeFile(path, buffer);

    await connectToDB();

    const newDocument = new documents({
      name: data.get("name"),
      ID: data.get("ID"),
      grade: data.get("grade"),
      institution: data.get("institution"),
      status: data.get("status"),
      date: data.get("date"),
      owner: data.get("owner"),
      about: data.get("about"),
      ownerSub: data.get("ownerSub"),
      document: path,
    });

    await newDocument.save();

    return NextResponse.json({
      success: true,
      message: "File uploaded and data saved successfully",
      data: newDocument,
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
