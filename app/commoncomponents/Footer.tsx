// 7️⃣ Footer Section - Inspired by Zomato Footer
"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";
import LogoImg from "@/public/assets/baraireden.jpg";


export function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="md:col-span-1">
          <Image src={LogoImg} width={120} height={40} alt="Barai Cafe Logo" />
        </div>

        {/* About Section */}
        <div>
          
          <h4 className="text-lg font-bold">ABOUT BARAI'Z</h4>
          <ul className="mt-2 space-y-2 text-sm text-gray-700">
            <li><Link href="#">Who We Are</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Work With Us</Link></li>
            <li><Link href="#">Investor Relations</Link></li>
            <li><Link href="#">Report Fraud</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold">BARAI'Z SERVICES</h4>
          <ul className="mt-2 space-y-2 text-sm text-gray-700">
            <li><Link href="#">Our Menu</Link></li>
            <li><Link href="#">Delivery Service</Link></li>
            <li><Link href="#">Catering</Link></li>
            <li><Link href="#">Franchise</Link></li>
          </ul>
        </div>

        {/* Learn More */}
        <div>
          <h4 className="text-lg font-bold">LEARN MORE</h4>
          <ul className="mt-2 space-y-2 text-sm text-gray-700">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Security</Link></li>
            <li><Link href="#">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Social & App Links */}
        <div>
          <h4 className="text-lg font-bold">FOLLOW US</h4>
          <div className="flex space-x-4 text-2xl text-gray-700 mt-2">
            <FaFacebook className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
          </div>
          {/* <div className="mt-4 flex flex-col space-y-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Image src="/appstore.png" width={120} height={40} alt="App Store" />
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Image src="/playstore.png" width={120} height={40} alt="Google Play" />
            </Button>
          </div> */}
        </div>
      </div>

      {/* Bottom Disclaimer */}
      <div className="text-center text-xs text-gray-600 mt-8">
        &copy; {new Date().getFullYear()} BARAI'Z. All rights reserved. By using this site, you agree to our <Link href="#">Terms of Service</Link>, <Link href="#">Privacy Policy</Link>, and <Link href="#">Cookie Policy</Link>.
      </div>
    </footer>
  );
}

// ✅ Footer Section now replicates Zomato's design with social links and app download buttons.