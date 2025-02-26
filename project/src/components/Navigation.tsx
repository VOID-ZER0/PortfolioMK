import React, { useState } from 'react';
import { Menu, X, User, Code2, FolderGit2, Briefcase, Github, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <User size={20} />, label: 'About', href: '#about' },
    { icon: <Code2 size={20} />, label: 'Skills', href: '#skills' },
    { icon: <FolderGit2 size={20} />, label: 'Projects', href: '#projects' },
    { icon: <Briefcase size={20} />, label: 'Work Experience', href: '#experience' },
    { icon: <Github size={20} />, label: 'GitHub Contribution', href: '#github' },
    { icon: <Mail size={20} />, label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
        aria-label="Open Menu"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#1a1a2e]/95 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <nav className="mt-16">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center gap-4 text-white/80 hover:text-white p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-white/60 group-hover:text-white/90 transition-colors duration-200">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;



















// above is default navbar 
























// below is new navbar by gpt 


// import React, { useState, useEffect, useRef } from 'react';
// import { Menu, X, User, Code2, FolderGit2, Briefcase, Github, Mail } from 'lucide-react';

// const Navigation: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const createStars = () => {
//       if (!containerRef.current) return;
      
//       containerRef.current.innerHTML = '';
      
//       const numStars = 34;
//       for (let i = 0; i < numStars; i++) {
//         const star = document.createElement('div');
//         star.className = 'star';
        
//         const x = Math.random() * 100;
//         const y = Math.random() * 100;
//         const size = Math.random() * 4 + 1;
//         const delay = Math.random() * 3;
//         const colors = ['#ffffff', '#ffddaa', '#aaddff', '#ffaaaa'];
//         const color = colors[Math.floor(Math.random() * colors.length)];
        
//         star.style.left = `${x}%`;
//         star.style.top = `${y}%`;
//         star.style.width = `${size}px`;
//         star.style.height = `${size}px`;
//         star.style.backgroundColor = color;
//         star.style.borderRadius = '50%';
//         star.style.animationDelay = `${delay}s`;
//         star.style.boxShadow = `0 0 ${size * 2}px ${color}`;
        
//         containerRef.current.appendChild(star);
//       }
//     };
    
//     createStars();
//     window.addEventListener('resize', createStars);
    
//     return () => {
//       window.removeEventListener('resize', createStars);
//     };
//   }, []);

//   const menuItems = [
//     { icon: <User size={20} />, label: 'About', href: '#about' },
//     { icon: <Code2 size={20} />, label: 'Skills', href: '#skills' },
//     { icon: <FolderGit2 size={20} />, label: 'Projects', href: '#projects' },
//     { icon: <Briefcase size={20} />, label: 'Work Experience', href: '#experience' },
//     { icon: <Github size={20} />, label: 'GitHub Contribution', href: '#github' },
//     { icon: <Mail size={20} />, label: 'Contact', href: '#contact' }
//   ];

//   return (
//     <>
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 shadow-lg shadow-blue-500/50"
//         aria-label="Open Menu"
//       >
//         <Menu className="w-6 h-6 text-white" />
//       </button>

//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       <div
//         className={`fixed top-0 right-0 h-full w-80 bg-black overflow-hidden z-50 transform transition-transform duration-300 ease-in-out ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <div ref={containerRef} className="absolute inset-0 overflow-hidden" />
//         <div className="p-6 relative">
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-6 right-6 p-2 rounded-full transition-colors duration-200"
//             aria-label="Close Menu"
//           >
//             <X className="w-6 h-6 text-white" />
//           </button>

//           <nav className="mt-16">
//             <ul className="space-y-4">
//               {menuItems.map((item) => (
//                 <li key={item.label}>
//                   <a
//                     href={item.href}
//                     className="flex items-center gap-4 text-white/80 p-3 rounded-lg bg-transparent transition-all duration-200"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     <span className="text-white/60 transition-colors duration-200">
//                       {item.icon}
//                     </span>
//                     <span className="font-medium tracking-wide">
//                       {item.label}
//                     </span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navigation; 








// blue glow removed 

// import React, { useState, useEffect, useRef } from 'react';
// import { Menu, X, User, Code2, FolderGit2, Briefcase, Github, Mail } from 'lucide-react';

// const Navigation: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const createStars = () => {
//       if (!containerRef.current) return;
      
//       containerRef.current.innerHTML = '';
      
//       const numStars = 14;
//       for (let i = 0; i < numStars; i++) {
//         const star = document.createElement('div');
//         star.className = 'star';
        
//         const x = Math.random() * 100;
//         const y = Math.random() * 100;
//         const size = Math.random() * 4 + 1;
//         const delay = Math.random() * 3;
//         const colors = ['#ffffff', '#ffddaa', '#aaddff', '#ffaaaa'];
//         const color = colors[Math.floor(Math.random() * colors.length)];
        
//         star.style.left = `${x}%`;
//         star.style.top = `${y}%`;
//         star.style.width = `${size}px`;
//         star.style.height = `${size}px`;
//         star.style.backgroundColor = color;
//         star.style.borderRadius = '50%';
//         star.style.animationDelay = `${delay}s`;
//         star.style.boxShadow = `0 0 ${size * 2}px ${color}`;
        
//         containerRef.current.appendChild(star);
//       }
//     };
    
//     createStars();
//     window.addEventListener('resize', createStars);
    
//     return () => {
//       window.removeEventListener('resize', createStars);
//     };
//   }, []);

//   const menuItems = [
//     { icon: <User size={20} />, label: 'About', href: '#about' },
//     { icon: <Code2 size={20} />, label: 'Skills', href: '#skills' },
//     { icon: <FolderGit2 size={20} />, label: 'Projects', href: '#projects' },
//     { icon: <Briefcase size={20} />, label: 'Work Experience', href: '#experience' },
//     { icon: <Github size={20} />, label: 'GitHub Contribution', href: '#github' },
//     { icon: <Mail size={20} />, label: 'Contact', href: '#contact' }
//   ];

//   return (
//     <>
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 shadow-none"
//         aria-label="Open Menu"
//       >
//         <Menu className="w-6 h-6 text-white" />
//       </button>

//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       <div
//         className={`fixed top-0 right-0 h-full w-80 bg-black overflow-hidden z-50 transform transition-transform duration-300 ease-in-out ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <div ref={containerRef} className="absolute inset-0 overflow-hidden" />
//         <div className="p-6 relative">
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-6 right-6 p-2 rounded-full transition-colors duration-200"
//             aria-label="Close Menu"
//           >
//             <X className="w-6 h-6 text-white" />
//           </button>

//           <nav className="mt-16">
//             <ul className="space-y-4">
//               {menuItems.map((item) => (
//                 <li key={item.label}>
//                   <a
//                     href={item.href}
//                     className="flex items-center gap-4 text-white/80 p-3 rounded-lg bg-transparent transition-all duration-200"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     <span className="text-white/60 transition-colors duration-200">
//                       {item.icon}
//                     </span>
//                     <span className="font-medium tracking-wide">
//                       {item.label}
//                     </span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navigation;
