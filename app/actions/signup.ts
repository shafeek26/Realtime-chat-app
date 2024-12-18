"use server";
import User from "@/models/users.models";
import { connectDB } from "@/Database/db.connect";
import bcrypt from "bcryptjs";

export const signup = async (formData: { email: string; password: string }) => {
  connectDB();
  try {
    const { email, password } = formData;
    // Normalize email to lowercase to ensure consistent comparison
    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await User.findOne({
      email: { $regex: new RegExp(`^${normalizedEmail}$`, "i") },
    });

    if (existingUser) {
      return {
        success: false,
        error: "An account with this email already exists"
      };
    }

    // password hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    // creating user in the database

    const user = await User.create({
      email,
      password: hashedPassword,
    });

    return {
      success: true,
      message: "Account created successfully. You can now log in.",
      user: {
        id: user._id.toString(),
        email: user.email
      }
    };
  } catch (error) {
    console.error("Signup error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred"
    };
  }
};
