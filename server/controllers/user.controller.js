import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(401).json({
        message: "Something is missing, Please check!",
        success: false,
      });
    }

    const userEmail = await UserModel.findOne({ email });
    if (userEmail) {
      return res.status(401).json({
        message: "Try different email!",
        success: false,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    await UserModel.create({
      username,
      email,
      password: hashPassword,
    });

    return res.status(201).json({
      message: "Account created successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required!",
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials. Please check your email or password.",
        success: false,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid credentials. Please check your email or password.",
        success: false,
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60 * 1000,
        sameSite: "strict",
      })
      .status(200)
      .json({
        message: "Login successful!",
        success: true,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred. Please try again later.",
      success: false,
    });
  }
};
