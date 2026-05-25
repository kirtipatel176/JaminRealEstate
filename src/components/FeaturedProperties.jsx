import { useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    image: "/images/farm_land.png"
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
    image: "/images/na_plot.png"
  }
];

const FeaturedProperties = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth + 50 : current.offsetWidth - 50;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-[#E04F16]">
                <Sparkles size={20} />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                In Limelight
              </h2>
            </div>
            <p className="text-gray-600">
              Experience the best of living - find your place with us.
            </p>
          </div>
          <Link to="/properties" className="text-[#E04F16] font-semibold flex items-center gap-2 hover:underline transition-all">
            View All &rarr;
          </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 md:-ml-8 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full border border-gray-200 shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E04F16] hover:border-[#E04F16] z-10 transition-colors opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 md:-mr-8 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full border border-gray-200 shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E04F16] hover:border-[#E04F16] z-10 transition-colors opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Wrapper */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar"
          >
            {MOCK_PROPERTIES.map((prop) => (
              <div 
                key={prop.id}
                className="flex-none w-full md:w-[600px] lg:w-[700px] bg-white border border-gray-200 rounded-[2rem] p-4 flex flex-col md:flex-row gap-6 md:gap-8 snap-start hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="w-full md:w-[45%] aspect-[4/3] md:aspect-auto rounded-3xl overflow-hidden relative flex-shrink-0">
                  <img 
                    src={prop.image} 
                    alt={prop.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay logo placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <span className="font-heading font-bold text-white text-3xl tracking-widest">JAMIN</span>
                  </div>
                </div>

                {/* Details */}
                <div className="w-full md:w-[55%] flex flex-col py-2 md:py-6 pr-2 md:pr-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                      {prop.title}
                    </h3>
                    <p className="text-xl md:text-2xl font-bold text-gray-900 flex-shrink-0">
                      {prop.price}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-8">
                    <MapPin size={16} className="text-[#E04F16]" />
                    {prop.location}
                  </div>

                  {/* Grid Specs */}
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Configuration</p>
                      <p className="font-semibold text-gray-900">{prop.configuration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Project Size</p>
                      <p className="font-semibold text-gray-900">{prop.projectSize}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Size</p>
                      <p className="font-semibold text-gray-900">{prop.size}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Project Area</p>
                      <p className="font-semibold text-gray-900">{prop.projectArea}</p>
                    </div>
                  </div>

                  {/* Developer Info */}
                  <div className="mt-auto bg-gray-50 rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0">
                       <span className="text-xs font-bold text-gray-400">LOGO</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{prop.developer.name}</h4>
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
