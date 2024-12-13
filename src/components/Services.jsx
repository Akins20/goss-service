import {
  FaCogs,
  FaWrench,
  FaTools,
  FaTruck,
  FaPrint,
  FaScrewdriver,
} from "react-icons/fa"; // Additional icons
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const generalServices = [
    {
      title: "GOSS Machinery Services",
      description:
        "Specialized services for GOSS machinery, including mounting, maintenance, and optimization.",
      icon: <FaCogs className="text-blue-700" />,
    },
    {
      title: "General Machinery Services",
      description:
        "Comprehensive solutions for smaller machinery, ensuring precise adjustments and reliable fixes.",
      icon: <FaWrench className="text-green-700" />,
    },
    {
      title: "Preventive Maintenance",
      description:
        "Regular inspection and maintenance to keep machinery running smoothly and avoid unexpected downtime.",
      icon: <FaTools className="text-orange-700" />,
    },
  ];

  const technicalServices = [
    {
      title: "Installation of Industrial Printing Machines",
      description:
        "Expert installation of industrial and commercial printing machines with precision and efficiency.",
      icon: <FaPrint className="text-purple-700" />,
    },
    {
      title: "Servicing & Maintenance of Press Equipment",
      description:
        "Professional maintenance services to ensure press equipment operates at peak performance.",
      icon: <FaScrewdriver className="text-red-700" />,
    },
    {
      title: "General Suppliers & Spare Parts Manufacturer",
      description:
        "Reliable supply of high-quality spare parts for industrial machinery, ensuring durability and performance.",
      icon: <FaTruck className="text-yellow-700" />,
    },
  ];

  return (
    <div className="px-6 py-12 bg-gray-50">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-12">
        Our Services
      </h1>

      {/* General Services */}
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
        General Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {generalServices.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      {/* Technical & Commercial Services */}
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
        Technical & Commercial Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technicalServices.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <button className="bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Services;
