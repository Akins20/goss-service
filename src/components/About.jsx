const About = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-8">
        About Us
      </h1>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        At the forefront of the machinery industry, we specialize in GOSS
        machinery and other similar industrial web offset and sheet fed printing
        machinery. Our team ensures top-tier engineering solutions with an
        emphasis on precision, reliability, and client satisfaction.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700">
            To deliver reliable and efficient solutions, ensuring machinery
            performs at its best while minimizing downtime.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Core Values
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Precision Engineering</li>
            <li>Customer-Centric Service</li>
            <li>Safety First</li>
            <li>Quality Assurance</li>
          </ul>
        </div>
      </div>
      <section className="bg-blue-100 px-8 py-12 rounded-md shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Why Choose Us
        </h2>
        <p className="text-center text-lg text-gray-800 mb-6">
          Our extensive experience with GOSS machinery, similar industrial
          web offset and sheet fed printing machinery ensures precision,
          reliability, and efficiency. Trust our team to deliver exceptional
          results every time.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-700 text-white py-3 px-6 rounded-md hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
