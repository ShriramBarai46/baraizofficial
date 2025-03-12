"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh",
    role: "Customer, celebrated a special occasion",
    text: "Amazing team! Smiling, always nice to talk with, they always have the best recommendations for you, adapted to your taste! Must try their Pav Bhaji, it's absolutely delicious!",
    image: "/assets/rajesh.jpg",
  },
  {
    name: "Priya",
    role: "Regular Customer",
    text: "A truly fantastic experience! The flavors are rich, and the atmosphere is warm and welcoming. The Matka Dosa is a must-try, crisp and loaded with flavors!",
    image: "/assets/priya.jpg",
  },
  {
    name: "Arjun",
    role: "Food Blogger",
    text: "Highly recommended for anyone who loves authentic street food flavors. Their Kesar Pista Kulfi is the best I’ve ever had—creamy, rich, and full of flavor!",
    image: "/assets/arjun.jpg",
  },
];

export function TestimonialSection() {
  return (
    <section className="bg-white text-black py-16 px-5 md:px-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <Carousel>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="p-4">
                <Card className="shadow-lg p-8 bg-white text-black rounded-lg flex flex-col items-center border">
                  {/* Testimonial Text */}
                  <p className="text-xl italic text-gray-800 leading-relaxed">"{testimonial.text}"</p>

                  {/* Customer Image & Details */}
                  <div className="flex flex-col items-center mt-6">
                    <Image src={testimonial.image} width={60} height={60} alt={testimonial.name} className="rounded-full border-2 border-gray-300" />
                    <h4 className="mt-3 text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </section>
  );
}
