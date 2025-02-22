"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Contact Details
const contactInfo = [
  { id: 1, label: "📍 Address", value: "22 Sindi Colony, Sion, Mumbai - 400022" },
  { id: 2, label: "📞 Phone", value: "+91 9004093499" },
  { id: 3, label: "📧 Email", value: "baraiscafe33@gmail.com" },
];

// Opening Hours
const openingHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 10:00 PM" },
  { day: "Saturday - Sunday", hours: "9:00 AM - 11:00 PM" },
];

export default function FindUs() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center bg-black">
        <Image
          src="/assets/baraibanner-02.jpg"
          alt="Find BARAI'Z Café"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
        <motion.h1
          className="absolute text-white text-4xl md:text-6xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Find Us
        </motion.h1>
      </div>

      {/* Contact Section */}
      <div className="w-[90%] max-w-[120rem] mx-auto py-[5rem]">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-[3rem]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Information
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {contactInfo.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-[2rem] border border-gray-200"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-[0.5rem]">{item.label}</h3>
              <p className="text-gray-600">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Google Maps Section with PIN */}
      <div className="w-[90%] max-w-[120rem] mx-auto py-[5rem]">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-[2rem]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          📍 Our Location
        </motion.h2>

        <motion.div
          className="w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-lg border border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed/v1/place?q=22+Sindi+Colony,+Sion,+Mumbai+-+400022&key=YOUR_GOOGLE_MAPS_API_KEY"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>

      {/* Opening Hours */}
      <div className="w-[90%] max-w-[120rem] mx-auto py-[5rem]">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-[3rem]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ⏰ Opening Hours
        </motion.h2>

        <motion.div
          className="bg-white shadow-lg rounded-lg p-[3rem] border border-gray-200 text-center w-full md:w-[50%] mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {openingHours.map((item, index) => (
            <p key={index} className="text-lg text-gray-600 mb-[0.5rem]">
              <strong>{item.day}:</strong> {item.hours}
            </p>
          ))}
        </motion.div>
      </div>

      {/* Social Media Links */}
      <div className="bg-[#E52020] text-white text-center py-[5rem]">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-[2rem]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Follow Us for Updates
        </motion.h2>
        <motion.div
          className="flex justify-center gap-[1.5rem] text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link href="https://facebook.com" target="_blank">
            <motion.i
              className="fab fa-facebook hover:text-gray-300"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            ></motion.i>
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <motion.i
              className="fab fa-instagram hover:text-gray-300"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            ></motion.i>
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <motion.i
              className="fab fa-twitter hover:text-gray-300"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            ></motion.i>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
