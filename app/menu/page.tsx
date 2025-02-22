"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Menu Data with Sections
const menuSections = [
  {
    title: "🍛 Pav Bhaji Specials",
    items: [
      { id: 1, name: "Classic Pav Bhaji", image: "/assets/pavbhaji1.jpeg" },
      { id: 2, name: "Cheese Pav Bhaji", image: "/assets/pavbhaji1.jpeg" },
      { id: 3, name: "Spicy Pav Bhaji", image: "/assets/pavbhaji1.jpeg" },
    ],
  },
  {
    title: "🍲 South Swadith",
    items: [
      { id: 4, name: "Idli Sambar", image: "/assets/pavbhaji1.jpeg" },
      { id: 5, name: "Medu Vada", image: "/assets/pavbhaji1.jpeg" },
    ],
  },
  {
    title: "🔥 Tawa Ka Kamal (Dosa)",
    items: [
      { id: 6, name: "Masala Dosa", image: "/assets/pavbhaji1.jpeg" },
      { id: 7, name: "Rava Dosa", image: "/assets/pavbhaji1.jpeg" },
    ],
  },
  {
    title: "🥪 Sandwich",
    items: [
      { id: 8, name: "Veg Sandwich", image: "/assets/pavbhaji1.jpeg" },
      { id: 9, name: "Cheese Grill Sandwich", image: "/assets/pavbhaji1.jpeg" },
    ],
  },
  {
    title: "🍹 Juices",
    items: [
      { id: 10, name: "Mango Juice", image: "/assets/pavbhaji1.jpeg" },
      { id: 11, name: "Watermelon Juice", image: "/assets/pavbhaji1.jpeg" },
    ],
  },
  {
    title: "🌯 Frankie",
    items: [
      { id: 12, name: "Paneer Frankie", image: "/assets/pavbhaji1.jpeg" },
      { id: 13, name: "Veg Frankie", image: "/assets/pavbhaji1.jpeg" },
    ],
  },
  {
    title: "🍦 Kulfi",
    items: [
      { id: 14, name: "Malai Kulfi", image: "/assets/pavbhaji1.jpeg" },
      { id: 15, name: "Pista Kulfi", image: "/assets/pavbhaji1.jpeg" },
    ],
  },
  {
    title: "🍨 Falooda",
    items: [
      { id: 16, name: "Royal Falooda", image: "/assets/pavbhaji1.jpeg" },
      { id: 17, name: "Dry Fruit Falooda", image: "/assets/pavbhaji1.jpeg" },
    ],
  },
  {
    title: "🥤 Cold Drinks",
    items: [
      { id: 18, name: "Cola", image: "/assets/pavbhaji1.jpeg" },
      { id: 19, name: "Lemon Soda", image: "/assets/pavbhaji1.jpeg" },
    ],
  },
];

export default function Menu() {
  return (
    <div className="w-full bg-gray-50 py-[5rem] pt-56">
      <div className="w-[90%] max-w-[120rem] mx-auto px-[2%]">
        {/* Main Title */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-[4rem]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🍽️ Our Special Menu
        </motion.h2>

        {/* Loop Through Sections */}
        {menuSections.map((section, index) => (
          <div key={index} className="mb-[5rem]">
            {/* Section Title */}
            <motion.h3
              className="text-2xl md:text-3xl font-semibold text-left mb-[2rem] border-b-4 border-red-500 inline-block pb-[0.5rem]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {section.title}
            </motion.h3>

            {/* Grid Layout for Menu Items (5 columns on desktop) */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[1.5rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {section.items.map((item) => (
                <motion.div
                  key={item.id}
                  className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-[12rem] sm:h-[14rem] md:h-[15rem] lg:h-[16rem] object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Dish Name */}
                  <div className="absolute bottom-0 w-full bg-black/70 text-white text-center p-[1rem]">
                    <h3 className="text-lg md:text-xl font-semibold">
                      {item.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
