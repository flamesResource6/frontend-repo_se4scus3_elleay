import React from 'react';
import { FileDown } from 'lucide-react';

export default function Resume() {
  const handleDownload = () => {
    // If you later host the actual PDF, replace the link below.
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Gokulakrishnan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section id="resume" className="relative w-full bg-gradient-to-b from-zinc-900 to-black py-16">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Resume</h2>
            <p className="text-gray-300 mt-2 max-w-2xl">Download a copy of my latest resume. It highlights education, certifications, experience, and selected projects.</p>
          </div>
          <button onClick={handleDownload} className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-4 py-2 font-medium hover:bg-white/90 active:scale-[0.99] transition">
            <FileDown className="w-5 h-5" /> Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}
