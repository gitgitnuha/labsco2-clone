import React from "react";
import heroImage from "../../assets/1.png";
import backdrop from "../../assets/backdrop.png";
import cta from "../../assets/cta1.png";     
import tool from "../../assets/toolbox.png";

const advantages = [
  {
    title: "Regular Updates",
    description:
      "We keep your website up to date with the latest software and plugin updates to ensure compatibility and security.",
  },
  {
    title: "Security Monitoring",
    description:
      "Regular maintenance and updates to prevent problems and ensure your systems run smoothly.",
  },
  {
    title: "Performance Optimization",
    description:
      "We regularly  analyze and optimize your site’s performance to ensure fast loading times and a seamless user experience.",
  },
  {
    title: "Content Management",
    description:
      "We help you manage and update your website content easily, ensuring that your information is always current and relevant.",
  },
];

export default function WebMaintenancePage() {
  return (
    <div className="font-sans text-black bg-white ">
      
      {/* Hero Section */}
      <section className="flex justify-between items-center px-20 py-50">
        <div>
          <h1 className="text-3xl font-bold mb-2">Website Maintenance</h1>
          <p className="text-sm text-gray-600">“Comprehensive Website Maintenance Services (WAMS)”</p>
        </div>
        

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
      </section>

      {/* Company Intro */}
      <section className="bg-[#0B2B44] text-white py-40 px-6 md:px-20 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
          
          {/* Left - Gambar & Branding */}
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            
            {/* CO2 besar semi transparan */}
            <h1 className="absolute bottom-50 left-18 text-[100px] md:text-[100px] font-extrabold text-white/10 leading-none z-0">
              CO2
            </h1>
            <h2 className="absolute -top-10 left-18 text-3xl font-semibold text-white z-20">
                CO2 LABS
            </h2>
            

            {/* Kotak panjang blur dengan gradasi */}
            <div
              className="relative top-5 tpz-10 w-full max-w-100 h-50 rounded-xl overflow-hidden flex items-center justify-center"
              style={{
                background: "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0))",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              {/* Tulisan CO2 LABS di atas gambar */}
              

              {/* Gambar kecil di tengah */}
              <img
                src={tool}
                alt="Team"
                className="w-28 md:w-36 rounded-md z-10"
              />
            </div>
          </div>

          {/* Right - Teks */}
          <div className="w-full md:w-1/2 text-center md:text-left z-10">
            <p className="text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Your website is a vital part of your business, and keeping it in top shape is essential. CO2 Labs offers reliable website maintenance solutions to ensure your site remains secure, up-to-date, and performing at its best.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-[#f9f8f6] py-20 px-4 md:px-24 flex flex-col md:flex-row items-start gap-12">
        {/* Left Title */}
        <div className="w-full md:w-1/3">
          <h2 className="text-5xl sm:text-5xl md:text-5xl font-extrabold text-black leading-tight mb-8 md:mb-0">
            OUR <br /> ADVANTAGES
          </h2>
        </div>

        {/* Right Timeline */}
        <div className="w-full md:w-2/3 flex flex-col gap-12">
          {advantages.map((item, index) => (
            <div key={index} className="relative pl-12">
              {/* Titik */}
              <div className="absolute left-0 top-2 w-6 h-6 bg-gray-400 rounded-full z-10"></div>

              {/* Garis */}
              <div className="absolute left-[10px] top-12 h-[90px] border-l-2 border-gray-400"></div>

              {/* Judul */}
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

              {/* Box Deskripsi */}
              <div className="bg-white shadow-md rounded-lg p-6 w-full">
                <p className="text-gray-800">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-[#fefdf9] py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-md flex flex-col md:flex-row items-center overflow-hidden">
          
          {/* Left - Image */}
          <div className="md:w-1/4 w-full">
            <img
              src={cta}
              alt="IT Support"
              className="w-full h-full object-cover rounded-l-2xl"
            />
          </div>

          {/* Right - Text */}
          <div className="md:w-3/4 w-full p-8 md:p-12">
            <h2 className="text-3xl md:text-1xl font-extrabold mb-4">We’re Here For You</h2>
            <p className="text-lg text-gray-800 mb-3">
              Partner with CO2 Labs for reliable website maintenance and enjoy peace of mind knowing your site is in expert hands. Contact us today to learn more about our services.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md shadow-md transition duration-300">
              Get a Free Quote →
            </button>
          </div>

        </div>
      </section>



      

    </div>
  );
}