import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { User, Mail, Lock, Key, Eye, EyeOff } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
// import { Link } from "react-router-dom";

axios.defaults.withCredentials = true; 

const Signup = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    passwordVisible: false,
    confirmPasswordVisible: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (values) => {
    const { name, email, password } = values;

    try {
      const response = await axios.post("http://localhost:8000/api/auth/register", {
        username: name,
        email,
        password,
      });

      if (response.data.success) {
        toast({
          title: "Success",
          description: "Registration successful!",
          variant: "success",
        });
        // Optionally reset the form or redirect
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: error.response?.data?.message || "Registration failed!",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-secondary to-primary p-4">
      <div className="w-full max-w-md shadow-lg rounded-lg bg-white p-8">
        <h2 className="text-2xl font-heading font-bold text-primary mb-6" aria-label="Sign Up">
          Sign Up
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {/* Name Field */}
              <div className="mb-4 relative">
                <label htmlFor="name" className="block text-background-foreground">Name</label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter your name"
                  aria-label="Name"
                />
                <User className="absolute left-3 top-9 w-5 h-5 text-gray-400" />
                <ErrorMessage name="name" component="div" className="text-red-500" />
              </div>

              {/* Email Field */}
              <div className="mb-4 relative">
                <label htmlFor="email" className="block text-background-foreground">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter your email"
                  aria-label="Email"
                />
                <Mail className="absolute left-3 top-9 w-5 h-5 text-gray-400" />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>

              {/* Password Field */}
              <div className="mb-4 relative">
                <label htmlFor="password" className="block text-background-foreground">Password</label>
                <div className="flex items-center">
                  <Field
                    type={values.passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Enter your password"
                    aria-label="Password"
                  />
                  <div
                    onClick={() => setFieldValue("passwordVisible", !values.passwordVisible)}
                    className="absolute right-3 top-9 cursor-pointer"
                    aria-label={values.passwordVisible ? "Hide password" : "Show password"}
                  >
                    {values.passwordVisible ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
                  </div>
                </div>
                <Lock className="absolute left-3 top-9 w-5 h-5 text-gray-400" />
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div>

              {/* Confirm Password Field */}
              <div className="mb-4 relative">
                <label htmlFor="confirmPassword" className="block text-background-foreground">Confirm Password</label>
                <div className="flex items-center">
                  <Field
                    type={values.confirmPasswordVisible ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Confirm your password"
                    aria-label="Confirm Password"
                  />
                  <div
                    onClick={() => setFieldValue("confirmPasswordVisible", !values.confirmPasswordVisible)}
                    className="absolute right-3 top-9 cursor-pointer"
                    aria-label={values.confirmPasswordVisible ? "Hide password" : "Show password"}
                  >
                    {values.confirmPasswordVisible ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
                  </div>
                </div>
                <Key className="absolute left-3 top-9 w-5 h-5 text-gray-400" />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary-foreground hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Sign Up"
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
         {/* Login Prompt */}
         <p className="mt-4 text-background-foreground">
          Don’t have an account?{" "}
          {/* <Link to={'/login'} className="text-sky-700 cursor-pointer hover:underline" aria-label="Sign Up">
            Log in
          </Link> */}
        </p>

      </div>
    </div>
  );
};

export default Signup;
