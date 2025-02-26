// import React from 'react';
// import { FileJson2, FileCode2, TerminalSquare, FileType, FileSymlink as Html, Palette, Server, Atom, Code as NodeJs, GitBranch, Github, Database, TableProperties } from 'lucide-react';

// interface Skill {
//   name: string;
//   icon: React.ReactNode;
//   color: string;
// }

// const Skills: React.FC = () => {
//   const skills: Skill[] = [
//     { name: 'JavaScript', icon: <FileJson2 size={40} />, color: 'from-yellow-400 to-yellow-600' },
//     { name: 'Python', icon: <FileCode2 size={40} />, color: 'from-blue-400 to-blue-600' },
//     { name: 'C', icon: <TerminalSquare size={40} />, color: 'from-gray-400 to-gray-600' },
//     { name: 'PHP', icon: <FileType size={40} />, color: 'from-purple-400 to-purple-600' },
//     { name: 'HTML', icon: <Html size={40} />, color: 'from-orange-400 to-orange-600' },
//     { name: 'CSS', icon: <Palette size={40} />, color: 'from-blue-500 to-blue-700' },
//     { name: 'Express.js', icon: <Server size={40} />, color: 'from-gray-500 to-gray-700' },
//     { name: 'React', icon: <Atom size={40} />, color: 'from-cyan-400 to-cyan-600' },
//     { name: 'Node.js', icon: <NodeJs size={40} />, color: 'from-green-400 to-green-600' },
//     { name: 'Git', icon: <GitBranch size={40} />, color: 'from-orange-500 to-orange-700' },
//     { name: 'GitHub', icon: <Github size={40} />, color: 'from-purple-500 to-purple-700' },
//     { name: 'MongoDB', icon: <Database size={40} />, color: 'from-green-500 to-green-700' },
//     { name: 'MySQL', icon: <TableProperties size={40} />, color: 'from-blue-600 to-blue-800' }
//   ];

//   return (
//     <section id="skills" className="relative min-h-screen flex items-center justify-center px-4 py-20">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
//             Technical Skills
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
//           <p className="text-xl text-gray-300">
//             Technologies I work with
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
//           {skills.map((skill) => (
//             <div
//               key={skill.name}
//               className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-xl"
//             >
//               {/* Background Glow */}
//               <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
              
//               {/* Icon Container */}
//               <div className="relative mb-4 text-white/80 group-hover:text-white transition-colors duration-300">
//                 {skill.icon}
//               </div>
              
//               {/* Skill Name */}
//               <h3 className="text-lg font-medium text-white/90 group-hover:text-white transition-colors duration-300">
//                 {skill.name}
//               </h3>
//             </div>
//           ))}
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute top-1/3 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
//       </div>
//     </section>
//   );
// };

// export default Skills;












// bolt changes official 

import React from 'react';

interface Skill {
  name: string;
  imageUrl: string;
  color: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      name: 'JavaScript',
      imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      color: 'from-yellow-400 to-yellow-600'
    },

    {
      name: 'Python',
      imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      color: 'from-blue-400 to-blue-600'
    },

    {
      name: 'C',
      imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
      color: 'from-blue-600 to-blue-800'
    },

    {
      name: 'PHP',
      imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
      color: 'from-purple-400 to-purple-600'
    },

    {
      name: 'MongoDB',
      imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
      color: 'from-green-500 to-green-700'
    },

    {
      name: 'Express.js',
      imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
      color: 'from-gray-500 to-gray-700'
    },
    {
      name: 'React',
      imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
      color: 'from-cyan-400 to-cyan-600'
    },

    {
      name: 'Node.js',
      imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
      color: 'from-green-400 to-green-600'
    },

    {
      name: 'HTML',
      imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
      color: 'from-orange-400 to-orange-600'
    },

    {
      name: 'CSS',
      imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
      color: 'from-blue-500 to-blue-700'
    },

    {
      name: 'Git',
      imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
      color: 'from-orange-500 to-orange-700'
    },

    {
      name: 'GitHub',
      imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
      color: 'from-purple-500 to-purple-700'
    },

    {
      name: 'MySQL',
      imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
      color: 'from-blue-500 to-white-700'
    },

    {
      name: 'Vercel',
      imageUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg',
      color: 'from-black to-gray-700'
    },

  


  ];


  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-300">
            Technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-xl"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
              
              {/* Icon Container */}
              <div className="relative mb-4 w-16 h-16">
                <img
                  src={skill.imageUrl}
                  alt={`${skill.name} logo`}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Skill Name */}
              <h3 className="text-lg font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/3 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};






export default Skills;













