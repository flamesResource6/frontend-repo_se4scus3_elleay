import React from 'react';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    school: 'ABC Institute of Technology',
    degree: 'B.E. Computer Science and Engineering',
    period: '2018 – 2022',
    details: [
      'Graduated with First Class Distinction',
      'Core focus on Web Development, Data Structures, and Computer Graphics',
      'Led the coding club and organized 5+ hackathons'
    ],
  },
  {
    school: 'XYZ Senior Secondary School',
    degree: 'Higher Secondary (Physics, Chemistry, Maths, CS)',
    period: '2016 – 2018',
    details: [
      'Top 5% in graduating class',
      'Built first full‑stack project as final-year showcase'
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="relative w-full bg-gradient-to-b from-black via-black to-zinc-900 py-20">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-10">
          <GraduationCap className="w-6 h-6 text-violet-400" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Education</h2>
        </div>

        <ol className="relative border-l border-white/10 pl-6 space-y-10">
          {educationData.map((edu, idx) => (
            <li key={idx} className="relative">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_0_6px_rgba(167,139,250,0.15)]" />
              <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-semibold">{edu.school}</h3>
                  <span className="text-xs md:text-sm text-gray-400">{edu.period}</span>
                </div>
                <p className="text-sm md:text-base text-gray-300 mb-4">{edu.degree}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  {edu.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
