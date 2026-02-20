import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-[#5A1E23] py-20">
      <div className="max-w-[900px] mx-auto px-6 text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Stay Connected with Devotion
        </h2>

        <p className="text-sm md:text-base text-white/80 mb-8">
          Get festival updates, exclusive offers, and new arrivals directly to
          your inbox.
        </p>

        {/* Form */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="
    w-full sm:w-[360px]
    px-6 py-3 
    rounded-full
    border border-primary/20
    bg-white
    text-sm text-gray-700
    placeholder:text-gray-400
    focus:outline-none
    focus:ring-2 focus:ring-accent/40
    focus:border-accent
    transition
  "
          />

          <button
            className="px-8 py-3 rounded-full bg-[#F6B13B] text-[#5A1E23] font-semibold 
                       hover:opacity-90 transition duration-300"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
