import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const backend = import.meta.env.VITE_BACKEND_URL || '';

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });

    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Failed to send');
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Get in touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  placeholder="How can I help?"
                />
              </div>
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full rounded-lg bg-fuchsia-500 px-5 py-3 text-white hover:bg-fuchsia-600 transition disabled:opacity-60"
              >
                {status.type === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {status.message && (
                <p className={`text-sm ${status.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>{status.message}</p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-600/10 to-cyan-500/10 p-6"
          >
            <h3 className="text-xl font-semibold text-white">Let’s build something great</h3>
            <p className="mt-2 text-gray-300">
              I’m open to freelance opportunities, full-time roles, and collaborations. Share a few details about your project and I’ll get back to you.
            </p>
            <ul className="mt-6 space-y-2 text-gray-300">
              <li>Email: <a href="mailto:hello@example.com" className="text-fuchsia-400 hover:underline">hello@example.com</a></li>
              <li>Location: Remote / Open to relocate</li>
              <li>Timezone: IST (GMT+5:30)</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
