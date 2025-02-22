
// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// export function SpecialProducts() {
//   const products = [
//     {
//       name: "Fish Burger",
//       description: "Life is like a burger, the more you add to it, the better it becomes.",
//       image: "/fish-burger.jpg",
//     },
//     {
//       name: "Beef Burger",
//       description: "Burger for the body is not enough, there must be a burger for the soul.",
//       image: "/beef-burger.jpg",
//     },
//     {
//       name: "Veggie Burger",
//       description: "Roses are red, violets are blue. The burger costs less than dinner for two.",
//       image: "/veggie-burger.jpg",
//     },
//   ];

//   return (
//     <section className="bg-[#1a1a1a] text-white py-16 px-5 md:px-20">
//       <div className="text-center mb-10">
//         <p className="text-gray-400 uppercase text-sm">Don't need a silver fork to eat a good burger</p>
//         <h2 className="text-4xl font-bold text-[#FBA518]">OUR BURGERS</h2>
//         <p className="text-gray-400 uppercase text-sm">Because we never play with someone's health</p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//         {products.map((product, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.2 }}
//           >
//             <Card className="bg-[#222] text-white shadow-lg rounded-lg overflow-hidden">
//               <CardHeader className="flex flex-col items-center">
//                 <Image src={product.image} width={220} height={220} alt={product.name} className="rounded-lg" />
//                 <CardTitle className="text-2xl font-bold mt-4">{product.name}</CardTitle>
//               </CardHeader>
//               <CardContent className="text-center px-4 pb-4">
//                 <p className="text-gray-300 mt-2">{product.description}</p>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// 3️⃣ Special Products Section - Exact Replica of Design
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function SpecialProducts() {
  const products = [
    {
      name: "Fish Burger",
      description: "Life is like a burger, the more you add to it, the better it becomes.",
      image: "/fish-burger.jpg",
    },
    {
      name: "Beef Burger",
      description: "Burger for the body is not enough, there must be a burger for the soul.",
      image: "/beef-burger.jpg",
    },
    {
      name: "Veggie Burger",
      description: "Roses are red, violets are blue. The burger costs less than dinner for two.",
      image: "/veggie-burger.jpg",
    },
  ];

  return (
    <section className="bg-white   text-black py-16 px-5 md:px-20">
      <div className="text-center mb-10">
        <p className="text-gray-700 uppercase text-sm">Don't need a silver fork to eat a good burger</p>
        <h2 className="text-4xl font-bold text-[#FBA518] border-t-2 border-[#FBA518] inline-block px-6 py-2">OUR BURGERS</h2>
        <p className="text-gray-700 uppercase text-sm mt-2">Because we never play with someone's health</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="text-center"
          >
            <Image src={product.image} width={220} height={220} alt={product.name} className="mx-auto rounded-lg" />
            <h3 className="text-2xl font-bold mt-4 uppercase">{product.name}</h3>
            <p className="text-gray-300 mt-2 max-w-sm mx-auto text-sm">{product.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ✅ Special Products section designed exactly like the reference with structured layout and animations.
