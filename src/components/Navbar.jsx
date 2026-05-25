import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PlayCircle, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white border-b border-gray-100 z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between h-20">
          
          {/* Logo & Left Links */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="ONLY JAMIN" className="h-12 md:h-16 w-auto object-contain" />
            </Link>
            
            <div className="hidden md:flex items-center gap-6 border-l border-gray-200 pl-8">
              <Link to="/blog" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/investors" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                For Investors
              </Link>
            </div>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/reals" 
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary border border-gray-200 rounded-full transition-all hover:border-primary/30"
            >
              <PlayCircle size={18} className="text-primary" />
              Reals
            </Link>
            
            <div className="relative">
              <Link 
                to="/list-property" 
                className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-gray-900 bg-gray-50 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors"
              >
                List a Property
              </Link>
              <span className="absolute -top-2.5 -right-2 bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">
                Free
              </span>
            </div>
            
            <button className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-primary transition-colors ml-2">
              <User size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X size={24} className="text-gray-900" />
            ) : (
              <Menu size={24} className="text-gray-900" />
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t border-gray-100"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col p-4 gap-4">
              <Link to="/blog" className="text-base font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
              <Link to="/investors" className="text-base font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>For Investors</Link>
              <Link to="/reals" className="flex items-center gap-2 text-base font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>
                <PlayCircle size={18} className="text-primary" /> Reals
              </Link>
              <Link to="/list-property" className="text-base font-medium text-gray-800 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                List a Property <span className="bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-md font-bold uppercase">Free</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
