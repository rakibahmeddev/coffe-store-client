import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import headerbg from '../assets/images/more/headerbg.jpg';
import logo from '../assets/images/more/logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `mr-3 transition-all duration-200 hover:scale-95 ${
            isActive
              ? 'text-[#E3B577] font-bold scale-110'
              : 'text-white text-base'
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `mr-3 transition-all duration-200 hover:scale-95 ${
            isActive
              ? 'text-[#E3B577] font-bold scale-110'
              : 'text-white text-base'
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/addCoffe"
        className={({ isActive }) =>
          `mr-3 transition-all duration-200 hover:scale-95 ${
            isActive
              ? 'text-[#E3B577] font-bold scale-110'
              : 'text-white text-base'
          }`
        }
      >
        Add Coffe
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `mr-3 transition-all duration-200 hover:scale-95 ${
            isActive
              ? 'text-[#E3B577] font-bold scale-110'
              : 'text-white text-base'
          }`
        }
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <header
      className="flex items-center justify-between px-6 py-3 md:py-4 mx-auto w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${headerbg})` }}
    >
      {/* Logo */}
      <Link className="text-2xl font-bold text-white">
        <img src={logo} className="max-w-[250px]" alt="Coffe Logo" />
      </Link>

      {/* Navigation Menu */}
      <nav
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-full transition-[width]  backdrop-blur flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-normal
          ${menuOpen ? 'max-md:w-full' : 'max-md:w-0'}`}
      >
        {links}

        {/* Close Menu Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="md:hidden text-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      {/* Right-side Buttons */}
      <div className="flex items-center ">
        <Link
          to="/"
          className="hidden md:flex bg-[#E3B577] text-black px-5 py-2 rounded-full text-sm font-medium hover:border-2 hover:border-white hover:bg-transparent hover:text-white transition"
          href="#"
        >
          Sign up
        </Link>

        {/* Open Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
