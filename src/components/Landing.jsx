"use client";

import HeroSection from "./HeroSection";
import Testimonial from "./Testimonial";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";

const Landing = () => {
  return (
    <div>
      <HeroSection />

      <About />
      <section className="px-6 py-12 bg-gray-100">
        <Services />
      </section>
      <section className="px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <Testimonial />
      </section>

      <section className="px-6 py-12">
        <Contact />
      </section>
    </div>
  );
};

export default Landing;
