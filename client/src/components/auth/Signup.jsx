import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { User, Mail, Lock, Key, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast"; 
import axios from "axios";

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
    try {
      const response = await axios.post("http://localhost:8000/api/auth/register", {
        username: values.name,
        email: values.email,
        password: values.password,
      });

      if (response.data.success) {
        toast({
          title: "Success",
          description: "Registration successful!",
          variant: "success",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Registration failed!",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-palette-light p-4">
      <div className="w-full max-w-md bg-palette-gray shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-heading font-bold text-palette-turquoise mb-6">
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
              <div className="mb-6 relative">
                <label htmlFor="name" className="block text-palette-light mb-2">
                  Name
                </label>
                <div className="relative">
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="w-full pl-10 py-3 border border-palette-navy rounded-md focus:ring-2 focus:ring-palette-turquoise focus:outline-none placeholder-palette-gray"
                    placeholder="Enter your name"
                  />
                  <User className="absolute left-3 top-3 text-palette-gray" />
                </div>
                <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
              </div>

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

              {/* Confirm Password Field */}
              <div className="mb-6 relative">
                <label htmlFor="confirmPassword" className="block text-palette-light mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Field
                    type={values.confirmPasswordVisible ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    className="w-full pl-10 py-3 border border-palette-navy rounded-md focus:ring-2 focus:ring-palette-turquoise focus:outline-none placeholder-palette-gray"
                    placeholder="Confirm your password"
                  />
                  <Key className="absolute left-3 top-3 text-palette-gray" />
                  <div
                    onClick={() =>
                      setFieldValue("confirmPasswordVisible", !values.confirmPasswordVisible)
                    }
                    className="absolute right-3 top-3 cursor-pointer"
                  >
                    {values.confirmPasswordVisible ? (
                      <EyeOff className="text-palette-gray" />
                    ) : (
                      <Eye className="text-palette-gray" />
                    )}
                  </div>
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-palette-turquoise text-palette-light py-3 rounded-md hover:bg-palette-navy transition focus:outline-none focus:ring-2 focus:ring-palette-turquoise"
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>

        {/* Login Link */}
        <p className="mt-4 text-center text-palette-light">
          Already have an account?{" "}
          <Link to="/login" className="text-palette-turquoise hover:underline transition">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
