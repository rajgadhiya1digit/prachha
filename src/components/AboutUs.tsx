import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export function AboutUs() {
  return (
    <section className="relative py-10 sm:py-12 md:py-14 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden" id="about">
      
      {/* background glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-red-100 blur-3xl opacity-40 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-100 blur-3xl opacity-40 rounded-full"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block text-red-500 tracking-widest uppercase text-sm font-semibold mb-4">
              About Prachha Technology
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-medium text-gray-900 leading-tight mb-6" >
              Transforming Ideas into{" "}
              <span className="text-transparent bg-clip-text bg-red-500">
                Scalable Digital Products
              </span>
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
              Prachha Tech is a passionate team of developers, designers, and digital experts focused on building smart and reliable IT solutions. We turn ideas into real digital experiences that help businesses grow and stand out.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
              With over 15 years of experience and 500+ successful projects, we’ve become a trusted partner for enterprises and startups worldwide.
            </p>

            {/* POINTS */}
            <div className="space-y-4 text-base">
              {[
                "ISO 9001:2015 Certified",
                "Microsoft Gold Partner",
                "AWS Advanced Consulting Partner",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <span className="w-2.5 h-2.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full group-hover:scale-125 transition"></span>
                  <span className="text-gray-700 group-hover:text-red-500 transition">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 hover:shadow-lg transition group
              text-sm md:text-base"
            >
              Explore More
              <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">

              <img
                src="https://images.unsplash.com/photo-1690264459607-a90b23d887f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjE2Mzk1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Office team collaboration"
                className="w-full h-[420px] sm:h-[500px] object-cover transition duration-700 group-hover:scale-105"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

              {/* floating glass card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-xl rounded-xl p-4 shadow-lg border border-white/40">
                <p className="text-sm text-gray-700 font-medium text-center">
                   Delivering innovation, scalability & performance-driven solutions
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
