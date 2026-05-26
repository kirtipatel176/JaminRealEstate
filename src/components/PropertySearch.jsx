import { useState } from 'react';
import { motion } from 'framer-motion';
import { Map, Search, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PropertySearch = () => {
  const [activeTab, setActiveTab] = useState('Buy');
  const tabs = ['Buy', 'Rent', 'Commercial', 'Plots/Lands', 'PG/Hostel'];
  const navigate = useNavigate();

  return (
    <section className="relative z-20 -mt-16 md:-mt-24 w-full px-4 md:px-6 flex justify-center">
      <motion.div 
        className="w-full max-w-4xl bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-4 md:p-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeTab === tab 
                  ? 'bg-[#C84C0C] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar Container */}
        <div className="flex flex-col md:flex-row items-center border border-gray-200 rounded-xl md:rounded-full overflow-hidden p-2 gap-2 md:gap-0">
          
          {/* Location Dropdown */}
          <div className="w-full md:w-auto flex-shrink-0 flex items-center justify-between px-4 py-2 md:border-r border-gray-200 cursor-pointer group">
            <span className="text-gray-800 font-medium text-sm">Gandhinagar</span>
            <ChevronDown size={16} className="text-[#C84C0C] ml-2 group-hover:translate-y-0.5 transition-transform" />
          </div>

          {/* Search Input */}
          <div className="w-full flex-grow px-4 py-2">
            <input 
              type="text" 
              placeholder="Search Area, Project or Builder" 
              className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="w-full md:w-auto flex items-center gap-2 px-2 mt-2 md:mt-0">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-[#C84C0C] text-[#C84C0C] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-50 transition-colors">
              <Map size={16} />
              Map
            </button>
            <button 
              onClick={() => navigate('/properties')}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#E04F16] text-white px-8 py-2.5 rounded-full text-sm font-semibold hover:bg-[#C84C0C] transition-colors shadow-lg shadow-orange-500/30"
            >
              <Search size={16} />
              Search
            </button>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default PropertySearch;
