import React from "react";
import featureImage from '@/assets/banner/earthscape-1.jpg'

const FeatureHighlight = () => {
  return (
    <section className="py-16 bg-palette-gray">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={featureImage}
            alt="Feature Highlight"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-palette-navy">
            Advanced Climate Monitoring
          </h2>
          <p className="text-palette-light mb-4 leading-relaxed">
            Our cutting-edge tools provide unparalleled insights into climate
            patterns and anomalies. With real-time tracking and predictive
            analysis, you can stay ahead of the curve and make data-driven
            decisions.
          </p>
          <p className="text-palette-light mb-4 leading-relaxed">
            Whether you're a researcher, policy maker, or environmental
            advocate, EarthScape empowers you with the technology you need to
            drive meaningful change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
