import React from 'react';
import { motion } from 'framer-motion';
import { Tag, ShieldCheck, Users, Home } from 'lucide-react';

const features = [
  {
    icon: Tag,
    title: 'Free Service',
    description: 'Enjoy our comprehensive range of property services without worrying about any upfront fees or hidden charges.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Transparent',
    description: 'Transparency is at the core of our operations. We believe in open communication and honesty throughout the property journey.',
  },
  {
    icon: Users,
    title: 'Seamless User Experience',
    description: 'Navigate through your property transactions with ease and convenience. Our user-friendly platform and expert team make the entire process smooth and hassle-free.',
  },
  {
    icon: Home,
    title: 'One Stop Solution',
    description: 'Whatever your property goals may be, we have the solution for you. Whether you\'re buying, selling, renting, or investing, our comprehensive range of services caters to all your needs.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-primary py-16 md:py-24 overflow-hidden" id="about">
      {/* Decorative background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A96B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} 
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[90px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Why onlyjamin.com?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/90 text-base md:text-lg max-w-3xl mx-auto"
          >
            Experience the difference with Housivity.com - your ultimate solution for all your property needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/20 flex flex-col items-start transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">{feature.title}</h3>
              <p className="text-accent/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
