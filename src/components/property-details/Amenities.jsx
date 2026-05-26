import { Waves, Dumbbell, TreePine, Coffee, ShieldCheck, Car, Wifi, Flame, Sparkles, Building, Video, UserCheck } from 'lucide-react';

const Amenities = () => {
  const amenitiesList = [
    { icon: <Waves size={28} />, name: "Swimming Pool" },
    { icon: <Dumbbell size={28} />, name: "Gymnasium" },
    { icon: <Coffee size={28} />, name: "Clubhouse" },
    { icon: <TreePine size={28} />, name: "Landscaped Gardens" },
    { icon: <ShieldCheck size={28} />, name: "24/7 Security" },
    { icon: <Car size={28} />, name: "Reserved Parking" },
    { icon: <Wifi size={28} />, name: "Wi-Fi Connectivity" },
    { icon: <Flame size={28} />, name: "Fire Safety" },
    { icon: <Sparkles size={28} />, name: "Vastu Compliant" },
    { icon: <Building size={28} />, name: "Multipurpose Hall" },
    { icon: <Video size={28} />, name: "CCTV Surveillance" },
    { icon: <UserCheck size={28} />, name: "Visitor Parking" }
  ];

  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">World-Class Amenities</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {amenitiesList.map((amenity, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#E04F16]/30 transition-all flex flex-col items-center justify-center text-center group cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-orange-50 text-[#E04F16] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              {amenity.icon}
            </div>
            <span className="text-sm font-bold text-gray-800">{amenity.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
