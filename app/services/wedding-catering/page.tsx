"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WeddingCateringPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-10">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#E52020] mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Wedding Catering
      </motion.h2>

      <div className="w-[90%] max-w-5xl mx-auto">
        <Image
          src="/assets/wedding-catering.jpg"
          alt="Wedding Catering"
          width={800}
          height={450}
          className="w-full rounded-lg shadow-lg"
        />

        <p className="text-lg text-gray-700 mt-6 leading-relaxed">
          Make your special day unforgettable with our premium wedding catering
          services. We offer a wide range of customized menus, live food
          stations, and exceptional presentation to delight your guests.
        </p>
      </div>
    </div>
  );
}
