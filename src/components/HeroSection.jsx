const HeroSection = () => (
  <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-28 px-6 text-center relative overflow-hidden">
    {/* Background Graphics */}
    <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-2xl transform -translate-x-10 -translate-y-10"></div>
    <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-300 rounded-full opacity-20 blur-3xl transform translate-x-10 translate-y-10"></div>

    {/* Main Content */}
    <div className="relative z-10 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
        Revolutionizing Machinery Maintenance & Engineering Solutions
      </h1>
      <p className="text-lg md:text-xl font-light mb-10">
        Your trusted partner for GOSS machinery, industrial press equipment, and
        precision engineering services. Let us help you minimize downtime and
        maximize efficiency.
      </p>
      <a
        href="#contact"
        className="inline-block bg-white text-blue-600 py-3 px-8 rounded-full font-semibold text-lg shadow-md hover:bg-gray-100 transition duration-300"
      >
        Get a Free Quote
      </a>
    </div>
  </div>
);

export default HeroSection;
