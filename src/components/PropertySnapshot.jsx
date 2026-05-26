import { Building2, Scale } from 'lucide-react';

const PropertySnapshot = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Gandhinagar Property Snapshot Section */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-[#F05520]">
              <Building2 size={16} fill="currentColor" className="opacity-80" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
              Gandhinagar Property Snapshot
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {/* Box 1 */}
            <div className="border border-orange-200 rounded-2xl p-6 flex flex-col justify-center">
              <div className="text-3xl font-bold text-[#F05520] mb-2">935</div>
              <div className="text-sm font-semibold text-gray-800">Residential Properties Available</div>
            </div>
            {/* Box 2 */}
            <div className="border border-orange-200 rounded-2xl p-6 flex flex-col justify-center">
              <div className="text-3xl font-bold text-[#F05520] mb-2">141</div>
              <div className="text-sm font-semibold text-gray-800">Flats Under ₹50 Lakhs</div>
            </div>
            {/* Box 3 */}
            <div className="border border-orange-200 rounded-2xl p-6 flex flex-col justify-center">
              <div className="text-3xl font-bold text-[#F05520] mb-2">564</div>
              <div className="text-sm font-semibold text-gray-800">Ready-to-Move-in Homes</div>
            </div>
            {/* Box 4 */}
            <div className="border border-orange-200 rounded-2xl p-6 flex flex-col justify-center">
              <div className="text-3xl font-bold text-[#F05520] mb-2">371</div>
              <div className="text-sm font-semibold text-gray-800">Under-Construction Projects</div>
            </div>
          </div>

          <div className="text-sm text-gray-500 leading-relaxed max-w-5xl">
            <p className="mb-4">
              Looking for a peaceful, well-planned city with rising real estate value? Gandhinagar real estate is gaining fast momentum, and Housivity.com is your trusted partner in making smarter, safer, and more informed property decisions. As the capital of Gujarat, Gandhinagar is known for its green spaces, organized infrastructure, and growing urban development, making it one of the top choices for homebuyers and investors alike.
            </p>
            <p>
              At Housivity, we bring you a thoughtfully curated selection of verified properties in Gandhinagar, from modern apartments in Kudasan to high-potential commercial spaces near GIFT City. Whether you're buying your first home, expanding your investment portfolio, or looking for a premium rental, our platform offers everything you need in one place. <a href="#" className="text-[#F05520] hover:underline">...Read More</a>
            </p>
          </div>
        </div>

        {/* Property Options in Gandhinagar Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-[#F05520]">
              <Scale size={16} fill="currentColor" className="opacity-80" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
              Property Options in Gandhinagar
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10">
            {/* Column 1 */}
            <div>
              <h3 className="text-sm font-bold text-[#F05520] mb-4">Popular BHK Searches</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">1 BHK Flats in Gandhinagar</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">2 BHK Flats in Gandhinagar</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">3 BHK Flats in Gandhinagar</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">4 BHK Flats in Gandhinagar</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">1 BHK House in Gandhinagar</a></li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="text-sm font-bold text-[#F05520] mb-4">Popular House Searches by Locality</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">House for Sale in Sargasan</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">House for Sale in Kudasan</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">House for Sale in Randesan</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">House for Sale in Zundal</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">House for Sale in Vavol</a></li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="text-sm font-bold text-[#F05520] mb-4">Popular Property Searches by Locality</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Property for Sale in Sargasan</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Property for Sale in Kudasan</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Property for Sale in Raysan</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Property for Sale in Randesan</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Property for Sale in Zundal</a></li>
              </ul>
            </div>
            {/* Column 4 */}
            <div>
              <h3 className="text-sm font-bold text-[#F05520] mb-4">Popular Residential Searches</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Property for Sale in Gandhinagar</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Flats for Sale in Gandhinagar</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Villa for Sale in Gandhinagar</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">House for Sale in Gandhinagar</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Penthouse for Sale in Gandhinagar</a></li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="border border-[#F05520] text-[#F05520] px-8 py-2.5 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              See More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PropertySnapshot;
