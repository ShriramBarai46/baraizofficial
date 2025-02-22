// // "use client";

// // import { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { ChevronLeft, ChevronRight } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import img from "@/public/reservation-page.jpg";

// // const images = [
// //   { src: "/assets/reservation-page.jpg", alt: "Delicious Food Item 1" },
// //   { src: "/assets/slider-2.jpg", alt: "Tasty Beverage" },
// //   { src: "/assets/slider-3.jpg", alt: "Freshly Cooked Dish" },
// // ];

// // export default function Carousel() {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   // Auto-slide every 4 seconds
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       nextSlide();
// //     }, 4000);
// //     return () => clearInterval(interval);
// //   }, [currentIndex]);

// //   const nextSlide = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// //   };

// //   const prevSlide = () => {
// //     setCurrentIndex((prevIndex) =>
// //       prevIndex === 0 ? images.length - 1 : prevIndex - 1
// //     );
// //   };

// //   return (
// //     <div className="relative w-full h-[80vh] md:h-[30rem] lg:h-[50rem] overflow-hidden">
// //       <AnimatePresence>
// //         <motion.img
// //           key={images[currentIndex].src}
// //           src={images[currentIndex].src}
// //           alt={images[currentIndex].alt} // ✅ Alt tag added for accessibility
// //           className="absolute w-full h-full object-cover"
// //           initial={{ opacity: 0, x: 100 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           exit={{ opacity: 0, x: -100 }}
// //           transition={{ duration: 0.8 }}
// //         />
// //       </AnimatePresence>

// //       {/* Navigation Buttons */}
// //       <Button
// //         className="absolute left-5 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white hover:bg-black/70"
// //         onClick={prevSlide}
// //       >
// //         <ChevronLeft size={30} />
// //       </Button>

// //       <Button
// //         className="absolute right-5 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white hover:bg-black/70"
// //         onClick={nextSlide}
// //       >
// //         <ChevronRight size={30} />
// //       </Button>

// //       {/* Indicator Dots */}
// //       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
// //         {images.map((_, index) => (
// //           <div
// //             key={index}
// //             className={`h-3 w-3 rounded-full ${
// //               index === currentIndex ? "bg-white" : "bg-gray-400"
// //             }`}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const images = [
//   { src: "/assets/reservation-page.jpg", alt: "Delicious Food Item 1" },
//   { src: "/assets/slider-2.jpg", alt: "Tasty Beverage" },
//   { src: "/assets/slider-3.jpg", alt: "Freshly Cooked Dish" },
// ];

// export default function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background Image Animation */}
//       <AnimatePresence>
//         <motion.img
//           key={images[currentIndex].src}
//           src={images[currentIndex].src}
//           alt={images[currentIndex].alt}
//           className="absolute w-full h-full object-cover"
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -100 }}
//           transition={{ duration: 0.8 }}
//         />
//       </AnimatePresence>

//       {/* Overlay Content */}
//       {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
//         <div className="text-center">
//           <h1 className="text-4xl md:text-6xl font-bold">Our Mantra</h1>
//           <p className="text-2xl md:text-4xl italic">Khana All Time!</p>
//         </div>
//       </div> */}

//       {/* Navigation Buttons */}
//       <Button
//         className="absolute left-5 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white hover:bg-black/70"
//         onClick={prevSlide}
//       >
//         <ChevronLeft size={30} />
//       </Button>

//       <Button
//         className="absolute right-5 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white hover:bg-black/70"
//         onClick={nextSlide}
//       >
//         <ChevronRight size={30} />
//       </Button>

//       {/* Indicator Dots */}
//       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`h-3 w-3 rounded-full ${
//               index === currentIndex ? "bg-white" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  { src: "/assets/reservation-page.jpg", alt: "Delicious Food Item 1" },
  { src: "/assets/slider-2.jpg", alt: "Tasty Beverage" },
  { src: "/assets/slider-3.jpg", alt: "Freshly Cooked Dish" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handle touch swipe for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const swipeDistance = touchStart - touchEnd;

    if (swipeDistance > 50) {
      nextSlide(); // Swiped left
    } else if (swipeDistance < -50) {
      prevSlide(); // Swiped right
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image Animation */}
      <AnimatePresence>
        <motion.img
          key={images[currentIndex].src}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Overlay Content */}
      {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white px-6 md:px-12 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Our Mantra</h1>
        <p className="text-lg md:text-2xl lg:text-4xl italic mt-2">Khana All Time!</p>
      </div> */}

      {/* Navigation Buttons */}
      <Button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 text-white hover:bg-black/70"
        onClick={prevSlide}
      >
        <ChevronLeft size={25} />
      </Button>

      <Button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 text-white hover:bg-black/70"
        onClick={nextSlide}
      >
        <ChevronRight size={25} />
      </Button>

      {/* Indicator Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
