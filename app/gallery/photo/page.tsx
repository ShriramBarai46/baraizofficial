"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Product Data (All Paths Updated)
const products = [
  { id: 1, name: "Sizzling Pav Bhaji", image: "/assets/pavbhaji1.jpeg" },
  { id: 2, name: "Creamy Pav Bhaji", image: "/assets/pavbhaji1.jpeg" },
  { id: 3, name: "Spicy Pav Bhaji", image: "/assets/pavbhaji1.jpeg" },
  { id: 4, name: "Cheese Pav Bhaji", image: "/assets/pavbhaji1.jpeg" },
  { id: 5, name: "Classic Pav Bhaji", image: "/assets/pavbhaji1.jpeg" },
  { id: 6, name: "Masala Pav Bhaji", image: "/assets/pavbhaji1.jpeg" },
  { id: 7, name: "Loaded Pav Bhaji", image: "/assets/pavbhaji1.jpeg" },
  { id: 8, name: "Tandoori Pav Bhaji", image: "/assets/pavbhaji1.jpeg" },
];

export default function Gallery() {
  return (
    <div className="mt-36 mb-16 px-5 md:px-20">
      {/* Title with Animation */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🥘 Our Special Pav Bhaji Varieties
      </motion.h2>

      {/* Grid Container */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image with Hover Animation */}
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay with Name */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg md:text-xl font-semibold">
                {product.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
