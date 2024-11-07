import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { User, Mail, Lock, Key, Eye, EyeOff } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { Link } from "react-router-dom";

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
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
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
        // Reset form or redirect after successful registration
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
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-heading font-bold text-primary mb-6">Sign Up</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {/* Name Field */}
              <div className="mb-5 relative">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <div className="relative">
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="w-full pl-10 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Enter your name"
                  />
                  <User className="absolute left-3 top-3 text-gray-400" />
                </div>
                <ErrorMessage name="name" component="div" className="text-red-500 mt-1 text-sm" />
              </div>

              {/* Email Field */}
              <div className="mb-5 relative">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="w-full pl-10 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Enter your email"
                  />
                  <Mail className="absolute left-3 top-3 text-gray-400" />
                </div>
                <ErrorMessage name="email" component="div" className="text-red-500 mt-1 text-sm" />
              </div>

              {/* Password Field */}
              <div className="mb-5 relative">
                <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <Field
                    type={values.passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    className="w-full pl-10 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Enter your password"
                  />
                  <Lock className="absolute left-3 top-3 text-gray-400" />
                  <div
                    onClick={() => setFieldValue("passwordVisible", !values.passwordVisible)}
                    className="absolute right-3 top-3 cursor-pointer"
                  >
                    {values.passwordVisible ? <EyeOff className="text-gray-400" /> : <Eye className="text-gray-400" />}
                  </div>
                </div>
                <ErrorMessage name="password" component="div" className="text-red-500 mt-1 text-sm" />
              </div>

              {/* Confirm Password Field */}
              <div className="mb-5 relative">
                <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirm Password</label>
                <div className="relative">
                  <Field
                    type={values.confirmPasswordVisible ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    className="w-full pl-10 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Confirm your password"
                  />
                  <Key className="absolute left-3 top-3 text-gray-400" />
                  <div
                    onClick={() => setFieldValue("confirmPasswordVisible", !values.confirmPasswordVisible)}
                    className="absolute right-3 top-3 cursor-pointer"
                  >
                    {values.confirmPasswordVisible ? <EyeOff className="text-gray-400" /> : <Eye className="text-gray-400" />}
                  </div>
                </div>
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 mt-1 text-sm" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>

        {/* Login Link */}
        <p className="mt-4 text-center text-gray-700">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary hover:underline transition"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
