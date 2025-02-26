// import React from 'react';
// import { Briefcase, Code2, Shield } from 'lucide-react';

// interface Experience {
//   title: string;
//   company: string;
//   period: string;
//   description: string;
//   icon: React.ReactNode;
//   gradient: string;
// }

// const Experience: React.FC = () => {
//   const experiences: Experience[] = [
//     {
//       title: 'Web Development',
//       company: 'CODSOFT INTERNSHIP',
//       period: 'June 2024',
//       description: 'Developed a responsive personal portfolio from concept to completion using modern web technologies (HTML5, CSS3, JavaScript). Focused on clean coding, responsive design, and cross-device compatibility for an optimal user experience.',
//       icon: <Code2 size={32} />,
//       gradient: 'from-blue-500 to-purple-500'
//     },
//     {
//       title: 'Cybersecurity',
//       company: 'GROOTT INTERNSHIP',
//       period: 'July 2023',
//       description: 'Gained foundational expertise in cybersecurity, covering threat detection methodologies, basic security protocols, and core cybersecurity concepts to enhance digital security awareness.',
//       icon: <Shield size={32} />,
//       gradient: 'from-green-500 to-emerald-500'
//     }
//   ];

//   return (
//     <section id="experience" className="relative min-h-screen flex items-center justify-center px-4 py-20">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
//             Work Experience
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
//           <p className="text-xl text-gray-300">
//             My Professional Journey
//           </p>
//         </div>

//         <div className="relative">
//           {/* Timeline Line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

//           {experiences.map((exp, index) => (
//             <div
//               key={exp.company}
//               className={`relative flex items-center mb-16 ${
//                 index % 2 === 0 ? 'justify-start' : 'justify-end'
//               }`}
//             >
//               {/* Timeline Node */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500" />

//               {/* Experience Card */}
//               <div
//                 className={`group relative w-[calc(50%-3rem)] ${
//                   index % 2 === 0 ? 'mr-auto' : 'ml-auto'
//                 } rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl overflow-hidden`}
//               >
//                 {/* Background Glow */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />

//                 <div className="relative p-6">
//                   {/* Icon & Title */}
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className={`p-3 rounded-lg bg-gradient-to-br ${exp.gradient} bg-opacity-20`}>
//                       {exp.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-bold text-white">
//                         {exp.company}
//                       </h3>
//                       <p className="text-lg text-gray-300">
//                         {exp.title}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Period */}
//                   <div className="mb-4">
//                     <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm text-white">
//                       {exp.period}
//                     </span>
//                   </div>

//                   {/* Description */}
//                   <p className="text-gray-300">
//                     {exp.description}
//                   </p>
//                 </div>

//                 {/* Connecting Line */}
//                 <div
//                   className={`absolute top-1/2 ${
//                     index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
//                   } transform -translate-y-1/2 w-12 h-1 bg-gradient-to-r ${exp.gradient}`}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
//       </div>
//     </section>
//   );
// };

// export default Experience;













// mobile optimized code 


import React from 'react';
import { Briefcase, Code2, Shield } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: 'Web Development',
      company: 'CODSOFT INTERNSHIP',
      period: 'June 2024',
      description: 'Developed a responsive personal portfolio from concept to completion using modern web technologies (HTML5, CSS3, JavaScript). Focused on clean coding, responsive design, and cross-device compatibility for an optimal user experience.',
      icon: <Code2 size={32} />,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Cybersecurity',
      company: 'GROOTT INTERNSHIP',
      period: 'July 2023',
      description: 'Gained foundational expertise in cybersecurity, covering threat detection methodologies, basic security protocols, and core cybersecurity concepts to enhance digital security awareness.',
      icon: <Shield size={32} />,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="experience" className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-300">
            My Professional Journey
          </p>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
          
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative pl-12 mb-10">
              {/* Timeline Node */}
              <div className="absolute left-4 top-6 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500" />
              
              {/* Experience Card */}
              <div className="group relative rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:shadow-xl overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />

                <div className="relative p-5">
                  {/* Icon & Title */}
                  <div className="flex flex-col mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${exp.gradient} bg-opacity-20`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {exp.company}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg text-gray-300">
                      {exp.title}
                    </p>
                  </div>

                  {/* Period */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm text-white">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Timeline (Alternating) */}
        <div className="hidden md:block relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500" />

              {/* Experience Card */}
              <div
                className={`group relative w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                } rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl overflow-hidden`}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />

                <div className="relative p-6">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${exp.gradient} bg-opacity-20`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {exp.company}
                      </h3>
                      <p className="text-lg text-gray-300">
                        {exp.title}
                      </p>
                    </div>
                  </div>

                  {/* Period */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm text-white">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300">
                    {exp.description}
                  </p>
                </div>

                {/* Connecting Line */}
                <div
                  className={`absolute top-1/2 ${
                    index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
                  } transform -translate-y-1/2 w-12 h-1 bg-gradient-to-r ${exp.gradient}`}
                />
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

export default Experience;
