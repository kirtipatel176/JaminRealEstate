import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/#properties' },
    { name: 'Services', path: '/#about' },
    { name: 'About', path: '/#about' },
    { name: 'Investment Zones', path: '/#zones' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center mt-6 px-4 pointer-events-none">
      <motion.nav 
        className={`pointer-events-auto flex flex-col md:flex-row items-center justify-between px-6 py-3 transition-all duration-700 ease-in-out ${
          isScrolled 
            ? 'w-[95%] max-w-6xl glass-dark-pill rounded-full' 
            : 'w-full max-w-7xl bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo & Tagline */}
        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
          <Link to="/" className={`font-heading text-2xl font-bold tracking-widest ${isScrolled ? 'text-accent' : 'text-bg-main'} transition-colors duration-500`}>
            ONLY JAMIN.
          </Link>
          <span className={`hidden lg:block text-[10px] uppercase tracking-widest border-l pl-4 py-1 transition-colors duration-500 ${isScrolled ? 'border-white/20 text-white/60' : 'border-bg-main/20 text-bg-main/80'}`}>
            Verified Land Deals Across Gujarat
          </span>
          {/* Mobile Menu Button */}
          <div className="md:hidden cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X size={24} className={isScrolled ? "text-accent" : "text-bg-main"} />
            ) : (
              <Menu size={24} className={isScrolled ? "text-white" : "text-bg-main"} />
            )}
          </div>
        </div>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center gap-6 ${isScrolled ? 'px-4' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-xs uppercase tracking-[0.15em] relative group overflow-hidden ${isScrolled ? 'text-white/80 hover:text-accent' : 'text-bg-main/90 hover:text-accent'} transition-colors duration-300 font-medium`}
            >
              <span className="block">{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" className={`px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full transition-all duration-500 border ${
            isScrolled 
              ? 'border-accent text-accent hover:bg-accent hover:text-primary shadow-[0_0_15px_rgba(200,169,107,0.1)]' 
              : 'border-white/30 text-bg-main hover:bg-white hover:text-primary'
          }`}>
            Book Consultation
          </Link>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className={`px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full transition-all duration-500 flex items-center gap-2 ${
            isScrolled 
              ? 'bg-accent text-primary hover:bg-white' 
              : 'bg-white text-primary hover:bg-accent'
          }`}>
            WhatsApp Now
          </a>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-primary flex flex-col justify-center items-center pointer-events-auto"
            initial={{ clipPath: 'circle(0% at 50% 10%)' }}
            animate={{ clipPath: 'circle(150% at 50% 10%)' }}
            exit={{ clipPath: 'circle(0% at 50% 10%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div 
                  key={link.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    to={link.path} 
                    className="font-heading text-4xl text-bg-main hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="mt-8 flex flex-col gap-4 w-64"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full py-4 border border-accent text-accent text-center uppercase tracking-widest text-xs font-bold rounded-full">
                  Book Consultation
                </Link>
                <a href="https://wa.me/919876543210" className="w-full py-4 bg-accent text-primary text-center uppercase tracking-widest text-xs font-bold rounded-full">
                  WhatsApp Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
