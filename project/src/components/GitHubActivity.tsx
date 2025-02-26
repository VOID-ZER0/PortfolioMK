// import React from 'react';
// import { Github, ExternalLink, GitCommit } from 'lucide-react';

// const GitHubActivity: React.FC = () => {
//   const githubUsername = 'M0RTALx';
//   const githubProfileUrl = `https://github.com/${githubUsername}`;

//   return (
//     <section id="github" className="relative min-h-screen flex items-center justify-center px-4 py-20">
//       <div className="max-w-6xl mx-auto w-full">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
//             GitHub Contributions
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
//           <p className="text-xl text-gray-300">
//             My Open Source Journey
//           </p>
//         </div>

//         <div className="relative group">
//           {/* Card Container */}
//           <div className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-xl">
//             {/* GitHub Stats Header */}
//             <div className="flex items-center justify-between mb-8">
//               <div className="flex items-center gap-3">
//                 <Github size={32} className="text-white" />
//                 <h3 className="text-2xl font-bold text-white">{githubUsername}</h3>
//               </div>
//               <a
//                 href={githubProfileUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-white"
//               >
//                 <span>View Profile</span>
//                 <ExternalLink size={20} />
//               </a>
//             </div>

//             {/* Contribution Graph */}
//             <div className="relative w-full overflow-hidden rounded-lg bg-white/5 p-4">
//               <img
//                 src={`https://ghchart.rshah.org/${githubUsername}`}
//                 alt="GitHub Contributions Graph"
//                 className="w-full h-auto"
//                 style={{ filter: 'hue-rotate(180deg)' }} // Adjust color to match theme
//               />
//             </div>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
//               <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm">
//                 <GitCommit size={24} className="text-blue-400" />
//                 <div>
//                   <h4 className="text-sm text-gray-400">Contributions</h4>
//                   <p className="text-xl font-bold text-white">View on GitHub</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm">
//                 <svg className="w-6 h-6 text-green-400" viewBox="0 0 16 16" fill="currentColor">
//                   <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
//                   <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" />
//                 </svg>
//                 <div>
//                   <h4 className="text-sm text-gray-400">Repositories</h4>
//                   <p className="text-xl font-bold text-white">View on GitHub</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm">
//                 <svg className="w-6 h-6 text-purple-400" viewBox="0 0 16 16" fill="currentColor">
//                   <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
//                 </svg>
//                 <div>
//                   <h4 className="text-sm text-gray-400">Forks</h4>
//                   <p className="text-xl font-bold text-white">View on GitHub</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Decorative Glow */}
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-2xl" />
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
//       </div>
//     </section>
//   );
// };

// export default GitHubActivity;























// imported from gpt


import React from 'react';
import { Github, ExternalLink, GitCommit } from 'lucide-react';

const GitHubActivity: React.FC = () => {
  const githubUsername = 'M0RTALx';
  const githubProfileUrl = `https://github.com/${githubUsername}`;
  const githubReposUrl = `https://github.com/${githubUsername}?tab=repositories`;
  const githubForksUrl = `https://github.com/${githubUsername}?tab=repositories&q=&type=fork`;
  const githubContributionsUrl = `https://github.com/${githubUsername}`;

  return (
    <section id="github" className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            GitHub Contributions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-300">
            My Open Source Journey
          </p>
        </div>

        <div className="relative group">
          {/* Card Container */}
          <div className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-xl">
            {/* GitHub Stats Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Github size={32} className="text-white" />
                <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-white hover:underline">
                  {githubUsername}
                </a>
              </div>
              <a
                href={githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-white"
              >
                <span>View Profile</span>
                <ExternalLink size={20} />
              </a>
            </div>

            {/* Contribution Graph */}
            <div className="relative w-full overflow-hidden rounded-lg bg-white/5 p-4">
              <img
                src={`https://ghchart.rshah.org/${githubUsername}`}
                alt="GitHub Contributions Graph"
                className="w-full h-auto"
                style={{ filter: 'hue-rotate(180deg)' }}
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <a href={githubContributionsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10">
                <GitCommit size={24} className="text-blue-400" />
                <div>
                  <h4 className="text-sm text-gray-400">Contributions</h4>
                  <p className="text-xl font-bold text-white">View on GitHub</p>
                </div>
              </a>
              <a href={githubReposUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" />
                </svg>
                <div>
                  <h4 className="text-sm text-gray-400">Repositories</h4>
                  <p className="text-xl font-bold text-white">View on GitHub</p>
                </div>
              </a>
              <a href={githubForksUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                </svg>
                <div>
                  <h4 className="text-sm text-gray-400">Forks</h4>
                  <p className="text-xl font-bold text-white">View on GitHub</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;













