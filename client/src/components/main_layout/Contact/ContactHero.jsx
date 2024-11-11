import React from "react";

const ContactHero = () => {
  return (
    <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" 
             style={{ backgroundImage: `url(/path/to/your/contact-hero.jpg)` }}>
      <div className="absolute inset-0 bg-palette-navy bg-opacity-70"></div>
      <div className="relative z-10 text-center text-palette-light">
        <h1 className="text-4xl md:text-6xl font-bold">Get in Touch</h1>
        <p className="text-lg md:text-xl mt-4">
          We'd love to hear from you. Reach out to us with your questions or feedback.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
