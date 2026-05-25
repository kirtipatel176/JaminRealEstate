import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Maximize, Landmark, FileText, CheckCircle2, TrendingUp, Download, Phone, Map } from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Use the premium Gandhinagar mock data as default
  const property = {
    title: "Premium Farm Land",
    location: "Gandhinagar, Gujarat",
    price: "₹1.2 Cr",
    area: "12,000 sq.ft",
    type: "Farm Land",
    status: "Verified",
    ownership: "Clear Title (Freehold)",
    description: "An exceptional parcel of premium agricultural land situated in the rapidly developing outskirts of Gandhinagar. This property offers a rare combination of immediate agricultural utility and immense long-term capital appreciation potential due to the expanding commercial corridors nearby. The terrain is perfectly leveled, featuring rich soil quality and direct access to state highways.",
    images: [
      "/images/farm_land.png",
      "/images/weekend_farmhouse.png",
      "/images/investment_land.png"
    ],
    features: [
      "Road Touch Access",
      "Water Supply Available",
      "Electricity Available",
      "Strategic Investment Zone",
      "NA Approval in Process",
      "State Highway Connectivity"
    ],
    insights: {
      roi: "18-22% Expected Annual Appreciation",
      growth: "Upcoming IT SEZ 5km away",
      nearby: "Gandhinagar Railway Station (15 mins)"
    }
  };

  return (
    <div className="bg-bg-main min-h-screen pt-20 md:pt-24 pb-20 md:pb-32">
      
      {/* Hero Image Slider (Mocked as single large image for now, with gallery below) */}
      <div className="w-full h-[60vh] md:h-[70vh] relative mt-4">
        <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90"></div>
        
        {/* Floating Badges */}
        <div className="absolute top-8 left-8 flex gap-3">
          <div className="bg-white/90 backdrop-blur-md text-primary px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-xl">
            <ShieldCheck size={16} className="text-accent"/> {property.status}
          </div>
          <div className="bg-primary/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-xl border border-accent/30">
            <Landmark size={16} className="text-accent"/> {property.type}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-32 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column (Details) */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          
          {/* Header Info */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-border/50">
            <h1 className="text-4xl md:text-5xl font-heading text-primary mb-4">{property.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-primary/60 text-sm font-medium mb-8">
              <span className="flex items-center gap-2"><MapPin size={16} className="text-accent"/> {property.location}</span>
              <span className="flex items-center gap-2"><Maximize size={16} className="text-accent"/> {property.area}</span>
              <span className="flex items-center gap-2"><FileText size={16} className="text-accent"/> {property.ownership}</span>
            </div>
            <div className="flex items-center justify-between border-t border-border/50 pt-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary/50 font-semibold mb-1">Asking Price</p>
                <p className="text-4xl font-bold text-primary">{property.price}</p>
              </div>
              <button className="bg-accent text-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
                <Download size={16} /> Brochure
              </button>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-2xl font-heading text-primary mb-6">Property Overview</h3>
            <p className="text-primary/70 font-light leading-relaxed text-lg">{property.description}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-heading text-primary mb-6">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {property.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-border/50">
                  <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                  <span className="text-primary/80 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 360 Virtual Tour & Gallery */}
          <div>
            <h3 className="text-2xl font-heading text-primary mb-6">Visual Assets</h3>
            
            {/* 360 Tour Placeholder */}
            <div className="w-full h-80 bg-primary rounded-3xl relative overflow-hidden group mb-6 cursor-pointer">
              <img src={property.images[1]} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="360 tour" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <span className="text-white font-bold tracking-widest">360°</span>
                </div>
                <span className="text-white text-sm tracking-widest uppercase font-semibold">Start Virtual Tour</span>
              </div>
            </div>

            {/* Mini Gallery */}
            <div className="grid grid-cols-2 gap-6">
              {property.images.slice(1).map((img, idx) => (
                <div key={idx} className="aspect-video rounded-2xl overflow-hidden">
                  <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt={`Gallery ${idx}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div>
            <h3 className="text-2xl font-heading text-primary mb-6">Location Map</h3>
            <div className="w-full h-80 rounded-3xl overflow-hidden border border-border/50 relative group">
              <div className="absolute inset-0 bg-primary/20 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              {/* Using Google Maps Embed as per prompt */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.1130638062!2d72.49622910793747!3d23.020243400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0 grayscale" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Right Column (Sidebar / Inquiry) */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 flex flex-col gap-8">
            
            {/* Investment Insights */}
            <div className="bg-primary text-bg-main p-8 rounded-3xl shadow-xl border border-accent/20">
              <h3 className="text-xl font-heading mb-6 flex items-center gap-2"><TrendingUp size={20} className="text-accent" /> Investment Insights</h3>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-semibold">ROI Potential</p>
                  <p className="font-light">{property.insights.roi}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-semibold">Area Growth</p>
                  <p className="font-light">{property.insights.growth}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-semibold">Nearby Developments</p>
                  <p className="font-light">{property.insights.nearby}</p>
                </div>
              </div>
            </div>

            {/* Comprehensive Inquiry Form */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-border/50">
              <h3 className="text-xl font-heading text-primary mb-6">Express Interest</h3>
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Full Name" className="w-full bg-bg-main border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent text-sm text-primary" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-bg-main border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent text-sm text-primary" />
                <input type="email" placeholder="Email Address" className="w-full bg-bg-main border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent text-sm text-primary" />
                <select className="w-full bg-bg-main border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent appearance-none text-sm text-primary/70">
                  <option value="">Select Budget</option>
                  <option>Matching Asking Price</option>
                  <option>Below Asking Price</option>
                  <option>Open to Negotiation</option>
                </select>
                <textarea rows="3" placeholder="Additional Message" className="w-full bg-bg-main border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent text-sm resize-none text-primary"></textarea>
                
                <button type="button" className="w-full bg-primary text-white font-bold uppercase tracking-widest text-xs py-4 rounded-xl mt-2 hover:bg-accent hover:text-primary transition-colors">
                  Schedule Visit
                </button>
                <a href="https://wa.me/919510774987" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 border border-primary text-primary font-bold uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-bg-main transition-colors">
                  <Phone size={14} /> WhatsApp Inquiry
                </a>
              </form>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default PropertyDetails;
