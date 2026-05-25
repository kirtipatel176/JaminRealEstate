import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Video, MapPin, Share2, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_PROPERTIES = [
  {
    id: "prop-1",
    title: "Premium Farm Land in Gandhinagar",
    price: "₹1.25 Cr",
    location: "Gandhinagar, Gujarat",
    details: ["12,000 Sq.ft", "Road Touch", "Water Available"],
    type: "Farm Land",
    badges: ["Verified", "Premium Deal"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "prop-2",
    title: "Luxury NA Plot in Ahmedabad",
    price: "₹85 Lakh",
    location: "Ahmedabad, Gujarat",
    details: ["8,500 Sq.ft", "NA Approved", "Prime Location"],
    type: "NA Plots",
    badges: ["Verified", "Investment Hotspot"],
    image: "https://images.unsplash.com/photo-1629196914565-df048bb749d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "prop-3",
    title: "Highway Facing Commercial Land",
    price: "₹2.8 Cr",
    location: "Surat Highway, Gujarat",
    details: ["25,000 Sq.ft", "Highway Facing", "Investment Zone"],
    type: "Commercial Land",
    badges: ["Premium Deal"],
    image: "https://images.unsplash.com/photo-1582269438706-fa3200f6b315?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "prop-4",
    title: "Premium Investment Plot in Mehsana",
    price: "₹1.6 Cr",
    location: "Mehsana, Gujarat",
    details: ["15,500 Sq.ft", "Future Growth Zone", "Premium Access Road"],
    type: "Investment Land",
    badges: ["Investment Hotspot"],
    image: "https://images.unsplash.com/photo-1592982537447-6f296d11a76c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "prop-5",
    title: "Industrial Plot Near Vadodara",
    price: "₹3.2 Cr",
    location: "Vadodara, Gujarat",
    details: ["40,000 Sq.ft", "Industrial Approved", "Highway Connectivity"],
    type: "Commercial Land",
    badges: ["Verified"],
    image: "https://images.unsplash.com/photo-1416339158484-9637228cc908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "prop-6",
    title: "Luxury Weekend Farmhouse Land",
    price: "₹95 Lakh",
    location: "Anand, Gujarat",
    details: ["10,000 Sq.ft", "Green Zone", "Peaceful Location"],
    type: "Farm Land",
    badges: ["360° Tour", "Premium Deal"],
    image: "https://images.unsplash.com/photo-1510103607739-166297316b9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

const FILTERS = ["All Properties", "Farm Land", "NA Plots", "Investment Land", "Commercial Land"];

const FeaturedProperties = () => {
  const [activeFilter, setActiveFilter] = useState("All Properties");

  const filteredProperties = MOCK_PROPERTIES.filter(prop => 
    activeFilter === "All Properties" ? true : prop.type === activeFilter
  );

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-bg-main via-bg-secondary/30 to-bg-main overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A96B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} 
      />
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-6 shadow-[0_0_15px_rgba(200,169,107,0.15)]">
              ONLY JAMIN EXCLUSIVE
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6 leading-tight">
              Discover Our <br className="hidden md:block"/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-[#D4B982] to-[#A68848] font-semibold italic inline-block pb-2">
                Featured Properties
              </span>
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6" />
            <p className="text-primary/70 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Explore verified premium land opportunities across Gujarat with complete transparency, 360° virtual tours, and investment guidance.
            </p>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {FILTERS.map((filter, idx) => {
            const isActive = activeFilter === filter;
            return (
              <motion.button
                key={filter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  isActive 
                  ? 'bg-primary text-accent shadow-[0_0_20px_rgba(200,169,107,0.3)] ring-1 ring-accent/50' 
                  : 'bg-white/60 backdrop-blur-md text-primary hover:bg-white border border-white hover:shadow-lg'
                }`}
              >
                {filter}
              </motion.button>
            )
          })}
        </div>

        {/* Property Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProperties.map((prop) => (
              <motion.div
                key={prop.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group relative bg-white/40 backdrop-blur-2xl rounded-[32px] overflow-hidden border border-white/60 hover:border-accent/50 hover:shadow-[0_20px_40px_rgba(15,61,46,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden m-3 rounded-[24px]">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={prop.image} 
                    alt={prop.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    {prop.badges.map(badge => (
                      <span key={badge} className="bg-white/20 backdrop-blur-md border border-accent/50 text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                        {badge === 'Verified' && <ShieldCheck size={14} className="text-accent" />}
                        {badge === '360° Tour' && <Video size={14} className="text-accent" />}
                        {badge !== 'Verified' && badge !== '360° Tour' && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-accent text-sm font-medium mb-3">
                    <MapPin size={16} />
                    {prop.location}
                  </div>
                  
                  <h3 className="text-2xl font-heading text-primary mb-4 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {prop.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-primary/70 mb-6 font-medium">
                    {prop.details.map((detail, i) => (
                      <span key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                        {detail}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto border-t border-border/50 pt-6 flex items-end justify-between">
                    <div>
                      <p className="text-xs text-primary/60 uppercase tracking-widest font-semibold mb-1">Investment</p>
                      <p className="text-3xl font-bold text-primary">{prop.price}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="w-10 h-10 rounded-full bg-white/50 border border-white hover:bg-accent hover:border-accent hover:text-white flex items-center justify-center text-primary transition-colors shadow-sm">
                        <Share2 size={16} />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-white/50 border border-white hover:bg-accent hover:border-accent hover:text-white flex items-center justify-center text-primary transition-colors shadow-sm">
                        <Heart size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Hover Buttons Overlay - Desktop Only */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 hidden md:flex flex-col items-center justify-center gap-4">
                  <Link to={`/property/${prop.id}`} className="px-8 py-3 bg-accent text-primary font-bold rounded-full hover:bg-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500 ease-out shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                    Explore Property
                  </Link>
                  <a href={`https://wa.me/1234567890?text=I am interested in ${prop.title}`} target="_blank" rel="noreferrer" className="px-8 py-3 bg-transparent border border-accent text-accent font-bold rounded-full hover:bg-accent hover:text-primary transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500 delay-75 ease-out shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                    WhatsApp Inquiry
                  </a>
                </div>

                {/* Mobile Buttons */}
                <div className="md:hidden flex gap-2 p-4 pt-0">
                  <Link to={`/property/${prop.id}`} className="flex-1 py-3 bg-accent text-primary text-center font-bold text-sm rounded-xl shadow-md">
                    Explore
                  </Link>
                  <a href={`https://wa.me/1234567890?text=I am interested in ${prop.title}`} className="flex-1 py-3 border border-accent text-accent text-center font-bold text-sm rounded-xl shadow-md">
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/properties" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#B59551] via-accent to-[#B59551] text-primary font-bold text-lg rounded-full overflow-hidden shadow-[0_15px_30px_rgba(200,169,107,0.3)] hover:shadow-[0_20px_40px_rgba(200,169,107,0.5)] hover:scale-105 transition-all duration-300">
              <span className="relative z-10">View All Properties</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProperties;
