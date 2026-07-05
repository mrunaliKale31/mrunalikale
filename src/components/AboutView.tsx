import React, { useState } from 'react';
import { Certification } from '../types';
import { CERTIFICATIONS } from '../data';
import { 
  Award, BookOpen, Compass, ShieldAlert, CheckCircle, 
  ChevronRight, Calendar, MapPin, Sparkles, BookMarked,
  Layers, Hammer, Cpu, Terminal, X, ExternalLink, Users2, Star,
  Code2, Layout, Database
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: 'home' | 'about' | 'projects' | 'work' | 'connect') => void;
  isDarkMode: boolean;
}

export default function AboutView({ onNavigate, isDarkMode }: AboutViewProps) {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <div className="space-y-16 animate-fadeIn">
      
      {/* 1. PERSONAL INTRODUCTION */}
      <section className="space-y-4">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-semibold">01 • Personal Engine</span>
        <h2 className={`text-3xl font-display font-bold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>The developer behind the layouts.</h2>
        <p className={`text-xs leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
          I'm Mrunali Kale, an Information Technology student and aspiring Full-Stack Developer with a passion for building modern, user-focused web applications.
        </p>
        <p className={`text-xs leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
          To me, web development is where creativity meets problem-solving. I enjoy transforming ideas into clean, responsive, and intuitive digital experiences while writing code that is maintainable, scalable, accessible, and efficient.
        </p>
        <p className={`text-xs leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
          I'm constantly learning new technologies, improving my development skills, and taking on projects that challenge me to grow as both a developer and a designer. My goal is to create software that not only works well but also provides a seamless experience for the people who use it.
        </p>
      </section>

      {/* 2. TECHNICAL SKILLS */}
      <section className="space-y-6">
        <div className={`border-b pb-3 transition-colors duration-300 ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-semibold">02 • Tech Stack</span>
          <h3 className={`text-lg font-semibold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Technical Skills & Capabilities</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Programming Languages */}
          <div className={`p-5 border rounded-xl space-y-3 transition-all duration-300 ${
            isDarkMode ? 'bg-zinc-950/60 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
          }`}>
            <div className="flex items-center gap-2">
              <div className={`p-1.5 border rounded-md ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
                <Code2 className="w-4 h-4 text-blue-400" />
              </div>
              <span className={`text-xs font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>Programming Languages</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Python', 'Java', 'JavaScript', 'TypeScript'].map((skill) => (
                <span key={skill} className={`text-[10px] font-mono px-2 py-1 rounded border transition-colors ${
                  isDarkMode ? 'bg-zinc-900 text-zinc-400 border-zinc-850' : 'bg-zinc-50 text-zinc-650 border-zinc-200'
                }`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Web & Full-Stack */}
          <div className={`p-5 border rounded-xl space-y-3 transition-all duration-300 ${
            isDarkMode ? 'bg-zinc-950/60 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
          }`}>
            <div className="flex items-center gap-2">
              <div className={`p-1.5 border rounded-md ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
                <Layout className="w-4 h-4 text-indigo-400" />
              </div>
              <span className={`text-xs font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>Web & Full-Stack</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['HTML', 'CSS', 'React', 'Node.js'].map((skill) => (
                <span key={skill} className={`text-[10px] font-mono px-2 py-1 rounded border transition-colors ${
                  isDarkMode ? 'bg-zinc-900 text-zinc-400 border-zinc-850' : 'bg-zinc-50 text-zinc-650 border-zinc-200'
                }`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className={`p-5 border rounded-xl space-y-3 transition-all duration-300 ${
            isDarkMode ? 'bg-zinc-950/60 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
          }`}>
            <div className="flex items-center gap-2">
              <div className={`p-1.5 border rounded-md ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
                <Database className="w-4 h-4 text-emerald-400" />
              </div>
              <span className={`text-xs font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>Databases</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['MySQL', 'MongoDB'].map((skill) => (
                <span key={skill} className={`text-[10px] font-mono px-2 py-1 rounded border transition-colors ${
                  isDarkMode ? 'bg-zinc-900 text-zinc-400 border-zinc-850' : 'bg-zinc-50 text-zinc-650 border-zinc-200'
                }`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Testing & Automation */}
          <div className={`p-5 border rounded-xl space-y-3 transition-all duration-300 ${
            isDarkMode ? 'bg-zinc-950/60 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
          }`}>
            <div className="flex items-center gap-2">
              <div className={`p-1.5 border rounded-md ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
              <span className={`text-xs font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>Testing & Automation</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Selenium', 'JUnit', 'Jest', 'Postman'].map((skill) => (
                <span key={skill} className={`text-[10px] font-mono px-2 py-1 rounded border transition-colors ${
                  isDarkMode ? 'bg-zinc-900 text-zinc-400 border-zinc-850' : 'bg-zinc-50 text-zinc-650 border-zinc-200'
                }`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Cybersecurity */}
          <div className={`p-5 border rounded-xl space-y-3 transition-all duration-300 ${
            isDarkMode ? 'bg-zinc-950/60 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
          }`}>
            <div className="flex items-center gap-2">
              <div className={`p-1.5 border rounded-md ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
                <ShieldAlert className="w-4 h-4 text-red-400" />
              </div>
              <span className={`text-xs font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>Cybersecurity</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Burp Suite', 'MobSF', 'Cryptography'].map((skill) => (
                <span key={skill} className={`text-[10px] font-mono px-2 py-1 rounded border transition-colors ${
                  isDarkMode ? 'bg-zinc-900 text-zinc-400 border-zinc-850' : 'bg-zinc-50 text-zinc-650 border-zinc-200'
                }`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Systems & DevOps */}
          <div className={`p-5 border rounded-xl space-y-3 transition-all duration-300 ${
            isDarkMode ? 'bg-zinc-950/60 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
          }`}>
            <div className="flex items-center gap-2">
              <div className={`p-1.5 border rounded-md ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
                <Terminal className="w-4 h-4 text-orange-400" />
              </div>
              <span className={`text-xs font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>Systems & DevOps</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Linux', 'Docker', 'Git/GitHub', 'Jenkins'].map((skill) => (
                <span key={skill} className={`text-[10px] font-mono px-2 py-1 rounded border transition-colors ${
                  isDarkMode ? 'bg-zinc-900 text-zinc-400 border-zinc-850' : 'bg-zinc-50 text-zinc-650 border-zinc-200'
                }`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud & Emerging Tech */}
          <div className={`p-5 border rounded-xl space-y-3 transition-all duration-300 md:col-span-2 lg:col-span-3 ${
            isDarkMode ? 'bg-zinc-950/60 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
          }`}>
            <div className="flex items-center gap-2">
              <div className={`p-1.5 border rounded-md ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>
              <span className={`text-xs font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>Cloud & Emerging Technologies</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['MCP Server Development', 'Prompt Engineering', 'API Integration', 'Shell Scripting'].map((skill) => (
                <span key={skill} className={`text-[10px] font-mono px-2 py-1 rounded border transition-colors ${
                  isDarkMode ? 'bg-zinc-900 text-zinc-400 border-zinc-850' : 'bg-zinc-50 text-zinc-650 border-zinc-200'
                }`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. CONTINUOUS SCROLLING CERTIFICATIONS (MANDATORY RULE) */}
      <section className="space-y-4">
        <div className={`flex items-center justify-between border-b pb-3 transition-colors duration-300 ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
          <div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-semibold">03 • Continued Development</span>
            <h3 className={`text-lg font-semibold tracking-tight flex items-center gap-2 transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              <Award className="w-4 h-4 text-amber-400" /> Learning Never Stops
            </h3>
          </div>
          <span className="text-[10px] font-mono text-zinc-500">
            Total Certifications: {CERTIFICATIONS.length}
          </span>
        </div>

        <p className={`text-xs transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
          Click on any scrolling card below to expand the direct credential validation parameters in a focused modal interface.
        </p>

        {/* Infinite Scrolling Marquee frame */}
        <div className={`relative overflow-hidden w-full py-5 border rounded-2xl transition-all duration-300 ${
          isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
        }`}>
          <div className="animate-scroll flex gap-4 pr-4">
            {/* Double duplicate array to allow continuous seamless loop */}
            {[...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS].map((cert, index) => (
              <div
                key={`${cert.id}-${index}`}
                onClick={() => setSelectedCert(cert)}
                className={`flex-shrink-0 w-64 p-4 rounded-xl cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between h-28 ${
                  isDarkMode 
                    ? 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700' 
                    : 'bg-zinc-50 border-zinc-200 hover:border-zinc-350 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <span className={`text-[10px] font-semibold font-mono truncate max-w-[140px] ${
                      isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>
                      {cert.issuer}
                    </span>
                    <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded ${
                      isDarkMode ? 'bg-zinc-950 text-zinc-500' : 'bg-white text-zinc-500 border border-zinc-200/55'
                    }`}>
                      {cert.date}
                    </span>
                  </div>
                  <h4 className={`text-xs font-semibold mt-1.5 line-clamp-2 leading-tight transition-colors ${
                    isDarkMode ? 'text-white' : 'text-zinc-800'
                  }`}>
                    {cert.title}
                  </h4>
                </div>
                <div className={`flex items-center justify-between text-[10px] font-mono border-t pt-1.5 ${
                  isDarkMode ? 'border-zinc-900 text-zinc-400' : 'border-zinc-200 text-zinc-600'
                }`}>
                  <span className="text-zinc-500">ID validation</span>
                  <span className={`flex items-center gap-1 hover:underline ${isDarkMode ? 'text-white' : 'text-zinc-800 font-semibold'}`}>
                    Inspect <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE TIMELINE */}
      <section className="space-y-6">
        <div className={`border-b pb-3 transition-colors duration-300 ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-semibold">04 • Academic Journey</span>
          <h3 className={`text-lg font-semibold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Education</h3>
        </div>

        <div className={`space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 transition-all ${
          isDarkMode ? 'before:bg-zinc-900' : 'before:bg-zinc-200'
        }`}>
          
          <div className="relative pl-8 group">
            <span className={`absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full border transition-all ${
              isDarkMode ? 'bg-white border-zinc-950' : 'bg-zinc-900 border-white'
            }`} />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className={`text-xs font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>B.Tech in Information Technology • MIT Art, Design & Technology University</h4>
              <span className="text-[10px] font-mono text-zinc-500">2023 - 2027 • Loni Kalbhor, Pune</span>
            </div>
            <p className={`text-xs mt-1 leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Currently pursuing a Bachelor's degree in Information Technology, building a strong foundation in software development, databases, operating systems, web technologies, and software engineering. Actively applying classroom knowledge through real-world projects and internships.
            </p>
            <div className={`flex items-center gap-4 mt-2 text-[10px] font-mono transition-colors ${isDarkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
              <span>GPA: 8.68 / 10</span>
              <span>•</span>
              <span>No Backlog History</span>
            </div>
          </div>

          <div className="relative pl-8 group">
            <span className={`absolute left-2 top-2 w-2.5 h-2.5 rounded-full transition-all ${
              isDarkMode ? 'bg-zinc-800' : 'bg-zinc-300'
            }`} />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className={`text-xs font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Senior Secondary (Class XII) • The Lexicon International School</h4>
              <span className="text-[10px] font-mono text-zinc-500">2022 - 2023 • Wagholi, Pune</span>
            </div>
            <p className={`text-xs mt-1 leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Completed Higher Secondary education in the Science stream, building a strong foundation in Mathematics, Physics, Chemistry, and Computer Science.
            </p>
            <div className={`flex items-center gap-4 mt-2 text-[10px] font-mono transition-colors ${isDarkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
              <span>Percentage: 76%</span>
            </div>
          </div>

          <div className="relative pl-8 group">
            <span className={`absolute left-2 top-2 w-2.5 h-2.5 rounded-full transition-all ${
              isDarkMode ? 'bg-zinc-800' : 'bg-zinc-300'
            }`} />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className={`text-xs font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Secondary Education (Class X) • The Lexicon International School</h4>
              <span className="text-[10px] font-mono text-zinc-500">2020 - 2021 • Kalyani Nagar, Pune</span>
            </div>
            <p className={`text-xs mt-1 leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Completed Secondary School education with consistent academic excellence and a strong foundation across core subjects.
            </p>
            <div className={`flex items-center gap-4 mt-2 text-[10px] font-mono transition-colors ${isDarkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
              <span>Percentage: 94%</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. ACTIVITIES & ACHIEVEMENTS */}
      <section className="space-y-6">
        <div className={`border-b pb-3 transition-colors duration-300 ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-semibold">05 • Beyond Academics</span>
          <h3 className={`text-lg font-semibold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Activities & Achievements</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Leadership & Extracurricular */}
          <div className={`border p-5 rounded-xl space-y-4 transition-all duration-300 ${
            isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
          }`}>
            <h4 className={`text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5 ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-700'
            }`}>
              <Users2 className="w-4 h-4" /> Leadership & Extracurricular
            </h4>
            <div className="space-y-4">
              <div className="space-y-1">
                <h5 className={`text-xs font-semibold flex items-center gap-2 transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>
                  <span className={`w-1 h-1 rounded-full inline-block ${isDarkMode ? 'bg-white' : 'bg-zinc-800'}`} /> General Secretary – FOSSphere Club
                </h5>
                <p className={`text-[11px] leading-relaxed pl-3 transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Organize open-source focused events and lead initiatives promoting FOSS adoption.
                </p>
              </div>
              <div className="space-y-1">
                <h5 className={`text-xs font-semibold flex items-center gap-2 transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>
                  <span className={`w-1 h-1 rounded-full inline-block ${isDarkMode ? 'bg-white' : 'bg-zinc-800'}`} /> Content Team Lead – IMPACT Student Council
                </h5>
                <p className={`text-[11px] leading-relaxed pl-3 transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Managed content planning and organization for student-led initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Competition & Achievements */}
          <div className={`border p-5 rounded-xl space-y-4 transition-all duration-300 ${
            isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
          }`}>
            <h4 className={`text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5 ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-700'
            }`}>
              <Star className="w-4 h-4" /> Competitions & Recognition
            </h4>
            <div className="space-y-4">
              <div className="space-y-1">
                <h5 className={`text-xs font-semibold flex items-center gap-2 transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>
                  <span className={`w-1 h-1 rounded-full inline-block ${isDarkMode ? 'bg-white' : 'bg-zinc-800'}`} /> AMD SlingShot Promptathon
                </h5>
                <p className={`text-[11px] leading-relaxed pl-3 transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Ranked 49 out of 540 participants in a competitive AI prompt engineering challenge.
                </p>
              </div>
              <div className="space-y-1">
                <h5 className={`text-xs font-semibold flex items-center gap-2 transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>
                  <span className={`w-1 h-1 rounded-full inline-block ${isDarkMode ? 'bg-white' : 'bg-zinc-800'}`} /> FOSS FEST National Hackathon
                </h5>
                <p className={`text-[11px] leading-relaxed pl-3 transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Participated in national-level open-source hackathon organized by OpenSource Science B.V.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CERTIFICATION DETAIL MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-sm animate-fadeIn">
          <div className={`relative w-full max-w-md rounded-2xl p-6 space-y-4 shadow-2xl border transition-all duration-300 ${
            isDarkMode ? 'bg-[#121212] border-zinc-850' : 'bg-white border-zinc-200'
          }`}>
            <button 
              onClick={() => setSelectedCert(null)}
              className={`absolute top-4 right-4 p-1 rounded-md border cursor-pointer transition-colors ${
                isDarkMode 
                  ? 'text-zinc-500 hover:text-white bg-zinc-900 border-zinc-800' 
                  : 'text-zinc-500 hover:text-zinc-900 bg-zinc-100 border-zinc-200'
              }`}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1 pt-2">
              <span className="text-[9px] font-mono bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded-full uppercase font-semibold">
                Verified Credential Spec
              </span>
              <h3 className={`text-base font-display font-bold tracking-tight mt-2 transition-colors ${
                isDarkMode ? 'text-white' : 'text-zinc-900'
              }`}>
                {selectedCert.title}
              </h3>
              <p className="text-xs text-zinc-500 font-mono">Issued by: {selectedCert.issuer}</p>
            </div>

            <div className={`p-4 border rounded-lg text-xs font-mono space-y-2 transition-colors duration-300 ${
              isDarkMode ? 'bg-zinc-950 border-zinc-900 text-zinc-400' : 'bg-zinc-50 border-zinc-200 text-zinc-600'
            }`}>
              <div className={`text-[10px] border-b pb-1 font-semibold uppercase ${
                isDarkMode ? 'text-zinc-500 border-zinc-900' : 'text-zinc-400 border-zinc-200'
              }`}>Validation Signatures</div>
              <div><span className="text-zinc-500">Issue Date:</span> {selectedCert.date}</div>
              <div><span className="text-zinc-500">Security Signature:</span> SHA-256 Verified</div>
              <div><span className="text-zinc-500">Validation URI:</span> {selectedCert.credentialUrl}</div>
              <div><span className="text-zinc-500">Status Check:</span> ACTIVE ✓</div>
            </div>

            <div className="flex gap-2 pt-2">
              <a 
                href={selectedCert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 py-2 text-center text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-all ${
                  isDarkMode 
                    ? 'bg-white text-zinc-950 hover:bg-zinc-200' 
                    : 'bg-zinc-950 text-white hover:bg-zinc-850'
                }`}
              >
                <span>Validate Credential Record</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button 
                onClick={() => setSelectedCert(null)}
                className={`py-2 px-4 text-xs font-semibold rounded-lg border transition-all ${
                  isDarkMode 
                    ? 'bg-zinc-900 text-white border-zinc-800 hover:bg-zinc-800' 
                    : 'bg-zinc-100 text-zinc-700 border-zinc-200 hover:bg-zinc-200 shadow-2xs'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
