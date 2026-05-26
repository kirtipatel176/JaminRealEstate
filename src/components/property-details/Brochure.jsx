import { Download, FileText } from 'lucide-react';

const Brochure = () => {
  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">E-Brochure</h2>
      
      <div className="relative bg-gradient-to-br from-gray-900 to-[#1E3A8A] rounded-3xl p-8 md:p-12 overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Background decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#E04F16]/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-lg">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
            <FileText className="text-white" size={24} />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Download Official Brochure</h3>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Get comprehensive details about floor plans, payment schedules, master layouts, and complete specifications.
          </p>
          <button className="flex items-center gap-3 bg-white text-[#1E3A8A] font-bold px-8 py-4 rounded-xl shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:bg-gray-50 hover:scale-105 transition-all">
            <Download size={20} />
            Download PDF (12 MB)
          </button>
        </div>

        {/* Brochure Mockup Image */}
        <div className="relative z-10 w-full md:w-1/3 flex justify-center perspective-1000">
          <div className="w-48 md:w-64 aspect-[3/4] bg-white rounded-xl shadow-2xl p-2 transform rotate-y-[-15deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-500">
            <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=400&auto=format&fit=crop" 
                alt="Brochure Cover" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <span className="text-white font-bold text-lg">Bosky Sanelite</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Brochure;
