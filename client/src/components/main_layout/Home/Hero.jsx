import React from "react";
import heroImage from "@/assets/banner/earthscape-2.jpg"; // Replace with your hero image path

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-palette-navy bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-palette-light px-6">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Empowering Climate Action with{" "}
          <span className="text-palette-turquoise">EarthScape</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-palette-light">
          Revolutionizing climate monitoring through big data and real-time analysis.
          Join us in shaping a sustainable future.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="px-8 py-3 bg-palette-turquoise text-palette-light text-lg font-semibold rounded-lg hover:bg-palette-navy transition duration-300">
            Explore Features
          </button>
          <button className="px-8 py-3 bg-transparent border border-palette-turquoise text-palette-turquoise text-lg font-semibold rounded-lg hover:bg-palette-turquoise hover:text-palette-light transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
