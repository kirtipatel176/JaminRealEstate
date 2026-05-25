import { motion } from 'framer-motion';

const ProcessTimeline = () => {
  const steps = [
    {
      num: "01",
      title: "Browse Properties",
      desc: "Explore our highly curated digital portfolio of agricultural farms, NA plots, and commercial lands across Gujarat."
    },
    {
      num: "02",
      title: "Get Property Details",
      desc: "Review comprehensive data including 360° virtual tours, Google Map locations, investment insights, and exact dimensions."
    },
    {
      num: "03",
      title: "Book Visit",
      desc: "Schedule a guided on-site visit with our expert advisors to physically inspect the terrain and neighborhood."
    },
    {
      num: "04",
      title: "Verification Support",
      desc: "We provide complete transparency with title clearances, zoning documents, and legal verification certificates."
    },
    {
      num: "05",
      title: "Final Deal",
      desc: "We handle the complete negotiation and registration paperwork to ensure a frictionless and secure transaction."
    }
  ];

  return (
    <section className="bg-primary py-32 relative overflow-hidden">
      
      {/* Background Cinematic Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h4 
            className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Investment Protocol
          </motion.h4>
          <motion.h2 
            className="text-5xl md:text-6xl font-heading text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our Process
          </motion.h2>
        </div>

        {/* Animated Process Timeline */}
        <div className="relative">
          
          {/* Glowing Connecting Line */}
          <div className="absolute top-[40px] left-8 md:left-[50%] w-[2px] h-[calc(100%-80px)] bg-white/10 md:-translate-x-1/2 hidden sm:block">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-accent shadow-[0_0_20px_#C8A96B]"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            ></motion.div>
          </div>

          <div className="flex flex-col gap-12 md:gap-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.num} className="relative flex items-center justify-between md:justify-center group">
                  
                  {/* Left Content (or empty for layout) */}
                  <div className={`hidden md:flex w-5/12 justify-end pr-12 ${!isEven ? 'md:invisible' : ''}`}>
                    <motion.div 
                      className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-right hover:bg-white/10 transition-colors"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <h3 className="text-2xl font-heading text-white mb-3 group-hover:text-accent transition-colors">{step.title}</h3>
                      <p className="text-white/60 font-light leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <motion.div 
                    className="relative z-10 w-16 h-16 rounded-full bg-primary border-2 border-accent flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(200,169,107,0.2)] group-hover:scale-110 transition-transform duration-300 mx-0 sm:mx-8 md:mx-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <span className="text-accent font-heading text-xl">{step.num}</span>
                  </motion.div>

                  {/* Right Content (or Mobile default) */}
                  <div className={`w-full sm:w-[calc(100%-6rem)] md:w-5/12 md:pl-12 ${isEven ? 'md:invisible' : ''}`}>
                     <motion.div 
                      className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-left hover:bg-white/10 transition-colors"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <h3 className="text-2xl font-heading text-white mb-3 group-hover:text-accent transition-colors">{step.title}</h3>
                      <p className="text-white/60 font-light leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
