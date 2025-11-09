import React from 'react';
import { motion } from 'framer-motion';

const sampleProjects = [
  {
    title: '3D Portfolio',
    description: 'Immersive portfolio site with React Three Fiber and FastAPI backend.',
    tech: ['React', 'Tailwind', 'Framer', 'MongoDB'],
    liveLink: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Realtime Chat',
    description: 'WebSocket based chat with auth and media sharing.',
    tech: ['React', 'Socket.io', 'Node'],
    liveLink: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'AI Image Tool',
    description: 'Generate images with AI prompts, save, and share.',
    tech: ['Next.js', 'Tailwind', 'OpenAI'],
    liveLink: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sampleProjects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur shadow-lg"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-white/10 text-gray-200 px-2 py-1">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <a href={p.liveLink} className="rounded-md px-4 py-2 text-sm bg-fuchsia-500 text-white hover:bg-fuchsia-600 transition">View Demo</a>
                  <a href={p.githubLink} className="rounded-md px-4 py-2 text-sm bg-white/10 text-white hover:bg-white/20 transition">Source Code</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
