import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ bgColor = 'bg-white/80 backdrop-blur-md', textColor = "text-slate-950", itemColor = "text-gray-600" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  
  const navItems = [
    { name: 'Technologies', hasDropdown: true, dropdownItems: ['Solventless Lamination', 'Rotogravure Printing Line', 'Blown Film Extrusion', 'Core Cutting Machines'] },
    { name: 'Blogs', hasDropdown: false },
    { name: 'FAQ', hasDropdown: false, href: '/faq' },
    { name: 'About Us', hasDropdown: false, href: '/about-us' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [lastScrollY]);

  const handleDropdownToggle = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const handleMouseEnter = (itemName) => {
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const navClasses = `fixed top-0 left-0 right-0 z-50 w-full h-20 py-4 transition-transform duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'} ${bgColor} ${bgColor.includes('white') ? 'border-gray-100' : 'border-gray-800'}`;
  const mobileMenuBg = bgColor.includes('white') ? 'bg-white/95 backdrop-blur-md' : bgColor;

  return (
    <nav className={navClasses}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 h-full flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="h-full flex items-center">
          <span className={`${textColor} text-xl md:text-2xl font-bold font-['Space_Grotesk'] leading-normal`}>Mukund Industries</span>
        </Link>

        {/* Desktop Navigation Items and CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Navigation Links */}
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
              onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
            >
              {item.href ? (
                <Link to={item.href} className={`px-4 py-1 flex items-center gap-2 ${itemColor} hover:text-gray-700 transition-colors`}>
                  <span className="text-base font-semibold font-['Space_Grotesk'] leading-normal">
                    {item.name}
                  </span>
                </Link>
              ) : (
                <button
                  className={`px-4 py-1 flex items-center gap-2 ${itemColor} hover:text-gray-700 transition-colors`}
                >
                  <span className="text-base font-semibold font-['Space_Grotesk'] leading-normal">
                    {item.name}
                  </span>
                  {item.hasDropdown && (
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              )}
              {item.hasDropdown && openDropdown === item.name && (
                <div className="absolute top-full left-0 pt-2 w-max">
                  <div className={`py-2 rounded-lg shadow-lg ${bgColor.includes('white') ? 'bg-white border border-gray-200' : 'bg-[#0C001D] border border-gray-700'}`}>
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem}
                        href="#"
                        className={`block px-4 py-2.5 text-sm font-medium font-['Space_Grotesk'] ${bgColor.includes('white') ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-300 hover:bg-gray-800'}`}
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* CTA Button */}
          <Link to="/contact" className="ml-4 px-5 py-3 bg-blue-800 hover:bg-blue-900 rounded-lg shadow-sm text-white text-base font-bold font-['Space_Grotesk'] leading-normal transition-colors">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 ${itemColor}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`lg:hidden absolute top-full left-0 right-0 border-b shadow-lg ${mobileMenuBg} ${bgColor.includes('white') ? 'border-gray-100' : 'border-gray-800'}`}>
          <div className="max-w-[1440px] mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => item.hasDropdown && handleDropdownToggle(item.name)}
                  className={`w-full px-4 py-3 flex items-center justify-between rounded-lg transition-colors text-left ${itemColor} ${bgColor.includes('white') ? 'hover:bg-gray-50' : 'hover:bg-gray-800'}`}
                >
                  <span className="text-base font-semibold font-['Space_Grotesk'] leading-normal">
                    {item.name}
                  </span>
                  {item.hasDropdown && (
                    <svg
                      className={`w-5 h-5 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
                {item.hasDropdown && openDropdown === item.name && (
                  <div className="pl-4 pt-2 flex flex-col">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem}
                        href="#"
                        className={`block px-4 py-2.5 text-sm font-medium font-['Space_Grotesk'] rounded-md ${bgColor.includes('white') ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-300 hover:bg-gray-800'}`}
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="mt-2 px-5 py-3 bg-blue-800 hover:bg-blue-900 rounded-lg shadow-sm text-white text-base font-bold font-['Space_Grotesk'] leading-normal transition-colors text-center">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;