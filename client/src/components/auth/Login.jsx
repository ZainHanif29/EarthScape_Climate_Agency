import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "@/hooks/use-toast"; // Adjust the import based on your toast setup
import axios from "axios";
// import { Link } from "react-router-dom";

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
      <div className="w-full max-w-md shadow-lg rounded-lg bg-white p-8">
        <h2 className="text-2xl font-heading font-bold text-primary mb-6" aria-label="Login">
          Login
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {/* Email Field */}
              <div className="mb-4 relative">
                <label htmlFor="email" className="block text-background-foreground">Email</label>
                <div className="flex items-center">
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Enter your email"
                    aria-label="Email"
                  />
                  <Mail className="absolute left-3 top-9 w-5 h-5 text-gray-400" />
                </div>
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
                  <Lock className="absolute left-3 top-9 w-5 h-5 text-gray-400" />
                </div>
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div>

              {/* Forgot Password Link */}
              <div className="text-right mb-4">
                {/* <Link to={'/forget-password'} className="text-accent hover:underline" aria-label="Forgot Password">
                  Forgot Password?
                </Link> */}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary-foreground hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Login"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>

        {/* Sign Up Prompt */}
        <p className="mt-4 text-background-foreground">
          Don’t have an account?{" "}
          {/* <Link to={'/signup'} className="text-sky-700 cursor-pointer hover:underline" aria-label="Sign Up">
            Sign Up
          </Link> */}
        </p>
      </div>
    </div>
  );
};

export default Login;
