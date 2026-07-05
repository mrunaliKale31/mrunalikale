import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { SAMPLE_PROJECTS } from '../data';
import { 
  ArrowUpRight, ChevronRight, Github, Code2, 
  Terminal, Globe, Cpu, Database, Layout, Sparkles, 
  TrendingUp, Users2, Star, CheckCircle, Smartphone
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: 'home' | 'about' | 'projects' | 'work' | 'connect') => void;
  onSelectProject: (project: Project) => void;
  isDarkMode: boolean;
}

export default function HomeView({ onNavigate, onSelectProject, isDarkMode }: HomeViewProps) {
  const roles = [
    "Computer Science Student",
    "Full-Stack Developer",
    "Open-Source Contributor",
    "UI/UX Design Enthusiast"
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const featuredProjects = SAMPLE_PROJECTS.slice(0, 2);

  const techStack = [
    { name: 'TypeScript', category: 'Language', icon: <Code2 className="w-4 h-4 text-sky-400" /> },
    { name: 'React / Next.js', category: 'Frontend', icon: <Layout className="w-4 h-4 text-indigo-400" /> },
    { name: 'Tailwind CSS v4', category: 'Design', icon: <Sparkles className="w-4 h-4 text-pink-400" /> },
    { name: 'Node.js / Express', category: 'Backend', icon: <Terminal className="w-4 h-4 text-emerald-400" /> },
    { name: 'PostgreSQL / SQL', category: 'Database', icon: <Database className="w-4 h-4 text-blue-400" /> },
    { name: 'Docker / Dev Containers', category: 'DevOps', icon: <Cpu className="w-4 h-4 text-orange-400" /> }
  ];

  return (
    <div className="space-y-20 animate-fadeIn">
      
      {/* 1. HERO SECTION */}
      <section id="hero" className="py-10 md:py-16 space-y-8 max-w-4xl">
        <div className="space-y-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-zinc-900/40 border-zinc-850' 
              : 'bg-white border-zinc-200 shadow-xs'
          }`}>
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className={`text-[10px] font-mono uppercase tracking-widest transition-colors duration-300 ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Mrunali Kale • Open to Internships, Freelancing & Junior Roles
            </span>
          </div>

          <h1 className={`text-4xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.05] transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-zinc-900'
          }`}>
            Welcome to my digital space where I showcase <span className={`underline decoration-wavy underline-offset-8 transition-colors ${isDarkMode ? 'text-zinc-300 decoration-zinc-800' : 'text-zinc-800 decoration-zinc-300'}`}>projects and ideas</span>.
          </h1>

          {/* Changing Subtitle Role */}
          <div className="flex items-center gap-2.5 h-8">
            <span className={`font-mono text-xs transition-colors ${isDarkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>I build as a:</span>
            <span className={`font-mono text-xs font-semibold px-2.5 py-1 rounded border transition-colors duration-300 animate-pulse ${
              isDarkMode 
                ? 'bg-zinc-900/60 text-white border-zinc-800' 
                : 'bg-zinc-100 text-zinc-900 border-zinc-200'
            }`}>
              {roles[roleIndex]}
            </span>
          </div>

          <p className={`text-sm max-w-xl leading-relaxed transition-colors duration-300 ${
            isDarkMode ? 'text-zinc-400' : 'text-zinc-650'
          }`}>
            I craft clean full-stack architectures, responsive visual interfaces, and highly structured web applications. Passionate about learning, web performance, and robust software standards.
          </p>
        </div>

        {/* Two CTAs */}
        <div className="flex flex-wrap gap-3 pt-2">
          <button 
            onClick={() => onNavigate('work')}
            className={`px-6 py-3 text-xs font-bold rounded-lg transition-all shadow-sm flex items-center gap-2 hover:scale-[1.02] cursor-pointer ${
              isDarkMode 
                ? 'bg-white text-zinc-950 hover:bg-zinc-100' 
                : 'bg-zinc-950 text-white hover:bg-zinc-800'
            }`}
          >
            <span>Let's Collaborate</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button 
            onClick={() => onNavigate('projects')}
            className={`px-6 py-3 text-xs font-bold rounded-lg border transition-all flex items-center gap-2 cursor-pointer ${
              isDarkMode 
                ? 'bg-zinc-900 text-white border-zinc-850 hover:bg-zinc-850 hover:border-zinc-700' 
                : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300'
            }`}
          >
            <span>Review Projects</span>
            <ArrowUpRight className={`w-3.5 h-3.5 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`} />
          </button>
        </div>
      </section>

      {/* 2. QUICK STATISTICS PANEL */}
      <section className={`grid grid-cols-1 md:grid-cols-3 gap-4 border-y py-10 transition-colors duration-300 ${
        isDarkMode ? 'border-zinc-900' : 'border-zinc-200'
      }`}>
        <div className="space-y-1">
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">Active Coding</div>
          <div className={`text-2xl font-display font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>4+ Years</div>
          <p className="text-[10px] text-zinc-500 leading-normal">From academic labs to personal production sandboxes</p>
        </div>
        <div className="space-y-1">
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">Finished Projects</div>
          <div className={`text-2xl font-display font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>12+ Apps</div>
          <p className="text-[10px] text-zinc-500 leading-normal">Full-stack utilities, static tools, & CLI scripts</p>
        </div>
        <div className="space-y-1">
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">GitHub Commits</div>
          <div className={`text-2xl font-display font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>900+</div>
          <p className="text-[10px] text-zinc-500 leading-normal">Active contributions and development</p>
        </div>
      </section>

      {/* 3. MINI ABOUT SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">01 • Personal Philosophy</span>
          <h2 className={`text-xl font-display font-bold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>The developer's role is to clear complexity.</h2>
          <p className={`text-xs leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
            I don't just write functional scripts. I structure software solutions that are clean, performant, and delightful to navigate. I focus on spatial proportions, clear visual hierarchies, and modern responsive standards.
          </p>
          <button 
            onClick={() => onNavigate('about')}
            className={`text-xs font-mono flex items-center gap-1.5 pt-2 cursor-pointer transition-colors ${
              isDarkMode ? 'text-white hover:text-zinc-300' : 'text-zinc-900 hover:text-zinc-700'
            }`}
          >
            Read my academic story <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Dynamic Tech Stack Showcase */}
        <div className={`border rounded-xl p-6 space-y-6 transition-all duration-300 ${
          isDarkMode ? 'bg-zinc-950/60 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
        }`}>
          <div>
            <h3 className={`text-xs font-mono uppercase tracking-widest font-bold flex items-center gap-1.5 ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-700'
            }`}>
              <Cpu className="w-4 h-4 text-zinc-400" /> Active learning stack
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {techStack.map((tech) => (
              <div 
                key={tech.name} 
                className={`p-3 border rounded-lg flex items-center gap-3 transition-all cursor-default ${
                  isDarkMode 
                    ? 'bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/50' 
                    : 'bg-zinc-50/50 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 shadow-2xs'
                }`}
              >
                <div className={`p-1.5 border rounded-md transition-colors flex-shrink-0 ${
                  isDarkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200 shadow-2xs'
                }`}>
                  {tech.icon}
                </div>
                <div className="min-w-0">
                  <div className={`text-xs font-semibold transition-colors truncate ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{tech.name}</div>
                  <div className="text-[9px] font-mono text-zinc-500">{tech.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS PREVIEW */}
      <section className="space-y-6">
        <div className={`flex items-end justify-between border-b pb-3 transition-colors duration-300 ${
          isDarkMode ? 'border-zinc-900' : 'border-zinc-200'
        }`}>
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-semibold">02 • Project Highlights</span>
          </div>
          <button 
            onClick={() => onNavigate('projects')}
            className={`text-xs flex items-center gap-1 font-mono transition-colors cursor-pointer ${
              isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-550 hover:text-zinc-950'
            }`}
          >
            Review All Projects ({SAMPLE_PROJECTS.length}) →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((proj) => (
            <div 
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              className={`group border rounded-2xl overflow-hidden cursor-pointer transition-all flex flex-col justify-between ${
                isDarkMode 
                  ? 'bg-zinc-950 border-zinc-900 hover:border-zinc-800' 
                  : 'bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-xs'
              }`}
            >
              {/* Visual Banner */}
              <div className={`h-44 flex items-center justify-center border-b relative transition-all ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-900/80' 
                  : 'bg-gradient-to-br from-zinc-50 to-zinc-100/50 border-zinc-200/80'
              }`}>
                <span className={`text-xs font-mono uppercase tracking-widest ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400 font-semibold'}`}>{proj.banner}</span>
                <span className={`absolute top-3 right-3 text-[9px] font-mono border px-2.5 py-0.5 rounded-full transition-all ${
                  isDarkMode 
                    ? 'bg-zinc-950 border-zinc-900 text-zinc-400' 
                    : 'bg-white border-zinc-200 text-zinc-600 shadow-2xs'
                }`}>
                  {proj.category}
                </span>
              </div>

              {/* Text content */}
              <div className="p-6 space-y-4">
                <div className="space-y-1.5">
                  <h4 className={`text-sm font-semibold flex items-center justify-between transition-colors ${
                    isDarkMode ? 'text-white group-hover:text-zinc-200' : 'text-zinc-900 group-hover:text-zinc-750'
                  }`}>
                    <span>{proj.title}</span>
                    <ArrowUpRight className={`w-4 h-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isDarkMode ? 'text-zinc-500 group-hover:text-white' : 'text-zinc-400 group-hover:text-zinc-900'
                    }`} />
                  </h4>
                  <p className={`text-xs leading-relaxed line-clamp-2 transition-colors ${
                    isDarkMode ? 'text-zinc-400' : 'text-zinc-650'
                  }`}>
                    {proj.shortDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {proj.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className={`text-[9px] font-mono px-2 py-0.5 rounded transition-colors ${
                      isDarkMode ? 'bg-zinc-900 text-zinc-400' : 'bg-zinc-100 text-zinc-650'
                    }`}>
                      {tech}
                    </span>
                  ))}
                  {proj.techStack.length > 4 && (
                    <span className="text-[9px] font-mono text-zinc-500 py-0.5">
                      +{proj.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION BLOCK */}
      <section className={`border rounded-2xl p-8 md:p-12 text-center space-y-6 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-zinc-950 via-zinc-900/40 to-zinc-950 border-zinc-900' 
          : 'bg-white border-zinc-200 shadow-sm'
      }`}>
        <div className="space-y-2 max-w-md mx-auto">
          <h3 className={`text-xl md:text-2xl font-display font-bold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Want to collaborate on a student project or internship?</h3>
          <p className={`text-xs leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
            I am always eager to learn, build, and work with passionate teams. Let's design modular solutions, write clean code, and create beautiful things.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <button 
            onClick={() => onNavigate('work')}
            className={`px-5 py-2.5 text-xs font-semibold rounded-lg shadow-sm cursor-pointer transition-colors ${
              isDarkMode 
                ? 'bg-white text-zinc-950 hover:bg-zinc-100' 
                : 'bg-zinc-950 text-white hover:bg-zinc-850'
            }`}
          >
            Let's Collaborate
          </button>
          <button 
            onClick={() => onNavigate('connect')}
            className={`px-5 py-2.5 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
              isDarkMode 
                ? 'bg-zinc-950 text-white border-zinc-850 hover:bg-zinc-900 hover:border-zinc-850' 
                : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50 shadow-2xs'
            }`}
          >
            View Student Contact Card
          </button>
        </div>
      </section>

    </div>
  );
}
