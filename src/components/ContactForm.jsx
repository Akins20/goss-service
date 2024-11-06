import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <textarea
        name="message"
        placeholder="Message"
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
