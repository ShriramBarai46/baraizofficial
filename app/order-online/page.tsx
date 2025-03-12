// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Minus, Plus, ShoppingCart } from "lucide-react";

// // Define Types
// interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// // Menu Categories
// const categories = ["All", "Pav Bhaji", "Sandwiches", "Juices", "Frankie", "Cold Drinks"];

// // Menu Items (without quantity)
// const menuItems = [
//   { id: 1, name: "Classic Pav Bhaji", price: 120, category: "Pav Bhaji", image: "/assets/pavbhaji1.jpeg" },
//   { id: 2, name: "Cheese Pav Bhaji", price: 150, category: "Pav Bhaji", image: "/assets/pavbhaji1.jpeg" },
//   { id: 3, name: "Veg Sandwich", price: 90, category: "Sandwiches", image: "/assets/pavbhaji1.jpeg" },
//   { id: 4, name: "Cold Coffee", price: 110, category: "Juices", image: "/assets/pavbhaji1.jpeg" },
//   { id: 5, name: "Paneer Frankie", price: 130, category: "Frankie", image: "/assets/pavbhaji1.jpeg" },
//   { id: 6, name: "Lemon Soda", price: 60, category: "Cold Drinks", image: "/assets/pavbhaji1.jpeg" },
// ];

// export default function OrderOnline() {
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");
//   const [cart, setCart] = useState<{ [key: number]: CartItem }>({});

//   // Filtered Items
//   const filteredItems = selectedCategory === "All" ? menuItems : menuItems.filter(item => item.category === selectedCategory);

//   // ✅ Fixed: Ensure `quantity` is added when calling `addToCart`
//   const addToCart = (item: Omit<CartItem, "quantity">) => {
//     setCart((prev) => ({
//       ...prev,
//       [item.id]: prev[item.id]
//         ? { ...prev[item.id], quantity: prev[item.id].quantity + 1 }
//         : { ...item, quantity: 1 }, // ✅ Add quantity when inserting new item
//     }));
//   };

//   // Handle Remove from Cart
//   const removeFromCart = (id: number) => {
//     setCart((prev) => {
//       if (!prev[id]) return prev;
//       const updatedCart = { ...prev };
//       updatedCart[id].quantity -= 1;
//       if (updatedCart[id].quantity === 0) delete updatedCart[id];
//       return updatedCart;
//     });
//   };

//   return (
//     <div className="w-full bg-gray-50 py-[5rem]">
//       <div className="w-[90%] max-w-[120rem] mx-auto">
//         {/* Page Title */}
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-center mb-[3rem]"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           🛒 Order Online
//         </motion.h2>

//         {/* Categories Filter */}
//         <motion.div
//           className="flex justify-center gap-[1rem] mb-[3rem] flex-wrap"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           {categories.map((category) => (
//             <button
//               key={category}
//               className={`px-[1.5rem] py-[0.8rem] rounded-full text-lg font-semibold transition ${
//                 selectedCategory === category ? "bg-[#E52020] text-white" : "bg-gray-200 text-gray-800"
//               }`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </motion.div>

//         {/* Menu Grid */}
//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[1.5rem]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           {filteredItems.map((item) => (
//             <motion.div
//               key={item.id}
//               className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white p-4"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               {/* Image */}
//               <Image src={item.image} alt={item.name} width={400} height={300} className="w-full h-[12rem] object-cover" />

//               {/* Item Info */}
//               <div className="text-center mt-3">
//                 <h3 className="text-lg font-semibold">{item.name}</h3>
//                 <p className="text-gray-600">₹{item.price}</p>
//               </div>

//               {/* Add to Cart Button */}
//               <div className="flex justify-center items-center gap-4 mt-3">
//                 <button
//                   className="bg-[#E52020] text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
//                   onClick={() => addToCart(item)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Cart Section */}
//         {Object.keys(cart).length > 0 && (
//           <motion.div className="bg-white shadow-lg rounded-lg p-6 mt-[5rem]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
//             <h3 className="text-2xl font-bold text-center mb-4">🛍 Your Cart</h3>

//             {Object.values(cart).map((item) => (
//               <div key={item.id} className="flex justify-between items-center py-2 border-b">
//                 <span className="text-lg font-semibold">{item.name}</span>
//                 <div className="flex items-center gap-3">
//                   <button className="p-2 bg-gray-300 rounded-full" onClick={() => removeFromCart(item.id)}>
//                     <Minus size={18} />
//                   </button>
//                   <span className="text-lg">{item.quantity}</span>
//                   <button className="p-2 bg-gray-300 rounded-full" onClick={() => addToCart(item)}>
//                     <Plus size={18} />
//                   </button>
//                 </div>
//               </div>
//             ))}

//             {/* Checkout Button */}
//             <button className="w-full bg-[#E52020] text-white text-lg font-semibold mt-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition">
//               Checkout Now <ShoppingCart className="inline ml-2" size={20} />
//             </button>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }



"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OrderPage() {
  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Order Online</h1>
      <p className="text-gray-700 text-lg mb-4 text-center">
        Enjoy BARAI'Z Café at your home. Order from your favorite platform or visit us directly!
      </p>

      {/* Button Container */}
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {/* Zomato Button */}
        <motion.a
          href="https://www.zomato.com/" // Replace with your Zomato listing
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="px-6 py-3 w-48 text-center bg-red-500 text-white font-bold rounded-lg shadow-lg text-lg"
        >
          Zomato
        </motion.a>

        {/* Swiggy Button */}
        <motion.a
          href="https://www.swiggy.com/" // Replace with your Swiggy listing
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="px-6 py-3 w-48 text-center bg-orange-500 text-white font-bold rounded-lg shadow-lg text-lg"
        >
          Swiggy
        </motion.a>

        {/* MagicPin Button */}
        <motion.a
          href="https://www.magicpin.in/" // Replace with your MagicPin listing
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="px-6 py-3 w-48 text-center bg-blue-500 text-white font-bold rounded-lg shadow-lg text-lg"
        >
          MagicPin
        </motion.a>

        {/* Order at Direct Store Button */}
        <Link href="/find-us">
          <motion.button
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="px-6 py-3 w-48 bg-green-600 text-white font-bold rounded-lg shadow-lg text-lg"
          >
            Order at Store
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
