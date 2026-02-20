import React, { useState } from "react";
import { HiMiniShoppingBag, HiHeart, HiBars3, HiXMark } from "react-icons/hi2";
import { RiSearchLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#F9F2E7] shadow-sm border-b border-[#e8dccc]">
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 h-[14vh] flex justify-between items-center">

        {/* Logo */}
        <div>
          <a
            href="#"
            className="text-3xl md:text-5xl tracking-wider text-[#5A1E23] font-semibold"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Mangalam
          </a>
          <div className="h-[2px] w-20 bg-[#F6B13B] mt-1"></div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[#5A1E23] font-medium tracking-wide">
  {[
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about" },
    { name: "Products", link: "#products" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact Us", link: "#contact" },
  ].map((item) => (
    <li key={item.name}>
      <a
        href={item.link}
        className="hover:text-[#7A2A30] transition duration-300"
      >
        {item.name}
      </a>
    </li>
  ))}
</ul>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-6">

          {/* Search */}
          <div className="hidden sm:flex items-center bg-white border border-[#5A1E23] rounded-full px-3 py-1">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-24 md:w-40 placeholder:text-[#7A2A30]"
            />
            <button className="text-[#5A1E23] ml-2">
              <RiSearchLine size={18} />
            </button>
          </div>

          {/* Wishlist */}
          <a className="text-[#5A1E23] hover:scale-110 transition duration-300 text-xl">
            <HiHeart />
          </a>

          {/* Cart */}
          <a className="relative text-[#5A1E23] hover:scale-110 transition duration-300 text-xl">
            <HiMiniShoppingBag />
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#5A1E23] text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiXMark /> : <HiBars3 />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F9F2E7] px-6 pb-6">
          <ul className="flex flex-col gap-4 text-[#5A1E23] font-medium">
            {["Home", "About Us", "Process", "Contact Us"].map((item) => (
              <li key={item}>
                <a href="#" onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
