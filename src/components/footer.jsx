import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-xs">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          
          {/* Left: Newsletter - Centered on mobile, left-aligned on desktop */}
          <div className="flex-1 min-w-[250px] w-full text-center lg:text-left">
            <h3 className="text-sm font-semibold mb-2">Let's Grow With CO2 Labs</h3>
            <p className="mb-3">Get Exclusive Updates From Us</p>
            <div className="flex flex-col sm:flex-row w-full sm:max-w-xs mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Wormall@example.com"
                className="bg-gray-800 text-white px-3 py-2 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none w-full text-xs mb-2 sm:mb-0"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-2 rounded-b-md sm:rounded-r-md sm:rounded-b-none text-xs whitespace-nowrap w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right: Footer Links - Unchanged */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:flex lg:gap-20 text-left gap-8">
              
              <div>
                <h4 className="font-semibold mb-2">Services</h4>
                <ul className="space-y-1">
                  <li>
                    <Link to="/services/web-maintenance" className="hover:text-blue-500 transition-colors">
                      Web Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/website-app-dev" className="hover:text-blue-500 transition-colors">
                      Web & App Dev
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/it-support" className="hover:text-blue-500 transition-colors">
                      IT Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/third-party" className="hover:text-blue-500 transition-colors">
                      3rd Party AI
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">About</h4>
                <ul className="space-y-1">
                  <li>
                    <Link to="/#home" className="hover:text-blue-500 transition-colors">
                      Our Approach
                    </Link>
                  </li>
                  <li>
                    <Link to="/#team" className="hover:text-blue-500 transition-colors">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/#portfolio" className="hover:text-blue-500 transition-colors">
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Contact</h4>
                <ul className="space-y-1">
                  <li><a href="tel:+4681851599" className="hover:text-blue-500">+46-8185-1599</a></li>
                  <li><a href="mailto:info@co2labs.com" className="hover:text-blue-500">info@co2labs.com</a></li>
                  <li>Pasht Road</li>
                </ul>
              </div>

            </div>

            {/* Bottom: FAQ and Terms - Centered on mobile, left-aligned on desktop */}
            <div className="flex justify-center lg:justify-start gap-4 mt-6 text-gray-300 text-xs">
              <span className="hover:text-blue-500 cursor-pointer">FAQ</span>
              <span className="hover:text-blue-500 cursor-pointer">Terms & Policy</span>
            </div>
          </div>
        </div>

        {/* Copyright - Unchanged */}
        <div className="text-gray-400 text-[10px] mt-8 text-center sm:text-left">
          ©2024 CO2 Labs. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;