// import React from 'react';
import SpaceBackground from './components/SpaceBackground';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';


function App() {
  return (
    <div className="min-h-screen space-background">
      <SpaceBackground />
      <Navigation />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <GitHubActivity />
      <Contact />
    </div>
  );
}

export default App;