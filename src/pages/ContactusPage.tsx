import React, { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react';
import {motion} from 'framer-motion'
import Newsletter from '../components/Newsletter';

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    description: "PRACHHA HOUSE, 3rd Floor, Beside Diamond City hotel, Bamanji Sheri, Rughnathpura Road, Lal Darwaja, Surat - 395003"
  },
  {
    icon:Phone,
    title: "Contact Number",
    description: "+91-955-802-6870"
  },
  {
    icon:Mail,
    title: "Email Address",
    description: "info@prachha.tech"
  }
]


const ContactusPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact_number: '',
    subject: '',
    services: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' as 'success' | 'error' });

  const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
    setToast({ show: true, message: msg, type });
    setTimeout(() => setToast({ ...toast, show: false }), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.contact_number || !formData.subject || !formData.services || !formData.message) {
      setMessage('Please fill in all fields');
      setMessageType('error');
      setTimeout(() => setMessage(''), 5000);
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://192.168.1.235:3004/api/company-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setMessage('Thank you! Your inquiry has been sent successfully. We will get back to you within 24 hours.');
        setMessageType('success');
        showToast('Your inquiry has been sent successfully!', 'success');
        setFormData({
          name: '',
          email: '',
          contact_number: '',
          subject: '',
          services: '',
          message: ''
        });
        setTimeout(() => setMessage(''), 5000);
      } else {
        setMessage('Failed to send inquiry. Please try again.');
        setMessageType('error');
        showToast('Failed to send inquiry. Please try again.', 'error');
        setTimeout(() => setMessage(''), 5000);
      }
    } catch (error) {
      setMessage('Error sending inquiry. Please check your connection and try again.');
      setMessageType('error');
      showToast('Error sending inquiry. Please check your connection.', 'error');
            setTimeout(() => setMessage(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
   <section className='relative min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)] flex justify-center items-center overflow-hidden  text-white'>

      <div className="absolute inset-0">
        <img src='/contact/contactbg.jpg' alt="Service Background" 
        className='w-full h-full object-cover bg-center bg-no-repeat' />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/40 via-[#0B0F19]/45 to-[#0B0F19]/60" />

      <div className='relative w-full mx-auto px-4 text-center'>

        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className=''>

          <div className="mb-6">
            <span className="inline-block text-xs sm:text-sm font-[600] tracking-widest uppercase bg-red-500/10 text-white px-5 py-2 rounded-full border border-orange-400 backdrop-blur-md">
              Contact Us
            </span>
          </div>

          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent leading'>
            Get in Touch with Us
          </h1>

          <p className='text-gray-50 text-sm sm:text-base md:text-lg  max-w-2xl mx-auto'>
            We design, develop, and deliver high-performance digital solutions
            tailored for growth, innovation, and long-term success.
          </p>
        </motion.div>
      </div>
   </section>

   <section className='py-8 lg:py-16'>
      <section className="container mx-auto px-4">
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              <div className='p-0 md:p-4 lg:p-8'>

                <div className='mb-4'>
                  <h2 className='text-xl sm:text-2xl font-semibold mb-2'>
                    Let’s Build Something Great 
                 </h2>
                 <div className='w-14 h-[3px] ' style={{ background: "linear-gradient(to right, #ef4444, #fbbf24)" }}></div>
                </div>
                 
                <p className="text-[15px] sm:text-[16px] mb-8 max-w-xl text-gray-700">
                  Have a project in mind or need help? Fill out the form and our team will get back to you within 24 hours.
                </p>

                {/* Contact Info */}
                {contactInfo.map((item ,index)=>(
                  <div className="flex items-start text-sm gap-3 max-w-md pb-8" key={index}>
                    <span className='block w-fit rounded-full p-4' style={{ background: "linear-gradient(to right, #ef4444, #fbbf24)" }}>
                      <item.icon className='inline-block text-black text-[20px] sm:text-[22px]' />
                    </span>

                    <div>
                      <h4 className='font-semibold text-base text-gray-700 mb-1'>{item.title}</h4>
                      <p className='text-gray-600 text-sm sm:text-base font-[400]'>{item.description}</p>
                    </div>
                  </div>  
                ))}
              </div>

              <div className=' flex items-center justify-center'>
                  <form onSubmit={handleSubmit} className="w-full max-w-full  bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 lg:p-8 shadow-xl">
                    {/* bg-white/10 backdrop-blur-xl border border-white/20  */}
                  
                  <div className='mb-4'>
                      <h3 className="text-2xl font-semibold mb-2">
                        Let's Get In Touch
                      </h3>

                      <div className='w-14 h-[3px] ' style={{ background: "linear-gradient(to right, #ef4444, #fbbf24)" }}></div>
                  </div>

                  {/* Success/Error Message */}
                  {message && (
                    <div className={`mb-4 p-3 rounded-lg text-sm ${messageType === 'success' ? 'bg-green-500/20 border border-green-500 text-green-200' : 'bg-red-500/20 border border-red-500 text-black'}`}>
                      {message}
                    </div>
                  )}
                  

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className='block text-[rgb(78,70,57)] mb-2'>Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-3 py-2 rounded-[5px] bg-white/10 border border-gray-400 placeholder:text-sm placeholder-gray-400 focus:outline-none focus:border-red-500"
                      />
                    </div>
                   
                    <div>
                      <label htmlFor="email" className='block text-[#4e4639] mb-2'>Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full px-3 py-2 rounded-[5px] bg-white/10 border border-gray-400 placeholder:text-sm placeholder-gray-400 focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <label htmlFor="contact_number" className='block text-[#4e4639] mb-2'>Contact Number</label>
                      <input
                        type="text"
                        id="contact_number"
                        name="contact_number"
                        value={formData.contact_number}
                        onChange={handleChange}
                        placeholder="Contact Number"
                        className="w-full px-3 py-2 rounded-[5px] bg-white/10 border border-gray-400 placeholder:text-sm placeholder-gray-400 mb-4 focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className='block text-[#4e4639] mb-2'>Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="w-full px-3 py-2 rounded-[5px] bg-white/10 border border-gray-400 placeholder:text-sm placeholder-gray-400 mb-4 focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="services" className='block text-[#4e4639] mb-2'>Select Service</label>

                      <select name="services" id="services" value={formData.services} onChange={handleChange} className="w-full text-sm px-3 py-2.5 rounded-[5px] bg-white/10 border border-gray-400  mb-4 focus:outline-none focus:border-red-500">
                        <option value="">Select Service</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Web Development">Web Development</option>    
                        <option value="SEO Optimization">SEO Optimization</option>  
                        <option value="Android & iOS Apps">Android & iOS Apps</option>  
                        <option value="Shopify Development">Shopify Development</option>  
                        <option value="UI/UX Design">UI/UX Design</option>  
                        <option value="Graphics Design">Graphics Design</option>  
                      </select>
                    </div>
                    
                  </div>

                  {/* Message */}
                  <label htmlFor="message" className='block text-[#4e4639] mb-2'>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your Message..."
                    className="w-full px-3 py-2 rounded-[5px] bg-white/10 border border-gray-400 text-gray-800 placeholder-gray-400 mb-6 focus:outline-none focus:border-red-500"
                  ></textarea>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-fit py-3 px-10 rounded-full text-white font-medium
                    bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400
                    hover:scale-[1.02] transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Submit'}
                  </button>
                </form>
              </div>
          </div>
      </section>
   </section>

   <section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3719.6403856206607!2d72.83098082471916!3d21.206440081653263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPRACHHA%20HOUSE%2C%203rd%20Floor%2C%20Beside%20Diamond%20City%20hotel%2C%20Bamanji%20Sheri%2C%20Rughnathpura%20Road%2C%20Lal%20Darwaja%2C%20Surat%20-%20395003!5e0!3m2!1sen!2sin!4v1775629698308!5m2!1sen!2sin" width="600" height="450" 
    style={{border:0, width:'100%', height:"400px"}}  allowFullScreen={true}
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"></iframe>
   </section>

   {/* Toast Notification */}
   {toast.show && (
     <div className={`fixed bottom-5 left-5 right-5 md:right-5 md:left-auto md:w-96 p-4 rounded-lg shadow-2xl z-50 transition-all duration-300 ${
       toast.type === 'success'
         ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border border-green-400'
         : 'bg-gradient-to-r from-red-500 to-pink-600 text-white border border-red-400'
     }`}>
       <div className='flex items-center gap-3'>
         <span className='text-2xl font-bold'>
           {toast.type === 'success' ? '✓' : '✕'}
         </span>
         <p className='font-semibold text-sm md:text-base'>{toast.message}</p>
       </div>
     </div>
   )}

   <Newsletter />
   </>
  )
}

export default ContactusPage