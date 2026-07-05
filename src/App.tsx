import React, { useState } from 'react';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ProjectsView from './components/ProjectsView';
import ProjectDetailView from './components/ProjectDetailView';
import WorkView from './components/WorkView';
import ConnectView from './components/ConnectView';
import { Project } from './types';
import { 
  Terminal, User, Compass, HelpCircle, Code2, 
  MessageSquare, Layers, Laptop, Sparkles, Menu, X,
  Sun, Moon
} from 'lucide-react';

type Page = 'home' | 'about' | 'projects' | 'project-detail' | 'work' | 'connect';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light theme (totally white/bright)

  const handleNavigate = (page: Page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    handleNavigate('project-detail');
  };

  return (
    <div className={`min-h-screen font-sans flex flex-col antialiased selection:bg-zinc-900 selection:text-white relative transition-colors duration-300 ${
      isDarkMode ? 'bg-[#070707] text-zinc-300' : 'bg-[#FAFAFA] text-zinc-850'
    }`}>
      
      {/* Background design accents */}
      <div className={`absolute inset-0 bg-[size:4rem_4rem] pointer-events-none transition-opacity duration-300 ${
        isDarkMode 
          ? 'bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40' 
          : 'bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30'
      }`} />
      <div className={`absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full filter blur-[100px] pointer-events-none transition-colors duration-300 ${
        isDarkMode ? 'bg-indigo-500/5' : 'bg-indigo-500/3'
      }`} />
      <div className={`absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full filter blur-[120px] pointer-events-none transition-colors duration-300 ${
        isDarkMode ? 'bg-sky-500/5' : 'bg-sky-500/3'
      }`} />

      {/* PRIMARY HEADER */}
      <header className={`sticky top-0 z-40 border-b backdrop-blur-md px-6 py-4 flex items-center justify-between transition-colors duration-300 ${
        isDarkMode 
          ? 'border-zinc-900 bg-[#070707]/80' 
          : 'border-zinc-200 bg-white/85 text-zinc-900 shadow-xs'
      }`}>
        <div 
          onClick={() => handleNavigate('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-sm shadow-sm transition-transform group-hover:scale-105 ${
            isDarkMode ? 'bg-white text-zinc-950' : 'bg-zinc-950 text-white'
          }`}>
            MK
          </div>
          <div>
            <h1 className={`text-xs font-bold tracking-tight flex items-center gap-1.5 font-display transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-zinc-900'
            }`}>
              Mrunali Kale
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            </h1>
          </div>
        </div>

        {/* Desktop Navigation Link row */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'projects', label: 'Projects' },
            { id: 'work', label: 'Collaborate' },
            { id: 'connect', label: 'Connect' }
          ].map((navItem) => {
            const isSelected = activePage === navItem.id || (navItem.id === 'projects' && activePage === 'project-detail');
            return (
              <button
                key={navItem.id}
                onClick={() => handleNavigate(navItem.id as Page)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-all duration-200 cursor-pointer ${
                  isSelected 
                    ? isDarkMode 
                      ? 'text-white bg-zinc-900/60 font-semibold border border-zinc-800' 
                      : 'text-zinc-900 bg-zinc-100 font-semibold border border-zinc-200'
                    : isDarkMode 
                      ? 'text-zinc-550 hover:text-white' 
                      : 'text-zinc-650 hover:text-zinc-950 hover:bg-zinc-50'
                }`}
              >
                {navItem.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA button & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-lg border transition-all cursor-pointer ${
              isDarkMode 
                ? 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700' 
                : 'bg-white text-zinc-650 border-zinc-200 hover:text-zinc-950 hover:bg-zinc-50 shadow-xs'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button 
            onClick={() => handleNavigate('work')}
            className={`text-[11px] font-semibold px-4 py-2 rounded-lg transition-all shadow-xs cursor-pointer ${
              isDarkMode 
                ? 'bg-white text-zinc-950 hover:bg-zinc-100' 
                : 'bg-zinc-950 text-white hover:bg-zinc-800'
            }`}
          >
            Let's Collaborate
          </button>
        </div>

        {/* Mobile menu and Theme Toggle */}
        <div className="flex md:hidden items-center gap-1.5">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-md border transition-all cursor-pointer ${
              isDarkMode 
                ? 'bg-zinc-900 text-zinc-400 border-zinc-800' 
                : 'bg-white text-zinc-600 border-zinc-200 shadow-xs'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md border cursor-pointer ${
              isDarkMode 
                ? 'text-zinc-400 bg-zinc-900 border-zinc-800 hover:text-white' 
                : 'text-zinc-650 bg-white border-zinc-200 shadow-xs hover:text-zinc-950'
            }`}
          >
            {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY NAVIGATION */}
      {mobileMenuOpen && (
        <div className={`fixed inset-x-0 top-[65px] bottom-0 z-30 border-t p-6 flex flex-col justify-between animate-fadeIn ${
          isDarkMode ? 'bg-[#070707] border-zinc-900' : 'bg-white border-zinc-200'
        }`}>
          <nav className="flex flex-col gap-3">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'projects', label: 'Projects' },
              { id: 'work', label: 'Collaborate' },
              { id: 'connect', label: 'Connect' }
            ].map((navItem) => {
              const isSelected = activePage === navItem.id || (navItem.id === 'projects' && activePage === 'project-detail');
              return (
                <button
                  key={navItem.id}
                  onClick={() => handleNavigate(navItem.id as Page)}
                  className={`w-full text-left py-3.5 px-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                    isSelected 
                      ? isDarkMode 
                        ? 'bg-zinc-900 text-white border-zinc-800' 
                        : 'bg-zinc-100 text-zinc-950 border-zinc-200' 
                      : isDarkMode 
                        ? 'text-zinc-400 border-transparent hover:bg-zinc-950' 
                        : 'text-zinc-650 border-transparent hover:bg-zinc-50'
                  }`}
                >
                  {navItem.label}
                </button>
              );
            })}
          </nav>

          <div className="space-y-4">
            <button
              onClick={() => handleNavigate('work')}
              className={`w-full text-center py-3.5 font-semibold rounded-xl text-xs cursor-pointer shadow-sm transition-all ${
                isDarkMode ? 'bg-white text-zinc-950 hover:bg-zinc-100' : 'bg-zinc-950 text-white hover:bg-zinc-800'
              }`}
            >
              Let's Collaborate
            </button>
            <div className={`text-center text-[10px] font-mono ${isDarkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
              Mrunali Kale • Student Portfolio OS v4.5
            </div>
          </div>
        </div>
      )}

      {/* MAIN VIEWPORT PORTFOLIO BODY */}
      <main className="relative z-10 flex-1 max-w-5xl mx-auto w-full px-6 py-10 lg:py-16">
        {activePage === 'home' && (
          <HomeView 
            onNavigate={handleNavigate} 
            onSelectProject={handleSelectProject}
            isDarkMode={isDarkMode}
          />
        )}
        {activePage === 'about' && (
          <AboutView onNavigate={handleNavigate} isDarkMode={isDarkMode} />
        )}
        {activePage === 'projects' && (
          <ProjectsView onSelectProject={handleSelectProject} isDarkMode={isDarkMode} />
        )}
        {activePage === 'project-detail' && selectedProject && (
          <ProjectDetailView 
            project={selectedProject} 
            onBack={() => handleNavigate('projects')}
            onSelectProject={handleSelectProject}
            isDarkMode={isDarkMode}
          />
        )}
        {activePage === 'work' && (
          <WorkView isDarkMode={isDarkMode} />
        )}
        {activePage === 'connect' && (
          <ConnectView isDarkMode={isDarkMode} />
        )}
      </main>

      {/* FOOTER */}
      <footer className={`relative z-10 border-t transition-colors duration-300 ${
        isDarkMode ? 'border-zinc-900 bg-[#070707] text-zinc-500' : 'border-zinc-200 bg-white text-zinc-600'
      } px-6 py-10`}>
        <div className="max-w-5xl mx-auto">
          {/* Top Section - Name and Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Left - Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-sm shadow-sm transition-colors duration-300 ${
                  isDarkMode ? 'bg-white text-zinc-950' : 'bg-zinc-950 text-white'
                }`}>
                  MK
                </div>
                <div>
                  <div className={`text-sm font-bold font-display transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                    Mrunali Kale
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500">
                    Pune, Maharashtra, India
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Info */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-3">Get in Touch</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                <a href="mailto:mrunalipradeepkale@gmail.com" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-zinc-950'}`}>
                  Email ↗
                </a>
                <a href="https://www.linkedin.com/in/mrunalikale/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-zinc-950'}`}>
                  LinkedIn ↗
                </a>
                <a href="https://github.com/mrunaliKale31" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-zinc-950'}`}>
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className={`pt-6 border-t text-center transition-colors ${
            isDarkMode ? 'border-zinc-900' : 'border-zinc-200'
          }`}>
            <div className="text-[10px] font-mono text-zinc-500">
              © 2026 Mrunali Kale • All Rights Reserved
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
