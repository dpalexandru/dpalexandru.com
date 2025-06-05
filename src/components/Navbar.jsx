import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  FolderIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid';

const Navbar = () => {
  const initialText = "I  am a web developer";
  const finalText = "dpalexandru.com";
  const [displayedText, setDisplayedText] = useState("");
  const [isFinal, setIsFinal] = useState(false);
  const [showWavingHand, setShowWavingHand] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Animazione typewriter
  useEffect(() => {
    let index = 0;
    const typingSpeed = 150;

    const typewriter = setInterval(() => {
      if (index < initialText.length) {
        setDisplayedText((prev) => prev + initialText.charAt(index));
        index++;
      } else {
        clearInterval(typewriter);
        setTimeout(() => {
          setDisplayedText(finalText);
          setIsFinal(true);
          setShowWavingHand(false);
        }, 1000);
      }
    }, typingSpeed);

    return () => clearInterval(typewriter);
  }, []);

  // Chiusura automatica del menu se clicchi fuori
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  return (
    <nav className="bg-blue-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Titolo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            {showWavingHand && (
              <span className="text-2xl animate-waving-hand">👋</span>
            )}
            <Link
              to="/"
              className={`flex items-center text-xl font-bold transition-all duration-500 ${isFinal ? 'text-blue-100' : 'text-teal-400'
                }`}
            >
              {isFinal && (
                <HomeIcon className="w-6 h-6 text-blue-100 inline-block mr-2" />
              )}
              {displayedText}
              {!isFinal && <span className="blinking-cursor">|</span>}
            </Link>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-blue-200 hover:text-white">
                Home
              </Link>
              <Link to="/about" className="text-blue-200 hover:text-white">
                About
              </Link>
              <Link to="/portfolio" className="text-blue-200 hover:text-white">
                Portfolio
              </Link>
              <Link to="/contact" className="text-blue-200 hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Bottone hamburger mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-blue-100 focus:outline-none"
            >
              {menuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile (aperto solo se menuOpen = true) */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-blue-900 text-blue-100 p-4 space-y-4 absolute top-16 left-0 w-full z-50 transition duration-500"
        >
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center space-x-2 hover:text-white"
          >
            <HomeIcon className="w-5 h-5 text-blue-100" />
            <span>Home</span>
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="flex items-center space-x-2 hover:text-white"
          >
            <InformationCircleIcon className="w-5 h-5 text-blue-100" />
            <span>About</span>
          </Link>

          <Link
            to="/portfolio"
            onClick={() => setMenuOpen(false)}
            className="flex items-center space-x-2 hover:text-white"
          >
            <FolderIcon className="w-5 h-5 text-blue-100" />
            <span>Portfolio</span>
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center space-x-2 hover:text-white"
          >
            <ChatBubbleLeftRightIcon className="w-5 h-5 text-blue-100" />
            <span>Contact</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

