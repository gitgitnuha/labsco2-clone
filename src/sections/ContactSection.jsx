import { useState } from 'react';

const ContactPage = () => {
  const [selectedSource, setSelectedSource] = useState(null);

  const hearAboutUsOptions = ['LinkedIn', 'Instagram', 'Job Ads', 'Events and Seminars', 'Other'];

  

  return (
    <section id='contact' className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h1>
      
      {/* Contact Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Hi there, how can we help?</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Youmail@example.com</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ask Our About Services</label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Where Did You Hear About Us?</h2>
            <div className="flex flex-wrap gap-4">
              {hearAboutUsOptions.map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    type="radio"
                    id={option}
                    name="source"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    onChange={() => setSelectedSource(option)}
                  />
                  <label htmlFor={option} className="ml-2 text-sm text-gray-700">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
            
            <button
              type="submit"
              className="bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-900 transition-colors"
            >
              Submit
            </button>
          </form>
          
          
        </div>
        
        {/* Google Maps Embed */}
        <div className="h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8285447954618!2d103.79339287359021!3d1.2762577987116108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1b27c7a1b85f%3A0xd6085c5205635a1c!2sCoding%20Collective!5e0!3m2!1sid!2sid!4v1754657027292!5m2!1sid!2sid"
            width="100%"
            height="100%"
            className="min-h-[400px] rounded-lg shadow-md"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      
      
    </section>
  );
};

export default ContactPage;