import React, { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Briefcase, 
  Mail, 
  Linkedin, 
  Twitter, 
  Github, 
  Award, 
  CheckCircle, 
  Code2, 
  GraduationCap,
  Globe,
  Copy,
  Share2,
  ArrowLeft,
  Trophy,
  Star,
  TrendingUp,
  Users,
  Target
} from 'lucide-react';
import { getTeamMemberById, TeamMember } from '../data/teamData';

const TeamdetailsPage = () => {
  const { memberName } = useParams();
  const [copiedEmail, setCopiedEmail] = useState(false);
  
  const teamMember: TeamMember | undefined = getTeamMemberById(memberName || '');
  
  const copyEmail = () => {
    if (teamMember?.email) {
      navigator.clipboard.writeText(teamMember.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const experienceYears = parseInt(teamMember?.experience?.match(/\d+/)?.[0] || '0');

  if (!teamMember) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Team Member Not Found</h1>
          <p className="text-gray-600 mb-6">The team member you're looking for doesn't exist.</p>
          <Link 
            to="/team"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Team
          </Link>
        </div>
      </div>
    );
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-red-400/15 to-orange-400/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-400/15 to-red-400/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

          {/* Profile Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-3xl blur opacity-30 animate-gradient-x" />
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-6 md:p-10">
              
              <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                
                {/* Profile Image */}
                <div className="relative flex-shrink-0 group">
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-red-500 via-orange-500 to-red-500 p-[3px] shadow-2xl"
                  >
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-gray-50 to-white flex items-center justify-center overflow-hidden">
                      {teamMember.image ? (
                        <img 
                          src={teamMember.image} 
                          alt={teamMember.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                          {teamMember.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      )}
                    </div>
                  </motion.div>
                  {/* Decorative dots */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full opacity-60" />
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-400 rounded-full opacity-60" />
                </div>

                {/* Profile Info */}
                <div className="flex-1 text-center lg:text-left">
                  
                  {/* Top Performer Badge */}
                  {teamMember.achievements && teamMember.achievements.length > 3 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="inline-flex items-center gap-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 shadow-lg"
                    >
                      <Star className="w-3.5 h-3.5 fill-white" />
                      Top Performer
                    </motion.div>
                  )}

                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-3">
                    {teamMember.name}
                  </h1>
                  
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-orange-50 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-red-100 shadow-sm">
                    {teamMember.role}
                  </div>

                  <p className="text-gray-600 text-lg italic mb-6 w-fit relative">
                    <span className="absolute -left-4 -top-2 text-4xl text-red-200 font-serif">"</span>
                    {teamMember.quote}
                    <span className="absolute -right-4 -top-2 text-4xl text-red-200 font-serif">"</span>
                  </p>

                  {/* Quick Info */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <Briefcase className="w-4 h-4 text-red-500" />
                      <span>{teamMember.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span>{teamMember.location}</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={`mailto:${teamMember.email}`} target="_blank"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 shadow-lg"
                    >
                      <Mail className="w-4 h-4" />
                      Contact
                    </motion.a>
                    {teamMember.linkedin && (
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={teamMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-xl transition-all duration-300 shadow-lg"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Strip */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {teamMember.stats && (
            <>
              <motion.div variants={fadeInUp} className="group h-full">
                <div className="relative bg-white rounded-2xl p-3 sm:p-6 text-center sm:text-left border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col justify-center">
                  <div className="flex flex-col sm:flex-row items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-gray-900">
                      {teamMember.stats.projectsCompleted}+
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="group h-full">
                <div className="relative bg-white rounded-2xl p-3 sm:p-6 text-center sm:text-left border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col justify-center">
                  <div className="flex flex-col sm:flex-row items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-gray-900">
                      {experienceYears}+
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="group h-full">
                <div className="relative bg-white rounded-2xl p-3 sm:p-6text-center sm:text-left border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col justify-center">
                  <div className="flex flex-col sm:flex-row items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-gray-900">
                      {teamMember.stats.teamSize}+
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Team Size Managed</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="group h-full">
                <div className="relative bg-white rounded-2xl p-3 sm:p-6 border text-center sm:text-left border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col justify-center">
                  <div className="flex flex-col sm:flex-row items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-gray-900">
                      {teamMember.stats.satisfaction}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </motion.div>

      {/* Dashboard Grid */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* About Card */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <div className="relative bg-white rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 h-full group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/0 via-orange-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-orange-500/5 group-hover:to-red-500/5 transition-all duration-500" />
              <div className="absolute inset-0 rounded-2xl border border-gray-200 group-hover:border-red-500/30 transition-colors duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">About</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {teamMember.bio}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div variants={fadeInUp}>
            <div className="relative bg-white rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 h-full group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/0 via-orange-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-orange-500/5 group-hover:to-red-500/5 transition-all duration-500" />
              <div className="absolute inset-0 rounded-2xl border border-gray-200 group-hover:border-red-500/30 transition-colors duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Skills</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {teamMember.skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-red-50 to-orange-50 text-red-600 text-sm font-medium rounded-lg hover:from-red-100 hover:to-orange-100 transition-all duration-300 cursor-default hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div variants={fadeInUp}>
            <div className="relative bg-white rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 h-full group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/0 via-orange-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-orange-500/5 group-hover:to-red-500/5 transition-all duration-500" />
              <div className="absolute inset-0 rounded-2xl border border-gray-200 group-hover:border-red-500/30 transition-colors duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Achievements</h2>
                </div>
                <div className="space-y-3">
                  {teamMember.achievements?.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects Card */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 h-full group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/0 via-orange-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-orange-500/5 group-hover:to-red-500/5 transition-all duration-500" />
              <div className="absolute inset-0 rounded-2xl border border-gray-200 group-hover:border-red-500/30 transition-colors duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Projects</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {teamMember.projects?.map((project, index) => (
                    <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{project.name}</h3>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          project.status === 'completed' 
                            ? 'bg-green-100 text-green-700' 
                            : project.status === 'in-progress'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {project.status === 'completed' ? 'Completed' : project.status === 'in-progress' ? 'In Progress' : 'Planned'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education & Experience Card */}
          <motion.div variants={fadeInUp}>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 h-full group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/0 via-orange-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-orange-500/5 group-hover:to-red-500/5 transition-all duration-500" />
              <div className="absolute inset-0 rounded-2xl border border-gray-200 group-hover:border-red-500/30 transition-colors duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Education</h2>
                </div>
                <div className="space-y-4">
                  {teamMember.education?.map((edu, index) => (
                    <div key={index} className="relative pl-6 pb-4 border-l-2 border-red-200 last:pb-0">
                      <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 -translate-x-[5px]" />
                      <p className="text-sm font-medium text-gray-900">{edu}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Languages Card */}
          <motion.div variants={fadeInUp}>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 h-full group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/0 via-orange-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-orange-500/5 group-hover:to-red-500/5 transition-all duration-500" />
              <div className="absolute inset-0 rounded-2xl border border-gray-200 group-hover:border-red-500/30 transition-colors duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Languages</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {teamMember.languages?.map((language, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-50 to-orange-50 text-red-600 text-sm font-medium rounded-lg hover:from-red-100 hover:to-orange-100 transition-all duration-300 cursor-default hover:scale-105"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default TeamdetailsPage;