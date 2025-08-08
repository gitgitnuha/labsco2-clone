import ButtonWA from "../components/buttonWA";
import { Link } from "react-router-dom";
import heroImage from "../assets/heroimg.png";
import backdrop from "../assets/backdrop.png";
import { useState } from 'react';

const HeroSection = () => {
  const services = [
    {
      id: 'web-maintenance',
      title: 'Website Maintenance',
      description: 'Keep your website running smoothly and securely with our comprehensive maintenance services. Prevent downtime...',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mb-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>
    ),
    },
    {
      id: 'website-app-dev',
      title: 'Website & App Development',
      description: 'Transform your online presence with our custom website design solutions. From stunning visuals to seamless...',
      icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mb-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    },
    {
      id: 'it-support',
      title: 'IT Support',
      description: 'Experience peace of mind with our reliable IT support services. From troubleshooting to server maintenance...',
      icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mb-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    },
    {
      id: 'third-party',
      title: '3rd Party AI Solution',
      description: 'Leverage our expertise to find the best third-party services for your business. From hosting to plugins, we provide...',
      icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mb-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    }
  ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

  const methodology = [
    {
      title: "Assessment",
      subtitle: "& Insight Gathering",
      content: "We conduct thorough analysis of your current systems to identify key opportunities.",
      points: [
        "Stakeholder interviews and surveys",
        "Current process audit",
        "SWOT analysis",
        "Needs identification"
      ],
      bg: "bg-[#F3F0E9]",
      arrowColor: "text-gray-400"
    },
    {
      title: "Customization",
      subtitle: "& Strategic Planning",
      content: "We then develop a strategic plan and design tailored solutions that address your specific needs. This involves detailed planning, resource allocation, and design of bespoke solutions that align with your goals.",
      points: [
        "Strategic planning sessions",
        "Solution design and prototyping",
        "Resource and timeline planning",
        "Risk assessment and mitigation planning"
      ],
      bg: "bg-[#9CA8AD]",
      arrowColor: "text-white"
    },
    {
      title: "Execution",
      subtitle: "& Lifecycle Management",
      content: "We implement solutions with precision, monitor progress, and adjust for long-term success. Continuous improvement is embedded in our approach.",
      points: [
        "Solution implementation",
        "Progress tracking",
        "Ongoing optimization",
        "Lifecycle support"
      ],
      bg: "bg-[#F3F0E9]",
      arrowColor: "text-gray-400"
    },
  ];

  return (
    <>
      {/* Hero Content Section */}
      <section id="home" className="bg-gray-50 py-12 px-4 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 md:py-13">
          
          {/* Stacked Images - Move to top on mobile */}
          <div className="md:w-1/2 relative order-1 md:order-2 w-full">
            {/* Backdrop Image - Bottom layer */}
            <div className="absolute -top-20 -right-60 w-full h-full">
              <img 
                src={backdrop} 
                alt="Decorative backdrop"
                className="w-90 rounded-lg max-w-xs sm:max-w-sm"
              />
            </div>

            {/* Main Hero Image - Top layer */}
            <div className="relative z-7 transform hover:-translate-y-2 transition duration-300 left-5">
              <img 
                src={heroImage} 
                alt="Our team working"
                className="w-90 max-w-xs sm:max-w-sm md:max-w-full h-auto rounded-lg shadow-xl border-4 border-white mx-auto"
              />
            </div>
          </div>

          {/* Text Content - Show below on mobile */}
          <div className="md:w-1/2 text-left order-2 md:order-1 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Where Code Meets <span className="text-blue-600">Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Harnessing the power of our Coding Collective to build solutions for your business needs.
            </p>
            <div className="flex justify-start">
              <ButtonWA text="Get Started Today" />
            </div>
          </div>

        </div>
      </section>


      {/* Services Section - Separated */}
      <section className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Our Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-gray-50 border border-white rounded-lg p-6 hover:shadow-lg transition-all flex flex-col items-center text-center"
              >
                <div className="bg-gray-300 rounded-full text-gray-900 mb-5 w-16 h-16 flex items-center justify-center">
                  <div className="w-10 h-10">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 min-h-[60px]">{service.description}</p>
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:underline text-sm"
                >
                  View More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Horizontal ACE Methodology Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Methodology for Strategic Consulting</h2>
        </div>

        <div className="flex flex-col md:flex-row max-w-7xl mx-auto overflow-hidden rounded-lg">
          {methodology.map((item, index) => {
            const isHovered = index === hoveredIndex;

            return (
              <div
                key={index}
                className={`flex-1 transition-all duration-300 cursor-pointer p-6 md:p-8 ${item.bg}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-black">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black mt-1 font-normal">
                    {item.subtitle}
                  </p>

                  {/* Arrow */}
                  <div className="flex justify-center my-6 transition-transform duration-300">
                    {isHovered ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${item.arrowColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${item.arrowColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    )}
                  </div>

                  {/* Description & List */}
                  <div className={`transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100 max-h-[300px] mt-2' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    <p className="text-sm sm:text-base text-black mb-4">{item.content}</p>
                    <ul className="list-disc list-inside text-left mx-auto max-w-xs text-black text-sm sm:text-base space-y-2">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HeroSection;