import { motion } from 'framer-motion';
import { ShieldCheck, FileText, IndianRupee, Landmark, Video } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "100% Verified Properties",
      desc: "Every parcel undergoes rigorous legal due diligence to ensure zero encumbrances and completely clear titles.",
      icon: ShieldCheck,
      span: "md:col-span-1"
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden fees or multi-level brokerage margins. Experience direct owner-level negotiation transparency.",
      icon: IndianRupee,
      span: "md:col-span-1"
    },
    {
      title: "End-to-End Documentation",
      desc: "From drafting sale deeds to final government registration, our elite legal team completely eliminates paperwork friction and ensures smooth transitions for every investment.",
      icon: FileText,
      span: "md:col-span-2"
    },
    {
      title: "Investment Consulting",
      desc: "Data-driven insights to help deploy capital into high-growth corridors.",
      icon: Landmark,
      span: "md:col-span-1"
    },
    {
      title: "360° Virtual Tours",
      desc: "Inspect terrain and neighborhood developments via 4K drone tours.",
      icon: Video,
      span: "md:col-span-1"
    }
  ];

  return (
    <section className="relative bg-primary py-24 md:py-32 overflow-hidden" id="about">
      
      {/* Premium Dark Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A96B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} 
      />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:w-5/12">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-accent"></div>
                  <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                    The ONLY JAMIN Standard
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-bg-main leading-[1.1] mb-8">
                  Why <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#D4B982] font-light">Visionaries</span> <br/>
                  Choose Us
                </h2>
                
                <p className="text-bg-main/70 text-lg font-light leading-relaxed mb-10 max-w-md">
                  A modern SaaS-level investment marketplace delivering absolute trust, transparency, and high-end curation for land investors in Gujarat.
                </p>

                <div className="flex gap-4 items-center p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-sm">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="text-bg-main font-bold text-lg mb-1">100% Secure</p>
                    <p className="text-bg-main/50 text-sm leading-snug">Every transaction is protected and legally vetted.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Bento Grid */}
          <div className="lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  className={`relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-accent/40 hover:-translate-y-1 transition-all duration-500 group ${feature.span}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-transparent transition-all duration-500 z-0" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-500 group-hover:scale-110">
                      <feature.icon size={24} className="text-accent" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-2xl font-heading text-bg-main mb-4 group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-bg-main/60 font-light leading-relaxed text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
