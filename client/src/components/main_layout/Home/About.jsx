import React from 'react';
import earth from '@/assets/banner/earthscape-1.jpg'


const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            About EarthScape
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            At EarthScape, our mission is to empower organizations and individuals
            to make data-driven decisions in addressing climate change. We aim to
            provide actionable insights through advanced climate data analysis, 
            fostering a sustainable and resilient future for all.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            With a vision to create a world where technology and data pave the way
            for a healthier planet, EarthScape combines innovation, collaboration,
            and responsibility to bring about meaningful change.
          </p>
        </div>

        {/* Image/Video */}
        <div className="lg:w-1/2">
          <img
            src={earth}
            alt="Climate Impact"
            className="rounded-lg shadow-lg"
          />
          {/* Optionally, use a video */}
          {/* <video
            src="/path-to-climate-video.mp4"
            controls
            className="rounded-lg shadow-lg"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
