import { Globe, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-bg-main pt-32 pb-10 relative overflow-hidden">
      
      {/* Decorative grain/glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24 border-b border-border/20 pb-20">
          
          <div className="md:col-span-5">
            <h3 className="text-2xl font-heading mb-6">Reach Out</h3>
            <a href="mailto:invest@onlyjamin.com" className="text-3xl md:text-4xl lg:text-5xl font-light hover:text-accent transition-colors block mb-4 border-b border-transparent hover:border-accent w-fit pb-2">
              invest@onlyjamin.com
            </a>
            <div className="flex flex-col gap-3 mt-8">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-bg-main/60 hover:text-accent transition-colors w-fit">
                <Phone size={18} /> <span className="font-light text-xl">+91 98765 43210</span>
              </a>
              <div className="flex items-center gap-3 text-bg-main/60 w-fit">
                <MapPin size={18} /> <span className="font-light">101 Luxury Avenue, SG Highway, Ahmedabad</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-6 font-semibold">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-bg-main/70 hover:text-white transition-colors text-sm font-light">Home</Link></li>
              <li><a href="/#properties" className="text-bg-main/70 hover:text-white transition-colors text-sm font-light">Properties</a></li>
              <li><a href="/#about" className="text-bg-main/70 hover:text-white transition-colors text-sm font-light">Services</a></li>
              <li><Link to="/contact" className="text-bg-main/70 hover:text-white transition-colors text-sm font-light">Contact Us</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-6 font-semibold">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-bg-main/70 hover:text-white transition-colors text-sm font-light">Investment Consulting</a></li>
              <li><a href="#" className="text-bg-main/70 hover:text-white transition-colors text-sm font-light">Title Verification</a></li>
              <li><a href="#" className="text-bg-main/70 hover:text-white transition-colors text-sm font-light">360° Drone Tours</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-6 font-semibold">Social</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-bg-main/70 hover:text-white transition-colors text-sm font-light flex items-center gap-2"><Globe size={14} /> LinkedIn</a></li>
              <li><a href="#" className="text-bg-main/70 hover:text-white transition-colors text-sm font-light flex items-center gap-2"><Globe size={14} /> Instagram</a></li>
              <li><a href="#" className="text-bg-main/70 hover:text-white transition-colors text-sm font-light flex items-center gap-2"><Globe size={14} /> Twitter</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Giant Text & Copyright */}
        <div className="flex flex-col items-center">
          <div className="w-full overflow-hidden flex justify-center mb-10">
             <h1 className="text-[12vw] font-heading font-bold leading-none text-accent/20 tracking-tight select-none">
               ONLY JAMIN.
             </h1>
          </div>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-bg-main/40 uppercase tracking-widest border-t border-border/10 pt-8 gap-4">
            <p>&copy; {new Date().getFullYear()} ONLY JAMIN. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-bg-main transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-bg-main transition-colors">Terms of Service</a>
            </div>
            <p>Designed for the Visionary.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
