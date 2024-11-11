import React from "react";

const FeatureHero = () => {
  return (
    <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" 
             style={{ backgroundImage: `url(/path/to/your/feature-hero.jpg)` }}>
      <div className="absolute inset-0 bg-palette-navy bg-opacity-70"></div>
      <div className="relative z-10 text-center text-palette-light px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Our Features</h1>
        <p className="text-lg md:text-xl mt-4">
          Discover the tools and technologies that drive innovation at EarthScape.
        </p>
      </div>
    </section>
  );
};

export default FeatureHero;
