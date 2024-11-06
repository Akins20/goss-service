"use client"

/* eslint-disable react/no-unescaped-entities */
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-lg text-center mb-4">
        We'd love to hear from you! Reach out to us via the form below, or
        connect with us on your preferred platform.
      </p>

      <ContactForm />

      <div className="mt-8 text-center space-y-2">
        <p className="text-lg">📞 Phone: +123-456-7890</p>
        <p className="text-lg">📧 Email: ogunbiyomi@gmail.com</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/in/engineer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
