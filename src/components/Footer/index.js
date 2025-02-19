import { Facebook, Instagram, Linkedin, X } from "lucide-react";
// import logo from "../../assets/footerlogo.png"
// import logo from "../../../public/CODEMASHEENLOGO2.svg"

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-green-300 text-black font-redhat py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Reviews & Certifications */}
          {/* <div>
            <div className="mb-4">
              <p className="font-bold">REVIEWED ON</p>
              <p className="text-lg font-semibold">Clutch</p>
              <p className="text-yellow-400">★★★★★</p>
              <p>48 REVIEWS</p>
            </div>
            <div className="mb-4">
              <p className="font-bold">32 REVIEWS ON DESIGNRUSH</p>
              <p className="text-yellow-400">★★★★☆ 4.9</p>
            </div>
            <div className="bg-red-600 text-black p-4 rounded">
              <p className="font-bold text-lg">Great Place To Work</p>
              <p className="text-sm">Certified</p>
              <p className="text-xs">MAY 2024 - MAY 2025</p>
              <p className="text-xs">INDIA</p>
            </div>
          </div> */}
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-black">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Customer Success Stories</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms Of Use</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-black">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Customer Success Stories</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms Of Use</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Address</h3>
           <p>Dilshad Garden , Delhi - 110095</p>
          </div>
          {/* Quick Links */}
          <div>
          {/* <Image
                    alt="planet"
                    src={logo}
                    width={390}
                    height={390}
                    sizes="10vw"
                  
                  /> */}
          </div>
        </div>

        {/* Social Icons & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
          <div className="flex space-x-4">
            <Linkedin className="w-6 h-6 text-black hover:text-black" />
            <Instagram className="w-6 h-6 text-black hover:text-black" />
            <Facebook className="w-6 h-6 text-black hover:text-black" />
            <X className="w-6 h-6 text-black hover:text-black" />
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 md:mt-0">
            Schedule a Meeting
          </button>
        </div>

        {/* Copyright */}
        <p className="text-center text-black text-sm mt-6">
          Copyright © 2025 Unico Connect Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
