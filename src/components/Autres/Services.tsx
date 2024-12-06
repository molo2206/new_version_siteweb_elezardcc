import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Consulting",
      description: "Expertise pour booster vos performances.",
      icon: "💼",
    },
    {
      id: 2,
      title: "Développement Web",
      description: "Sites web modernes et performants.",
      icon: "🌐",
    },
    {
      id: 3,
      title: "Marketing Digital",
      description: "Augmentez votre visibilité en ligne.",
      icon: "📈",
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8">Nos Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow rounded p-6 text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h4 className="font-bold text-xl mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
