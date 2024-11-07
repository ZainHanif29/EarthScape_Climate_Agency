import React, { useEffect, useState } from 'react';

const stats = [
  {
    title: 'Total Datasets Processed',
    value: 120345,
    icon: '📊',
  },
  {
    title: 'Anomalies Detected',
    value: 4789,
    icon: '⚠️',
  },
  {
    title: 'Users Registered',
    value: 8754,
    icon: '👥',
  },
];

const StatsCounter = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value; // Final value
      const duration = 2000; // 2 seconds
      const incrementTime = 10;

      const timer = setInterval(() => {
        start += Math.round(end / (duration / incrementTime));
        if (start >= end) {
          setCounters((prev) => {
            const updated = [...prev];
            updated[index] = end;
            return updated;
          });
          clearInterval(timer);
        } else {
          setCounters((prev) => {
            const updated = [...prev];
            updated[index] = start;
            return updated;
          });
        }
      }, incrementTime);

      return () => clearInterval(timer);
    });
  }, []);

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Impact in Numbers
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{stat.icon}</div>

              {/* Counter */}
              <h3 className="text-3xl font-bold text-blue-600 mb-2">
                {counters[index].toLocaleString()}
              </h3>

              {/* Title */}
              <p className="text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
