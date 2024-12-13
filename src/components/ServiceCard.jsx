const ServiceCard = ({ service }) => (
  <div className="border border-gray-200 rounded-lg p-6 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
    {/* Icon Section */}
    <div className="flex items-center justify-center bg-blue-100 h-16 w-16 rounded-full mb-6 mx-auto">
      <div className="text-4xl">{service.icon}</div>
    </div>
    {/* Title */}
    <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
      {service.title}
    </h2>
    {/* Description */}
    <p className="text-gray-600 text-center leading-relaxed">
      {service.description}
    </p>
    {/* Optional CTA */}
    <div className="text-center mt-6">
      <button className="text-blue-700 hover:underline">Learn More</button>
    </div>
  </div>
);

export default ServiceCard;
