import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast"; // Adjust the import based on your toast setup
import axios from "axios";

const ForgotPassword = () => {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:8000/api/auth/forgot-password", {
        email: values.email,
      });

      if (response.data.success) {
        toast({
          title: "Success",
          description: "Password reset link sent to your email!",
          variant: "success",
        });
      } else {
        toast({
          title: "Error",
          description: response.data.message || "Failed to send password reset link.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "An error occurred.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-secondary to-primary p-4">
      <div className="w-full max-w-md shadow-lg rounded-lg bg-white p-8">
        <h2 className="text-2xl font-heading font-bold text-primary mb-6" aria-label="Forgot Password">
          Forgot Password
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary-foreground hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Send Reset Link"
              >
                Send Reset Link
              </button>
            </Form>
          )}
        </Formik>

        {/* Back to Login Prompt */}
        <p className="mt-4 text-background-foreground">
          Remember your password?{" "}
          <a href="/login" className="text-sky-700 cursor-pointer hover:underline" aria-label="Back to Login">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
