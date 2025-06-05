import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const initialText = "I  am a web developer";
  const finalText = "dpalexandru.com";
  const [displayedText, setDisplayedText] = useState("");
  const [isFinal, setIsFinal] = useState(false);
  const [showWavingHand, setShowWavingHand] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(); // <-- aggiunto riferimento al menu

  useEffect(() => {
    let index = 0;
    const typingSpeed = 200;

    const typewriter = setInterval(() => {
      if (index < initialText.length) {
        setDisplayedText((prev) => prev + initialText.charAt(index));
        index++;
      } else {
        clearInterval(typewriter);
        setTimeout(() => {
          setDisplayedText(finalText);
          setIsFinal(true);
          setShowWavingHand(false); // Nasconde la mano dopo l'animazione
        }, 1000);
      }
    }, typingSpeed);

    return () => clearInterval(typewriter);
  }, []);

  // Event listener per click esterno
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
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center space-x-2">
            {/* Icona mano animata */}
            {showWavingHand && (
              <span className="text-2xl animate-waving-hand">👋</span>
            )}
            {/* Testo animato */}
            <Link
              to="/"
              className={` text-xl font-bold ${isFinal ? 'text-white' : 'text-green-400'} transition-all duration-500`}
            >
              {displayedText}
              {!isFinal && <span className="blinking-cursor ">|</span>}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
              <Link to="/portfolio" className="text-gray-300 hover:text-white">Portfolio</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
            </div>
          </div>

          {/* Bottone hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div ref={menuRef} className="md:hidden bg-black text-white p-4 space-y-4 absolute top-16 left-0 w-full z-50 transition duration-500">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block">About</Link>
          <Link to="/portfolio" onClick={() => setMenuOpen(false)} className="block">Portfolio</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block">Contact</Link>
          <button onClick={() => setMenuOpen(false)} className="w-full text-left">Close Menu</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
