// Team data for both TeamPage and TeamdetailsPage

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  status: 'completed' | 'in-progress' | 'planned';
}

export interface Stats {
  projectsCompleted: number;
  teamSize: number;
  satisfaction: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  quote: string;
  experience: string;
  location: string;
  languages: string[];
  skills: string[];
  education: string[];
  achievements: string[];
  email: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  available: boolean;
  type: 'founder' | 'member';
  stats?: Stats;
  projects?: Project[];
}

export interface TeamData {
  founders: TeamMember[];
  members: TeamMember[];
}

export const teamData: TeamData = {
  founders: [
    {
      id: 'vijay-sarkheliya',
      name: 'Vijay Sarkheliya',
      role: 'Chief Executive Officer',
      image: '/team/vijaysirprofile.jpg',
      bio: 'Visionary leader with 15+ years of experience in scaling tech startups and driving digital transformation.',
      quote: 'Innovation and excellence are not just goals, they\'re our DNA.',
      experience: '15+ Years',
      location: 'Surat, India',
      languages: ['English', 'Hindi', 'Gujarati'],
      skills: ['Strategic Planning', 'Business Development', 'Team Leadership', 'Digital Transformation', 'Project Management', 'Technology Consulting'],
      education: ['MBA in Technology Management', 'B.Tech in Computer Engineering'],
      achievements: ['Led company to 300% revenue growth in 3 years', 'Recognized as Top 40 Under 40 in Technology', 'Successfully launched 5 enterprise products', 'Built and mentored 50+ technology professionals', 'Speaker at major technology conferences'],
      email: 'info@vijaysarkheliya.com',
      linkedin: 'https://www.linkedin.com/in/vijaysarkheliya/',
      twitter: 'https://x.com/vijaysarkheliya',
      available: true,
      type: 'founder',
    },
    {
      id: 'hitesh-sarkheliya',
      name: 'Hitesh Sarkheliya',
      role: 'Chief Technology Officer',
      image: '/team/hiteshsirprofile.jpg',
      bio: 'Tech architect specializing in AI, cloud solutions, and scalable enterprise systems.',
      quote: 'Building the future, one line of code at a time.',
      experience: '12+ Years',
      location: 'Surat, India',
      languages: ['English', 'Hindi', 'Gujarati'],
      skills: ['AI/ML', 'Cloud Architecture', 'System Design', 'DevOps', 'Backend Development', 'Database Design'],
      education: ['M.Tech in Computer Science', 'B.Tech in Information Technology'],
      achievements: ['Architected 50+ enterprise systems', 'AI/ML certification from Stanford', 'Published research papers on cloud computing', 'Led team of 30+ developers', 'Regular speaker at tech conferences'],
      email: 'hitesh@prachha.tech',
      linkedin: 'https://www.linkedin.com/in/hitesh-gs/',
      twitter: 'https://x.com/hiteshgs',
      available: true,
      type: 'founder',
    }
  ],
  members: [
    {
      id: 'twinkal-goyani',
      name: 'Twinkal Goyani',
      role: 'Human Resources (HR)',
      image: '',
      bio: 'Dedicated HR professional focused on building strong teams and fostering a positive work culture.',
      quote: 'People are the heart of every successful organization.',
      experience: '5+ Years',
      location: 'Surat, India',
      languages: ['English', 'Hindi', 'Gujarati'],
      skills: ['Recruitment', 'Team Building', 'Employee Relations', 'HR Policies', 'Training & Development'],
      education: ['MBA in HR', 'B.Com'],
      achievements: ['Built 20+ member team', 'Implemented HR automation', 'Reduced turnover by 30%'],
      email: 'twinkal@company.com',
      linkedin: 'https://www.linkedin.com/in/twinkle-goyani-278a1a304/',
      available: true,
      type: 'member',
      stats: {
        projectsCompleted: 4,
        teamSize: 20,
        satisfaction: 94
      },
      projects: [
        { name: 'HR Portal', description: 'Employee management system', techStack: ['React', 'Node.js', 'MongoDB'], status: 'completed' },
        { name: 'Recruitment Platform', description: 'ATS and hiring workflow', techStack: ['Next.js', 'PostgreSQL'], status: 'in-progress' }
      ]
    },
    {
      id: 'pratham-thakkar',
      name: 'Pratham Thakkar',
      role: 'Development Team Leader',
      image: '',
      bio: 'Leads development team with expertise in scalable systems, clean architecture, and delivering high-performance web applications.',
      quote: 'Clean code is not written, it\'s crafted.',
      experience: '4+ Years',
      location: 'Surat, India',
      languages: ['English', 'Hindi', 'Gujarati'],
      skills: ['React', 'Node.js', 'System Design', 'MongoDB', 'AWS', 'Team Leadership'],
      education: ['B.Tech in Computer Science', 'AWS Certified'],
      achievements: ['Led 10+ major projects', 'Mentored 15+ developers', 'Built scalable architecture'],
      email: 'pratham.1digit@gmail.com',
      linkedin: 'https://www.linkedin.com/in/pratham-thakkar-11b659244/',
      available: true,
      type: 'member',
      stats: {
        projectsCompleted: 15,
        teamSize: 15,
        satisfaction: 99  
      },
      projects: [
        { name: 'E-commerce Platform', description: 'Full-stack shopping platform', techStack: ['React', 'Node.js', 'Stripe'], status: 'completed' },
        { name: 'Real-time Dashboard', description: 'Analytics dashboard with live updates', techStack: ['React', 'WebSocket', 'Redis'], status: 'completed' },
        { name: 'Mobile App Backend', description: 'RESTful API for mobile apps', techStack: ['Node.js', 'Express', 'PostgreSQL'], status: 'in-progress' }
      ]
    },
    {
      id: 'raj-bhatt',
      name: 'Raj Bhatt',
      role: 'Team Leader (SEO)',
      image: '',
      bio: 'Experienced team leader guiding projects with strong leadership, coordination, and technical expertise in digital marketing.',
      quote: 'Good SEO is not about gaming Google. It\'s about creating value for users.',
      experience: '6+ Years',
      location: 'Surat, India',
      languages: ['English', 'Hindi', 'Gujarati'],
      skills: ['SEO Strategy', 'Content Marketing', 'Analytics', 'Team Management', 'Digital Strategy'],
      education: ['MBA in Marketing', 'Google Analytics Certified'],
      achievements: ['Increased organic traffic by 200%', 'Managed 50+ campaigns', 'Built SEO team'],
      email: 'rajbhatt.seo@gmail.com',
      linkedin: 'https://www.linkedin.com/in/raj-bhatt-dm/',
      available: true,
      type: 'member',
      stats: {
        projectsCompleted: 50,
        teamSize: 5,
        satisfaction: 95
      },
      projects: [
        { name: 'SEO Audit Tool', description: 'Automated SEO analysis platform', techStack: ['Python', 'Selenium', 'React'], status: 'completed' },
        { name: 'Content Strategy Platform', description: 'AI-powered content planning', techStack: ['Next.js', 'OpenAI', 'PostgreSQL'], status: 'in-progress' }
      ]
    },
    {
      id: 'yash-makwana',
      name: 'Yash Makwana',
      role: 'Development Team Leader',
      image: '',
      bio: 'Skilled development leader specializing in building scalable applications and guiding tech team.',
      quote: 'Leadership is not about being in charge, it\'s about taking care of those in your charge.',
      experience: '6+ Years',
      location: 'Surat, India',
      languages: ['English', 'Hindi', 'Gujarati'],
      skills: ['Full Stack', 'Cloud', 'DevOps', 'React', 'Node.js', 'Team Management'],
      education: ['B.Tech in IT', 'Azure Certified'],
      achievements: ['Built 15+ applications', 'Led development team', 'Implemented CI/CD'],
      email: 'yash.1digit@gmail.com',
      linkedin: 'https://www.linkedin.com/in/yash-makwana-b2a858287/',
      available: true,
      type: 'member'
    },
    {
      id: 'janvi-goyani',
      name: 'Janvi Goyani',
      role: 'Team Leader (UI/UX design)',
      image: '',
      bio: 'UI/UX design leader focused on creating intuitive user experiences, modern interfaces, and visually engaging digital products.',
      quote: 'Design is not just what it looks like, design is how it works.',
      experience: '5+ Years',
      location: 'Surat, India',
      languages: ['English', 'Hindi', 'Gujarati'],
      skills: ['UI Design', 'UX Research', 'Prototyping', 'Figma', 'Adobe XD', 'User Testing'],
      education: ['B.Des in UI/UX', 'Google UX Certificate'],
      achievements: ['Designed 20+ products', 'Improved user satisfaction by 40%', 'Built design system'],
      email: 'janvi.ouros@gmail.com',
      linkedin: 'https://www.linkedin.com/in/janvikajavadara/',
      available: true,
      type: 'member',
      stats: {
        projectsCompleted: 20,
        teamSize: 4,
        satisfaction: 99
      },
      projects: [
        { name: 'Design System', description: 'Component library and guidelines', techStack: ['Figma', 'React', 'Storybook'], status: 'completed' },
        { name: 'Mobile App UI', description: 'iOS and Android app design', techStack: ['Figma', 'Principle'], status: 'completed' },
        { name: 'Brand Redesign', description: 'Complete brand identity overhaul', techStack: ['Illustrator', 'Figma'], status: 'in-progress' }
      ]
    }
  ]
};

// Helper functions
export const getTeamMemberById = (id: string): TeamMember | undefined => {
  const allMembers = [...teamData.founders, ...teamData.members];
  return allMembers.find(member => member.id === id);
};

export const getTeamMemberByUrl = (url: string): TeamMember | undefined => {
  const allMembers = [...teamData.founders, ...teamData.members];
  return allMembers.find(member => {
    const memberUrl = member.type === 'founder' 
      ? `/team/${member.id === 'vijay-sarkheliya' ? 'ceo' : 'cto'}/${member.id}`
      : `/team/details/${member.id}`;
    return memberUrl === url;
  });
};

export const getAllTeamMembers = (): TeamMember[] => {
  return [...teamData.founders, ...teamData.members];
};

export const getProfileLink = (member: TeamMember): string => {
  if (member.type === 'founder') {
    return `/team/${member.id === 'vijay-sarkheliya' ? 'ceo' : 'cto'}/${member.id}`;
  }
  return `/team/details/${member.id}`;
};
