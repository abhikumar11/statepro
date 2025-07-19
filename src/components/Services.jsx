import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'We build responsive and modern websites using the latest technologies.',
  },
  {
    title: 'Mobile App Development',
    description: 'Create smooth and performant mobile apps for both Android and iOS.',
  },
  {
    title: 'UI/UX Design',
    description: 'Design beautiful and user-friendly interfaces that boost engagement.',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your website ranking and visibility on search engines.',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">
          Our Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
