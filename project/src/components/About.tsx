import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  color: string;
}

const About: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/malay-khant-a011182b5',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: <Github size={24} />,
      href: 'https://github.com/M0RTALx',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: <Mail size={24} />,
      href: 'mailto:malaykhant.official@gmail.com',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20 relative z-10">
              <img
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-codeflow/main/malay.jpg"
                alt="Malay Khant"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl z-0 animate-pulse" />
          </div>

          {/* Name and Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Malay Khant
          </h2>
          <h3 className="text-2xl text-gray-300 mb-6">
            Software Developer
          </h3>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg blur-sm`} />
                <div className="relative text-white/80 group-hover:text-white transition-colors duration-300">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-10 shadow-xl border border-white/10">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Computer Science Engineer with expertise in coding. Proficient in software development, 
            I focus on creating out-of-the-box solutions. As an active hackathon participant, 
            I excel at tackling complex challenges and developing innovative projects that emphasize 
            security and efficiency while maintaining a keen interest in AI and blockchain technologies. 
            Committed to continuous learning, I strive to advance my skills across various technology domains.


          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default About;