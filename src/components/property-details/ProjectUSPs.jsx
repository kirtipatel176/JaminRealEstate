import { ShieldCheck, Leaf, Wind, Sun, Layout, Building2 } from 'lucide-react';

const ProjectUSPs = () => {
  const usps = [
    {
      icon: <Leaf size={24} className="text-[#128C7E]" />,
      title: "80% Open Green Space",
      desc: "Vast expanses of landscaped gardens and central courtyards."
    },
    {
      icon: <Wind size={24} className="text-blue-500" />,
      title: "3-Side Open Apartments",
      desc: "Maximum cross-ventilation and uninterrupted views."
    },
    {
      icon: <Sun size={24} className="text-amber-500" />,
      title: "Vastu Compliant Design",
      desc: "100% Vastu compliant architecture for prosperity and peace."
    },
    {
      icon: <ShieldCheck size={24} className="text-indigo-500" />,
      title: "3-Tier Security",
      desc: "Advanced security systems with biometric access."
    },
    {
      icon: <Layout size={24} className="text-pink-500" />,
      title: "Italian Marble Flooring",
      desc: "Premium flooring in living, dining, and master bedrooms."
    },
    {
      icon: <Building2 size={24} className="text-[#E04F16]" />,
      title: "IGBC Gold Certified",
      desc: "Sustainable green building ensuring energy efficiency."
    }
  ];

  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Unique Selling Propositions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {usps.map((usp, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
              {usp.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{usp.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{usp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectUSPs;
