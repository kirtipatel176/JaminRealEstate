import { useRef } from 'react';
import { MapPin, Grid, ChevronRight, ChevronLeft, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MOCK_PROJECTS = [
  {
    id: 1,
    title: "Shyam Heights",
    developer: "Shyam Group",
    price: "₹65 L - ₹91 L",
    location: "Sargasan, Gandhinagar",
    specs: "2, 3 BHK Flat",
    image: "/images/hero_land.png",
    badge: "RETAIL"
  },
  {
    id: 2,
    title: "Bosky Sanelite",
    developer: "Bosky Sanelite Developers",
    price: "₹76.32 L",
    location: "Kudasan, Gandhinagar",
    specs: "3 BHK Flat",
    image: "/images/farm_land.png",
  },
  {
    id: 3,
    title: "Riverside View",
    developer: "Nia Nami Infra",
    price: "₹1.2 Cr",
    location: "Randesan, Gandhinagar",
    specs: "4 BHK Flat",
    image: "/images/commercial_land.png",
  }
];

const FeaturedProjects = () => {
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
    <section className="py-12 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-[#F05520]">
              <Award size={20} fill="currentColor" className="opacity-80" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
              Featured Projects
            </h2>
          </div>
          <a href="#" className="text-[#F05520] font-semibold flex items-center gap-1 hover:underline transition-all">
            View All <ChevronRight size={18} />
          </a>
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
            className="flex overflow-x-auto gap-6 pb-8 pt-2 snap-x snap-mandatory no-scrollbar"
          >
            {MOCK_PROJECTS.map((project) => (
              <div 
                key={project.id}
                onClick={() => navigate(`/property/${project.id}`)}
                className="flex-none w-[85vw] sm:w-[400px] bg-white border border-gray-100 rounded-[20px] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] snap-start hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
              >
                {/* Image */}
                <div className="w-full h-[240px] rounded-t-[20px] overflow-hidden relative group/img">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  />
                  {project.badge && (
                    <div className="absolute top-0 right-6 bg-[#D97736] text-white text-[10px] font-bold px-3 py-1 rounded-b-md tracking-wider">
                      {project.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-1 gap-2">
                    <h3 className="text-[20px] font-bold text-gray-900 leading-tight group-hover:text-[#F05520] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[18px] font-bold text-gray-900 whitespace-nowrap">
                      {project.price}
                    </p>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-5">
                    {project.developer}
                  </p>
                  
                  <hr className="border-gray-100 mb-4" />
                  
                  <div className="flex justify-between items-center text-[13px] text-gray-500 mt-auto">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={16} className="text-[#F05520]" />
                      <span className="truncate max-w-[140px]">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Grid size={16} className="text-[#F05520]" />
                      <span>{project.specs}</span>
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

export default FeaturedProjects;
