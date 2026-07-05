import React, { useState } from 'react';
import { Project } from '../types';
import { SAMPLE_PROJECTS } from '../data';
import { 
  ArrowLeft, Github, Globe, ExternalLink, Cpu, Layout, Database, 
  Terminal, ShieldAlert, Sparkles, CheckCircle2, AlertCircle,
  Clock, GitBranch, Shield, Zap, ChevronLeft, ChevronRight, HelpCircle
} from 'lucide-react';

interface ProjectDetailViewProps {
  project: Project;
  onBack: () => void;
  onSelectProject: (project: Project) => void;
  isDarkMode: boolean;
}

export default function ProjectDetailView({ project, onBack, onSelectProject, isDarkMode }: ProjectDetailViewProps) {
  const [activeTab, setActiveTab] = useState<'problem' | 'solution' | 'journey' | 'architecture'>('problem');

  // Find index for previous / next navigation
  const currentIndex = SAMPLE_PROJECTS.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? SAMPLE_PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < SAMPLE_PROJECTS.length - 1 ? SAMPLE_PROJECTS[currentIndex + 1] : null;

  return (
    <div className="space-y-12 animate-fadeIn max-w-5xl mx-auto">
      
      {/* 1. TOP UTILITY ACTION NAV */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 text-xs font-mono transition-colors cursor-pointer group ${
            isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-950 font-medium'
          }`}
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Return to Project Archives</span>
        </button>
      </div>

      {/* 2. HERO BANNER */}
      <section className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
      }`}>
        <div className={`h-48 md:h-64 flex flex-col items-center justify-center p-8 relative transition-all ${
          isDarkMode ? 'bg-gradient-to-br from-zinc-900 to-zinc-950' : 'bg-gradient-to-br from-zinc-50 to-zinc-100/40'
        }`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,120,120,0.05),transparent)]" />
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 font-semibold">PROJECT LABORATORY VIEW</span>
          <h1 className={`text-3xl md:text-5xl font-display font-extrabold text-center tracking-tight z-10 leading-[1.1] transition-colors ${
            isDarkMode ? 'text-white' : 'text-zinc-900'
          }`}>
            {project.title}
          </h1>
          <p className={`text-xs font-mono mt-2 z-10 px-3 py-1 rounded-full uppercase tracking-wider font-semibold transition-colors ${
            isDarkMode 
              ? 'text-zinc-400 bg-zinc-900/60 border border-zinc-800' 
              : 'text-zinc-600 bg-zinc-100/80 border border-zinc-200'
          }`}>
            {project.category}
          </p>
        </div>

        {/* Project quick meta info bar */}
        <div className={`grid grid-cols-2 md:grid-cols-4 border-t divide-y-0 text-xs font-mono transition-all duration-300 ${
          isDarkMode 
            ? 'border-zinc-900 divide-zinc-900 text-zinc-400 bg-zinc-950' 
            : 'border-zinc-200 divide-zinc-200 text-zinc-650 bg-zinc-50/50'
        } divide-x`}>
          <div className="p-4 space-y-1">
            <div className="text-[9px] text-zinc-500 uppercase font-semibold">System Status</div>
            <div className={`font-semibold flex items-center gap-1.5 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              <span className={`w-1.5 h-1.5 rounded-full inline-block ${
                project.status === 'Completed' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500 animate-pulse'
              }`} />
              {project.status}
            </div>
          </div>
          <div className="p-4 space-y-1">
            <div className="text-[9px] text-zinc-500 uppercase font-semibold">Development Role</div>
            <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              {project.id.includes('vosk') ? 'Group Project' : 'Solo Developer'}
            </div>
          </div>
          <div className="p-4 space-y-1">
            <div className="text-[9px] text-zinc-500 uppercase font-semibold">Development Duration</div>
            <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              {project.id.includes('multi-provider') ? '5-6 weeks' : 
               project.id.includes('feedbackpro') ? '4 weeks' : 
               project.id.includes('clickaware') ? '5 weeks' : 
               project.id.includes('academia-ace') ? '4 weeks' : '3 weeks'}
            </div>
          </div>
          <div className="p-4 space-y-1">
            <div className="text-[9px] text-zinc-500 uppercase font-semibold">Deployment Platform</div>
            <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              {project.id.includes('multi-provider') ? 'Local/Docker' : 
               project.id.includes('clickaware') ? 'Flask Local' : 
               project.id.includes('vosk') ? 'Ubuntu Touch' : 
               project.id.includes('academia-ace') ? 'Vite/Supabase' : 'Node.js Local'}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CASE STUDY ACTION BUTTONS & LINKS */}
      <div className={`flex flex-wrap justify-between items-center gap-4 border-b pb-6 transition-colors duration-300 ${
        isDarkMode ? 'border-zinc-900' : 'border-zinc-200'
      }`}>
        <p className={`text-xs max-w-md leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
          Explore the live deployment or review the complete codebase on GitHub.
        </p>

        <div className="flex flex-wrap gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 border rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              isDarkMode 
                ? 'bg-zinc-900 hover:bg-zinc-850 text-white border-zinc-800' 
                : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-850 border-zinc-200 shadow-2xs'
            }`}
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs ${
              isDarkMode 
                ? 'bg-white text-zinc-950 hover:bg-zinc-100' 
                : 'bg-zinc-950 text-white hover:bg-zinc-850'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Live Demonstration</span>
          </a>
        </div>
      </div>

      {/* 4. OVERVIEW & DEMO GRAPHIC */}
      <section className="space-y-4">
        
        {/* Project overview description */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">Executive Overview</h3>
          <h4 className={`text-lg font-bold tracking-tight leading-snug transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Project Purpose</h4>
          <p className={`text-xs leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
            {project.longDescription}
          </p>

          <div className={`p-4 border rounded-xl space-y-3 pt-4 transition-all duration-300 ${
            isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
          }`}>
            <h5 className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">Technology Stack</h5>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span key={tech} className={`text-[9px] font-mono px-2 py-0.5 rounded border transition-colors ${
                  isDarkMode 
                    ? 'bg-zinc-900 text-zinc-400 border-zinc-800/60' 
                    : 'bg-zinc-50 text-zinc-600 border-zinc-200 shadow-2xs'
                }`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE CONTENT TABS (PROBLEM, SOLUTION, JOURNEY, ARCHITECTURE) */}
      <section className={`border rounded-2xl p-6 space-y-6 transition-all duration-300 ${
        isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
      }`}>
        
        {/* Navigation Tabs */}
        <div className={`flex overflow-x-auto gap-2 border-b ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
          <button
            onClick={() => setActiveTab('problem')}
            className={`pb-3 text-xs font-mono uppercase tracking-wider border-b-2 px-3 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'problem' 
                ? isDarkMode ? 'border-white text-white' : 'border-zinc-950 text-zinc-950 font-semibold' 
                : 'border-transparent text-zinc-500 hover:text-zinc-300'
            }`}
          >
            The Challenge Scope
          </button>
          <button
            onClick={() => setActiveTab('solution')}
            className={`pb-3 text-xs font-mono uppercase tracking-wider border-b-2 px-3 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'solution' 
                ? isDarkMode ? 'border-white text-white' : 'border-zinc-950 text-zinc-950 font-semibold' 
                : 'border-transparent text-zinc-500 hover:text-zinc-300'
            }`}
          >
            Engineering Execution
          </button>
          <button
            onClick={() => setActiveTab('journey')}
            className={`pb-3 text-xs font-mono uppercase tracking-wider border-b-2 px-3 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'journey' 
                ? isDarkMode ? 'border-white text-white' : 'border-zinc-950 text-zinc-950 font-semibold' 
                : 'border-transparent text-zinc-500 hover:text-zinc-300'
            }`}
          >
            Retrospectives & Lessons
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-3 text-xs font-mono uppercase tracking-wider border-b-2 px-3 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'architecture' 
                ? isDarkMode ? 'border-white text-white' : 'border-zinc-950 text-zinc-950 font-semibold' 
                : 'border-transparent text-zinc-500 hover:text-zinc-300'
            }`}
          >
            Logic Topology
          </button>
        </div>

        {/* Tab contents */}
        <div className="space-y-4 animate-fadeIn">
          
          {activeTab === 'problem' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-rose-500 font-semibold">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <h4 className="text-xs font-semibold uppercase tracking-wider font-mono">Problem Statement</h4>
              </div>
              <p className={`text-xs leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
                {project.problemStatement}
              </p>
            </div>
          )}

          {activeTab === 'solution' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-500 font-semibold">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <h4 className="text-xs font-semibold uppercase tracking-wider font-mono">Implementation Approach</h4>
              </div>
              <p className={`text-xs leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
                {project.solution}
              </p>
              <div className={`p-4 border rounded-lg space-y-2 transition-all ${
                isDarkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
              }`}>
                <div className="text-[10px] font-mono text-zinc-500 uppercase font-semibold">KEY FEATURES</div>
                <ul className={`text-xs space-y-1.5 list-disc pl-4 font-sans transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'journey' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-indigo-500 font-semibold">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <h4 className="text-xs font-semibold uppercase tracking-wider font-mono">Development Journey</h4>
              </div>
              <p className={`text-xs leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
                {project.challenges}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`p-3 border rounded-lg space-y-1 transition-all ${
                  isDarkMode ? 'bg-zinc-900/30 border-zinc-800/80' : 'bg-white border-zinc-200 shadow-2xs'
                }`}>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block font-semibold">Lessons Learned</span>
                  <p className={`text-[11px] leading-normal transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>{project.lessonsLearned}</p>
                </div>
                <div className={`p-3 border rounded-lg space-y-1 transition-all ${
                  isDarkMode ? 'bg-zinc-900/30 border-zinc-800/80' : 'bg-white border-zinc-200 shadow-2xs'
                }`}>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block font-semibold">Future Improvements</span>
                  <p className={`text-[11px] leading-normal transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>{project.futureImprovements}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-500 font-semibold">
                <GitBranch className="w-5 h-5 flex-shrink-0" />
                <h4 className="text-xs font-semibold uppercase tracking-wider font-mono">Logical Flow Schema</h4>
              </div>
              <p className={`text-xs leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
                Simple data flows make code maintenance easy, separating view layers, event handlers, and data structures.
              </p>

              {/* Graphical ASCII System Architecture Diagram */}
              <div className={`border p-4 rounded-lg font-mono text-[10px] overflow-x-auto whitespace-pre leading-relaxed transition-all duration-300 ${
                isDarkMode ? 'bg-[#0e0e0e] border-zinc-800 text-zinc-400' : 'bg-zinc-50 border-zinc-200 text-zinc-700 shadow-inner'
              }`}>
{`   [ USER INPUT VIEW ] ---> ( React 19 / Tailwind UI )
                                    |
                                    v
                     [ CLIENT STATE SYNCHRONIZER ]
                        - Dynamic Component Props
                        - Local browser state
                                    |
                     +--------------+--------------+
                     |                             |
                     v                             v
           [ RENDER LAYOUTS ]            [ FAILOVER STORE ]
             - Responsive flex/grid        - LocalStorage cache
                     |                             |
                     +--------------+--------------+
                                    |
                                    v
                      [ DATA METRIC PERSISTENCE ]`}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 5. INTERACTIVE CONTENT TABS (PROBLEM, SOLUTION, JOURNEY, ARCHITECTURE) */}
      <section className={`flex items-center justify-between border-t pt-8 transition-colors duration-300 ${
        isDarkMode ? 'border-zinc-900' : 'border-zinc-200'
      }`}>
        <div>
          {prevProject ? (
            <button
              onClick={() => onSelectProject(prevProject)}
              className={`flex items-center gap-2.5 text-left p-2.5 border rounded-xl cursor-pointer group transition-all ${
                isDarkMode 
                  ? 'bg-zinc-950 hover:bg-zinc-900 border-zinc-900' 
                  : 'bg-white hover:bg-zinc-50 border-zinc-200 shadow-2xs'
              }`}
            >
              <ChevronLeft className="w-4 h-4 text-zinc-500 group-hover:-translate-x-0.5 transition-transform" />
              <div>
                <span className="text-[9px] font-mono text-zinc-500 uppercase block font-semibold">PREVIOUS PROJECT</span>
                <span className={`text-xs font-semibold max-w-[150px] truncate block transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-950'}`}>{prevProject.title}</span>
              </div>
            </button>
          ) : (
            <div className="w-10" />
          )}
        </div>

        <button
          onClick={onBack}
          className="text-xs font-mono text-zinc-500 hover:text-zinc-950 underline cursor-pointer font-semibold"
        >
          All Projects
        </button>

        <div>
          {nextProject ? (
            <button
              onClick={() => onSelectProject(nextProject)}
              className={`flex items-center gap-2.5 text-right p-2.5 border rounded-xl cursor-pointer group transition-all ${
                isDarkMode 
                  ? 'bg-zinc-950 hover:bg-zinc-900 border-zinc-900' 
                  : 'bg-white hover:bg-zinc-50 border-zinc-200 shadow-2xs'
              }`}
            >
              <div>
                <span className="text-[9px] font-mono text-zinc-500 uppercase block font-semibold">NEXT PROJECT</span>
                <span className={`text-xs font-semibold max-w-[150px] truncate block transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-950'}`}>{nextProject.title}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-0.5 transition-transform" />
            </button>
          ) : (
            <div className="w-10" />
          )}
        </div>
      </section>

    </div>
  );
}
