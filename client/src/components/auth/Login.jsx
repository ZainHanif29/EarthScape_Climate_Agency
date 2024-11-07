import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "@/hooks/use-toast"; 
import axios from "axios";
import { Link } from "react-router-dom";

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
      });

      if (response.data.success) {
        toast({
          title: "Success",
          description: "Login successful!",
          variant: "success",
        });
        // Redirect user or perform further actions after successful login
      } else {
        toast({
          title: "Error",
          description: response.data.message || "Login failed!",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: error.response?.data?.message || "An error occurred during login!",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-secondary to-primary p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-heading font-bold text-primary mb-6">Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {/* Email Field */}
              <div className="mb-5 relative">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <div className="flex items-center relative">
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
                <div className="flex items-center relative">
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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>

        {/* Sign Up Link */}
        <p className="mt-4 text-center text-gray-700">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-primary hover:underline transition"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
