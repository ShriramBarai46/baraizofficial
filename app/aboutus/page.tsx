"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
  animate,
} from "framer-motion";
import Image from "next/image";

// Define prop types for Counter component
interface CounterProps {
  to: number;
}

// Counter Component (With Auto Animation & Responsiveness)
const Counter: React.FC<CounterProps> = ({ to }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const animatedText = useMotionTemplate`${rounded}+`; // Converts MotionValue to string

  useEffect(() => {
    const controls = animate(count, to, { duration: 5, ease: "easeOut" });
    return controls.stop; // Stops animation when unmounting
  }, [count, to]);

  return (
    <motion.span className="text-red-600 text-4xl sm:text-5xl font-bold">
      {animatedText}
    </motion.span>
  );
};

// Team Members or Achievements Data
const highlights = [
  { id: 1, title: "Best Street Café Award", image: "/assets/baraireden.jpg" },
  { id: 2, title: "100+ Happy Customers", image: "/assets/baraireden.jpg" },
  {
    id: 3,
    title: "Fresh & Organic Ingredients",
    image: "/assets/baraireden.jpg",
  },
];

export default function AboutUs() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] flex items-center justify-center bg-black">
        <Image
          src="/assets/baraibanner-02.jpg"
          alt="BARAI'Z Café"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
        <motion.h1
          className="absolute text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to BARAI'Z Café
        </motion.h1>
      </div>

     
      {/* Our Story Section */}
      <div className="w-full bg-gray-50 py-[4rem] sm:py-[5rem]">
        <div className="container px-4 sm:px-6 lg:px-12 mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Founder Image - Centered on Mobile, Left on Desktop */}
          <motion.div
            className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/assets/founder.jpeg" // Ensure this image exists in the /public/assets folder
              alt="Kamlesh Barai - Founder of BARAI'Z Pav Bhaji"
              width={400}
              height={500}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Story Content */}
          <div className="w-full max-w-3xl text-center lg:text-left">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-left mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Since 1983 – Welcome to BARAI'Z Pav Bhaji
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-gray-600 leading-relaxed px-4 sm:px-6 md:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              BARAI'Z Pav Bhaji started in 1983 by Kamlesh Barai in Sion,
              Mumbai. He began as a hawker, walking through lanes, schools, and
              neighborhoods, serving fresh, flavorful pav bhaji to people
              wherever they were. Schools like M.P. Bhuta High School, Little
              Angel School, and Premier High School were some of the places
              where he regularly served his delicious pav bhaji to students and
              staff. His dedication and passion for quality food soon made him a
              well-known name in the area.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-gray-600 leading-relaxed mt-4 px-4 sm:px-6 md:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              With hard work and a passion for great food, he built something
              special. What started as a simple street stall grew into a name
              that people trust and love. Over the years, BARAI'Z Pav Bhaji
              became more than just a local favorite—it became a go-to spot for
              authentic Mumbai-style pav bhaji.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-gray-600 leading-relaxed mt-4 px-4 sm:px-6 md:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Today, we’re proud to continue this journey, serving the same rich
              flavors and quality that started it all. From the streets to top
              caterers and food businesses in Mumbai, our story is still being
              written—one plate at a time.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="w-[90%] max-w-[120rem] mx-auto py-[4rem] sm:py-[5rem]">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-[2rem]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Makes Us Special?
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {highlights.map((item) => (
            <motion.div
              key={item.id}
              className="relative rounded-xl overflow-hidden shadow-lg bg-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-[10rem] sm:h-[12rem] md:h-[15rem] object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black/70 text-white text-center p-[0.5rem] sm:p-[1rem]">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Counter Section */}
      <div className="relative w-full py-[3rem] sm:py-[4rem] bg-white">
        {/* Counter Content */}
        <div className="relative flex flex-col sm:flex-row items-center justify-around w-[90%] max-w-[1200px] mx-auto text-center text-red-500 space-y-8 sm:space-y-0">
          <div className="flex flex-col items-center">
            <Counter to={40} />
            <p className="text-base sm:text-lg">Years of Experience</p>
          </div>

          <div className="flex flex-col items-center">
            <Counter to={2891} />
            <p className="text-base sm:text-lg">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#E52020] text-white text-center py-[4rem] sm:py-[5rem]">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-[2rem] px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Come & Experience BARAI'Z Café
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg text-center max-w-2xl mx-auto px-4 mb-4 sm:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Whether it's Pav Bhaji, South Swadith, Sandwiches, or Cold Drinks, we
          have something delicious waiting for you!
        </motion.p>

        <motion.button
          className="bg-white text-[#E52020] px-[1.5rem] sm:px-[2rem] py-[0.8rem] sm:py-[1rem] text-sm sm:text-base font-bold rounded-full shadow-lg hover:bg-gray-200 transition"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Visit Us Today
        </motion.button>
      </div>
    </div>
  );
}
