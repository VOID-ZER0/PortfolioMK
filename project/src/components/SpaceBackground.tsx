import React, { useEffect, useRef } from 'react';

const SpaceBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      if (!containerRef.current) return;
      
      // Clear existing stars
      containerRef.current.innerHTML = '';
      
      const numStars = 200;
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3;
        
        // Random animation delay
        const delay = Math.random() * 2;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        
        containerRef.current.appendChild(star);
      }
    };

    createStars();
    window.addEventListener('resize', createStars);
    
    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" />;
}

export default SpaceBackground;



// above is default theme 










// from gpt 1


// import React, { useEffect, useRef } from 'react';

// const SpaceBackground: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const createStars = () => {
//       if (!containerRef.current) return;
      
//       // Clear existing stars
//       containerRef.current.innerHTML = '';
      
//       const numStars = 250; // Increased number of stars for more density
//       for (let i = 0; i < numStars; i++) {
//         const star = document.createElement('div');
//         star.className = 'star';
        
//         // Random position
//         const x = Math.random() * 100;
//         const y = Math.random() * 100;
        
//         // Random size
//         const size = Math.random() * 4 + 1; // Slightly larger stars
        
//         // Random animation delay
//         const delay = Math.random() * 3;
        
//         // Random color tint for variation
//         const colors = ['#ffffff', '#ffddaa', '#aaddff', '#ffaaaa'];
//         const color = colors[Math.floor(Math.random() * colors.length)];
        
//         star.style.left = `${x}%`;
//         star.style.top = `${y}%`;
//         star.style.width = `${size}px`;
//         star.style.height = `${size}px`;
//         star.style.backgroundColor = color;
//         star.style.borderRadius = '50%'; // Make stars circular
//         star.style.animationDelay = `${delay}s`;
//         star.style.boxShadow = `0 0 ${size * 2}px ${color}`; // Glow effect
        
//         containerRef.current.appendChild(star);
//       }
//     };

//     createStars();
//     window.addEventListener('resize', createStars);
    
//     return () => {
//       window.removeEventListener('resize', createStars);
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="absolute inset-0 bg-black overflow-hidden">
//       <div className="absolute w-full h-full flex items-center justify-center">
//         <div className="animate-pulse text-white text-3xl font-bold tracking-wide">
//           ✨ Explore the Universe ✨
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpaceBackground; 














// from gpt 2 

// import React, { useEffect, useRef } from 'react';

// const SpaceBackground: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const createStars = () => {
//       if (!containerRef.current) return;
      
//       // Clear existing stars
//       containerRef.current.innerHTML = '';
      
//       const numStars = 250; // Increased number of stars for more density
//       for (let i = 0; i < numStars; i++) {
//         const star = document.createElement('div');
//         star.className = 'star';
        
//         // Random position
//         const x = Math.random() * 100;
//         const y = Math.random() * 100;
        
//         // Random size
//         const size = Math.random() * 4 + 1; // Slightly larger stars
        
//         // Random animation delay
//         const delay = Math.random() * 3;
        
//         // Random color tint for variation
//         const colors = ['#ffffff', '#ffddaa', '#aaddff', '#ffaaaa'];
//         const color = colors[Math.floor(Math.random() * colors.length)];
        
//         star.style.left = `${x}%`;
//         star.style.top = `${y}%`;
//         star.style.width = `${size}px`;
//         star.style.height = `${size}px`;
//         star.style.backgroundColor = color;
//         star.style.borderRadius = '50%'; // Make stars circular
//         star.style.animationDelay = `${delay}s`;
//         star.style.boxShadow = `0 0 ${size * 2}px ${color}`; // Glow effect
        
//         containerRef.current.appendChild(star);
//       }
//     };

//     createStars();
//     window.addEventListener('resize', createStars);
    
//     return () => {
//       window.removeEventListener('resize', createStars);
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="absolute inset-0 bg-black overflow-hidden">
//       <div className="absolute w-full h-full flex items-center justify-center">
//         <div className="animate-pulse text-white text-3xl font-bold tracking-wide">
//           ✨ Explore the Universe ✨
//         </div>
//       </div>
//       {/* Shooting Star Effect */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(5)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute bg-white w-1 h-1 rounded-full opacity-75"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animation: `shooting-star ${Math.random() * 5 + 3}s linear infinite`,
//             }}
//           />
//         ))}
//       </div>
//       {/* Floating Nebulas */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(3)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute bg-purple-600/20 w-80 h-80 rounded-full blur-3xl opacity-50"
//             style={{
//               top: `${Math.random() * 80}%`,
//               left: `${Math.random() * 80}%`,
//               animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite alternate`,
//             }}
//           />
//         ))}
//       </div>
//       <style>
//         {`
//           @keyframes shooting-star {
//             0% { transform: translateX(0) translateY(0); opacity: 1; }
//             100% { transform: translateX(-200px) translateY(200px); opacity: 0; }
//           }
//           @keyframes float {
//             0% { transform: translateY(0) scale(1); }
//             50% { transform: translateY(-30px) scale(1.1); }
//             100% { transform: translateY(0) scale(1); }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default SpaceBackground;


















// from gpt 3 coder style







// import React, { useEffect, useRef } from 'react';

// const SpaceBackground: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const createStars = () => {
//       if (!containerRef.current) return;
      
//       // Clear existing stars
//       containerRef.current.innerHTML = '';
      
//       const numStars = 200;
//       for (let i = 0; i < numStars; i++) {
//         const star = document.createElement('div');
//         star.className = 'star';
        
//         // Random position
//         const x = Math.random() * 100;
//         const y = Math.random() * 100;
        
//         // Random size
//         const size = Math.random() * 3 + 1;
        
//         // Random animation delay
//         const delay = Math.random() * 2;
        
//         star.style.left = `${x}%`;
//         star.style.top = `${y}%`;
//         star.style.width = `${size}px`;
//         star.style.height = `${size}px`;
//         star.style.animation = `twinkle 2s infinite alternate ${delay}s`;
//         star.style.position = 'absolute';
//         star.style.backgroundColor = 'white';
//         star.style.borderRadius = '50%';
        
//         containerRef.current.appendChild(star);
//       }
//     };

//     createStars();
//     window.addEventListener('resize', createStars);
    
//     return () => {
//       window.removeEventListener('resize', createStars);
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-black">
//       <style>
//         {`
//           @keyframes twinkle {
//             0% { opacity: 0.3; }
//             100% { opacity: 1; }
//           }
//           .neon-glow {
//             text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff;
//           }
//           .animate-blink {
//             animation: blink 1s infinite alternate;
//           }
//           @keyframes blink {
//             from { opacity: 1; }
//             to { opacity: 0.3; }
//           }
//         `}
//       </style>

//       {/* Developer Holographic Profile */}
//       <div className="absolute top-10 left-10 p-5 bg-black bg-opacity-50 backdrop-blur-md text-white rounded-lg shadow-lg border border-blue-400">
//         <h1 className="text-3xl font-bold neon-glow">👨‍🚀 Galactic Coder</h1>
//         <p className="text-lg text-blue-300">Exploring the Universe of Code</p>
//       </div>

//       {/* Floating Code Snippets */}
//       <div className="absolute bottom-10 right-10 p-4 bg-black bg-opacity-70 rounded-lg shadow-lg text-green-400 font-mono text-sm border border-green-400">
//         <code className="animate-blink">{`function launchCode() {
//   console.log("Deploying to the cosmos...");
// }`}</code>
//       </div>
//     </div>
//   );
// }

// export default SpaceBackground;  














// gpt 4 shooting star 


