// src/components/Team.jsx
import React from "react";
import profile1 from "../assets/profile1.jpeg";
import profile2 from "../assets/profile2.jpeg";
import profile3 from "../assets/profile3.jpeg";

const teamMembers = [
  {
    name: "Jay Chen",
    role: "CEO",
    img: profile1,
    desc: `Jay began his career in the banking and finance sector, where he honed his skills and developed a deep understanding of the industry. Leveraging this foundation, he expanded into HR operations and outsourcing, successfully growing his businesses by delivering exceptional service to renowned international brands like Huawei, Coca-Cola, and GlaxoSmithKline.`,
  },
  {
    name: "Alune",
    role: "Development Project Manager",
    img: profile2,
    desc: `With a background in IT software development, quality testing and web design, she brings a deep understanding of the technical and strategic aspects of project management. Known for her meticulous planning, effective communication, and ability to navigate challenges, she has consistently delivered high-quality software solutions on time and within budget.`,
  },
  {
    name: "Ron",
    role: "Business Development Lead",
    img: profile3,
    desc: `With a strong background in business development for finance, logistics and real estate industries, Ron has successfully led initiatives that have expanded market reach and increased revenue for both emerging and established companies.`,
  },
];

const OurTeam = () => {
  return (
    <section id="team" className="py-16 bg-[#fbfbfa] ">
      <h2 className="text-4xl font-bold text-center mb-25 font-tech">Our Team</h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group bg-white max-w-sm w-full rounded-2xl shadow-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer relative"
          >
            <div className="flex justify-center -mt-16">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-md"
              />
            </div>
            <div className="px-6 pb-6 pt-10 text-center">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm font-semibold text-gray-800 mb-3">{member.role}</p>
              <p className="text-sm text-gray-700 italic text-justify leading-relaxed">
                {member.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
