
import { Link } from "react-router-dom";
import ButtonWA from "./buttonWA";
import logo from "../assets/logo.png";
import { useState, useEffect, useRef } from 'react';


const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [leaveTimeout, setLeaveTimeout] = useState(null);
  const timeoutRef = useRef(null);

  const onMouseLeave = () => {
    clearTimeout(timeoutRef.current); // pastikan ini
    timeoutRef.current = setTimeout(() => {
      // some code
    }, 300);
  };
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Logo on the left */}
      <div className="flex-shrink-0 mr-10 ml-6"> {/* Tambahkan margin kanan */}
         <Link to="/#home" className="text-2xl font-bold text-gray-800">
          <img 
            src={logo} 
            alt="CO2 Labs Logo" 
            className="h-12 md:h-10 w-auto" // Diperbesar dan responsive
          />
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Navigation links */}
      <div className="hidden md:flex items-center space-x-8">
        <div 
        
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button className="flex items-center text-gray-700 hover:text-blue-600">
            Our Services <span className="ml-1">▼</span>
          </button>

          <div
            className={`absolute top-full left-0 w-[700px] grid grid-cols-2 gap-4 p-4 bg-white rounded-lg shadow-lg z-50 transition-all duration-200 ${
              isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            }`}
          >
            {/* Website Maintenance */}
            <Link to="/services/web-maintenance" onClick={() => setIsServicesOpen(false)} className="flex gap-4 hover:bg-gray-50 p-2 rounded-lg transition items-center">
              <div className="bg-red-100 p-2 rounded-md text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Website Maintenance</h4>
                <p className="text-sm text-gray-600">Keep your website running smoothly and securely</p>
              </div>
            </Link>

            {/* Website & App Dev */}
            <Link to="/services/website-app-dev" onClick={() => setIsServicesOpen(false)} className="flex gap-4 hover:bg-gray-50 p-2 rounded-lg transition items-center">
              <div className="bg-yellow-100 p-2 rounded-md text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Website & App Development</h4>
                <p className="text-sm text-gray-600">Transform your online presence with custom design</p>
              </div>
            </Link>

            {/* IT Support */}
            <Link to="/services/it-support" onClick={() => setIsServicesOpen(false)} className="flex gap-4 hover:bg-gray-50 p-2 rounded-lg transition items-center">
              <div className="bg-green-100 p-2 rounded-md text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">IT Support</h4>
                <p className="text-sm text-gray-600">Peace of mind with our reliable IT support services</p>
              </div>
            </Link>

            {/* 3rd Party AI */}
            <Link to="/services/third-party" onClick={() => setIsServicesOpen(false)} className="flex gap-4 hover:bg-gray-50 p-2 rounded-lg transition items-center">
              <div className="bg-purple-100 p-2 rounded-md text-purple-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <div>
                <h6 className="font-semibold text-gray-900">3rd Party AI Solution</h6>
                <p className="text-sm text-gray-600">Find the best third-party services for your business</p>
              </div>
            </Link>
          </div>
        </div>






        <Link to="/#about" className="text-gray-700 hover:text-blue-600">About Us</Link>
        <Link to="/#portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</Link>
        <Link to="/#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>

      </div>

      {/* Desktop Get Started button */}
      <div className="hidden md:flex items-center">
        <ButtonWA text="Get Started Today" />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-4">
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 w-full justify-between"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Our Services <span className="ml-1">▼</span>
              </button>
              
              {isServicesOpen && (
                <div className="mt-2 w-full bg-gray-50 rounded-md py-1">
                  <Link 
                    to="/services/web-maintenance" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                    onClick={() => {
                      setIsServicesOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Website Maintenance
                  </Link>
                  <Link 
                    to="/services/website-app-dev" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                    onClick={() => {
                      setIsServicesOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Website & App Development
                  </Link>
                  <Link 
                    to="/services/it-support" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                    onClick={() => {
                      setIsServicesOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    IT Support
                  </Link>
                  <Link 
                    to="/services/third-party" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                    onClick={() => {
                      setIsServicesOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    3rd Party AI Solution
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/#about" 
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/#portfolio" 
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/#contact" 
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="pt-2">
              <ButtonWA 
                text="Get Started Today" 
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;