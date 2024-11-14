import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

// Register Function

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate input fields
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required. Please check your input.",
        success: false,
      });
    }

    // Check if the email is already registered
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "Email is already in use. Please try a different one.",
        success: false,
      });
    }

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Account created successfully.",
      success: true,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({
      message:
        "An error occurred while creating the account. Please try again.",
      success: false,
    });
  }
};

// Login Function

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
        success: false,
      });
    }

    // Check if the user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found. Please check your email.",
        success: false,
      });
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid credentials. Please check your email or password.",
        success: false,
      });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    // Set the token as an HTTP-only cookie
    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        sameSite: "lax",
      })
      .status(200)
      .json({
        message: "Login successful!",
        success: true,
      });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({
      message: "An error occurred during login. Please try again later.",
      success: false,
    });
  }
};

// Logout Function
export const logout = async (req, res) => {
  try {
    // Clear the authentication cookie
    return res
      .clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      })
      .status(200)
      .json({
        message: "Logout successful!",
        success: true,
      });
  } catch (error) {
    console.error("Error during logout:", error);
    return res.status(500).json({
      message: "An error occurred during logout. Please try again later.",
      success: false,
    });
  }
};


export const getUser = async (req, res) => {
  try {
    const token = req.cookies.token; // Extract token from cookies

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized access. No token provided.",
        success: false,
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await UserModel.findById(decoded.id).select("-password"); // Exclude the password field

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
        success: false,
      });
    }

    return res.status(200).json({
      message: "User details fetched successfully.",
      success: true,
      user,
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
    return res.status(500).json({
      message: "An error occurred while fetching user details.",
      success: false,
    });
  }
};