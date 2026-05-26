import { MapPin, Plane, Train, GraduationCap, Stethoscope, ShoppingBag } from 'lucide-react';

const Location = () => {
  const pois = [
    { category: "Airport", icon: <Plane size={20} />, items: [{ name: "SVP International Airport", dist: "18 km" }] },
    { category: "Transit", icon: <Train size={20} />, items: [{ name: "Gandhinagar Railway Station", dist: "6.5 km" }, { name: "Metro Station", dist: "2 km" }] },
    { category: "Education", icon: <GraduationCap size={20} />, items: [{ name: "PDEU", dist: "3.5 km" }, { name: "GNLU", dist: "4 km" }] },
    { category: "Healthcare", icon: <Stethoscope size={20} />, items: [{ name: "Apollo Hospital", dist: "8 km" }, { name: "Civil Hospital", dist: "5 km" }] },
    { category: "Shopping", icon: <ShoppingBag size={20} />, items: [{ name: "Promenade Mall", dist: "1.5 km" }, { name: "Reliance Smart", dist: "2 km" }] }
  ];

  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Location Advantages</h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Map Embed */}
        <div className="lg:w-2/3 h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.493863414006!2d72.63690131497184!3d23.1886111848694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b988f50c765%3A0xf6365449fb0cf8f2!2sKudasan%2C%20Gandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin" 
            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* POIs */}
        <div className="lg:w-1/3">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MapPin className="text-[#E04F16]" /> Nearby Landmarks
            </h3>
            
            <div className="space-y-6">
              {pois.map((poi, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-2 text-[#E04F16] font-bold text-sm uppercase tracking-wider mb-3">
                    {poi.icon} {poi.category}
                  </div>
                  <div className="space-y-2 ml-7">
                    {poi.items.map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600 font-medium">{item.name}</span>
                        <span className="text-gray-900 font-bold bg-gray-50 px-2 py-1 rounded-md">{item.dist}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
