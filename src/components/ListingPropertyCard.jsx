import { useState } from 'react';
import { Share2, Heart, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ListingPropertyCard = ({ property }) => {
  const {
    images,
    title,
    builder,
    type,
    location,
    priceRange,
    sizeRange,
    avgPrice,
    possession,
    usps,
    logo,
    developer,
    tags
  } = property;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={handleCardClick}
      className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 cursor-pointer"
    >
      {/* Left side - Image Carousel */}
      <div className="relative w-full md:w-[400px] h-[300px] md:h-auto flex-shrink-0 group">
        <img 
          src={images[currentImageIndex]} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        
        {/* Tags */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          {tags?.includes('Featured') && (
            <span className="bg-slate-900 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              ⭐ Featured
            </span>
          )}
          {tags?.includes('Sample House Ready') && (
            <span className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 ml-auto shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Sample House Ready
            </span>
          )}
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentImageIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentImageIndex === idx ? 'w-4 bg-[#E04F16]' : 'w-1.5 bg-white/70 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right side - Content */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        
        {/* Header: Title, Builder, Share/Heart */}
        <div className="flex justify-between items-start mb-1">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">by {builder}</p>
          </div>
          <div className="flex gap-3 text-[#E04F16]">
            <button className="p-1.5 hover:bg-orange-50 rounded-full transition-colors" onClick={(e) => e.stopPropagation()}>
              <Share2 size={20} />
            </button>
            <button className="p-1.5 hover:bg-orange-50 rounded-full transition-colors" onClick={(e) => e.stopPropagation()}>
              <Heart size={20} />
            </button>
          </div>
        </div>

        {/* Type & Location */}
        <div className="text-sm text-gray-600 font-medium mb-5">
          <span className="text-gray-900 font-bold">{type}</span> for Sale in {location}
        </div>

        {/* Key Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-xl mb-5">
          <div>
            <div className="text-base md:text-lg font-bold text-gray-900">{priceRange}</div>
            <div className="text-xs text-gray-500 mt-0.5">Price</div>
          </div>
          <div>
            <div className="text-sm md:text-base font-bold text-gray-900">{sizeRange}</div>
            <div className="text-xs text-gray-500 mt-0.5">Size</div>
          </div>
          <div>
            <div className="text-sm md:text-base font-bold text-gray-900">{avgPrice}</div>
            <div className="text-xs text-gray-500 mt-0.5">Avg. Price</div>
          </div>
          <div>
            <div className="text-sm md:text-base font-bold text-gray-900">{possession}</div>
            <div className="text-xs text-gray-500 mt-0.5">Possession Starts</div>
          </div>
        </div>

        {/* USPs */}
        {usps && (
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-3">
              <span className="w-1.5 h-1.5 bg-[#E04F16] rounded-sm flex-shrink-0"></span>
              Project USPs
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {usps.slice(0, 3).map((usp, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full whitespace-nowrap">
                  {usp}
                </span>
              ))}
              {usps.length > 3 && (
                <button className="bg-gray-50 border border-gray-200 text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors" onClick={(e) => e.stopPropagation()}>
                  <ChevronRight size={14} />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Footer: Developer & Actions */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-gray-200 bg-white flex items-center justify-center p-1">
              <img src={logo || "/logo.png"} alt={developer} className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#2563EB]">{developer}</div>
              <div className="text-xs text-gray-500">Developer</div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#E04F16] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#C84C0C] transition-colors shadow-sm" onClick={(e) => e.stopPropagation()}>
              View Contact
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#128C7E] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#075E54] transition-colors shadow-sm" onClick={(e) => e.stopPropagation()}>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ListingPropertyCard;
