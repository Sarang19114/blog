import connectToDB from "@/database";
import Blog from "@/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

// Joi schema for validating the input
const AddNewBlogSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function POST(req) {
  try {
    // Connect to the database
    await connectToDB();

    // Extract blog data from the request body (ensure correct destructuring)
    const { title, description } = await req.json(); // Correct object destructuring

    // Validate the data with Joi
    const { error } = AddNewBlogSchema.validate({ title, description });
    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message, // Return validation error message
      });
    }

    // Create the new blog in the database
    const newlyCreatedBlogItem = await Blog.create({ title, description });

    if (newlyCreatedBlogItem) {
      return NextResponse.json({
        success: true,
        message: "Blog item created successfully!",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to create blog item. Please try again.",
      });
    }
  } catch (error) {
    console.log("Error in creating blog:", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
}
