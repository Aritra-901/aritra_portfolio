import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-8">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Company Info Section - Left Side */}
          <div className="flex flex-col lg:pr-8">
            <div className="mb-4 mt-4 flex items-center gap-4">
              <img
                src="/creatives/NextPulse.png"
                alt="NextPulse Logo"
                className="h-18 w-auto"
              />
            </div>
            <h3 className="text-white text-xl font-bold mb-3">
              NextPulse Technology
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              We build custom digital solutions to streamline business processes
              and enhance customer engagement. Transforming ideas into powerful
              digital experiences that drive growth and innovation.
            </p>
          
          </div>

          {/* Right Side - 3 Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quick Links Section */}
            <div className="flex flex-col">
              <h4 className="text-white text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 text-sm hover:text-blue-500 transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/#about"
                    className="text-gray-400 text-sm hover:text-blue-500 transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/#services"
                    className="text-gray-400 text-sm hover:text-blue-500 transition-colors duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/products-services"
                    className="text-gray-400 text-sm hover:text-blue-500 transition-colors duration-300"
                  >
                    Products & Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="flex flex-col">
              <h4 className="text-white text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
                Support
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/#contact"
                    className="text-gray-400 text-sm hover:text-blue-500 transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-400 text-sm hover:text-blue-500 transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-blue-500 transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="text-gray-400 text-sm hover:text-blue-500 transition-colors duration-300">
                    FAQ
                  </a>
                </li> */}
              </ul>
            </div>

          
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-white text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
                    Get in Touch
                    </h4>
                    <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <Mail size={14} className="text-blue-500 flex-shrink-0" />
                    <span className="text-gray-400 text-left">connect@nextpulse.co.in</span> 
                    </div>
                    <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <Phone size={14} className="text-blue-500 flex-shrink-0" />
                    <span className="text-gray-400 text-left">+91-8585058602</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                    <MapPin
                      size={14}
                      className="text-blue-500 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-left">
                      Unit No. 1501, Aurora Waterfront
                      <br />
                      GN 34/1, Sector - V<br />
                      Kolkata, W.B
                      <br />
                      700091, India
                    </span>
                    </div>
                  </div>
                  </div>
                </div>
                </div>

           
      <div className="bg-gray-900 border-t border-gray-700 mt-8 py-4">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} NextPulse Technology. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
