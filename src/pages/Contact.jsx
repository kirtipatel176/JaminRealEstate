import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-bg-main min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 relative overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h4 
            className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Initiate Contact
          </motion.h4>
          <motion.h1 
            className="text-5xl md:text-7xl font-heading text-primary leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Let's Discuss <br /><span className="italic font-light">Your Portfolio</span>
          </motion.h1>
          <motion.p 
            className="text-primary/60 font-light text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Schedule a private consultation with our investment advisors to explore verified land acquisitions across Gujarat.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Form Area */}
          <motion.div 
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-border/50"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-primary/50 font-semibold">Full Name</label>
                  <input type="text" className="w-full bg-bg-main border border-border rounded-xl px-4 py-4 focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-primary/50 font-semibold">Phone Number</label>
                  <input type="tel" className="w-full bg-bg-main border border-border rounded-xl px-4 py-4 focus:outline-none focus:border-accent transition-colors" placeholder="+91 95107 74987" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-primary/50 font-semibold">Email Address</label>
                <input type="email" className="w-full bg-bg-main border border-border rounded-xl px-4 py-4 focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-primary/50 font-semibold">Interested Property Type</label>
                  <select className="w-full bg-bg-main border border-border rounded-xl px-4 py-4 focus:outline-none focus:border-accent transition-colors appearance-none text-primary/80">
                    <option>Agricultural Farm</option>
                    <option>Commercial Land</option>
                    <option>NA Plot</option>
                    <option>Industrial Zone</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-primary/50 font-semibold">Budget Range</label>
                  <select className="w-full bg-bg-main border border-border rounded-xl px-4 py-4 focus:outline-none focus:border-accent transition-colors appearance-none text-primary/80">
                    <option>Up to ₹1 Cr</option>
                    <option>₹1 Cr - ₹5 Cr</option>
                    <option>Above ₹5 Cr</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-primary/50 font-semibold">Preferred Location / Message</label>
                <textarea rows="4" className="w-full bg-bg-main border border-border rounded-xl px-4 py-4 focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Tell us what you're looking for..."></textarea>
              </div>

              <button type="button" className="group relative w-full overflow-hidden rounded-xl bg-primary text-accent font-semibold tracking-widest uppercase text-sm py-5 mt-4 transition-all">
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
                <span className="relative z-10 group-hover:text-primary transition-colors duration-500">Submit Inquiry</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Details & Map Area */}
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            
            {/* Info Cards */}
            <div className="bg-primary text-bg-main rounded-3xl p-10 flex flex-col gap-8 border border-accent/20">
              <div>
                <h3 className="font-heading text-2xl mb-6 text-white">Direct Channels</h3>
                <div className="flex flex-col gap-6">
                  <a href="tel:+919510774987" className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent transition-colors">
                      <Phone size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Direct Line</p>
                      <p className="font-light tracking-wider hover:text-accent transition-colors">+91 95107 74987</p>
                    </div>
                  </a>
                  <a href="mailto:info@vedanco.com" className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent transition-colors">
                      <Mail size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Email</p>
                      <p className="font-light tracking-wider hover:text-accent transition-colors">info@vedanco.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent transition-colors">
                      <MapPin size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Headquarters</p>
                      <p className="font-light text-sm">Gandhinagar, Infocity, Ahmedabad,<br/>Gujarat, India - 382007</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <Clock size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Office Hours</p>
                    <p className="font-light text-sm">Mon - Sat: 10:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed (Mock) */}
            <div className="w-full h-64 rounded-3xl overflow-hidden border border-border/50 relative group">
              <div className="absolute inset-0 bg-primary/20 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.43346914561!2d72.65705337586524!3d23.183577310313886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3c7c2b3e83%3A0xc3f5a1bb8b667104!2sInfocity%2C%20Gandhinagar%2C%20Gujarat%20382007!5e0!3m2!1sen!2sin!4v1716650000000!5m2!1sen!2sin" 
                className="w-full h-full border-0 grayscale" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
