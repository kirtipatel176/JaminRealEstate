import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Map, ShieldCheck, Video, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[120vh] min-h-[900px] overflow-hidden bg-primary flex items-center justify-center">
      
      {/* Background Image with Deep Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-[130%]"
        style={{ y: yImage }}
      >
        <div className="absolute inset-0 bg-primary/50 mix-blend-multiply z-10"></div>
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,61,46,0.9)_100%)] z-10"></div>
        
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
          alt="Aerial Farmland Gujarat" 
          className="w-full h-full object-cover scale-110"
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent/40 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: Math.random()
              }}
              animate={{ 
                y: [null, Math.random() * -200],
                opacity: [null, 0]
              }}
              transition={{ 
                duration: 5 + Math.random() * 5, 
                repeat: Infinity, 
                ease: "linear"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-30 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center mt-20"
        style={{ y: yContent, opacity }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-heading text-bg-main leading-[1.1] mb-6 drop-shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Gujarat’s Trusted <br />
          <span className="text-accent italic">Verified Land Platform</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-bg-main/80 font-light max-w-2xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          Verified Farm Lands, NA Plots & Investment Properties with 360° Virtual Tours
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <a href="#properties" className="px-8 py-4 bg-accent text-primary font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(200,169,107,0.4)] transition-all duration-500">
            Explore Properties
          </a>
          <Link to="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-primary transition-all duration-500">
            Book Free Consultation
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating Glass Cards */}
      <motion.div 
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 w-full max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-4"
        style={{ y: yContent, opacity }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      >
        {[
          { icon: ShieldCheck, text: "Verified Properties" },
          { icon: BadgeCheck, text: "Trusted Investment" },
          { icon: Map, text: "Google Map Access" },
          { icon: Video, text: "360° Virtual Tour" }
        ].map((item, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-white/20 transition-colors duration-500 hover:-translate-y-2 group">
            <item.icon size={28} className="text-accent group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white text-xs md:text-sm font-medium tracking-wide">{item.text}</span>
          </div>
        ))}
      </motion.div>

    </section>
  );
};

export default Hero;
