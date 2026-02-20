import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] flex items-center justify-center text-center text-white">
      <img
        src="/public/PoojaWebsite_Images/Hero.png"
        alt="Mangalam Hero"
        className="absolute w-full h-full object-cover brightness-50"
      />

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl font-semibold mb-4">
          Bringing Divine Grace to Every <span className="text-[#F6B13B]">Home.</span>
        </h1>

        <p className="text-lg mb-6">
          Explore handcrafted diyas, divine idols and curated festival kits for
          every sacred occasion.
        </p>

        <button className="bg-[#F6B13B] text-black px-6 py-3 rounded-full hover:bg-[#e0a232] transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
