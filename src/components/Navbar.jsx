import { Link } from 'react-router-dom';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  FolderIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/solid';

const Navbar = () => {
  const initialText = "I  am a web developer ";
  const finalText = "dpalexandru.com";
  const [displayedText, setDisplayedText] = useState("");
  const [isFinal, setIsFinal] = useState(false);
  const [showWavingHand, setShowWavingHand] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // GSAP refs
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const linksRef = useRef(null);
  const tlRef = useRef(null);

  // Accessibilità & swipe
  const triggerBtnRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

  const touchStartY = useRef(0);
  const currentY = useRef(0);
  const isDragging = useRef(false);

  // Typewriter
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

  // GSAP timeline (una volta)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(overlayRef.current, { autoAlpha: 0 });
      gsap.set(panelRef.current, { y: -16, autoAlpha: 0 });

      tlRef.current = gsap
        .timeline({ paused: true, defaults: { duration: 0.35, ease: 'power2.out' } })
        .to(overlayRef.current, { autoAlpha: 1 }, 0)
        .to(panelRef.current, { autoAlpha: 1, y: 0 }, 0)
        .fromTo(
          linksRef.current?.querySelectorAll('a'),
          { y: 8, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.05 },
          0.05
        );
    });
    return () => ctx.revert();
  }, []);

  // Play/Reverse
  useEffect(() => {
    if (!tlRef.current) return;
    if (menuOpen) {
      tlRef.current.play();
      document.documentElement.style.overflow = 'hidden';
    } else {
      tlRef.current.reverse().then(() => {
        document.documentElement.style.overflow = '';
      });
    }
  }, [menuOpen]);

  // Click fuori
  useEffect(() => {
    const onDown = (e) => {
      if (!panelRef.current) return;
      if (menuOpen && !panelRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [menuOpen]);

  // Focus trap
  const getFocusables = () => {
    if (!panelRef.current) return [];
    return Array.from(
      panelRef.current.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')
    ).filter((el) => !el.hasAttribute('disabled'));
  };

  useEffect(() => {
    if (!menuOpen) return;
    const focusables = getFocusables();
    if (focusables.length) {
      firstFocusableRef.current = focusables[0];
      lastFocusableRef.current = focusables[focusables.length - 1];
      firstFocusableRef.current.focus();
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setMenuOpen(false);
        return;
      }
      if (e.key === 'Tab' && focusables.length) {
        if (e.shiftKey && document.activeElement === firstFocusableRef.current) {
          e.preventDefault();
          lastFocusableRef.current.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusableRef.current) {
          e.preventDefault();
          firstFocusableRef.current.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  // Ritorno focus al trigger
  useEffect(() => {
    if (!menuOpen && triggerBtnRef.current) {
      triggerBtnRef.current.focus();
    }
  }, [menuOpen]);

  return (
    <nav className="bg-blue-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo / Titolo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            {showWavingHand && <span className="text-2xl animate-waving-hand">👋</span>}
            <Link
              to="/"
              className={`flex items-center text-xl font-bold transition-all duration-500 ${isFinal ? 'text-blue-100' : 'text-teal-400'
                }`}
            >
              {isFinal && <HomeIcon className="w-6 h-6 text-blue-100 inline-block mr-2" />}
              {displayedText}
              {!isFinal && <span className="blinking-cursor">|</span>}
            </Link>
          </div>

          {/* Menu desktop a destra (come prima) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-blue-200 hover:text-white">Home</Link>
              <Link to="/about" className="text-blue-200 hover:text-white">About</Link>
              <Link to="/portfolio" className="text-blue-200 hover:text-white">Portfolio</Link>
              <Link to="/cv" className="text-blue-200 hover:text-white">CV</Link>
              <Link to="/contact" className="text-blue-200 hover:text-white">Contact</Link>
            </div>
          </div>

          {/* Bottone hamburger */}
          <div className="md:hidden">
            <button
              ref={triggerBtnRef}
              onClick={() => setMenuOpen((s) => !s)}
              className="text-blue-100 focus:outline-none"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 z-40 md:hidden pointer-events-auto"
        onClick={() => setMenuOpen(false)}
        style={{ visibility: 'hidden' }}
      />

      {/* Pannello mobile */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        ref={panelRef}
        className="md:hidden fixed top-16 left-0 w-full z-50 bg-blue-900 text-blue-100 p-4 shadow-lg rounded-b-xl"
        style={{ visibility: 'hidden', touchAction: 'none' }}
        onTouchStart={(e) => {
          isDragging.current = true;
          touchStartY.current = e.touches[0].clientY;
          currentY.current = touchStartY.current;
          gsap.killTweensOf(panelRef.current);
        }}
        onTouchMove={(e) => {
          if (!isDragging.current) return;
          currentY.current = e.touches[0].clientY;
          const dy = Math.max(0, currentY.current - touchStartY.current);
          gsap.set(panelRef.current, { y: Math.min(dy, 120) });
          const prog = Math.min(dy / 120, 1);
          gsap.set(overlayRef.current, { autoAlpha: 1 - prog * 0.9 });
        }}
        onTouchEnd={() => {
          if (!isDragging.current) return;
          isDragging.current = false;
          const dy = Math.max(0, currentY.current - touchStartY.current);
          const threshold = 80;
          if (dy > threshold) {
            setMenuOpen(false);
          } else {
            gsap.to(panelRef.current, { y: 0, duration: 0.2, ease: 'power2.out' });
            gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.2 });
          }
        }}
      >
        <div ref={linksRef} className="space-y-4">
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
            to="/cv"
            onClick={() => setMenuOpen(false)}
            className="flex items-center space-x-2 hover:text-white"
          >
            <DocumentTextIcon className="w-5 h-5 text-blue-100" />
            <span>CV</span>
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
      </div>
    </nav>
  );
};

export default Navbar;
