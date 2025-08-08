import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-20">
      <div className="max-w-7xl mx-auto text-xs">
        <div className=" flex flex-col lg:flex-row justify-between items-start gap-8">
          
          {/* Left: Newsletter */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-sm font-semibold mb-2">Let's Grow With CO2 Labs</h3>
            <p className="mb-3">Get Exclusive Updates From Us</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Wormall@example.com"
                className="bg-gray-800 text-white px-3 py-1.5 rounded-l-md focus:outline-none w-70 text-xs"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1.5 rounded-r-md text-xs whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right: Footer Links (horizontal) */}
          <div className="flex flex-col flex-1 items-end gap-4 w-full">
            {/* Top: Services, About, Contact */}
            <div className="flex gap-20 justify-end flex-wrap">
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
                  <li>+46-8185-1599</li>
                  <li>info@co2labs.com</li>
                  <li>Pasht Road</li>
                </ul>
              </div>
            </div>

            {/* Bottom: FAQ and Terms */}
            <div className="flex gap-6 mt-4 text-gray-300 text-xs">
              <span>FAQ</span>
              <span>Terms & Policy</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className=" text-gray-400 text-[10px] mt-8">
          ©2024 CO2 Labs. All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
