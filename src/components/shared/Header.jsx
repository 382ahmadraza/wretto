import React, { useState } from 'react';
import { Facebook, Instagram, Linkdin, Twitter, CloseIcon, MenuIcon } from "../../assets/svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = ['Health', 'Sports', 'Politics', 'Business', 'Arts', 'Science', 'World', 'About', 'Contact'];

  const socialIcons = [
    { name: "Instagram", icon: <Instagram />, path: "https://www.instagram.com/" },
    { name: "Facebook", icon: <Facebook />, path: "https://www.facebook.com/" },
    { name: "LinkedIn", icon: <Linkdin />, path: "https://www.linkedin.com/" },
    { name: "Twitter", icon: <Twitter />, path: "https://twitter.com/" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="hidden md:flex items-center space-x-4">
              {socialIcons.map(({ icon, path, name }, index) => (
                <a key={index} href={path} className="text-black hover:text-[#CF412B]" aria-label={name}>
                  {icon}
                </a>
              ))}
            </div>

            <div className="flex-1 md:flex-none flex justify-center md:justify-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-black">NEXUS</span> <span className="text-red-600">NEWS</span>
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-black  text-white hover:bg-[#CF412B] px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium cursor-pointer border-none">
                Subscribe
              </button>
              <button
                className="md:hidden p-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex justify-center space-x-8 lg:space-x-12 h-14">
            {navigationItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black hover:text-[#CF412B] font-medium text-sm lg:text-base py-4"
              >
                {item}
              </a>
            ))}
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-200 mt-4">
                {socialIcons.map(({ icon, path, name }, index) => (
                  <a key={index} href={path} className="text-gray-600 hover:text-gray-900" aria-label={name}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
