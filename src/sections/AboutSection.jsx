// src/pages/About.jsx
import React from 'react';
import AboutImg from '../assets/about-img.png';

const About = () => {
  return (
    <section id="about" className="bg-[#fefdfa] py-20 px-4 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#101010]">About Us</h2>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-6">
            At CO2 Labs, we strive to provide simple yet powerful software
            solutions and expert consultation to help your business thrive in the digital world.
          </p>

          <div className="w-32 h-2 bg-gray-100 rounded-full mx-auto lg:mx-0 mt-8"></div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={AboutImg}
            alt="People with ideas"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
