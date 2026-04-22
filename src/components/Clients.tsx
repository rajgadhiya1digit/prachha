import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function Clients() {
  const clients = [
    { name: 'Healthcare', logo: '🏥', color: 'from-blue-50 to-blue-100', borderColor: 'border-blue-200' },
    { name: 'Finance', logo: '💰', color: 'from-green-50 to-green-100', borderColor: 'border-green-200' },
    { name: 'E-Commerce', logo: '🛒', color: 'from-purple-50 to-purple-100', borderColor: 'border-purple-200' },
    { name: 'Education', logo: '🎓', color: 'from-orange-50 to-orange-100', borderColor: 'border-orange-200' },
    { name: 'Manufacturing', logo: '🏭', color: 'from-red-50 to-red-100', borderColor: 'border-red-200' },
    { name: 'Real Estate', logo: '🏢', color: 'from-indigo-50 to-indigo-100', borderColor: 'border-indigo-200' },
    { name: 'Retail', logo: '🛍️', color: 'from-pink-50 to-pink-100', borderColor: 'border-pink-200' },
    { name: 'Logistics', logo: '🚚', color: 'from-yellow-50 to-yellow-100', borderColor: 'border-yellow-200' },
  ];

  return (
    <section className="py-12 sm:py-14 lg:py-20 bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold leading-tight mb-6 fade-up-text">
          Trusted by
          <span className="block bg-gradient-to-r from-red-500 to-pink-500  bg-clip-text text-transparent">
            Leading Industries
          </span>
        </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto fade-up-text" style={{ animationDelay: '0.2s' }}>
            We serve diverse sectors with cutting-edge technology solutions
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none z-10"></div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1500}
            allowTouchMove={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
            }}
            className="clients-swiper"
          >
            {[...clients, ...clients].map((client, index) => (
              <SwiperSlide key={index} className="py-10">
                <div className={`w-full h-32 bg-gradient-to-br ${client.color} ${client.borderColor} rounded-2xl border flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 group cursor-pointer backdrop-blur-sm`}>
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-sm">
                    {client.logo}
                  </div>
                  <div className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                    {client.name}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-gray-100">
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Active partnerships across 8+ industries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
