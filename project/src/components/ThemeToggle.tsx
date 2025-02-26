// import React, { useState, useEffect } from 'react';
// import { Sun, Moon } from 'lucide-react';
// import GitHubActivity from './GitHubActivity';

// const App = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem('theme') === 'dark';
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [darkMode]);

//   return (
//     <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} transition-colors duration-300`}>
//       {/* Toggle Button */}
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="fixed top-5 left-5 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg transition-transform hover:scale-110"
//       >
//         {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-900" />}
//       </button>
      
//       {/* Main Content */}
//       <GitHubActivity />
//     </div>
//   );
// };

// export default App;
