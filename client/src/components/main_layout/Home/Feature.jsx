import React from 'react';
import { BarChart, Globe, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <BarChart size={40} className="text-blue-600" />,
    title: 'Real-time Data Analysis',
    description: 'Analyze climate data in real-time to make informed decisions and track trends efficiently.',
  },
  {
    icon: <Globe size={40} className="text-green-600" />,
    title: 'Interactive Visualizations',
    description: 'Explore climate patterns and insights through dynamic, interactive graphs and maps.',
  },
  {
    icon: <TrendingUp size={40} className="text-yellow-600" />,
    title: 'Predictive Climate Insights',
    description: 'Utilize advanced models to forecast climate changes and prepare for future scenarios.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
          Key Features
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
            >
              {/* Icon */}
              <div className="mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
