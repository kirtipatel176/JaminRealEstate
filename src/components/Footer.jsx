import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f1f3a] text-white pt-16 pb-6 mt-20 rounded-t-[32px] md:rounded-t-[48px] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 mb-16">
          
          {/* Column 1: Logo & Email */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link to="/" className="inline-block bg-white/95 rounded-2xl px-4 py-2 w-fit">
              <img src="/logo.png" alt="ONLY JAMIN" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
            <div>
              <h4 className="text-[#8499B8] text-[11px] font-semibold uppercase tracking-widest mb-3">Email</h4>
              <a href="mailto:info@vedanco.com" className="text-white hover:text-[#F05520] transition-colors text-sm md:text-[15px]">
                info@vedanco.com
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-2">
            <h4 className="text-[#8499B8] text-[11px] font-semibold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/investors" className="text-[#D1D5DB] hover:text-white transition-colors text-[15px]">For Investors</Link></li>
              <li><Link to="/blog" className="text-[#D1D5DB] hover:text-white transition-colors text-[15px]">Blog</Link></li>
              <li><Link to="/stories" className="text-[#D1D5DB] hover:text-white transition-colors text-[15px]">Web Stories</Link></li>
              <li><Link to="/reals" className="text-[#D1D5DB] hover:text-white transition-colors text-[15px]">Reals</Link></li>
              <li><Link to="/tools" className="text-[#D1D5DB] hover:text-white transition-colors text-[15px]">Tools</Link></li>
              <li><Link to="/sitemap" className="text-[#D1D5DB] hover:text-white transition-colors text-[15px]">Sitemap</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2">
            <h4 className="text-[#8499B8] text-[11px] font-semibold uppercase tracking-widest mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/privacy" className="text-[#D1D5DB] hover:text-white transition-colors text-[15px]">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-[#D1D5DB] hover:text-white transition-colors text-[15px]">Terms & Conditions</Link></li>
              <li><Link to="/about" className="text-[#D1D5DB] hover:text-white transition-colors text-[15px]">About Us</Link></li>
              <li><Link to="/contact" className="text-[#D1D5DB] hover:text-white transition-colors text-[15px]">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: App & Social */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div>
              <p className="text-[#D1D5DB] text-[15px] mb-4 flex gap-1.5 items-center">
                Experience <span className="text-[#F05520] font-medium border-b border-[#F05520] pb-0.5">ONLY JAMIN</span> App on mobile
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <button className="bg-white text-gray-900 rounded-md flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 transition-colors w-[135px]">
                  <svg viewBox="0 0 384 512" className="h-6 w-6 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                  <div className="text-left flex flex-col justify-center">
                    <span className="text-[8px] leading-none mb-0.5">Download on the</span>
                    <span className="text-[13px] font-semibold leading-none">App Store</span>
                  </div>
                </button>
                <button className="bg-white text-gray-900 rounded-md flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 transition-colors w-[135px]">
                  <svg viewBox="0 0 512 512" className="h-6 w-6"><path fill="#4285F4" d="M32.1 22.8c-7.9 8.2-12.1 20.5-12.1 35.8v394.8c0 15.3 4.2 27.6 12.1 35.8l1.3 1.2 220.2-220.1v-5.9l-220.2-220 1-1.6z"/><path fill="#EA4335" d="M331 346.5L253.5 269 32.1 489.2c11.7 12.2 30.7 13 52.8 1.4l246.1-144.1z"/><path fill="#FBBC04" d="M331 165.5l75 42.9c23.7 13.5 23.7 35.6 0 49.2l-75 42.9L253.5 223z"/><path fill="#34A853" d="M84.9 21.4C62.8 9.8 43.8 10.6 32.1 22.8L253.5 243l77.5-77.5z"/></svg>
                  <div className="text-left flex flex-col justify-center">
                    <span className="text-[8px] leading-none mb-0.5">GET IT ON</span>
                    <span className="text-[13px] font-semibold leading-none">Google Play</span>
                  </div>
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white p-1.5 rounded-[4px] shrink-0">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://vedanco.com" alt="QR Code" className="w-[60px] h-[60px]" />
                </div>
                <p className="text-[11px] text-white/90 leading-snug max-w-[140px]">
                  Scan the QR code with your camera to download the app
                </p>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-white text-[11px] font-medium mb-3">Follow us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-[#F05520] transition-colors">
                  {/* Instagram Icon */}
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="text-white hover:text-[#F05520] transition-colors">
                   {/* X (Twitter) Icon */}
                   <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="text-white hover:text-[#F05520] transition-colors">
                  {/* Facebook Icon */}
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="text-white hover:text-[#F05520] transition-colors">
                  {/* LinkedIn Icon */}
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="text-white hover:text-[#F05520] transition-colors">
                  {/* Pinterest icon roughly */}
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.163 0 7.398 2.967 7.398 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.618 0 12.017 0z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6">
          <p className="text-[#8499B8] text-[13px] mb-4 md:mb-0">
            &copy;{new Date().getFullYear()}-{String(new Date().getFullYear() + 1).slice(-2)} ONLY JAMIN.com
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-[#D1D5DB] hover:bg-white text-gray-800 flex items-center justify-center transition-colors absolute bottom-4 right-4 md:right-10 lg:right-16 shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} strokeWidth={2.5} />
          </button>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
