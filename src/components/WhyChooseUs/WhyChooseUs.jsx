import React from "react";
import { Truck, ShieldCheck, RefreshCcw, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Sparkles size={32} />,
    title: "Authentic & Pure",
    description: "Carefully sourced traditional products for every sacred ritual.",
  },
  {
    icon: <Truck size={32} />,
    title: "Pan India Delivery",
    description: "Fast and secure delivery across the country.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Premium Quality",
    description: "Only the finest materials crafted with devotion.",
  },
  {
    icon: <RefreshCcw size={32} />,
    title: "Easy Returns",
    description: "Hassle-free returns for complete peace of mind.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1300px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#5A1E23]">
            Why Choose Us
          </h2>
          <div className="h-[3px] w-24 bg-[#F6B13B] mx-auto mt-4"></div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl 
              hover:shadow-xl transition duration-300 
              border border-[#5A1E23]/10 group"
            >
              <div className="flex justify-center mb-5 text-[#F6B13B] 
              group-hover:text-[#5A1E23] transition duration-300">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#5A1E23] mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;