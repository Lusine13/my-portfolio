import { useState } from "react";
import { navLinks } from "../../core/constants/navLinks"; 

const Navbar: React.FC = () => {
const [isOpen, setIsOpen] = useState(false);

const closeMenu = () => setIsOpen(false);

return ( <nav className="fixed top-0 w-full bg-black/70 text-white z-50 backdrop-blur-md"> <div className="max-w-6xl mx-auto flex justify-between items-center px-8 sm:px-20 py-6">
{/* Logo / Name */} 
<div className="text-2xl sm:text-3xl font-bold tracking-wide cursor-pointer">
Lusine Vardanyan </div>

    {/* Desktop Menu */}
    <ul className="hidden md:flex space-x-12 text-lg sm:text-xl font-medium">
      {navLinks.map((link) => (
        <li key={link.href}>
          <a href={link.href} className="hover:text-indigo-400 transition">
            {link.label}
          </a>
        </li>
      ))}
    </ul>

    {/* Mobile Toggle */}
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
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
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <ul className="md:hidden bg-black/90 flex flex-col items-center space-y-6 py-6 text-lg font-medium animate-fadeIn">
      {navLinks.map((link) => (
        <li key={link.href}>
          <a href={link.href} onClick={closeMenu} className="hover:text-indigo-400 transition">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )}
</nav>

);
};

export default Navbar;
