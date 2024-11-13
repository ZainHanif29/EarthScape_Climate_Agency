import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast"; // Assuming toast is used
import axios from "axios";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
    passwordVisible: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:8000/api/auth/login", {
        email: values.email,
        password: values.password,
      },{ withCredentials: true });

      if (response.data.success) {
        toast({
          title: "Success",
          description: "Login successful!",
          variant: "success",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Login failed!",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-palette-light p-4">
      <div className="w-full max-w-md bg-palette-gray shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-heading font-bold text-palette-turquoise mb-6">Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {/* Email Field */}
              <div className="mb-6 relative">
                <label htmlFor="email" className="block text-palette-light mb-2">
                  Email
                </label>
                <div className="relative">
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="w-full pl-10 py-3 border border-palette-navy rounded-md focus:ring-2 focus:ring-palette-turquoise focus:outline-none placeholder-palette-gray"
                    placeholder="Enter your email"
                  />
                  <Mail className="absolute left-3 top-3 text-palette-gray" />
                </div>
                <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
              </div>

              {/* Password Field */}
              <div className="mb-6 relative">
                <label htmlFor="password" className="block text-palette-light mb-2">
                  Password
                </label>
                <div className="relative">
                  <Field
                    type={values.passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    className="w-full pl-10 py-3 border border-palette-navy rounded-md focus:ring-2 focus:ring-palette-turquoise focus:outline-none placeholder-palette-gray"
                    placeholder="Enter your password"
                  />
                  <Lock className="absolute left-3 top-3 text-palette-gray" />
                  <div
                    onClick={() => setFieldValue("passwordVisible", !values.passwordVisible)}
                    className="absolute right-3 top-3 cursor-pointer"
                  >
                    {values.passwordVisible ? (
                      <EyeOff className="text-palette-gray" />
                    ) : (
                      <Eye className="text-palette-gray" />
                    )}
                  </div>
                </div>
                <ErrorMessage name="password" component="div" className="text-red-500 mt-1" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-palette-turquoise text-palette-light py-3 rounded-md hover:bg-palette-navy transition focus:outline-none focus:ring-2 focus:ring-palette-turquoise"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>

        {/* Signup Link */}
        <p className="mt-4 text-center text-palette-light">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-palette-turquoise hover:underline transition">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
