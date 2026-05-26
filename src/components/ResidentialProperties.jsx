import { useRef } from 'react';
import { Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RESIDENTIAL_CATEGORIES = [
  {
    id: 1,
    title: "Ready to Move Flats",
    image: "/images/hero_land.png",
  },
  {
    id: 2,
    title: "Sample House Ready Projects",
    image: "/images/investment_land.png",
  },
  {
    id: 3,
    title: "Zero Brokerage Deals",
    image: "/images/farm_land.png",
  },
  {
    id: 4,
    title: "Fully Furnished Flats",
    image: "/images/weekend_farmhouse.png",
  },
  {
    id: 5,
    title: "Luxury Villas & Bungalows",
    image: "/images/commercial_land.png",
  },
  {
    id: 6,
    title: "Affordable Housing",
    image: "/images/na_plot.png",
  }
];

const ResidentialProperties = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth + 50 : current.offsetWidth - 50;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-[#F05520]">
              <Building2 size={20} fill="currentColor" className="opacity-80" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
              Residential Properties
            </h2>
          </div>
          <Link to="/properties" className="text-[#F05520] font-semibold flex items-center gap-1 hover:underline transition-all">
            View All <ChevronRight size={18} />
          </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 md:-ml-6 w-10 h-10 bg-white rounded-full border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-[#F05520] hover:border-[#F05520] z-10 transition-colors opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 md:-mr-6 w-10 h-10 bg-white rounded-full border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-[#F05520] hover:border-[#F05520] z-10 transition-colors opacity-100 hidden md:flex"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards Wrapper */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-6 pt-2 snap-x snap-mandatory no-scrollbar"
          >
            {RESIDENTIAL_CATEGORIES.map((category) => (
              <div 
                key={category.id}
                className="flex-none group relative h-[180px] md:h-[220px] w-[85vw] sm:w-[320px] md:w-[340px] rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 snap-start"
              >
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <h3 className="absolute bottom-5 left-5 right-5 text-white font-semibold text-base md:text-lg leading-tight drop-shadow-md">
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResidentialProperties;
