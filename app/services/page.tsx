"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Wedding Catering",
    description:
      "Make your special day unforgettable with our premium wedding catering services.",
    image: "/assets/baraireden.jpg",
    link: "/services/wedding-catering",
  },
  {
    id: 2,
    title: "Corporate Catering",
    description:
      "Professional catering for business events, corporate meetings, and large gatherings.",
    image: "/assets/reservation-page.jpg",
    link: "/services/corporate-catering",
  },
  {
    id: 3,
    title: "Birthday Catering",
    description:
      "Celebrate birthdays with delicious and customizable catering options.",
    image: "/assets/reservation-page.jpg",
    link: "/services/birthday-catering",
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-10">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#E52020] mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Catering Services
      </motion.h2>

      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={350}
              className="w-full h-[250px] object-cover"
            />

            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#E52020] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>

              <Link href={service.link}>
                <motion.button
                  className="mt-4 bg-[#E52020] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#c91717] transition"
                  whileHover={{ scale: 1.05 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
