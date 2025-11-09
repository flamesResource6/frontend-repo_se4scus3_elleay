import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      <Navbar />
      <main className="pt-16">
        <Hero3D />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <footer className="border-t border-white/10 bg-black/60">
          <div className="container mx-auto px-6 md:px-10 py-8 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Gokulakrishnan. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
              <a href="#home" className="hover:text-white">Back to top</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
