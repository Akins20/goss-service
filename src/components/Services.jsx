import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const services = [
    {
      title: "GOSS Machinery Services",
      description:
        "Specialized services for GOSS machinery, including mounting, maintenance, and optimization.",
      icon: "⚙️", // Consider using icons here or SVGs for visual engagement
    },
    {
      title: "General Machinery Services",
      description:
        "Comprehensive solutions for smaller machinery, ensuring precise adjustments and reliable fixes.",
      icon: "🔧",
    },
    {
      title: "Preventive Maintenance",
      description:
        "Regular inspection and maintenance to keep machinery running smoothly and avoid unexpected downtime.",
      icon: "🛠️",
    },
  ];

  return (
    <div className="px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
