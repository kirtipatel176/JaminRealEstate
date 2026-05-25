import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Map } from 'lucide-react';

const PropertySearch = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const containerRef = useRef(null);

  const tabs = ['All', 'Buy', 'Sell', 'Investment'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };
    const handleScroll = () => { if (isExpanded) setIsExpanded(false); };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isExpanded]);

  const handleSearch = () => {
    setIsExpanded(false);
    setIsSearching(true);
    setHasSearched(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSearching(false);
    }, 1500);
  };

  const searchResults = [
    {
      id: "jamin-1",
      title: "Premium Farm Land",
      location: "Gandhinagar",
      price: "₹1.2 Cr",
      area: "12,000 sq.ft",
      type: "Farm Land",
      image: "https://images.unsplash.com/photo-1592982537447-6f296d11a76c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "jamin-2",
      title: "Luxury NA Plot",
      location: "Ahmedabad",
      price: "₹85 Lakh",
      area: "8,500 sq.ft",
      type: "Investment Hotspot",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section className="bg-bg-main py-10 relative z-40 -mt-16" id="search" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div 
          className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-white/50 p-6 md:p-8 relative z-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Top Tabs */}
          <div className="flex items-center gap-2 mb-8 border-b border-border/50 pb-4 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'text-primary/60 hover:bg-bg-secondary hover:text-primary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end" onClick={() => setIsExpanded(true)}>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-primary/50 font-bold ml-2">State</label>
              <select className="w-full bg-bg-main border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none text-sm text-primary">
                <option>Gujarat</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-primary/50 font-bold ml-2">District</label>
              <select className="w-full bg-bg-main border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none text-sm text-primary">
                <option value="">Any District</option>
                <option>Ahmedabad</option>
                <option>Gandhinagar</option>
                <option>Surat</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-primary/50 font-bold ml-2">Property Type</label>
              <select className="w-full bg-bg-main border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none text-sm text-primary">
                <option value="">All Types</option>
                <option>Farm Land</option>
                <option>NA Plot</option>
                <option>Commercial</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-primary/50 font-bold ml-2">Budget</label>
              <select className="w-full bg-bg-main border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none text-sm text-primary">
                <option value="">Any Budget</option>
                <option>Below ₹1 Cr</option>
                <option>₹1 Cr - ₹5 Cr</option>
                <option>Above ₹5 Cr</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-primary/50 font-bold ml-2">Area Size</label>
              <select className="w-full bg-bg-main border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none text-sm text-primary">
                <option value="">Any Size</option>
                <option>Up to 5 Vigha</option>
                <option>5 - 20 Vigha</option>
                <option>20+ Vigha</option>
              </select>
            </div>

            {/* Luxury Gold Gradient Button */}
            <div className="flex flex-col justify-end">
              <button 
                onClick={(e) => { e.stopPropagation(); handleSearch(); }}
                disabled={isSearching}
                className="w-full bg-gradient-to-r from-[#C8A96B] to-[#e1c58c] text-primary font-bold uppercase tracking-widest text-xs py-3.5 rounded-xl shadow-[0_10px_20px_rgba(200,169,107,0.3)] hover:shadow-[0_15px_30px_rgba(200,169,107,0.5)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSearching ? 'Searching...' : 'Search'}
              </button>
            </div>

          </div>

          {/* Expanded Extra Filter (Property ID) */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div 
                className="mt-6 pt-6 border-t border-border/50"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="flex flex-col gap-2 max-w-xs">
                  <label className="text-[10px] uppercase tracking-widest text-primary/50 font-bold ml-2">Property ID (Optional)</label>
                  <input type="text" placeholder="e.g. JAMIN-101" className="w-full bg-bg-main border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-sm text-primary placeholder:text-primary/30" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

        {/* Dynamic Search Results */}
        <AnimatePresence>
          {hasSearched && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 40 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="overflow-hidden"
            >
              {isSearching ? (
                // Smooth Loading Animation
                <div className="flex justify-center items-center py-20">
                  <motion.div 
                    className="w-12 h-12 border-4 border-accent/20 border-t-accent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              ) : (
                // Grid Layout for Results
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 pb-10">
                  {searchResults.map((prop, idx) => (
                    <motion.div
                      key={prop.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                      <Link to={`/property/${prop.id}`} className="group cursor-pointer block h-full">
                        <div className="relative h-full p-4 rounded-3xl bg-white/40 border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col">
                          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 group-hover:ring-2 ring-accent/50 ring-offset-4 ring-offset-bg-main transition-all duration-500">
                            <img 
                              src={prop.image} 
                              alt={prop.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Badge */}
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-primary px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-lg z-10">
                              <ShieldCheck size={14} className="text-accent"/> Verified
                            </div>
                            <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-lg z-10">
                               <Map size={14} /> Map Access
                            </div>
                          </div>
                          
                          <div className="flex flex-col flex-grow justify-between px-2 pb-2">
                            <div>
                              <h3 className="text-2xl font-heading text-primary group-hover:text-accent transition-colors duration-300 mb-1">{prop.title}</h3>
                              <p className="text-primary/60 font-medium text-xs mb-4">
                                {prop.location} • {prop.area} • {prop.type}
                              </p>
                            </div>
                            <div className="flex justify-between items-center mt-auto border-t border-border/50 pt-4">
                              <p className="text-2xl font-bold text-primary">{prop.price}</p>
                              <span className="border border-accent text-accent px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest group-hover:bg-accent group-hover:text-white transition-colors">
                                View Details
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default PropertySearch;
