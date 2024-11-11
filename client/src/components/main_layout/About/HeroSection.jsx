import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/path/to/your/hero-image.jpg)`, // Replace with your image
        }}
      ></div>
      <div className="absolute inset-0 bg-palette-navy bg-opacity-70"></div>
      <div className="relative z-10 text-center text-palette-light px-6">
        <h1 className="text-4xl md:text-6xl font-bold">About EarthScape</h1>
        <p className="text-lg md:text-xl mt-4">
          Empowering action on climate change through advanced data analytics and innovation.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
