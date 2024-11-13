import React from "react";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-palette-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Address",
              icon: "📍",
              detail: "Aptech Learning North Nazimabad II",
            },
            {
              title: "Email",
              icon: "📧",
              detail: "zainhanif2902@gmail.com",
            },
            {
              title: "Phone",
              icon: "📞",
              detail: "+92 316-1055276",
            },
          ].map((info, index) => (
            <div
              key={index}
              className="bg-palette-light p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className="text-xl font-semibold text-palette-navy mb-2">
                {info.title}
              </h3>
              <p className="text-palette-mid">{info.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
