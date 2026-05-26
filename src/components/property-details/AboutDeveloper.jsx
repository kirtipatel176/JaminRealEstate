import { ShieldCheck, Building, Clock, MapPin } from 'lucide-react';

const AboutDeveloper = () => {
  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">About The Developer</h2>
      
      <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-10 shadow-sm flex flex-col md:flex-row gap-10">
        
        {/* Left: Logo & Stats */}
        <div className="md:w-1/3 flex flex-col gap-8">
          <div className="w-40 h-40 rounded-2xl border border-gray-100 p-4 flex items-center justify-center shadow-sm bg-gray-50">
            {/* Developer Logo Placeholder */}
            <div className="text-2xl font-black text-gray-800 text-center tracking-tighter">
              BOSKY<br/><span className="text-[#E04F16] text-sm tracking-widest font-bold">SANELITE</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Experience</p>
                <p className="font-bold text-gray-900">15+ Years</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-50 text-[#E04F16] flex items-center justify-center">
                <Building size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Total Projects</p>
                <p className="font-bold text-gray-900">24 Delivered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Bio & Info */}
        <div className="md:w-2/3">
          <div className="flex items-center gap-2 text-[#E04F16] bg-orange-50 px-3 py-1 rounded-full w-max text-sm font-bold mb-4">
            <ShieldCheck size={16} /> Verified Builder
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Bosky Sanelite Developers</h3>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            Founded in 2011, Bosky Sanelite Developers has established itself as one of the most trusted and premium real estate brands in Gandhinagar. Known for their unwavering commitment to quality, timely delivery, and transparent business practices, the group has transformed the city's skyline with landmark residential and commercial projects. Their philosophy revolves around customer-centric design, blending aesthetic brilliance with functional sustainability.
          </p>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-gray-400 mt-0.5" size={18} />
                <span className="text-gray-600">Bosky House, Science City Road, Sola, Ahmedabad - 380060</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[18px] h-[18px] flex items-center justify-center text-gray-400">@</div>
                <a href="#" className="text-blue-600 font-medium hover:underline">info@boskysanelite.com</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutDeveloper;
