import React from "react";
import { GiLotus } from "react-icons/gi";
import { FaHandsPraying } from "react-icons/fa6";
import { MdOutlineVerified } from "react-icons/md";
import { RiLeafLine } from "react-icons/ri";

const values = [
  {
    icon: <MdOutlineVerified size={32} />,
    title: "Authenticity",
    desc: "Every product is sourced with care, ensuring traditional purity and sacred significance.",
  },
  {
    icon: <FaHandsPraying size={32} />,
    title: "Devotion",
    desc: "We honor every ritual and belief by offering items crafted with spiritual intention.",
  },
  {
    icon: <RiLeafLine size={32} />,
    title: "Sustainability",
    desc: "Eco-conscious materials and mindful sourcing for a better tomorrow.",
  },
  {
    icon: <GiLotus size={32} />,
    title: "Craftsmanship",
    desc: "Celebrating skilled artisans and preserving timeless traditions.",
  },
];

const Values = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#5A1E23]">
            Our Values
          </h2>
          <div className="h-[3px] w-20 bg-[#F6B13B] mx-auto mt-4"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {values.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center text-[#F6B13B] mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#5A1E23] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Values;
