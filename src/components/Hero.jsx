import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#F05520] via-[#E24B12] to-[#C84C0C] overflow-hidden">
      {/* Background Graphic Element (Optional subtle watermark logo) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-start opacity-[0.03]">
        <img src="/logo.png" alt="" className="w-1/2 h-auto ml-[-10%] grayscale" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between pt-16 md:pt-24 pb-32 md:pb-40">
        
        {/* Left Content */}
        <motion.div 
          className="w-full md:w-1/2 text-left mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.15] mb-6">
            Your dream home is just a <br />
            search away
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-lg">
            Find the perfect property tailored to your needs quick, easy, and hassle-free.
          </p>
        </motion.div>

        {/* Right Content - Family Image */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center md:justify-end md:absolute md:bottom-0 md:right-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <img 
            src="/images/hero_family.png" 
            alt="Happy Family" 
            className="w-full max-w-[500px] lg:max-w-[650px] object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
