// 4️⃣ Menu & Order Delivery Section - Exact Replica with Image and Routing
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import LeftSideImg from '@/public/assets/welcome-1.jpg'
export function MenuOrderSection() {
  return (
    <section className="bg-[#1a1a1a] text-white py-16 px-5 md:px-20">
      <div className="text-center mb-6">
        <h2 className="text-[#FBA518] text-lg font-semibold tracking-widest">HAVE IT YOUR WAY</h2>
        <div className="w-full h-[2px] bg-[#FBA518] mt-1 mb-10" />
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3"
        >
          <Image src={LeftSideImg} width={400} height={400} alt="Burger" className="rounded-lg shadow-lg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white text-black p-8 rounded-lg shadow-lg w-full md:w-1/3"
        >
          <h3 className="text-2xl font-bold">
            <span className="text-[#FBA518]">OUR </span>MENUS
          </h3>
          <p className="text-gray-600 mt-2">Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
          <Link href="/menu" passHref>
            <button className="mt-4 px-6 py-2 bg-[#FBA518] text-white font-bold rounded-lg shadow-lg hover:bg-[#d98c18]">VIEW MENUS</button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white text-black p-8 rounded-lg shadow-lg w-full md:w-1/3"
        >
          <h3 className="text-2xl font-bold">
            <span className="text-[#FBA518]">ORDER </span>DELIVERY
          </h3>
          <p className="text-gray-600 mt-2">Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
          <Link href="/order" passHref>
            <button className="mt-4 px-6 py-2 bg-black text-white font-bold rounded-lg shadow-lg hover:bg-gray-800">ORDER ONLINE</button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ✅ Menu & Order Delivery section now includes left-side image, animations, structured layout, and routing.
