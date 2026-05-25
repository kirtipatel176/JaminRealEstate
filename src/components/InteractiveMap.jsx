import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Define our categories and their associated Tailwind color values for custom icons
const categories = {
  'Agriculture': { color: '#16a34a', twClass: 'bg-green-600' }, // Green
  'Commercial': { color: '#2563eb', twClass: 'bg-blue-600' },  // Blue
  'Industrial': { color: '#dc2626', twClass: 'bg-red-600' },   // Red
  'Farm House': { color: '#22c55e', twClass: 'bg-green-500' }, // Light Green
  'Residential': { color: '#eab308', twClass: 'bg-yellow-500' },// Yellow
  'NA': { color: '#f97316', twClass: 'bg-orange-500' }        // Orange
};

// Generate custom DivIcon for Leaflet markers using standard HTML/CSS so we don't need image assets
const createCustomIcon = (category) => {
  const catColor = categories[category]?.color || '#000';
  return L.divIcon({
    className: 'custom-leaflet-icon',
    html: `<div style="background-color: ${catColor}; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.4);"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7]
  });
};

// Generate mock data for Gujarat properties
const generateMockProperties = () => {
  const props = [];
  const catKeys = Object.keys(categories);
  
  // Center roughly around Gujarat [22.25, 71.19] with some jitter
  for (let i = 1; i <= 60; i++) {
    const lat = 21.0 + Math.random() * 3.5; // Spread vertically
    const lng = 69.5 + Math.random() * 4.5; // Spread horizontally
    
    // Concentrate more around Ahmedabad/Surat (approx 23.0, 72.5 / 21.1, 72.8)
    const isCity = Math.random() > 0.6;
    const finalLat = isCity ? (22.5 + Math.random() * 1.5) : lat;
    const finalLng = isCity ? (72.0 + Math.random() * 1.5) : lng;

    props.push({
      id: `jamin-mock-${i}`,
      name: `Premium Property ${i}`,
      lat: finalLat,
      lng: finalLng,
      category: catKeys[Math.floor(Math.random() * catKeys.length)],
      price: `₹${(Math.random() * 10 + 1).toFixed(1)} Cr`,
      area: `${Math.floor(Math.random() * 50 + 5)} Vigha`
    });
  }
  return props;
};

const mockProperties = generateMockProperties();

const InteractiveMap = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Filter properties based on legend click
  const filteredProperties = activeCategory 
    ? mockProperties.filter(p => p.category === activeCategory)
    : mockProperties;

  return (
    <section className="bg-bg-main py-20 relative w-full" id="zones">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        
        {/* Header matching the user's screenshot style */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-body font-light text-primary mb-12">
            Properties on Map (Gujarat)
          </h2>
          
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {Object.entries(categories).map(([name, data]) => (
              <button 
                key={name}
                onClick={() => setActiveCategory(activeCategory === name ? null : name)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors ${activeCategory === name ? 'bg-black/5' : 'hover:bg-black/5'}`}
              >
                <div className={`w-3 h-3 rounded-full ${data.twClass}`}></div>
                <span className="text-primary/70 text-sm font-medium">{name}</span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Map Container - Full Width */}
      <div className="w-full h-[600px] md:h-[700px] relative border-y border-border/50 z-10">
        <MapContainer 
          center={[22.2587, 71.1924]} 
          zoom={7} 
          scrollWheelZoom={false}
          className="w-full h-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {filteredProperties.map(prop => (
            <Marker 
              key={prop.id} 
              position={[prop.lat, prop.lng]} 
              icon={createCustomIcon(prop.category)}
            >
              <Popup className="premium-popup">
                <div className="p-1">
                  <p className="font-heading font-bold text-primary text-base mb-1">{prop.name}</p>
                  <p className="text-sm text-primary/70 mb-2">{prop.category} • {prop.area}</p>
                  <p className="text-accent font-bold text-lg mb-3">{prop.price}</p>
                  <Link 
                    to={`/property/jamin-101`} // using 101 as fallback for demo properties
                    className="block w-full text-center bg-primary text-white text-xs py-2 rounded-md hover:bg-accent transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

    </section>
  );
};

export default InteractiveMap;
