import React from "react";

const ContactForm = () => {
  return (
    <section className="py-16 bg-palette-light">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-palette-navy">
          Send Us a Message
        </h2>
        <form className="space-y-6">
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
              className="w-full px-4 py-3 border border-palette-gray rounded-md focus:outline-none focus:ring-2 focus:ring-palette-turquoise"
            />
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
              className="w-full px-4 py-3 border border-palette-gray rounded-md focus:outline-none focus:ring-2 focus:ring-palette-turquoise"
            />
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
              className="w-full px-4 py-3 border border-palette-gray rounded-md focus:outline-none focus:ring-2 focus:ring-palette-turquoise"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-palette-turquoise text-palette-light font-semibold py-3 rounded-md hover:bg-palette-navy transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
