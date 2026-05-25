import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Patel",
      role: "NRI Investor, USA",
      content: "The level of transparency and legal security provided by ONLY JAMIN is unprecedented in Gujarat's real estate market. They didn't just sell me land; they built a fortress around my investment."
    },
    {
      id: 2,
      name: "Amit Shah",
      role: "Industrialist",
      content: "Acquiring a 50-vigha contiguous parcel for manufacturing is notoriously difficult. Their team orchestrated the entire acquisition with surgical precision."
    },
    {
      id: 3,
      name: "Vikram Desai",
      role: "HNI Portfolio Manager",
      content: "Their 360° virtual tours and deep verification matrix saved us months of due diligence. A truly SaaS-level luxury experience for land acquisition."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-32 bg-bg-main relative flex flex-col items-center justify-center min-h-[700px] overflow-hidden" id="testimonials">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.h4 
            className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Investor Testimonials
          </motion.h4>
          <motion.h2 
            className="text-5xl md:text-6xl font-heading text-primary leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Voices of <span className="italic font-light">Trust</span>
          </motion.h2>
        </div>

        {/* Auto-Slider Area */}
        <div className="relative h-[400px] md:h-[350px] w-full max-w-4xl mx-auto flex items-center justify-center perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 1.1, rotateX: -10 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-full"
            >
              <div className="bg-white/40 backdrop-blur-2xl border border-white/60 p-6 md:p-16 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.05)] text-center h-full flex flex-col justify-center">
                
                {/* Gold Stars */}
                <div className="flex justify-center gap-1 mb-6 md:mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-accent fill-accent" />
                  ))}
                </div>

                <p className="text-lg md:text-3xl font-heading text-primary leading-relaxed mb-6 md:mb-10 italic px-2">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex flex-col items-center justify-center mt-auto">
                  <p className="text-base md:text-lg font-bold text-primary tracking-wide">{testimonials[currentIndex].name}</p>
                  <p className="text-[10px] md:text-xs text-accent uppercase tracking-[0.2em] mt-1 font-semibold">{testimonials[currentIndex].role}</p>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Nav Dots */}
        <div className="flex justify-center gap-4 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === idx ? 'w-12 bg-accent' : 'w-4 bg-border'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
