import { CheckCircle2 } from 'lucide-react';

const Overview = () => {
  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">About Bosky Sanelite</h2>
      <p className="text-gray-600 leading-relaxed max-w-4xl mb-8">
        Bosky Sanelite is a premium residential project offering thoughtfully designed 3 BHK flats. 
        Located in the heart of Kudasan, Gandhinagar, it provides seamless connectivity and a tranquil environment. 
        The project boasts state-of-the-art amenities, lush green landscapes, and modern architectural elegance. 
        Every apartment is crafted to perfection to ensure maximum natural light, cross ventilation, and privacy, 
        giving you the ultimate luxury living experience.
      </p>

      <h3 className="text-xl font-bold text-gray-900 mb-6">Key Facts</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Project Area</p>
          <p className="text-lg font-bold text-gray-900">1 Acre</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Total Towers</p>
          <p className="text-lg font-bold text-gray-900">2 Towers</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">RERA ID</p>
          <p className="text-sm font-bold text-gray-900">PR/GJ/GANDHINAGAR/GANDHINAGAR/Others/MAA08985/210821</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Launch Date</p>
          <p className="text-lg font-bold text-gray-900">Jan, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
