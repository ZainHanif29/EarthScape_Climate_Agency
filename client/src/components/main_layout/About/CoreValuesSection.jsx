import React from "react";

const CoreValuesSection = () => {
  return (
    <section className="py-16 bg-palette-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description:
                "Driving progress through cutting-edge technology and solutions for climate challenges.",
            },
            {
              title: "Collaboration",
              description:
                "Building partnerships to foster global solutions and collective action.",
            },
            {
              title: "Sustainability",
              description:
                "Ensuring a balanced approach that preserves our planet’s future resources.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-palette-light p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-palette-navy mb-4">{value.title}</h3>
              <p className="text-palette-mid">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
