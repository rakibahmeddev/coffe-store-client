import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-3 md:py-4   mx-auto w-full bg-white">
      {/* Logo */}
     <Link className='text-2xl font-bold text-indigo-700'>Coffe Store</Link>

      {/* Navigation Menu */}
      <nav
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-full transition-[width] bg-white/50 backdrop-blur flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-normal
          ${menuOpen ? 'max-md:w-full' : 'max-md:w-0'}`}
      >
        <a className="hover:text-indigo-600" href="#">
          Products
        </a>
        <a className="hover:text-indigo-600" href="#">
          Customer Stories
        </a>
        <a className="hover:text-indigo-600" href="#">
          Pricing
        </a>
        <a className="hover:text-indigo-600" href="#">
          Docs
        </a>

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
      <div className="flex items-center space-x-4">
        <a
          className="hidden md:flex bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
          href="#"
        >
          Sign up
        </a>

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
