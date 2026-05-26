import { CheckCircle2, Clock } from 'lucide-react';

const ProjectUpdates = () => {
  const updates = [
    {
      id: 1,
      date: "15 May, 2026",
      title: "Superstructure Completed",
      description: "The 12th floor slab has been successfully cast. Blockwork has commenced on the lower floors.",
      status: "completed",
      image: "https://images.unsplash.com/photo-1541888081695-0e360f4ebccf?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      date: "10 Apr, 2026",
      title: "Plumbing & Electrical Works",
      description: "Concealed plumbing and electrical conduits are being laid out from the 1st to 5th floors.",
      status: "in-progress",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      date: "05 Mar, 2026",
      title: "Basement Parking Completed",
      description: "Both levels of basement parking along with the retaining wall construction have been fully completed.",
      status: "completed",
      image: "https://images.unsplash.com/photo-1593021703055-08e178122a2a?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Construction Updates</h2>
      
      <div className="relative border-l-2 border-gray-100 ml-3 md:ml-6 space-y-10">
        {updates.map((update) => (
          <div key={update.id} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[11px] top-1">
              {update.status === 'completed' ? (
                <div className="bg-green-100 text-green-600 rounded-full p-0.5">
                  <CheckCircle2 size={18} className="fill-current text-white" />
                </div>
              ) : (
                <div className="bg-blue-100 text-blue-600 rounded-full p-0.5">
                  <Clock size={18} className="fill-current text-white" />
                </div>
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-6 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-1">
                <div className="text-sm font-bold text-[#E04F16] mb-2">{update.date}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{update.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{update.description}</p>
              </div>
              <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img src={update.image} alt={update.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectUpdates;
