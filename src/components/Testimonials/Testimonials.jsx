import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    review:
      "Beautifully packed and authentic products. My Diwali pooja felt extra special this year.",
  },
  {
    name: "Rohit Mehta",
    review:
      "Fast delivery and premium quality idols. You can feel the devotion in every detail.",
  },
  {
    name: "Ananya Iyer",
    review:
      "The festival kit was complete and thoughtfully arranged. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials"className="bg-[#F9F2E7] py-16">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#5A1E23]">
            What Our Customers Say
          </h2>
          <div className="h-[3px] w-20 bg-[#F6B13B] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#5A1E23]/10 
                         rounded-2xl p-6 
                         hover:-translate-y-2 
                         hover:shadow-2xl 
                         transition duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4 text-[#F6B13B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#F6B13B" stroke="none" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {item.review}
              </p>

              {/* Name */}
              <h4 className="text-[#5A1E23] font-medium text-sm">
                — {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;