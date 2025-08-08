import React from 'react';

export default function ServiceDropdown() {
  return (
    <div className="absolute bg-white shadow-md rounded-md mt-2 py-2 z-50 w-48">
      <a href="#web" className="block px-4 py-2 hover:bg-gray-100">
        Web Development
      </a>
      <a href="#branding" className="block px-4 py-2 hover:bg-gray-100">
        Branding
      </a>
      <a href="#seo" className="block px-4 py-2 hover:bg-gray-100">
        SEO Optimization
      </a>
    </div>
  );
}
