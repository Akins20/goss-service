const ServiceCard = ({ service }) => (
  <div className="border border-gray-200 rounded-lg p-6 shadow-lg">
    <div className="text-5xl mb-4">{service.icon}</div>
    <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
    <p className="text-gray-600">{service.description}</p>
  </div>
);

export default ServiceCard;
