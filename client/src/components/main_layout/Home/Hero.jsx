import React from 'react';
import earth_1 from '@/assets/banner/earthscape-1.jpg';
import earth_2 from '@/assets/banner/earthscape-2.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${earth_2})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        {/* Animated Headline */}
        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
          Empower Climate Action with{' '}
          <span className="text-blue-400 animate-pulse">EarthScape</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg lg:text-2xl mb-8 max-w-3xl mx-auto">
          Revolutionizing climate monitoring through big data and real-time
          analysis. Join us in shaping a sustainable future.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="px-8 py-3 bg-blue-600 text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Explore Features
          </button>
          <button className="px-8 py-3 bg-transparent border border-white text-lg font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Earth Animation */}
      {/* <div className="absolute bottom-10 w-full flex justify-center">
        <img
          src={earth_2}
          alt="Rotating Earth"
          className="w-52 lg:w-72 animate-spin-slower opacity-80"
        />
      </div> */}
    </section>
  );
};

export default HeroSection;
