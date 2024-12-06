
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alice",
      feedback: "Un service exceptionnel, je recommande vivement !",
    },
    {
      id: 2,
      name: "Bob",
      feedback: "Une équipe très professionnelle et à l'écoute.",
    },
    {
      id: 3,
      name: "Clara",
      feedback: "Des résultats impressionnants en peu de temps.",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8">
          Ce que disent nos clients
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-100 shadow rounded p-6 text-center"
            >
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
              <h5 className="mt-4 font-bold">{testimonial.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
