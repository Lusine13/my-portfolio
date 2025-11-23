import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-70 text-white z-50">
      <div className="max-w-6xl mx-auto flex justify-end items-center p-4">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#home" className="hover:text-gray-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#work" className="hover:text-gray-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-gray-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
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
        <ul className="md:hidden bg-black text-white flex flex-col items-center space-y-4 py-4">
          <li>
            <a href="#home" className="hover:text-gray-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#work" className="hover:text-gray-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-gray-400 transition">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
