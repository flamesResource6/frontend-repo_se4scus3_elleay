import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Coursera • Meta',
    year: '2023',
    link: 'https://www.coursera.org/professional-certificates/meta-front-end-developer'
  },
  {
    title: 'Google Cloud Digital Leader',
    issuer: 'Google Cloud',
    year: '2022',
    link: 'https://cloud.google.com/certification/cloud-digital-leader'
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2022',
    link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/'
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="relative w-full bg-black py-20">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-10">
          <Award className="w-6 h-6 text-emerald-400" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Certificates</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <article key={idx} className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-emerald-400/40 transition-colors">
              <h3 className="text-lg font-semibold group-hover:text-white/90">{cert.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{cert.issuer}</p>
              <div className="flex items-center justify-between mt-6">
                <span className="text-xs text-gray-400">{cert.year}</span>
                <a href={cert.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200">
                  View <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
