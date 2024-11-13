import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-palette-turquoise to-palette-turquoise text-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Headline */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Take Action on Climate Change?
        </h2>
        <p className="text-lg lg:text-xl mb-8">
          Join EarthScape today and explore tools that empower you to monitor, analyze, and act on climate data.
        </p>

        {/* CTA Buttons */}
        <div className="space-x-4">
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-palette-turquoise font-semibold rounded-md hover:bg-gray-100 transition"
          >
            Get Started
          </a>
          <a
            href="/features"
            className="inline-block px-6 py-3 bg-transparent border border-white font-semibold rounded-md hover:bg-white hover:text-palette-turquoise transition"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
