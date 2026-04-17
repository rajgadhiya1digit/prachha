export function Clients() {
  const clients = [
    { name: 'Healthcare', logo: '🏥' },
    { name: 'Finance', logo: '💰' },
    { name: 'E-Commerce', logo: '🛒' },
    { name: 'Education', logo: '🎓' },
    { name: 'Manufacturing', logo: '🏭' },
    { name: 'Real Estate', logo: '🏢' },
    { name: 'Retail', logo: '🛍️' },
    { name: 'Logistics', logo: '🚚' },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-3">Trusted by Leading Industries</h2>
          <p className="text-sm sm:text-base text-gray-600">We serve diverse sectors with cutting-edge technology solutions</p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 bg-gray-50 rounded-lg border border-gray-200 flex flex-col items-center justify-center hover:border-[#FF0000] hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{client.logo}</div>
                <div className="text-sm text-gray-700">{client.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
