import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "Moses transformed our outdated system into a modern, efficient platform. His expertise in both development and deployment is unmatched! He delivered ahead of schedule and provided ongoing support that ensured our team adapted seamlessly.",
    name: "Jane Doe",
    position: "CEO of HealthTech",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5
  },
  {
    text: "Working with Moses was a game-changer. The POS system he built for our hotel streamlined operations and boosted our revenue by 30%. His proactive communication and attention to detail made the entire process effortless.",
    name: "Stellah Nyabute",
    position: "Bellamy Hotel Manager",
    image: "/images/image5.png",
    rating: 5
  },
  {
    text: "His attention to detail and proactive communication made the project a success. We've already contracted him for two more projects! Moses's ability to anticipate our needs and deliver scalable solutions is truly exceptional.",
    name: "Emily Carter",
    position: "EduSys Director",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  },
  {
    text: "Moses created a custom e-commerce solution that perfectly matched our brand vision. The site's performance is exceptional, and our conversion rates have increased by 45% since launch. His technical knowledge combined with business acumen is rare and invaluable.",
    name: "Robert Chen",
    position: "Marketing Director, FashionHub",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  }
];

const TestimonialsSection = ({ homePreview }) => (
  <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="text-cyan-400 text-lg font-semibold uppercase tracking-wide block mb-2">What Clients Say About Me</span>
        <h2 className="text-4xl font-extrabold mb-3 drop-shadow">Trusted by Industry Leaders</h2>
        <p className={`text-lg ${homePreview ? 'text-cyan-200 font-medium drop-shadow' : 'text-gray-200'}`}>Hear from clients who've experienced the value I bring to their projects:</p>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {(homePreview ? testimonials.slice(0, 2) : testimonials).map((t, idx) => (
          <div key={idx} className={`${homePreview ? 'bg-gray-800/80 text-white shadow-2xl border border-gray-700 z-20' : 'bg-gray-800/70 text-white shadow-xl border border-gray-700'} rounded-2xl p-8 flex flex-col items-center text-center h-full relative`}>
            <FaQuoteLeft className="text-cyan-400 text-3xl mb-4" />
            <p className={`italic text-lg mb-4 ${homePreview ? 'text-gray-200 font-medium' : 'text-gray-300'}`}>"{t.text}"</p>
            <img src={t.image} alt={t.name} className="rounded-full w-16 h-16 mb-3 object-cover border-2 border-cyan-400" loading="lazy" />
            <h6 className={`font-bold text-lg mb-1 drop-shadow text-white`}>{t.name}</h6>
            <p className={`mb-2 font-semibold ${homePreview ? 'text-cyan-200' : 'text-cyan-200'}`}>{t.position}</p>
            <div className="flex justify-center mt-2 text-yellow-500">
              {[...Array(t.rating)].map((_, i) => <FaStar key={i} />)}
            </div>
          </div>
        ))}
      </div>
      {homePreview && (
        <div className="text-center mt-12 z-20 relative">
          <a href="/testimonials" className="inline-block px-8 py-3 bg-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-700 transition shadow">See More Testimonials</a>
        </div>
      )}
      {!homePreview && (
        <div className="text-center mt-12">
          <a href="#contact" className="inline-block px-8 py-3 bg-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-700 transition shadow">Get Your Project Started</a>
        </div>
      )}
    </div>
  </section>
);

export default TestimonialsSection;
