import React from 'react';
import { Github, ExternalLink, Code2, Rocket, Shield, Edit3, Cloud ,ImagePlus} from 'lucide-react';

interface Project {
  name: string;
  description: string;
  icon: React.ReactNode;
  githubUrl: string;
  gradient: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      name: 'CODEFLOW',
      description: 'An AI-assisted MERN stack code review solution powered by Gemini Flash 2.0 API, analyzing code style inconsistencies and optimization areas.',
      icon: <Code2 size={32} />,
      githubUrl: 'https://github.com/M0RTALx/CODEFLOW.git',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      name: 'NASA(APOD)',
      description: "A React.js app that fetches daily space images and descriptions using NASA's APOD API, showcasing API integration and responsive design.",
      icon: <Rocket size={32} />,
      githubUrl: 'https://github.com/M0RTALx/NASA-PROJECT.git',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'CYBERSHIELD',
      description: 'A cybersecurity browser extension that enables real-time file scanning (PDF, Word) for potential threats, ensuring file integrity and user protection.',
      icon: <Shield size={32} />,
      githubUrl: 'https://github.com/M0RTALx',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'FLEXWRITE',
      description: 'A simple, responsive text editor built with HTML, CSS, and JavaScript for creating, editing, and saving text files.',
      icon: <Edit3 size={32} />,
      githubUrl: 'https://github.com/M0RTALx/Text-Editor-App.git',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'WEATHER WISE',
      description: 'A Python-based weather app using PyQt5 that displays weather conditions of any city worldwide, with basic CSS styling.',
      icon: <Cloud size={32} />,
      githubUrl: 'https://github.com/M0RTALx/WeatherApp.git',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'NEXGEN',
      description: 'Created an NextGen AI image generation app using the MERN stack and OpenAIs DALL·E API,  The app allows users to generate and search for custom images.',                                                                                                                                                     
      icon: <ImagePlus size={32} />,
      githubUrl: 'https://github.com/M0RTALx/NEXGEN-AI',
      gradient: 'from-yellow-300 to-black-700'
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-300">
            Showcasing my latest work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
              
              <div className="relative p-6">
                {/* Project Icon & Name */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-20`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {project.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Projects;