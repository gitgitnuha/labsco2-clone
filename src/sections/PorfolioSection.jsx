import React from "react";
import portofolio1 from "../assets/portfolio.png";
import portofolio2 from "../assets/portfolio-1.png";
import portofolio3 from "../assets/portfolio-2.png";
import portofolio4 from "../assets/portfolio-3.png";
import portofolio5 from "../assets/portfolio-4.png";

const portfolioItems = [
  { name: "AOTC Cosmetics", image: portofolio1 },
  { name: "Nosh Kitchen Website", image: portofolio2 },
  { name: "Michela Event Organizer", image: portofolio3 },
  { name: "Joywaltzstudio Academy", image: portofolio4 },
  { name: "Octapay Website", image: portofolio5 },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 bg-[#0F2C44] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10">Our Portfolio</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-50">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-center">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
