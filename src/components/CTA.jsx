import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      
      {/* Cinematic Background Mask */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10"></div>
        <img 
          src="/images/cta_land.png" 
          alt="Gujarat Farmland Investment" 
          className="w-full h-full object-cover scale-105"
        />
      </div>

      <div className="relative z-20 text-center px-6 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        <motion.p 
          className="text-accent text-sm md:text-base tracking-[0.3em] uppercase mb-8 font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Secure Your Legacy
        </motion.p>
        
        <motion.h2 
          className="text-5xl md:text-7xl lg:text-8xl font-heading text-white leading-[1.1] mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Start Your Land <br /> <span className="italic text-white/80">Investment</span> Journey.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button className="group relative flex items-center justify-center w-48 h-48 rounded-full border border-accent/40 hover:border-accent bg-transparent overflow-hidden transition-all duration-700">
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
            <span className="relative z-10 flex flex-col items-center gap-2 text-white group-hover:text-primary transition-colors duration-500">
              <span className="text-xs tracking-[0.2em] uppercase font-semibold">Initiate</span>
              <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
