import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async () => {
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Email is not in valid format");
      return;
    }
    setError("");
    setLoading(true);
    
    try {
      const response = await fetch('https://ouros.1digit.technlogy/api/company-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Newsletter Subscriber',
          email: email,
          contact_number: '',
          subject: 'Newsletter Subscription',
          services: 'Newsletter',
          message: 'User subscribed to newsletter'
        })
      });

      if (response.ok) {
        setSuccess("Email is subscribed");
        setEmail("");
        
        setTimeout(() => {
          setSuccess("");
        }, 3000);
      } else {
        setError("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      setError("Error subscribing. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  return (
    <section className="relative py-10 sm:py-12 md:py-14 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">

      <section className="relative container mx-auto px-4">
        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12">
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* LEFT div */}
            <div>
              <span className="text-red-500 text-sm font-semibold tracking-widest uppercase select-none">
                Stay Updated
              </span>

              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-3 leading-tight select-none">
                Subscribe to {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500  to-orange-500 select-none">
                Our Newsletter
                </span>
              </h2>

              <p className="text-gray-600 mt-4 text-sm md:text-base">
                Get the latest insights, trends, and strategies delivered straight to your inbox.
              </p>
            </div>

            {/* RIGHT div */}
            <div>
              <div className="flex flex-col sm:flex-row items-center gap-3">

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  maxLength={100}
                  className="w-full px-5 py-3 rounded-full border border-gray-300 bg-white/70 backdrop-blur
                  focus:outline-none focus:ring-2 focus:ring-red-500 transition placeholder:text-gray-400"
                />

                <button
                  onClick={handleSubscribe}
                  disabled={loading}
                  className="px-6 py-3 rounded-full text-white font-semibold
                   bg-gradient-to-r from-red-600  to-orange-500
                  hover:from-red-600 hover:to-pink-600
                  shadow-md hover:shadow-red-400/40
                  transition-all duration-300 hover:scale-105 active:scale-95
                  disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 select-none"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </div>

              {error && (
                <p className="text-red-500 text-sm mt-2">
                  {error}
                </p>
              )}

              {success && (
                <p className="text-green-500 text-sm mt-2">
                  {success}
                </p>
              )}

              {/* optional small note */}
              <p className="text-xs text-gray-500 mt-3">
                No spam. Only valuable insights.
              </p>
            </div>

          </div>
        </div>
      </section>
    </section>
  );
};

export default Newsletter;