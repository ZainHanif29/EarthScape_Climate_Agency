import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  // Formik configuration
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters long")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters long")
        .required("Message is required"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting, setStatus }) => {
      try {
        const response = await fetch("http://localhost:8000/api/auth/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const result = await response.json();
        if (response.ok) {
          setStatus({ success: true, message: result.message });
          resetForm(); // Reset form fields on success
        } else {
          setStatus({ success: false, message: result.message });
        }
      } catch (error) {
        setStatus({ success: false, message: "Something went wrong. Please try again." });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section className="py-16 bg-palette-light">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-palette-navy">
          Send Us a Message
        </h2>
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-palette-mid font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className={`w-full px-4 py-3 border ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : "border-palette-gray"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-palette-turquoise`}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-palette-mid font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className={`w-full px-4 py-3 border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-palette-gray"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-palette-turquoise`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-palette-mid font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Your Message"
              className={`w-full px-4 py-3 border ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : "border-palette-gray"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-palette-turquoise`}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-palette-turquoise text-palette-light font-semibold py-3 rounded-md hover:bg-palette-navy transition"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status Message */}
        {formik.status && (
          <p
            className={`mt-4 text-center font-semibold ${
              formik.status.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {formik.status.message}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
