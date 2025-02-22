// // 5️⃣ Tomato Original Sauce Section - Exact Replica with Image and Routing
// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export function TomatoSauceSection() {
//   return (
//     <section className="bg-white text-black py-16 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between">
//       {/* Left Side - Image */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full md:w-1/2"
//       >
//         <Image src="/tomato-sauce.jpg" width={700} height={500} alt="Tomato Sauce" className="rounded-lg shadow-lg" />
//       </motion.div>
      
//       {/* Right Side - Content */}
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full md:w-1/2 text-center md:text-left px-6"
//       >
//         <h2 className="text-[#1a1a1a] text-lg font-semibold tracking-widest">PRESENT</h2>
//         <div className="w-full h-[2px] bg-[#1a1a1a] mt-1 mb-4" />
//         <h3 className="text-4xl font-bold">
//           TOMATO <span className="text-[#E52020]">ORIGINAL</span>
//         </h3>
//         <h4 className="text-2xl font-semibold text-[#E52020] italic">Sauce</h4>
//         <p className="text-gray-600 mt-4">
//           Our signature handmade beef patty, crafted with the finest ingredients for an unforgettable taste.
//         </p>
//         <Link href="/menu" passHref>
//           <button className="mt-6 px-6 py-2 bg-[#E52020] text-white font-bold rounded-lg shadow-lg hover:bg-[#c41616]">VIEW MENUS</button>
//         </Link>
//       </motion.div>
//     </section>
//   );
// }

// // ✅ Tomato Sauce Section now follows exact layout with structured animations and routing.
// 5️⃣ Tomato Original Sauce Section - Full Width Container
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export function TomatoSauceSection() {
  return (
    <section className="bg-gray-100 text-black py-16 px-0 container-full flex flex-col md:flex-row items-center justify-between w-full">
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        <Image src="/tomato-sauce.jpg" layout="responsive" width={1000} height={600} alt="Tomato Sauce" className="w-full h-auto" />
      </motion.div>
      
      {/* Right Side - Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 text-center md:text-left px-10"
      >
        <h2 className="text-[#1a1a1a] text-lg font-semibold tracking-widest">PRESENT</h2>
        <div className="w-full h-[2px] bg-[#1a1a1a] mt-1 mb-4" />
        <h3 className="text-5xl font-bold">
          TOMATO <span className="text-[#E52020]">ORIGINAL</span>
        </h3>
        <h4 className="text-3xl font-semibold text-[#E52020] italic">Sauce</h4>
        <p className="text-gray-600 mt-6 text-lg">
          Our signature handmade beef patty, crafted with the finest ingredients for an unforgettable taste.
        </p>
        <Link href="/menu" passHref>
          <button className="mt-6 px-8 py-3 bg-[#E52020] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#c41616]">VIEW MENUS</button>
        </Link>
      </motion.div>
    </section>
  );
}

// ✅ Tomato Sauce Section is now full width, structured with animations, and properly formatted.
