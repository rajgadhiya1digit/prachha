import React from "react";

const TeamdetailsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      
      {/* Back Button */}
      <button className="mb-6 text-sm text-gray-600 hover:text-black transition">
        ← Back to Team
      </button>

      {/* Header Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:flex gap-8 items-center">
        
        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/150"
          alt="profile"
          className="w-32 h-32 rounded-xl object-cover mb-4 md:mb-0"
        />

        {/* Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Rahul Mehta
          </h1>
          <p className="text-gray-500">Senior Frontend Developer</p>
          <p className="mt-2 text-sm text-gray-600 italic">
            "Crafting smooth user experiences with clean code."
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <button className="text-sm bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200">
              LinkedIn
            </button>
            <button className="text-sm bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200">
              GitHub
            </button>
            <button className="text-sm bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200">
              Email
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        
        {/* Left Section */}
        <div className="md:col-span-2 space-y-6">

          {/* About */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold mb-2">About</h2>
            <p className="text-gray-600 text-sm">
              Rahul is a passionate frontend developer with 5+ years of experience
              building scalable web applications. He specializes in React and
              modern UI/UX practices.
            </p>
          </div>

          {/* Experience */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Experience</h2>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>• Senior Frontend Developer at XYZ Tech (2022–Present)</li>
              <li>• Frontend Developer at ABC Solutions (2019–2022)</li>
              <li>• B.Tech in Computer Engineering</li>
            </ul>
          </div>

          {/* Projects */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Projects</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <p>• E-commerce Dashboard – Admin analytics panel</p>
              <p>• Portfolio Builder – Drag & drop website tool</p>
              <p>• Chat App – Real-time messaging app</p>
            </div>
          </div>

        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">

          {/* Skills */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["React", "JavaScript", "Tailwind", "API", "UI/UX"].map(skill => (
                <span
                  key={skill}
                  className="bg-gray-100 text-sm px-3 py-1 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Personal Info */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-sm text-gray-600">
            <h2 className="text-lg font-semibold mb-3">Info</h2>
            <p>📍 Surat, India</p>
            <p>🗣 English, Hindi, Gujarati</p>
            <p>✅ Available for freelance</p>
          </div>

          {/* CTA */}
          <div className="bg-black text-white p-6 rounded-2xl shadow-md text-center">
            <p className="mb-4">Want to work together?</p>
            <button className="bg-white text-black px-4 py-2 rounded-lg text-sm hover:bg-gray-200">
              Contact Me
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TeamdetailsPage;