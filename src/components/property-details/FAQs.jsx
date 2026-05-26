import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is the project RERA registered?",
      a: "Yes, Bosky Sanelite is fully RERA registered. The RERA ID is PR/GJ/GANDHINAGAR/GANDHINAGAR/Others/MAA08985/210821. You can verify the details on the official GujRERA portal."
    },
    {
      q: "What is the expected possession date?",
      a: "The project is advancing rapidly and is on schedule. The expected possession date for the first phase is June 2026."
    },
    {
      q: "Are there any banks providing home loans for this project?",
      a: "Yes, the project is pre-approved by all major nationalized and private banks including SBI, HDFC, ICICI, and Axis Bank for hassle-free home loan processing."
    },
    {
      q: "What are the key amenities available?",
      a: "The project offers 24+ world-class amenities including a swimming pool, fully equipped gymnasium, landscaped gardens, indoor games room, kids play area, and a multipurpose community hall."
    },
    {
      q: "Is there sufficient parking space?",
      a: "Absolutely. The project features two levels of basement parking, ensuring allotted parking for all residents along with designated visitor parking spots."
    }
  ];

  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === idx ? 'bg-white border-[#E04F16]/30 shadow-md' : 'bg-white border-gray-100 shadow-sm hover:border-gray-200'}`}
          >
            <button 
              className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            >
              <span className={`font-bold pr-8 ${openIndex === idx ? 'text-[#E04F16]' : 'text-gray-900'}`}>
                {faq.q}
              </span>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-orange-50 text-[#E04F16]' : 'bg-gray-50 text-gray-500'}`}>
                {openIndex === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
