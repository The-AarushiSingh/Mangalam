import React from "react";

const FestivalHighlight = () => {
  return (
    <section className="bg-soft py-20">
      <div className="max-w-[1300px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/Festival.jpg"   // put image inside public folder
            alt="Festival Celebration"
            className="w-full h-[450px] object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="font-serif md:text-4xl font-semibold text-[#5A1E23] text-primary mb-6 leading-tight">
            Celebrate This Festive Season with Sacred Traditions
          </h2>

          <p className="text-xl text-base leading-relaxed mb-8">
            Discover thoughtfully curated festival kits, authentic pooja
            essentials and handcrafted idols to make every celebration divine
            and memorable.
          </p>

          <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition">
            Explore Festival Collection
          </button>
        </div>

      </div>
    </section>
  );
};

export default FestivalHighlight;