import React, { useState } from 'react';
import img_1 from '@/assets/testimonials/testimonials-1.jpg'
import img_2 from '@/assets/testimonials/testimonials-4.jpg'
import img_3 from '@/assets/testimonials/testimonials-3.jpg'

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Climate Researcher',
    comment:
      'EarthScape has transformed how we analyze climate data. The interactive visualizations are top-notch!',
    image: img_1
  },
  {
    name: 'John Smith',
    role: 'Environmental Analyst',
    comment:
      'The predictive insights offered by EarthScape have helped us plan sustainable projects more effectively.',
    image: img_2
  },
  {
    name: 'Emily Davis',
    role: 'Policy Maker',
    comment:
      'With EarthScape, we’ve been able to make data-driven decisions to tackle climate change challenges.',
    image: img_3,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Users Say
        </h2>

        {/* Carousel */}
        <div className="relative">
          <div className="flex justify-center items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 text-gray-600 hover:text-gray-800"
            >
              &#8592;
            </button>

            <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonials[current].name}
              </h3>
              <p className="text-sm text-gray-500">{testimonials[current].role}</p>
              <p className="text-gray-600 mt-4">{testimonials[current].comment}</p>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 text-gray-600 hover:text-gray-800"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
