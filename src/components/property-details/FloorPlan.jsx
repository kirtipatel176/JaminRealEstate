import { useState } from 'react';

const FloorPlan = () => {
  const [activeConfig, setActiveConfig] = useState('3bhk');

  const plans = {
    '3bhk': {
      title: "3 BHK Premium",
      area: "212 SqYd",
      image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=1200&auto=format&fit=crop", // Placeholder for blueprint
      rooms: [
        { name: "Living / Dining", dims: "11'0\" x 20'0\"" },
        { name: "Kitchen", dims: "10'0\" x 10'0\"" },
        { name: "Master Bedroom", dims: "11'0\" x 14'0\"" },
        { name: "Bedroom 2", dims: "10'0\" x 11'0\"" },
        { name: "Bedroom 3", dims: "10'0\" x 11'0\"" },
        { name: "Balcony", dims: "11'0\" x 5'0\"" }
      ]
    },
    '4bhk': {
      title: "4 BHK Ultra Luxury",
      area: "350 SqYd",
      image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=1200&auto=format&fit=crop",
      rooms: [
        { name: "Living Room", dims: "14'0\" x 22'0\"" },
        { name: "Dining Area", dims: "12'0\" x 12'0\"" },
        { name: "Kitchen", dims: "12'0\" x 11'0\"" },
        { name: "Master Bedroom 1", dims: "14'0\" x 16'0\"" },
        { name: "Master Bedroom 2", dims: "12'0\" x 14'0\"" },
        { name: "Bedroom 3", dims: "11'0\" x 12'0\"" },
        { name: "Bedroom 4", dims: "11'0\" x 12'0\"" },
        { name: "Deck", dims: "14'0\" x 6'0\"" }
      ]
    }
  };

  const activePlan = plans[activeConfig];

  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Floor Plans</h2>
        
        {/* Config Toggles */}
        <div className="flex bg-gray-100 p-1 rounded-xl">
          <button 
            onClick={() => setActiveConfig('3bhk')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeConfig === '3bhk' ? 'bg-white shadow-sm text-[#E04F16]' : 'text-gray-500 hover:text-gray-900'}`}
          >
            3 BHK
          </button>
          <button 
            onClick={() => setActiveConfig('4bhk')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeConfig === '4bhk' ? 'bg-white shadow-sm text-[#E04F16]' : 'text-gray-500 hover:text-gray-900'}`}
          >
            4 BHK
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Image */}
        <div className="lg:w-2/3 bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-center justify-center min-h-[400px]">
          <img src={activePlan.image} alt={activePlan.title} className="max-w-full max-h-[500px] object-contain opacity-70 mix-blend-multiply" />
        </div>

        {/* Right: Details Table */}
        <div className="lg:w-1/3">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{activePlan.title}</h3>
            <p className="text-[#E04F16] font-semibold mb-6">Carpet Area: {activePlan.area}</p>
            
            <div className="space-y-3">
              {activePlan.rooms.map((room, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                  <span className="text-gray-600 font-medium text-sm">{room.name}</span>
                  <span className="text-gray-900 font-bold text-sm">{room.dims}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-8 bg-gray-900 text-white font-bold py-3.5 rounded-xl hover:bg-gray-800 transition-colors">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
