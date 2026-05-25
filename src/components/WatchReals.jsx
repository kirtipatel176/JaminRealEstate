import { useRef } from 'react';
import { ChevronLeft, ChevronRight, PlayCircle, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_REALS = [
  { id: 1, videoThumbnail: '/images/reel_1.png' },
  { id: 2, videoThumbnail: '/images/reel_2.png' },
  { id: 3, videoThumbnail: '/images/reel_1.png' },
  { id: 4, videoThumbnail: '/images/reel_2.png' },
  { id: 5, videoThumbnail: '/images/reel_1.png' },
];

const WatchReals = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-[#E04F16]">
              <Video size={20} />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Watch Reals
            </h2>
          </div>
          <Link to="/reals" className="text-[#E04F16] font-semibold flex items-center gap-2 hover:underline transition-all">
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
            className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory no-scrollbar"
          >
            {MOCK_REALS.map((reel) => (
              <div 
                key={reel.id}
                className="flex-none w-[160px] md:w-[220px] aspect-[9/16] rounded-3xl overflow-hidden relative cursor-pointer group/card snap-start"
              >
                <img 
                  src={reel.videoThumbnail} 
                  alt="Real Estate Reel" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/card:bg-black/20 transition-colors">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover/card:scale-110 transition-transform">
                    {/* The icon itself is basically a play triangle. In lucide-react, PlayCircle has the circle built-in, but to match exactly a solid white circle with black triangle, we can use a custom SVG or just style a Play icon. */}
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-900 ml-1">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
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

export default WatchReals;
