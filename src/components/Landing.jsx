"use client"

import HeroSection from "./HeroSection";
import Testimonial from "./Testimonial";
import Services from "./Services";
import Contact from "./Contact";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <section className="px-6 py-12 bg-gray-100">
        <Services />
      </section>

      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          With extensive experience in GOSS machinery and smaller mechanical
          systems, our team is committed to precision, reliability, and
          efficiency. We go above and beyond to ensure customer satisfaction.
        </p>
      </section>

      <section className="px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <Testimonial />
      </section>

      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <Contact />
      </section>
    </div>
  );
};

export default Landing;
