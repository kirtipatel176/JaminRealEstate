import { Play } from 'lucide-react';

const WatchOurReals = () => {
  const reels = [
    { id: 1, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop", title: "Living Room Tour" },
    { id: 2, img: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=400&auto=format&fit=crop", title: "Master Bedroom Walkthrough" },
    { id: 3, img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400&auto=format&fit=crop", title: "Amenities Preview" },
    { id: 4, img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400&auto=format&fit=crop", title: "Kitchen Design" },
  ];

  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Watch Our Reals</h2>
      
      <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar snap-x">
        {reels.map((reel) => (
          <div 
            key={reel.id} 
            className="relative w-[240px] md:w-[280px] h-[400px] md:h-[480px] rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer group shadow-sm hover:shadow-xl transition-all snap-start"
          >
            <img src={reel.img} alt={reel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-[#E04F16] transition-colors">
                <Play className="text-white fill-current ml-1" size={20} />
              </div>
              <h3 className="text-white font-bold text-lg">{reel.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchOurReals;
