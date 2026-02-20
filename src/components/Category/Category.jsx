import React from "react";

const categories = [
  {
    id: 1,
    title: "Diyas",
    description: "To light up the spirit within!",
    image: "/PoojaWebsite_Images/Diyas/Designer_Diyas.jpg",
  },
  {
    id: 2,
    title: "Idols",
    description: "Sacred idols for every devotion",
    image: "/PoojaWebsite_Images/Idols/Ganesha.jpg",
  },
  {
    id: 3,
    title: "Festival Kits",
    description: "Complete festival & ritual kits",
    image: "/PoojaWebsite_Images/Festival_Kits/Diwali_Puja_Kit.jpg",
  },
  {
    id: 4,
    title: "Havan Samagri",
    description: "Traditional havan essentials",
    image: "/PoojaWebsite_Images/Havan_Samagri/Samidha_Wood(1).jpg",
  },
  {
    id: 5,
    title: "Fragrance",
    description: "Divine aromas to purify your space and elevate every ritual.",
    image: "/PoojaWebsite_Images/Fragrance/Attar.jpg",
  },
  {
    id: 6,
    title: "Gift Packs",
    description:
      "Thoughtfully curated spiritual gifts for every sacred occasion.",
    image: "/PoojaWebsite_Images/Gift_Packs/Return_Gifts.jpg",
  },

  {
    id: 7,
    title: "Mandir Essentials",
    description: "Sacred accessories to complete your home temple.",
    image: "/PoojaWebsite_Images/Mandir_Essentials/Bells.jpg",
  },
  {
    id: 8,
    title: "Pooja Samagri",
    description: "Pure and traditional items for every ritual and ceremony.",
    image: "/PoojaWebsite_Images/Pooja_Samagri/Sindoor.jpg",
  },
  {
    id: 9,
    title: "Spiritual Items",
    description: "Sacred tools to deepen your spiritual journey.",
    image: "/PoojaWebsite_Images/Spiritual_Items/Rudraksha_Mala.jpg",
  },
  {
    id: 10,
    title: "Vastu Items",
    description: "Traditional vastu remedies for peace and prosperity.",
    image: "/PoojaWebsite_Images/Vastu_Items/Tortoise.jpg",
  },
];

const Category = () => {
  return (
    <section className="relative bg-[#F9F2E7] py-20 overflow-hidden">
      {/* Background Mandala */}
      <div
        className="absolute inset-0 bg-center bg-repeat bg-contain opacity-30 pointer-events-none"
        style={{ backgroundImage: "url('/Mandala.png')" }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative max-w-[1400px] mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl text-[#5A1E23] font-semibold">
            Shop by Category
          </h2>
          <div className="h-[3px] w-24 bg-[#F6B13B] mx-auto mt-4"></div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-xl overflow-hidden shadow-md cursor-pointer
    ${
      index === categories.length - 2
        ? "md:col-start-2"
        : index === categories.length - 1
          ? "md:col-start-3"
          : ""
    }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold group-hover:text-[#F6B13B] transition">
                  {item.title}
                </h3>
                <span className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition">
                  Explore →
                </span>

                <p className="text-sm mt-1 opacity-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
