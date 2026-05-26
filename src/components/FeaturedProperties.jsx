import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Sparkles, Info, Grid, Maximize, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const MOCK_PROPERTIES = [
  {
    id: "prop-1",
    title: "Bosky The Upland",
    price: "₹1.18 Cr - ₹1.58 Cr",
    location: "Kudasan, Gandhinagar",
    configuration: "3, 4 BHK Flat",
    projectSize: "2 Buildings - 86 Units",
    size: "370 SqYd - 494 SqYd",
    projectArea: "2455.78 SqM",
    developer: {
      name: "Prince Infra",
      role: "Developer",
      logo: "/images/developer_logo.png"
    },
    image: "/images/farm_land.png",
    description: "Bosky The Upland offers premium 3 and 4 BHK apartments designed for modern families. With state-of-the-art amenities, sprawling green spaces, and a prime location in Kudasan, it promises a lifestyle of unmatched luxury and convenience."
  },
  {
    id: "prop-2",
    title: "Shreeji Landmark",
    price: "₹1.12 Cr",
    location: "Sargasan, Gandhinagar",
    configuration: "3 BHK Flat",
    projectSize: "3 Buildings - 120 Units",
    size: "320 SqYd",
    projectArea: "3500 SqM",
    developer: {
      name: "Shreeji Infra",
      role: "Developer",
      logo: "/images/developer_logo.png"
    },
    image: "/images/na_plot.png",
    description: "Shreeji Landmark redefines urban living with its intelligently designed 3 BHK apartments. Enjoy a seamless blend of aesthetics and functionality, complete with premium clubhouse facilities and excellent connectivity in Sargasan."
  }
];

const FeaturedProperties = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth + 50 : current.offsetWidth - 50;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200">
      
      {/* Decorative background blurs to enhance glassmorphism */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/60 backdrop-blur-md rounded-xl shadow-sm border border-white/50 flex items-center justify-center text-[#E04F16]">
                <Sparkles size={20} />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                In Limelight
              </h2>
            </div>
            <p className="text-gray-600 font-light">
              Experience the best of living - find your place with us.
            </p>
          </div>
          <Link to="/properties" className="text-[#E04F16] font-semibold flex items-center gap-2 hover:underline transition-all bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50 shadow-sm">
            View All &rarr;
          </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 md:-ml-8 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-md rounded-full border border-white shadow-lg flex items-center justify-center text-gray-700 hover:text-[#E04F16] hover:scale-105 z-10 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 md:-mr-8 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-md rounded-full border border-white shadow-lg flex items-center justify-center text-gray-700 hover:text-[#E04F16] hover:scale-105 z-10 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Wrapper */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 md:gap-8 pb-8 md:pb-10 pt-4 px-2 snap-x snap-mandatory no-scrollbar"
          >
            {MOCK_PROPERTIES.map((prop) => (
              <div 
                key={prop.id}
                onClick={() => navigate(`/property/${prop.id}`)}
                className="flex-none w-[85vw] sm:w-[400px] md:w-[600px] lg:w-[700px] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-[1.5rem] md:rounded-[2rem] p-4 flex flex-col md:flex-row gap-5 md:gap-8 snap-start cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group/card"
              >
                {/* Image */}
                <div className="w-full md:w-[45%] aspect-[4/3] md:aspect-auto rounded-3xl overflow-hidden relative flex-shrink-0 shadow-inner">
                  <img 
                    src={prop.image} 
                    alt={prop.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />
                  {/* Glassy overlay badge */}
                  <div className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/40 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                     <Info size={14} /> Click for details
                  </div>
                </div>

                {/* Details */}
                <div className="w-full md:w-[55%] flex flex-col py-2 md:py-6 pr-2 md:pr-4">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-1 md:gap-4 mb-2">
                    <h3 className="text-xl md:text-3xl font-heading font-bold text-gray-900 leading-tight">
                      {prop.title}
                    </h3>
                    <p className="text-lg md:text-2xl font-bold text-[#E04F16] flex-shrink-0">
                      {prop.price}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-gray-600 text-sm mb-6 font-medium">
                    <MapPin size={16} className="text-[#E04F16]" />
                    {prop.location}
                  </div>

                  {/* Grid Specs (Glassy internal blocks) */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white/40 backdrop-blur-sm border border-white/50 rounded-xl p-3">
                      <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-1">Configuration</p>
                      <p className="font-semibold text-gray-900 text-sm">{prop.configuration}</p>
                    </div>
                    <div className="bg-white/40 backdrop-blur-sm border border-white/50 rounded-xl p-3">
                      <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-1">Project Size</p>
                      <p className="font-semibold text-gray-900 text-sm">{prop.projectSize}</p>
                    </div>
                  </div>

                  {/* Developer Info */}
                  <div className="mt-auto bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-3 md:p-4 flex items-center gap-4 transition-colors group-hover/card:bg-white/70">
                    <div className="w-10 h-10 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-inner">
                       <User size={20} className="text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">{prop.developer.name}</h4>
                      <p className="text-xs text-gray-500">{prop.developer.role}</p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
