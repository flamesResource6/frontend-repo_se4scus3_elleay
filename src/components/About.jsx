import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  { label: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'Framer Motion'] },
  { label: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'JWT'] },
  { label: 'Database', items: ['MongoDB', 'Mongoose'] },
];

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-black">
      <div className="container mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur flex items-center justify-center">
              <div className="h-32 w-32 rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 animate-pulse" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="md:col-span-3"
          >
            <p className="text-gray-300 leading-relaxed">
              I craft immersive web experiences that blend 3D visuals with robust backend engineering. I love building performant, accessible interfaces and reliable APIs.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-white font-semibold">{h.label}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {h.items.map((it) => (
                      <span key={it} className="text-xs rounded-full bg-white/10 text-gray-200 px-2 py-1">{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-lg bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition">View Work</a>
              <a href="#contact" className="rounded-lg bg-fuchsia-500 px-4 py-2 text-white hover:bg-fuchsia-600 transition">Contact</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
