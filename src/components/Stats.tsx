import { useEffect, useState } from 'react';

export function Stats() {
  const stats = [
    { number: 500, suffix: '+', label: 'Projects Delivered', description: 'Successfully completed projects' },
    { number: 15, suffix: '+', label: 'Years Experience', description: 'In the industry' },
    { number: 98, suffix: '%', label: 'Client Satisfaction', description: 'Happy clients worldwide' },
    { number: 24, suffix: '/7', label: 'Support Available', description: 'Round-the-clock assistance' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#FF0000] to-[#CC0000] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Trust & Value in Numbers
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Our track record speaks for itself
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
                <AnimatedNumber
                  value={stat.number}
                  suffix={stat.suffix}
                  className="text-5xl lg:text-6xl text-white mb-2 block"
                />
                <div className="text-xl text-white mb-2">{stat.label}</div>
                <div className="text-sm text-red-100">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({ value, suffix, className }: { value: number; suffix: string; className: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <div className={className}>{count}{suffix}</div>;
}
