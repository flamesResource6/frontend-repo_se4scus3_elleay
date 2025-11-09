import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Three.js', level: 70 },
  { name: 'Tailwind', level: 90 },
  { name: 'MongoDB', level: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 bg-black">
      <div className="container mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Skills
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">{s.name}</span>
                <span className="text-gray-300 text-sm">{s.level}%</span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
