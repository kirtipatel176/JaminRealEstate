import { useState } from 'react';
import { Search, ChevronDown, User, SlidersHorizontal, Map, List, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';

const ListingFilterBar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
      {/* Top Search Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-center gap-4">
        
        {/* Search Container */}
        <div className="w-full max-w-4xl flex items-center border border-gray-200 rounded-full overflow-hidden shadow-sm bg-white">
          {/* Buy Dropdown */}
          <div className="flex items-center gap-1 bg-[#FDF0E9] text-[#E04F16] px-4 py-2 cursor-pointer font-medium text-sm">
            Buy <ChevronDown size={14} />
          </div>
          
          {/* Location Dropdown */}
          <div className="flex items-center gap-1 px-4 py-2 border-r border-gray-200 cursor-pointer text-gray-700 text-sm hover:bg-gray-50 hidden sm:flex">
            Gandhinagar <ChevronDown size={14} />
          </div>

          {/* Search Input */}
          <div className="flex-1 px-4 py-2">
            <input 
              type="text" 
              placeholder="Search Area, Project or Builder" 
              className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <button className="bg-[#E04F16] text-white p-2.5 rounded-full mr-1 hover:bg-[#C84C0C] transition-colors">
            <Search size={18} />
          </button>
        </div>

      </div>

      {/* Secondary Filters Bar */}
      <div className="border-t border-gray-100 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center gap-3 overflow-x-auto no-scrollbar">
          
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-gray-300 whitespace-nowrap">
            Property Type <ChevronDown size={14} />
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-gray-300 whitespace-nowrap">
            BHK <ChevronDown size={14} />
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-gray-300 whitespace-nowrap">
            Budget <ChevronDown size={14} />
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-gray-300 whitespace-nowrap">
            More Filters <SlidersHorizontal size={14} className="text-[#E04F16]" />
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-gray-300 whitespace-nowrap ml-auto">
            Sort By <ChevronDown size={14} />
          </button>

          <div className="flex items-center bg-gray-100 p-1 rounded-full whitespace-nowrap ml-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white shadow-sm rounded-full text-sm font-medium text-gray-800">
              <List size={14} /> List View
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700">
              <Map size={14} /> Map View
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ListingFilterBar;
