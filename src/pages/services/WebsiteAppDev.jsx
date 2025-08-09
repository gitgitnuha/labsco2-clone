import React from "react";
import heroImage from "../../assets/2.png";
import backdrop from "../../assets/backdrop.png";
import teamImage from "../../assets/uiux.png";

const advantages = [
  {
    title: "Website Design & Development",
    description:
      "Our holistic approach to web development ensures a seamless blend of aesthetics and functionality, creating a powerful online presence for your brand.",
  },
  {
    title: "Mobile App Development",
    description:
      "We develop mobile apps that offer excellent performance, intuitive user interfaces, and robust functionality, available for both iOS and Android platforms.",
  },
  {
    title: "E-commerce Solutions",
    description:
      "We build scalable e-commerce platforms that provide a seamless shopping experience, boosting your online sales and customer satisfaction.",
  },
  {
    title: "UX/UI Design",
    description:
      "Our user-centric design process focuses on creating intuitive and engaging interfaces that enhance user satisfaction and loyalty.",
  },
  {
    title: "Integration Services",
    description:
      "We seamlessly integrate third-party services and APIs to enhance the functionality of your website or app.",
  },
];

export default function WebsiteAppDevPage() {
  return (
    <div className="font-sans text-black bg-white ">
      
      {/* Hero Section */}
      <section className="bg-gray-50 overflow-hidden flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-10 pt-40 pb-40 sm:pt-32 sm:pb-32 lg:py-16 gap-8 lg:pt-40 lg:pb-40 ">
      
              {/* TEKS (dari kode kedua) */}
              <div className="w-full lg:w-1/2 text-center lg:text-left mx-20">
                <h1 className="text-5xl font-bold mb-2">Website & App Development</h1>
                <p className="text-sm sm:text-base text-gray-600">“Innovative Website & App Development Solutions”</p>
              </div>
      
              {/* GAMBAR (dari kode pertama) */}
              <div className="w-full lg:w-1/2 relative order-1 lg:order-2 flex justify-center lg:justify-end">
                
                {/* Backdrop Image */}
                <div className="absolute -top-25 right-0 hidden md:block z-0">
                  <img
                    src={backdrop}
                    alt="Decorative backdrop"
                    className="w-80 lg:w-100 rounded-lg"
                  />
                </div>
      
                {/* Main Hero Image */}
                <div className="relative z-10 transform hover:-translate-y-2 transition duration-300 lg:-translate-x-24">
                  <img
                    src={heroImage}
                    alt="Our team working"
                    className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto rounded-lg shadow-xl -ml-4 sm:ml-0"
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
                src={teamImage}
                alt="Team"
                className="w-28 md:w-36 rounded-md z-10"
              />
            </div>
          </div>

          {/* Right - Teks */}
          <div className="w-full md:w-1/2 text-center md:text-left z-10">
            <p className="text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              CO2 Labs provides innovative website and app development solutions tailored to help your business thrive in the digital age. Our experienced team leverages the latest technologies to create dynamic and engaging digital experiences.
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
          <div className="md:w-4/7 w-full">
            <img
              src="/src/assets/cta2.png"
              alt="IT Support"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Text */}
          <div className="md:w-3/4 w-full p-8 md:p-12">
            <h2 className="text-3xl md:text-1xl font-extrabold mb-4">We’re Here For You</h2>
            <p className="text-lg text-gray-800 mb-3">
              Let CO2 Labs transform your digital presence with our top-tier website and app development services. Contact us to start your project today.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md shadow-md transition duration-300">
              Kick Start Your Project →
            </button>
          </div>

        </div>
      </section>



      

    </div>
  );
}