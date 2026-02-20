import React, { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

const categories = [
  "Diyas",
  "Idols",
  "Festival Kits",
  "Havan Samagri",
  "Fragrance",
  "Gift Packs",
  "Mandir Essentials",
  "Pooja Samagri",
  "Spiritual Items",
  "Vastu Items",
];

const productsData = {
  Diyas: [
    {
      name: "Akhand Diya",
      price: 299,
      image: "/PoojaWebsite_Images/Diyas/Akhand_Diyas.jpg",
    },
    {
      name: "Brass Diya",
      price: 499,
      image: "/PoojaWebsite_Images/Diyas/Brass_Diyas.jpg",
    },
    {
      name: "Clay Diya",
      price: 99,
      image: "/PoojaWebsite_Images/Diyas/Clay_Diyas.jpg",
    },
    {
      name: "Designer Diya",
      price: 399,
      image: "/PoojaWebsite_Images/Diyas/Designer_Diyas.jpg",
    },
    {
      name: "Diya Wicks",
      price: 49,
      image: "/PoojaWebsite_Images/Diyas/Diya_Wicks.jpg",
    },
    {
      name: "Electric Diya",
      price: 599,
      image: "/PoojaWebsite_Images/Diyas/Electric_Diyas.jpg",
    },
    {
      name: "Panchmukhi Diya",
      price: 799,
      image: "/PoojaWebsite_Images/Diyas/Panchmukhi_Diyas.jpg",
    },
    {
      name: "Silver Diya",
      price: 1299,
      image: "/PoojaWebsite_Images/Diyas/Silver_Diyas.jpg",
    },
  ],

  "Festival Kits": [
    {
      name: "Diwali Puja Kit",
      price: 1499,
      image: "/PoojaWebsite_Images/Festival_Kits/Diwali_Puja_Kit.jpg",
    },
    {
      name: "Ganesh Chaturthi Kit",
      price: 1299,
      image: "/PoojaWebsite_Images/Festival_Kits/Ganesh_Chaturthi_Kit.jpg",
    },
    {
      name: "Griha Pravesh Kit",
      price: 1999,
      image: "/PoojaWebsite_Images/Festival_Kits/Griha_Pravesh_Kit.jpg",
    },
    {
      name: "Navratri Puja Kit",
      price: 1599,
      image: "/PoojaWebsite_Images/Festival_Kits/Navratri_Puja_Kit.jpg",
    },
    {
      name: "Satyanarayan Puja Kit",
      price: 1799,
      image: "/PoojaWebsite_Images/Festival_Kits/Satyanarayan_Puja_Kit.jpg",
    },
    {
      name: "Wedding Puja Kit",
      price: 2499,
      image: "/PoojaWebsite_Images/Festival_Kits/Wedding_Puja_Kit.jpg",
    },
  ],

  Fragrance: [
    {
      name: "Agarbatti",
      price: 149,
      image: "/PoojaWebsite_Images/Fragrance/Agarbatti.jpg",
    },
    {
      name: "Attar",
      price: 399,
      image: "/PoojaWebsite_Images/Fragrance/Attar.jpg",
    },
    {
      name: "Dhoop",
      price: 199,
      image: "/PoojaWebsite_Images/Fragrance/Dhoop.jpg",
    },
    {
      name: "Essential Oils",
      price: 499,
      image: "/PoojaWebsite_Images/Fragrance/Essential_Oils.jpg",
    },
    {
      name: "Naivedyam",
      price: 299,
      image: "/PoojaWebsite_Images/Fragrance/Naivedyam.jpg",
    },
    {
      name: "Artificial Pooja Flowers",
      price: 249,
      image: "/PoojaWebsite_Images/Fragrance/Pooja_Flowers_Artificial.jpg",
    },
    {
      name: "Fresh Pooja Flowers",
      price: 199,
      image: "/PoojaWebsite_Images/Fragrance/Pooja_Flowers.jpg",
    },
  ],

  "Gift Packs": [
    {
      name: "Corporate Gifts",
      price: 1999,
      image: "/PoojaWebsite_Images/Gift_Packs/Corporate_Gift_Set.jpg",
    },
    {
      name: "Daily Pooja Set",
      price: 1499,
      image: "/PoojaWebsite_Images/Gift_Packs/Daily_Pooja_Set.jpg",
    },
    {
      name: "Premium Combo",
      price: 2499,
      image: "/PoojaWebsite_Images/Gift_Packs/Premium_Pooja_Set.jpg",
    },
    {
      name: "Return Gifts",
      price: 999,
      image: "/PoojaWebsite_Images/Gift_Packs/Return_Gifts.jpg",
    },
  ],

  "Havan Samagri": [
    {
      name: "Cow Dung Cakes",
      price: 199,
      image: "/PoojaWebsite_Images/Havan_Samagri/Cow_Dung_Cakes.jpg",
    },
    {
      name: "Havan Mixtures",
      price: 249,
      image: "/PoojaWebsite_Images/Havan_Samagri/Havan_Mixture.jpg",
    },
    {
      name: "Hawan Kund",
      price: 1499,
      image: "/PoojaWebsite_Images/Havan_Samagri/Hawan_Kund.jpg",
    },
    {
      name: "Kamal Katta",
      price: 299,
      image: "/PoojaWebsite_Images/Havan_Samagri/kamal_katta.jpg",
    },
    {
      name: "Navgraha Samagri",
      price: 399,
      image: "/PoojaWebsite_Images/Havan_Samagri/Navgraha_Samagri.jpg",
    },
    {
      name: "Samidha Wood",
      price: 349,
      image: "/PoojaWebsite_Images/Havan_Samagri/Samidha_Wood.jpg",
    },
    {
      name: "Mango Wood",
      price: 299,
      image: "/PoojaWebsite_Images/Havan_Samagri/Samidha_Wood(1).jpg",
    },
  ],

  Idols: [
    {
      name: "Durga",
      price: 2499,
      image: "/PoojaWebsite_Images/Idols/Durga.jpg",
    },
    {
      name: "Ganesha",
      price: 1999,
      image: "/PoojaWebsite_Images/Idols/Ganesha.jpg",
    },
    {
      name: "Hanuman",
      price: 1799,
      image: "/PoojaWebsite_Images/Idols/Hanuman.jpg",
    },
    {
      name: "Krishna",
      price: 2199,
      image: "/PoojaWebsite_Images/Idols/Krishna.jpg",
    },
    {
      name: "Lakshmi",
      price: 2299,
      image: "/PoojaWebsite_Images/Idols/Lakshmi.jpg",
    },
    {
      name: "Ram Parivar",
      price: 3499,
      image: "/PoojaWebsite_Images/Idols/Ram_Parivar.jpg",
    },
    {
      name: "Saraswati",
      price: 1999,
      image: "/PoojaWebsite_Images/Idols/Saraswati.jpg",
    },
    {
      name: "Shiva",
      price: 2399,
      image: "/PoojaWebsite_Images/Idols/Shiva.jpg",
    },
    {
      name: "Vishnu",
      price: 2299,
      image: "/PoojaWebsite_Images/Idols/Vishnu.jpg",
    },
  ],

  "Mandir Essentials": [
    {
      name: "Bells",
      price: 599,
      image: "/PoojaWebsite_Images/Mandir_Essentials/Bells.jpg",
    },
    {
      name: "Chowki",
      price: 1499,
      image: "/PoojaWebsite_Images/Mandir_Essentials/Chowki.jpg",
    },
    {
      name: "Shankh",
      price: 999,
      image: "/PoojaWebsite_Images/Mandir_Essentials/Conch_Shankh.jpg",
    },
    {
      name: "Incense Holders",
      price: 349,
      image: "/PoojaWebsite_Images/Mandir_Essentials/Incense_Holders.jpg",
    },
    {
      name: "Kalash",
      price: 799,
      image: "/PoojaWebsite_Images/Mandir_Essentials/Kalash.jpg",
    },
    {
      name: "Pooja Thali",
      price: 1299,
      image: "/PoojaWebsite_Images/Mandir_Essentials/Pooja_Thali.jpg",
    },
  ],
  "Pooja Samagri": [
    {
      name: "Akshat",
      price: 99,
      image: "/PoojaWebsite_Images/Pooja_Samagri/Akshat.jpg",
    },
    {
      name: "Camphor",
      price: 149,
      image: "/PoojaWebsite_Images/Pooja_Samagri/Camphor.jpg",
    },
    {
      name: "Chandan",
      price: 199,
      image: "/PoojaWebsite_Images/Pooja_Samagri/Chandan.jpg",
    },
    {
      name: "Gangajal",
      price: 129,
      image: "/PoojaWebsite_Images/Pooja_Samagri/Gangajal.jpg",
    },
    {
      name: "Ghee",
      price: 249,
      image: "/PoojaWebsite_Images/Pooja_Samagri/Ghee.jpg",
    },
    {
      name: "Haldi",
      price: 79,
      image: "/PoojaWebsite_Images/Pooja_Samagri/Haldi.jpg",
    },
    {
      name: "Honey",
      price: 199,
      image: "/PoojaWebsite_Images/Pooja_Samagri/Honey.jpg",
    },
    {
      name: "Janeu",
      price: 49,
      image: "/PoojaWebsite_Images/Pooja_Samagri/Janeu.jpg",
    },
    {
      name: "Kalava",
      price: 39,
      image: "/PoojaWebsite_Images/Pooja_Samagri/Kalava_Moli.jpg",
    },
    {
      name: "Kumkum",
      price: 59,
      image: "/PoojaWebsite_Images/Pooja_Samagri/Kumkum.jpg",
    },
    {
      name: "Roli",
      price: 59,
      image: "/PoojaWebsite_Images/Pooja_Samagri/Roli.jpg",
    },
    {
      name: "Sindoor",
      price: 89,
      image: "/PoojaWebsite_Images/Pooja_Samagri/Sindoor.jpg",
    },
  ],

  "Spiritual Items": [
    {
      name: "Crystal Mala",
      price: 999,
      image: "/PoojaWebsite_Images/Spiritual_Items/Crystal_Mala.jpg",
    },
    {
      name: "Gomti Chakra",
      price: 299,
      image: "/PoojaWebsite_Images/Spiritual_Items/Gomti_Chakra.jpg",
    },
    {
      name: "Japa Bags",
      price: 399,
      image: "/PoojaWebsite_Images/Spiritual_Items/Japa_Bags.jpg",
    },
    {
      name: "Parad Items",
      price: 2499,
      image: "/PoojaWebsite_Images/Spiritual_Items/Parad_Items.jpg",
    },
    {
      name: "Rudraksha Mala",
      price: 799,
      image: "/PoojaWebsite_Images/Spiritual_Items/Rudraksha_Mala.jpg",
    },
    {
      name: "Tulsi Mala",
      price: 499,
      image: "/PoojaWebsite_Images/Spiritual_Items/Tulsi_Mala.jpg",
    },
    {
      name: "Yantras",
      price: 699,
      image: "/PoojaWebsite_Images/Spiritual_Items/Yantras.jpg",
    },
  ],

  "Vastu Items": [
    {
      name: "Nazar Suraksha",
      price: 199,
      image: "/PoojaWebsite_Images/Vastu_Items/Nazar_Suraksha.jpg",
    },
    {
      name: "Swastik",
      price: 149,
      image: "/PoojaWebsite_Images/Vastu_Items/Swastik_Symbol.jpg",
    },
    {
      name: "Toran",
      price: 499,
      image: "/PoojaWebsite_Images/Vastu_Items/Toran.jpg",
    },
    {
      name: "Tortoise",
      price: 699,
      image: "/PoojaWebsite_Images/Vastu_Items/Tortoise.jpg",
    },
    {
      name: "Vastu Pyramids",
      price: 999,
      image: "/PoojaWebsite_Images/Vastu_Items/Vastu_Pyramids.jpg",
    },
  ],
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("Diyas");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.name === product.name);
      alert(`${product.name} added to cart 🛒`);

      if (existing) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleToggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.name === product.name);
      if (exists) {
        return prev.filter((item) => item.name !== product.name);
      }
      return [...prev, product];
    });
  };

  const totalCartItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <section id="products" className="bg-[#F9F2E7] py-20">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#5A1E23]">
            Our Products
          </h2>
          <div className="h-[3px] w-24 bg-[#F6B13B] mx-auto mt-4"></div>

          {/* Cart Badge */}
          <div className="absolute right-0 top-0 flex items-center gap-2 text-[#5A1E23]">
            <ShoppingCart />
            <span className="bg-[#5A1E23] text-white text-xs px-2 py-1 rounded-full">
              {totalCartItems}
            </span>
          </div>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeCategory === cat
                    ? "bg-[#5A1E23] text-white shadow-md"
                    : "border border-[#5A1E23] text-[#5A1E23] hover:bg-[#5A1E23] hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productsData[activeCategory].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm 
              hover:shadow-2xl transition-all duration-500 group 
              border border-[#5A1E23]/10"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover 
                  group-hover:scale-110 transition duration-700"
                />

                {/* Wishlist Button */}
                <button
                  onClick={() => handleToggleWishlist(item)}
                  className={`absolute top-3 right-3 p-2 rounded-full transition ${
                    wishlist.find((p) => p.name === item.name)
                      ? "bg-red-500 text-white"
                      : "bg-white/80 text-[#5A1E23] hover:bg-[#5A1E23] hover:text-white"
                  }`}
                >
                  <Heart size={18} />
                </button>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t 
                from-black/40 via-transparent to-transparent 
                opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              {/* Info */}
              <div className="p-5 text-center space-y-3">
                <h3 className="text-lg font-semibold text-[#5A1E23]">
                  {item.name}
                </h3>

                <p className="text-xl font-bold text-[#F6B13B]">
                  ₹{item.price}
                </p>

                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-[#5A1E23] text-white py-2 rounded-lg 
                  hover:bg-[#F6B13B] hover:text-[#5A1E23] 
                  transition duration-300 text-sm font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;