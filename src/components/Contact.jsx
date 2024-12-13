"use client";

/* eslint-disable react/no-unescaped-entities */
import ContactForm from "./ContactForm";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="px-6 py-16 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg">
      {/* Header Section */}
      <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-10">
        Get in Touch
      </h1>
      <p className="text-lg text-center text-gray-700 mb-8">
        We'd love to hear from you! Reach out to us via the form below or
        connect with us on your preferred platform. Let's start the conversation
        today.
      </p>

      {/* Contact Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <ContactForm />
      </div>

      {/* <div className="text-center mt-8">
        <p className="text-lg flex items-center justify-center gap-2 mb-4">
          <FaPhoneAlt className="text-blue-600" />
          <span>+123-456-7890</span>
        </p>
        <p className="text-lg flex items-center justify-center gap-2 mb-4">
          <FaEnvelope className="text-red-600" />
          <span>ogunbiyomi@gmail.com</span>
        </p>

        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://www.linkedin.com/in/engineer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 flex items-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700 flex items-center gap-2"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
