import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Share2, Heart, MapPin, Info, Download, Image as ImageIcon, CalendarDays, RefreshCw, Flag } from 'lucide-react';

// Import Section Components
import Overview from '../components/property-details/Overview';
import ProjectUpdates from '../components/property-details/ProjectUpdates';
import ProjectUSPs from '../components/property-details/ProjectUSPs';
import WatchOurReals from '../components/property-details/WatchOurReals';
import FloorPlan from '../components/property-details/FloorPlan';
import Location from '../components/property-details/Location';
import Amenities from '../components/property-details/Amenities';
import Brochure from '../components/property-details/Brochure';
import AboutDeveloper from '../components/property-details/AboutDeveloper';
import FAQs from '../components/property-details/FAQs';

const TABS = ['Overview', 'Project Updates', 'Project USPs', 'Watch Our Reals', 'Floor Plan', 'Location', 'Amenities', 'Brochure', 'About Developer', 'FAQs'];

const PropertyDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = TABS.map(tab => document.getElementById(tab));
      const scrollPosition = window.scrollY + 200; // Offset for sticky headers

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          if (activeTab !== TABS[i]) {
            setActiveTab(TABS[i]);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const scrollToSection = (tab) => {
    setActiveTab(tab);
    const element = document.getElementById(tab);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 150; // Offset for sticky headers
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="text-sm text-gray-500 font-medium">
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/properties" className="hover:text-gray-900">Property in Gandhinagar</Link>
            <span className="mx-2">/</span>
            <span className="text-[#E04F16]">Bosky Sanelite</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-1.5">
              <RefreshCw size={14} />
              Last updated: 19 May, 2026
            </div>
            <button className="flex items-center gap-1.5 hover:text-gray-800 transition-colors">
              <Flag size={14} />
              Report Property
            </button>
          </div>
        </div>

        {/* Masonry Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[300px] md:h-[500px] mb-8">
          
          {/* Large Main Image */}
          <div className="md:col-span-8 relative rounded-2xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop" 
              alt="Bosky Sanelite Main" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Top Left Tag */}
            <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20">
              Under Construction
            </div>
            {/* Top Right Buttons */}
            <div className="absolute top-4 right-4 flex gap-3">
              <button className="bg-[#E04F16] text-white flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-[#C84C0C] transition-colors shadow-lg">
                <Share2 size={14} /> Share
              </button>
              <button className="bg-[#E04F16] text-white flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-[#C84C0C] transition-colors shadow-lg">
                <Heart size={14} /> Save
              </button>
            </div>
            {/* Bottom Left Tag */}
            <div className="absolute bottom-4 left-4 bg-slate-900 text-white text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5">
              ⭐ Featured
            </div>
          </div>

          {/* Small Images Grid */}
          <div className="hidden md:grid md:col-span-4 grid-cols-2 grid-rows-2 gap-4 h-full">
            <div className="rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="View 1" />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="View 2" />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600607687931-5701d4fda23b?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="View 3" />
            </div>
            <div className="relative rounded-2xl overflow-hidden cursor-pointer group">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="View 4" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="bg-white text-gray-900 font-bold px-4 py-2 rounded-xl flex items-center gap-2 text-sm shadow-xl">
                  <ImageIcon size={16} /> +16 Photos
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Title & Actions Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-gray-100 pb-8 mb-8">
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Bosky Sanelite</h1>
              <span className="text-gray-500 text-sm font-medium">by <a href="#" className="text-blue-500 hover:underline">Bosky Sanelite Developers</a></span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-6">
              <MapPin size={16} className="text-[#E04F16]" /> Kudasan, Gandhinagar
            </div>
            
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-slate-700" fill="currentColor" viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/></svg>
              <span className="text-3xl font-bold text-gray-900 tracking-tight">₹76.32 L</span>
              <Info size={16} className="text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-auto lg:flex-row items-stretch gap-3">
            <button className="w-full lg:w-auto flex items-center justify-center gap-2 bg-[#FF7A3D] text-white px-8 py-3.5 rounded-xl font-bold shadow-[0_4px_14px_rgba(255,122,61,0.39)] hover:bg-[#E04F16] hover:shadow-[0_6px_20px_rgba(224,79,22,0.23)] transition-all">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.792c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.022-3.49-6.824-2.108 1.039c-1.11.547-2.241 1.356-2.283 2.743-.053 1.738.222 5.379 1.81 8.435 3.166 6.089 7.339 7.618 9.324 7.618.397 0 .74-.04 1.036-.109 1.348-.311 2.067-1.408 2.621-2.476l2.199-1.083-1 1.454z"/></svg>
              View Contact
            </button>
            <button className="w-full lg:w-auto flex items-center justify-center gap-2 bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7] px-8 py-3.5 rounded-xl font-bold hover:bg-[#C8E6C9] transition-all">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              WhatsApp
            </button>
            <button className="w-full lg:w-auto flex items-center justify-center gap-2 bg-[#1E3A8A] text-white px-8 py-3.5 rounded-xl font-bold shadow-[0_4px_14px_rgba(30,58,138,0.39)] hover:bg-[#152C6B] transition-all">
              <Download size={18} />
              Download Brochure
            </button>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {/* Box 1 */}
          <div className="bg-white border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center">
            <div className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Avg. Price</div>
            <div className="text-lg md:text-xl font-bold text-gray-900 flex items-center gap-1.5">
              ₹36k / SqYd <Info size={14} className="text-gray-400" />
            </div>
          </div>
          {/* Box 2 */}
          <div className="bg-white border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center">
            <div className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Configuration</div>
            <div className="text-lg md:text-xl font-bold text-gray-900">3 BHK Flat</div>
          </div>
          {/* Box 3 */}
          <div className="bg-white border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center">
            <div className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Size</div>
            <div className="text-lg md:text-xl font-bold text-gray-900">212 SqYd</div>
          </div>
          {/* Box 4 */}
          <div className="bg-white border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center">
            <div className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Possession</div>
            <div className="text-lg md:text-xl font-bold text-gray-900">Jun, 2026</div>
          </div>
        </div>

        {/* Tab Navigation (Sticky) */}
        <div className="border-b border-gray-200 overflow-x-auto no-scrollbar sticky top-20 bg-white z-40">
          <ul className="flex items-center gap-8 min-w-max px-2">
            {TABS.map((tab) => (
              <li 
                key={tab}
                onClick={() => scrollToSection(tab)}
                className={`pt-4 pb-3 border-b-2 font-semibold text-sm cursor-pointer whitespace-nowrap transition-colors ${
                  activeTab === tab 
                    ? 'border-[#E04F16] text-[#E04F16] font-bold' 
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Render Tab Content */}
        <div className="py-8 flex flex-col gap-12">
          <div id="Overview"><Overview /></div>
          <div id="Project Updates"><ProjectUpdates /></div>
          <div id="Project USPs"><ProjectUSPs /></div>
          <div id="Watch Our Reals"><WatchOurReals /></div>
          <div id="Floor Plan"><FloorPlan /></div>
          <div id="Location"><Location /></div>
          <div id="Amenities"><Amenities /></div>
          <div id="Brochure"><Brochure /></div>
          <div id="About Developer"><AboutDeveloper /></div>
          <div id="FAQs"><FAQs /></div>
        </div>

      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-[#FF7A3D] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(255,122,61,0.5)] hover:bg-[#E04F16] hover:scale-105 transition-all duration-300">
          <CalendarDays size={28} />
        </button>
      </div>

    </div>
  );
};

export default PropertyDetails;
