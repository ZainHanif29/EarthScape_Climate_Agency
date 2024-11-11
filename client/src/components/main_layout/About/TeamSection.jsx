import React from "react";

const TeamSection = () => {
  const teamMembers = [
    { name: "Jane Doe", role: "Founder & CEO", image: "https://via.placeholder.com/150" },
    { name: "John Smith", role: "Lead Data Scientist", image: "https://via.placeholder.com/150" },
    { name: "Emily Davis", role: "Climate Policy Analyst", image: "https://via.placeholder.com/150" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-palette-light p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-palette-navy">{member.name}</h3>
              <p className="text-palette-mid">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
