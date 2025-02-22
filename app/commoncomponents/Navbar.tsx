// "use client";
// import { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { FaBars } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
// import LogoImg from "@/public/assets/png-01.png";

// export function Navbar() {
//   const router = useRouter();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [servicesDropdown, setServicesDropdown] = useState(false);
//   const [galleryDropdown, setGalleryDropdown] = useState(false);

//   const servicesRef = useRef<HTMLDivElement>(null);
//   const galleryRef = useRef<HTMLDivElement>(null);

//   // Detect Scroll & Change Navbar Background
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         servicesRef.current &&
//         !servicesRef.current.contains(event.target as Node)
//       ) {
//         setServicesDropdown(false);
//       }
//       if (
//         galleryRef.current &&
//         !galleryRef.current.contains(event.target as Node)
//       ) {
//         setGalleryDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center md:px-10 lg:px-20 transition-all duration-100 ${
//         scrolled ? "bg-[#E52020] text-white shadow-lg" : "bg-red-600 text-white"
//       }`}
//     >
//       {/* Left - Navigation Links */}
//       <div className="hidden md:flex gap-6 text-sm md:text-lg font-semibold">
//         <Link href="/" className="hover:text-yellow-400">
//           HOME
//         </Link>
//         <Link href="/aboutus" className="hover:text-yellow-400">
//           ABOUT US
//         </Link>
//         <Link href="/menu" className="hover:text-yellow-400">
//           OUR MENUS
//         </Link>

//         {/* GALLERY - Click Dropdown with Click-Outside Close */}
//         <div className="relative" ref={galleryRef}>
//           <button
//             className="flex items-center gap-1 hover:text-yellow-400"
//             onClick={() => setGalleryDropdown(!galleryDropdown)}
//           >
//             GALLERY <IoIosArrowDown className="w-4 h-4 mt-1" />
//           </button>
//           {galleryDropdown && (
//             <div className="absolute left-0 mt-2 w-[180px] bg-white text-black shadow-lg rounded-lg overflow-hidden">
//               <Link
//                 href="/gallery/photo"
//                 className="block px-4 py-2 hover:bg-gray-200"
//                 onClick={() => setGalleryDropdown(false)}
//               >
//                 Photo Gallery
//               </Link>
//               <Link
//                 href="/gallery/video"
//                 className="block px-4 py-2 hover:bg-gray-200"
//                 onClick={() => setGalleryDropdown(false)}
//               >
//                 Video Gallery
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Center - Logo */}
//       <div
//         className="flex justify-center cursor-pointer"
//         onClick={() => router.push("/")}
//       >
//         <Image
//           src={LogoImg}
//           alt="BARAI'Z Café Logo"
//           className="w-[120px] h-[60px] md:w-[150px] md:h-[80px] lg:w-[200px] lg:h-[100px] object-contain"
//         />
//       </div>

//       {/* Right - Action Links */}
//       <div className="hidden md:flex gap-4 md:gap-6 text-sm md:text-lg font-semibold">
//         {/* SERVICES - Click Dropdown with Click-Outside Close */}
//         <div className="relative" ref={servicesRef}>
//           <button
//             className="flex items-center gap-1 hover:text-yellow-400"
//             onClick={() => setServicesDropdown(!servicesDropdown)}
//           >
//             SERVICES <IoIosArrowDown className="w-4 h-4 mt-1" />
//           </button>
//           {servicesDropdown && (
//             <div className="absolute left-0 mt-2 w-[200px] bg-white text-black shadow-lg rounded-lg overflow-hidden">
//               <Link
//                 href="/services"
//                 className="block px-4 py-2 hover:bg-gray-200"
//                 onClick={() => setServicesDropdown(false)}
//               >
//                 All Services
//               </Link>
//               <Link
//                 href="/services/wedding-catering"
//                 className="block px-4 py-2 hover:bg-gray-200"
//                 onClick={() => setServicesDropdown(false)}
//               >
//                 Wedding Catering
//               </Link>
//               <Link
//                 href="/services/corporate-catering"
//                 className="block px-4 py-2 hover:bg-gray-200"
//                 onClick={() => setServicesDropdown(false)}
//               >
//                 Corporate Catering
//               </Link>
//               <Link
//                 href="/services/birthday-catering"
//                 className="block px-4 py-2 hover:bg-gray-200"
//                 onClick={() => setServicesDropdown(false)}
//               >
//                 Birthday Catering
//               </Link>
//             </div>
//           )}
//         </div>

//         <Link href="/order-online" className="hover:text-yellow-400">
//           ORDER ONLINE
//         </Link>
//         <Link href="/find-us" className="hover:text-yellow-400">
//           CONTACT US
//         </Link>
//         <Link href="/find-us" className="hover:text-yellow-400">
//           FIND US
//         </Link>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden">
//         <Button
//           variant="outline"
//           className="border-white text-white"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <FaBars className="w-6 h-6" />
//         </Button>
//       </div>
//     </nav>
//   );
// }
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import LogoImg from "@/public/assets/png-01.png";

export function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [galleryDropdown, setGalleryDropdown] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-red-600 z-50 shadow-lg h-[80px] flex items-center">
      <div className="flex items-center w-full max-w-screen-xl mx-auto justify-between">
        
        {/* Left - Bigger Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => router.push("/")}>
          <Image
            src={LogoImg}
            alt="BARAI'Z Café Logo"
            className="w-[140px] h-[60px] md:w-[180px] md:h-[80px] lg:w-[200px] lg:h-[90px] object-contain"
          />
        </div>

        {/* Center - Desktop Navigation */}
        <div className="hidden md:flex flex-grow justify-center gap-8 text-white font-semibold text-sm md:text-lg">
          <Link href="/" className="hover:text-yellow-400">HOME</Link>
          <Link href="/aboutus" className="hover:text-yellow-400">ABOUT US</Link>
          <Link href="/menu" className="hover:text-yellow-400">OUR MENUS</Link>

          {/* GALLERY - Dropdown */}
          <div className="relative">
            <button onClick={() => setGalleryDropdown(!galleryDropdown)} className="flex items-center gap-1 hover:text-yellow-400">
              GALLERY <IoIosArrowDown className="w-4 h-4 mt-1" />
            </button>
            {galleryDropdown && (
              <div className="absolute left-0 mt-2 w-[180px] bg-white text-black shadow-lg rounded-lg overflow-hidden">
                <Link href="/gallery/photo" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setGalleryDropdown(false)}>Photo Gallery</Link>
                <Link href="/gallery/video" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setGalleryDropdown(false)}>Video Gallery</Link>
              </div>
            )}
          </div>

          {/* SERVICES - Dropdown */}
          <div className="relative">
            <button onClick={() => setServicesDropdown(!servicesDropdown)} className="flex items-center gap-1 hover:text-yellow-400">
              SERVICES <IoIosArrowDown className="w-4 h-4 mt-1" />
            </button>
            {servicesDropdown && (
              <div className="absolute left-0 mt-2 w-[200px] bg-white text-black shadow-lg rounded-lg overflow-hidden">
                <Link href="/services" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setServicesDropdown(false)}>All Services</Link>
                <Link href="/services/wedding-catering" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setServicesDropdown(false)}>Wedding Catering</Link>
                <Link href="/services/corporate-catering" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setServicesDropdown(false)}>Corporate Catering</Link>
                <Link href="/services/birthday-catering" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setServicesDropdown(false)}>Birthday Catering</Link>
              </div>
            )}
          </div>

          <Link href="/order-online" className="hover:text-yellow-400">ORDER ONLINE</Link>
          <Link href="/find-us" className="hover:text-yellow-400">CONTACT US</Link>
          <Link href="/find-us" className="hover:text-yellow-400">FIND US</Link>
        </div>

        {/* Right - Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="outline" className="border-white text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white text-gray-900 p-5 md:hidden shadow-lg">
          <div className="flex flex-col gap-4 text-lg">
            <Link href="/" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>HOME</Link>
            <Link href="/aboutus" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
            <Link href="/menu" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>OUR MENUS</Link>

            {/* GALLERY - Mobile Dropdown */}
            <div>
              <button className="flex justify-between w-full" onClick={() => setGalleryDropdown(!galleryDropdown)}>
                GALLERY <IoIosArrowDown className="w-4 h-4 mt-1" />
              </button>
              {galleryDropdown && (
                <div className="flex flex-col gap-2 mt-2 pl-4">
                  <Link href="/gallery/photo" className="hover:text-yellow-400" onClick={() => { setGalleryDropdown(false); setMenuOpen(false); }}>Photo Gallery</Link>
                  <Link href="/gallery/video" className="hover:text-yellow-400" onClick={() => { setGalleryDropdown(false); setMenuOpen(false); }}>Video Gallery</Link>
                </div>
              )}
            </div>

            {/* SERVICES - Mobile Dropdown */}
            <div>
              <button className="flex justify-between w-full" onClick={() => setServicesDropdown(!servicesDropdown)}>
                SERVICES <IoIosArrowDown className="w-4 h-4 mt-1" />
              </button>
              {servicesDropdown && (
                <div className="flex flex-col gap-2 mt-2 pl-4">
                  <Link href="/services" className="hover:text-yellow-400" onClick={() => { setServicesDropdown(false); setMenuOpen(false); }}>All Services</Link>
                  <Link href="/services/wedding-catering" className="hover:text-yellow-400" onClick={() => { setServicesDropdown(false); setMenuOpen(false); }}>Wedding Catering</Link>
                  <Link href="/services/corporate-catering" className="hover:text-yellow-400" onClick={() => { setServicesDropdown(false); setMenuOpen(false); }}>Corporate Catering</Link>
                  <Link href="/services/birthday-catering" className="hover:text-yellow-400" onClick={() => { setServicesDropdown(false); setMenuOpen(false); }}>Birthday Catering</Link>
                </div>
              )}
            </div>

            <Link href="/order-online" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>ORDER ONLINE</Link>
            <Link href="/find-us" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
            <Link href="/find-us" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>FIND US</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
