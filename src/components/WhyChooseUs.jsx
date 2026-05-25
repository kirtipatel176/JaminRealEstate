import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="relative bg-primary py-12 md:py-20 overflow-hidden" id="about">
      {/* Decorative background effects kept */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A96B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} 
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[90px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="w-full">
          <div
            className="w-full h-56 md:h-96 lg:h-[420px] rounded-2xl shadow-lg bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('/images/whyus.png')` }}
            aria-label="Why choose us image"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
