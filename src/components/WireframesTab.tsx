import React, { useState } from 'react';
import { Project, Certification } from '../types';
import { SAMPLE_PROJECTS, CERTIFICATIONS } from '../data';
import { 
  Home as HomeIcon, User, Briefcase, FormInput, Share2, 
  Search, SlidersHorizontal, ArrowUpRight, Github, ExternalLink, 
  BookOpen, ChevronRight, CheckCircle2, ChevronLeft, Upload, 
  MapPin, Clock, Mail, Linkedin, Smartphone, Calendar, DollarSign,
  Compass, Award, Lightbulb, Users, FileText, QrCode
} from 'lucide-react';

export default function WireframesTab() {
  const [activeWireframePage, setActiveWireframePage] = useState<'home' | 'about' | 'projects' | 'work' | 'connect'>('home');
  
  // Projects State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // About State (Certifications modal)
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Work With Me State
  const [formStep, setFormStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    clientType: 'Individual',
    companyName: '',
    companyWebsite: '',
    projectType: 'Web App Dev',
    projectSize: 'Medium',
    teamSize: '1-3',
    expectedRole: 'Lead Full-Stack Developer',
    description: '',
    timeline: '3-6 Months',
    budget: '$15k - $30k',
    referenceLinks: '',
    contactMethod: 'Email'
  });
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  // Interactive dynamic roles for the hero
  const roles = ["Software Architect", "Full-Stack Dev", "UI Engineer", "Product Thinker"];
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  const rotateRole = () => {
    setActiveRoleIndex((prev) => (prev + 1) % roles.length);
  };

  // Filter category options
  const categories = ['All', 'Full-Stack', 'Frontend / Tooling', 'Productivity'];

  const filteredProjects = SAMPLE_PROJECTS.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setUploadedFile("system_architecture_draft.pdf (4.2 MB)");
  };

  const handleFormReset = () => {
    setFormStep(1);
    setUploadedFile(null);
    setFormData({
      fullName: '',
      email: '',
      clientType: 'Individual',
      companyName: '',
      companyWebsite: '',
      projectType: 'Web App Dev',
      projectSize: 'Medium',
      teamSize: '1-3',
      expectedRole: 'Lead Full-Stack Developer',
      description: '',
      timeline: '3-6 Months',
      budget: '$15k - $30k',
      referenceLinks: '',
      contactMethod: 'Email'
    });
  };

  return (
    <div className="space-y-8">
      {/* Tab Header Controls */}
      <div className="bg-[#121212] border border-zinc-800 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Interactive Wireframe Engine</h3>
            <p className="text-[11px] text-zinc-400">Click tabs below to navigate through the five portfolio sections</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 bg-zinc-950 p-1 border border-zinc-800/60 rounded-lg w-full sm:w-auto">
          <button
            onClick={() => setActiveWireframePage('home')}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeWireframePage === 'home'
                ? 'bg-zinc-800 text-white border border-zinc-700/50'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <HomeIcon className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <button
            onClick={() => setActiveWireframePage('about')}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeWireframePage === 'about'
                ? 'bg-zinc-800 text-white border border-zinc-700/50'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>About</span>
          </button>
          <button
            onClick={() => setActiveWireframePage('projects')}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeWireframePage === 'projects'
                ? 'bg-zinc-800 text-white border border-zinc-700/50'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Projects</span>
          </button>
          <button
            onClick={() => setActiveWireframePage('work')}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeWireframePage === 'work'
                ? 'bg-zinc-800 text-white border border-zinc-700/50'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <FormInput className="w-3.5 h-3.5" />
            <span>Work With Me</span>
          </button>
          <button
            onClick={() => setActiveWireframePage('connect')}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeWireframePage === 'connect'
                ? 'bg-zinc-800 text-white border border-zinc-700/50'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Connect</span>
          </button>
        </div>
      </div>

      {/* Actual Wireframe Canvas Frame */}
      <div className="relative bg-[#0A0A0A] border border-zinc-800 rounded-xl overflow-hidden min-h-[500px] flex flex-col shadow-2xl">
        {/* Frame Browser Ribbon */}
        <div className="bg-zinc-900/80 border-b border-zinc-800 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 block" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 block" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 block" />
            <span className="text-[10px] font-mono text-zinc-500 ml-4 bg-zinc-950 px-3 py-0.5 rounded border border-zinc-800 flex items-center gap-1">
              <span>https://dev-portfolio.io/</span>
              <span className="font-semibold text-zinc-400">{activeWireframePage}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded uppercase font-semibold">
              W-Frame Live View
            </span>
          </div>
        </div>

        {/* ====================================
            WIRE-PAGE: HOME
            ==================================== */}
        {activeWireframePage === 'home' && (
          <div className="p-6 md:p-12 space-y-12 animate-fadeIn">
            {/* Nav Header Mockup */}
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
              <span className="font-display font-bold text-white tracking-tight flex items-center gap-2 text-sm">
                <span className="w-2.5 h-2.5 bg-white rounded-full inline-block" /> Portfolio.os
              </span>
              <div className="hidden md:flex gap-6 text-xs text-zinc-400 font-medium">
                <span className="text-white border-b-2 border-white pb-1">Home</span>
                <span>About</span>
                <span>Projects</span>
                <span>Work With Me</span>
                <span>Connect</span>
              </div>
              <button className="text-xs bg-white text-black px-3.5 py-1.5 rounded-full font-medium shadow-sm hover:scale-105 transition-all">
                Let's Build
              </button>
            </div>

            {/* Hero Section */}
            <div className="py-8 space-y-6 max-w-3xl">
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase flex items-center gap-1">
                <span>●</span> Based in San Francisco, CA • Open for remote work
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-[1.1]">
                Crafting polished, high-performance web systems with minimal elegance.
              </h1>

              {/* Changing Subtitle Role */}
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800/80 p-3 rounded-lg w-fit">
                <span className="font-mono text-xs text-zinc-400">Current Focus:</span>
                <span className="font-mono text-xs font-semibold text-white animate-pulse">
                  {roles[activeRoleIndex]}
                </span>
                <button 
                  onClick={rotateRole}
                  className="ml-4 text-[9px] font-mono bg-zinc-800 border border-zinc-700 text-zinc-300 px-2 py-1 rounded hover:bg-zinc-700 hover:text-white transition-colors"
                >
                  Change Role Spec ⟳
                </button>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">
                I study system density, optimistic mutations, and fluid interface kinetics. I build with an uncompromising pursuit of clean visual structure and beautiful code.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button 
                  onClick={() => setActiveWireframePage('work')}
                  className="bg-white hover:bg-zinc-100 text-zinc-950 px-5 py-2.5 text-xs font-semibold rounded-lg flex items-center gap-2 transition-transform hover:scale-[1.02]"
                >
                  <span>Work With Me</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setActiveWireframePage('projects')}
                  className="bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 px-5 py-2.5 text-xs font-semibold rounded-lg flex items-center gap-2 transition-colors"
                >
                  <span>Explore Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </button>
              </div>
            </div>

            {/* Micro Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-zinc-900 pt-8">
              <div className="bg-zinc-950 p-4 border border-zinc-900 rounded-lg">
                <div className="text-xs font-mono text-zinc-500">Exp Scale</div>
                <div className="text-xl font-display font-bold text-white mt-1">6+ Years</div>
              </div>
              <div className="bg-zinc-950 p-4 border border-zinc-900 rounded-lg">
                <div className="text-xs font-mono text-zinc-500">Global Deployments</div>
                <div className="text-xl font-display font-bold text-white mt-1">40M+ Hits</div>
              </div>
              <div className="bg-zinc-950 p-4 border border-zinc-900 rounded-lg">
                <div className="text-xs font-mono text-zinc-500">GitHub Contributions</div>
                <div className="text-xl font-display font-bold text-white mt-1">1.8k+ YTD</div>
              </div>
              <div className="bg-zinc-950 p-4 border border-zinc-900 rounded-lg">
                <div className="text-xs font-mono text-zinc-500">System Availability</div>
                <div className="text-xl font-display font-bold text-emerald-400 mt-1">99.98%</div>
              </div>
            </div>

            {/* Featured Projects Taster */}
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-zinc-900 pb-3">
                <h3 className="text-sm font-semibold text-white tracking-tight">Featured Projects Preview</h3>
                <span 
                  onClick={() => setActiveWireframePage('projects')}
                  className="text-xs text-zinc-400 hover:text-white cursor-pointer flex items-center gap-1 font-mono transition-colors"
                >
                  View All Projects →
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {SAMPLE_PROJECTS.map((proj) => (
                  <div 
                    key={proj.id}
                    onClick={() => {
                      setSelectedProject(proj);
                    }}
                    className="group bg-zinc-950 p-4 border border-zinc-900 hover:border-zinc-800 rounded-xl cursor-pointer transition-all space-y-3"
                  >
                    <div className="h-28 bg-zinc-900 rounded-lg border border-zinc-800/80 flex items-center justify-center relative overflow-hidden">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{proj.banner}</span>
                      <span className="absolute top-2 right-2 text-[9px] font-mono bg-zinc-950 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full">
                        {proj.category}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white flex items-center justify-between">
                        <span>{proj.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                      </h4>
                      <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                        {proj.shortDescription}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ====================================
            WIRE-PAGE: ABOUT
            ==================================== */}
        {activeWireframePage === 'about' && (
          <div className="p-6 md:p-12 space-y-12 animate-fadeIn">
            {/* Intro header */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">01 • Personal Engine</span>
                <h2 className="text-2xl font-display font-bold text-white tracking-tight">The Story Behind the Terminals</h2>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  I grew up at the intersection of aesthetic design and logical systems. Instead of selecting predefined UI packages, I prefer starting with a blank canvas and engineering the exact states, animation timings, and component boundaries myself.
                </p>
                <div className="grid grid-cols-2 gap-4 bg-zinc-950 border border-zinc-900 p-4 rounded-lg">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 block">Personal Values</span>
                    <span className="text-xs font-medium text-white block mt-1">Extreme clarity, pixel-integrity, server-level robust mechanics.</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 block">Current Focus Area</span>
                    <span className="text-xs font-medium text-white block mt-1">Distributed Sync Databases & React Core rendering optimizations.</span>
                  </div>
                </div>
              </div>

              {/* Beyond Coding Section */}
              <div className="bg-zinc-950 p-5 border border-zinc-900 rounded-xl space-y-3.5">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Beyond Editing Code</span>
                <ul className="space-y-3 text-xs text-zinc-300 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">■</span>
                    <div>
                      <strong>Keyboard Enthusiast:</strong> Designing split custom layouts (Ergodox, Corne).
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">■</span>
                    <div>
                      <strong>Urban Photography:</strong> Capturing Brutalist architecture and raw metal facades.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">■</span>
                    <div>
                      <strong>Reading Lists:</strong> Systems architecture studies and 20th-century Swiss typographical history.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Certifications (CONTINUOUS SCROLL CARD DEMO - MANDATORY RULE) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                <div>
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" /> Professional Certifications
                  </h3>
                  <p className="text-[10px] text-zinc-400">Continuously scrolling cards • Pauses on hover • Click to expand credential spec</p>
                </div>
                <span className="text-[10px] font-mono bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800">
                  Total Certs: {CERTIFICATIONS.length}
                </span>
              </div>

              {/* Sliding Carousel Frame */}
              <div className="relative overflow-hidden w-full bg-zinc-950 py-4 border border-zinc-900 rounded-xl">
                <div className="animate-scroll flex gap-4 pr-4">
                  {/* Duplicate array to ensure smooth continuous scrolling seam */}
                  {[...CERTIFICATIONS, ...CERTIFICATIONS].map((cert, index) => (
                    <div
                      key={`${cert.id}-${index}`}
                      onClick={() => setSelectedCert(cert)}
                      className={`flex-shrink-0 w-64 p-4 bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 rounded-xl cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between h-28`}
                    >
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <span className="text-[10px] font-semibold font-mono text-zinc-400 truncate max-w-[140px]">
                            {cert.issuer}
                          </span>
                          <span className="text-[9px] font-mono text-zinc-500 bg-zinc-950 px-1.5 py-0.2 rounded">
                            {cert.date}
                          </span>
                        </div>
                        <h4 className="text-xs font-semibold text-white mt-1.5 line-clamp-2 leading-tight">
                          {cert.title}
                        </h4>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 border-t border-zinc-900 pt-1.5">
                        <span className="text-zinc-500">Credential ID Spec</span>
                        <span className="text-white flex items-center gap-1 hover:underline">
                          Inspect <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Experience Timeline */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white border-b border-zinc-900 pb-2">Journey Timeline</h3>
              <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-900">
                <div className="relative pl-8 group">
                  <span className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-white border border-zinc-950 inline-block" />
                  <span className="text-[10px] font-mono text-zinc-500">2024 - Present</span>
                  <h4 className="text-xs font-semibold text-white">Lead Core Infrastructure Engineer • Linear Labs</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Designed client synchronization mechanisms using vector clocks, reducing client payload sizes by 64% and latency to sub-milliseconds.
                  </p>
                </div>
                <div className="relative pl-8 group">
                  <span className="absolute left-2 top-2 w-2.5 h-2.5 rounded-full bg-zinc-800 inline-block" />
                  <span className="text-[10px] font-mono text-zinc-500">2022 - 2024</span>
                  <h4 className="text-xs font-semibold text-white">Senior Product Engineer • Vercel Integrations</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Re-engineered standard API gateway pathways to deploy edge micro-functions seamlessly within global client networks.
                  </p>
                </div>
                <div className="relative pl-8 group">
                  <span className="absolute left-2 top-2 w-2.5 h-2.5 rounded-full bg-zinc-800 inline-block" />
                  <span className="text-[10px] font-mono text-zinc-500">2020 - 2022</span>
                  <h4 className="text-xs font-semibold text-white">Frontend Specialist • Notion Canvas Team</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Optimized the block drag hierarchy algorithms ensuring solid FPS performance during high-volume document rendering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ====================================
            WIRE-PAGE: PROJECTS
            ==================================== */}
        {activeWireframePage === 'projects' && (
          <div className="p-6 md:p-12 space-y-8 animate-fadeIn">
            {/* Header, Search & Filter bar */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">02 • Case Studies</span>
                <h2 className="text-2xl font-display font-bold text-white tracking-tight">The Project Archives</h2>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Deep technical write-ups outlining precise system problems, architectures, and performance stats. Click on any card to review the comprehensive individual study.
                </p>
              </div>

              {/* Filtering Controls */}
              <div className="flex flex-col md:flex-row gap-4 items-stretch justify-between">
                {/* Search Bar */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search projects (e.g. 'Linear', 'Studio', 'Notion')..."
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-600 rounded-lg py-2.5 pl-10 pr-4 text-xs text-white placeholder-zinc-500 outline-none"
                  />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-2 text-[11px] font-medium rounded-md transition-all ${
                        selectedCategory === cat
                          ? 'bg-white text-zinc-950'
                          : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 rounded-xl cursor-pointer overflow-hidden transition-all flex flex-col justify-between"
                  >
                    {/* Visual Banner */}
                    <div className="h-36 bg-zinc-900 border-b border-zinc-800/60 flex items-center justify-center relative">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{project.banner}</span>
                      <div className="absolute top-3 right-3 flex gap-1.5">
                        <span className="text-[9px] font-mono bg-zinc-950 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full">
                          {project.category}
                        </span>
                        <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${
                          project.status === 'Completed' 
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/10'
                            : project.status === 'Beta'
                            ? 'bg-blue-500/10 text-blue-400 border-blue-500/10'
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/10'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Meta Data */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-1.5">
                        <h3 className="text-sm font-semibold text-white group-hover:text-zinc-200 flex items-center justify-between">
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                        </h3>
                        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                          {project.shortDescription}
                        </p>
                      </div>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1 pt-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span key={tech} className="text-[9px] font-mono bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="text-[9px] font-mono text-zinc-500 px-1 py-0.5">
                            +{project.techStack.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-zinc-800 rounded-xl p-12 text-center bg-zinc-950">
                <SlidersHorizontal className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
                <h4 className="text-sm font-semibold text-white">No projects match criteria</h4>
                <p className="text-xs text-zinc-400 mt-1 max-w-sm mx-auto">Try resetting the filters or altering the search term query.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="mt-4 px-3.5 py-1.5 text-xs font-medium bg-zinc-900 border border-zinc-800 text-white rounded hover:bg-zinc-800"
                >
                  Reset Active Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ====================================
            WIRE-PAGE: WORK WITH ME (DISCOVERY SESSION FORM)
            ==================================== */}
        {activeWireframePage === 'work' && (
          <div className="p-6 md:p-12 space-y-8 animate-fadeIn max-w-3xl mx-auto w-full">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-medium">03 • Project Inquiry Discovery</span>
              <h2 className="text-2xl font-display font-bold text-white tracking-tight">Begin a Collaborative Session</h2>
              <p className="text-xs text-zinc-400 max-w-lg mx-auto leading-relaxed">
                Provide parameters below to calibrate our discovery goals. Once completed, a direct calendar link and structural brief will be instantly synchronized.
              </p>
            </div>

            {/* Stepper Progress bar */}
            <div className="flex items-center justify-between bg-zinc-950 border border-zinc-900/85 p-3 rounded-xl max-w-xl mx-auto">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all ${
                    formStep === step
                      ? 'bg-white text-zinc-950 scale-110 shadow'
                      : formStep > step
                      ? 'bg-emerald-500 text-white'
                      : 'bg-zinc-900 text-zinc-500'
                  }`}>
                    {formStep > step ? '✓' : step}
                  </div>
                  {step < 4 && <span className="w-8 sm:w-12 h-px bg-zinc-850" />}
                </div>
              ))}
            </div>

            {/* Step 1: Personal info & Company */}
            {formStep === 1 && (
              <div className="bg-[#111111] border border-zinc-800/80 rounded-xl p-6 space-y-4">
                <h3 className="text-sm font-semibold text-white border-b border-zinc-900 pb-2">Step 1: Contact Foundation</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide block">Full Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800/85 text-xs rounded-lg p-2.5 text-white placeholder-zinc-600 outline-none focus:border-zinc-600"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide block">Email Address</label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800/85 text-xs rounded-lg p-2.5 text-white placeholder-zinc-600 outline-none focus:border-zinc-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide block">Are you representing a startup, enterprise, or individual effort?</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Individual', 'Startup', 'Company'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({...formData, clientType: type})}
                        className={`py-2 text-[11px] font-medium rounded-md border transition-all ${
                          formData.clientType === type
                            ? 'bg-white text-zinc-950 border-white'
                            : 'bg-zinc-950 text-zinc-400 border-zinc-850 hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.clientType !== 'Individual' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide block">Entity Name</label>
                      <input
                        type="text"
                        placeholder="Stripe, Inc."
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800/85 text-xs rounded-lg p-2.5 text-white placeholder-zinc-600 outline-none focus:border-zinc-600"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide block">Website Domain</label>
                      <input
                        type="text"
                        placeholder="https://company.com"
                        value={formData.companyWebsite}
                        onChange={(e) => setFormData({...formData, companyWebsite: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800/85 text-xs rounded-lg p-2.5 text-white placeholder-zinc-600 outline-none focus:border-zinc-600"
                      />
                    </div>
                  </div>
                )}

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setFormStep(2)}
                    disabled={!formData.fullName || !formData.email}
                    className="bg-white text-zinc-950 text-xs px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>Next: Project Calibration</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Project Specifications */}
            {formStep === 2 && (
              <div className="bg-[#111111] border border-zinc-800/80 rounded-xl p-6 space-y-4">
                <h3 className="text-sm font-semibold text-white border-b border-zinc-900 pb-2">Step 2: Project Calibration</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide block">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800/85 text-xs rounded-lg p-2.5 text-white outline-none focus:border-zinc-600"
                    >
                      <option>Web App Dev</option>
                      <option>System Architecture Design</option>
                      <option>UI/UX Overhaul</option>
                      <option>Consultation Session</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide block">Project Size</label>
                    <select
                      value={formData.projectSize}
                      onChange={(e) => setFormData({...formData, projectSize: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800/85 text-xs rounded-lg p-2.5 text-white outline-none focus:border-zinc-600"
                    >
                      <option>Small (Single feature / Fixes)</option>
                      <option>Medium (Full standalone application)</option>
                      <option>Large (Enterprise integrations & clusters)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide block">Expected Team Size</label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800/85 text-xs rounded-lg p-2.5 text-white outline-none focus:border-zinc-600"
                    >
                      <option>1 (Just me as the developer)</option>
                      <option>1-3 (Small agile group)</option>
                      <option>4-10 (Structured team with PMs)</option>
                      <option>10+ (Enterprise division)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide block">Expected Role for Me</label>
                    <select
                      value={formData.expectedRole}
                      onChange={(e) => setFormData({...formData, expectedRole: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800/85 text-xs rounded-lg p-2.5 text-white outline-none focus:border-zinc-600"
                    >
                      <option>Lead Full-Stack Developer</option>
                      <option>Senior Frontend Architect</option>
                      <option>System Architect Consultant</option>
                      <option>Advisor / Technical Auditor</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setFormStep(1)}
                    className="border border-zinc-800 text-zinc-400 text-xs px-4 py-2 rounded-lg flex items-center gap-1 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={() => setFormStep(3)}
                    className="bg-white text-zinc-950 text-xs px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-zinc-200 transition-colors"
                  >
                    <span>Next: Core Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Description, budget & links */}
            {formStep === 3 && (
              <div className="bg-[#111111] border border-zinc-800/80 rounded-xl p-6 space-y-4">
                <h3 className="text-sm font-semibold text-white border-b border-zinc-900 pb-2">Step 3: Core Details & Budget</h3>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide block">Project Description Brief</label>
                  <textarea
                    rows={3}
                    placeholder="Provide a high-level summary of the architectural goals, core problem, and expected outcomes..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full bg-zinc-950 border border-zinc-800/85 text-xs rounded-lg p-2.5 text-white placeholder-zinc-600 outline-none focus:border-zinc-600 resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide block">Expected Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800/85 text-xs rounded-lg p-2.5 text-white outline-none focus:border-zinc-600"
                    >
                      <option>1-2 Months (Rapid turnaround)</option>
                      <option>3-6 Months (Standard iteration)</option>
                      <option>6+ Months (Long-term roadmap)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide block">Expected Budget Scope</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800/85 text-xs rounded-lg p-2.5 text-white outline-none focus:border-zinc-600"
                    >
                      <option>$5k - $15k</option>
                      <option>$15k - $30k</option>
                      <option>$30k - $60k</option>
                      <option>$60k+</option>
                    </select>
                  </div>
                </div>

                {/* File Upload Component */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide block">Supporting Brief / Architecture PDF</label>
                  <div 
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleFileDrop}
                    onClick={() => setUploadedFile("spec_doc_system.pdf (1.8 MB)")}
                    className="border border-dashed border-zinc-800 hover:border-zinc-600 rounded-xl p-6 text-center cursor-pointer bg-zinc-950/60 transition-colors"
                  >
                    <Upload className="w-5 h-5 text-zinc-500 mx-auto mb-2" />
                    <p className="text-[11px] text-zinc-300">Drag and drop your project spec sheet or brief PDF, or click to choose file</p>
                    <p className="text-[9px] text-zinc-500 mt-0.5">Maximum size: 10MB (PDF, DOCX, TXT, PNG)</p>
                    
                    {uploadedFile && (
                      <div className="mt-3 inline-flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-300 px-3 py-1 rounded-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>Uploaded: {uploadedFile}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide block">Preferred Contact Method</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Email', 'Slack Channel', 'Google Meet Call'].map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setFormData({...formData, contactMethod: method})}
                        className={`py-2 text-[11px] font-medium rounded-md border transition-all ${
                          formData.contactMethod === method
                            ? 'bg-white text-zinc-950 border-white'
                            : 'bg-zinc-950 text-zinc-400 border-zinc-850 hover:text-white'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-zinc-900">
                  <button
                    onClick={() => setFormStep(2)}
                    className="border border-zinc-800 text-zinc-400 text-xs px-4 py-2 rounded-lg flex items-center gap-1 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={() => setFormStep(4)}
                    disabled={!formData.description}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors disabled:opacity-50"
                  >
                    <span>Submit Discovery Brief ✓</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Success Screen */}
            {formStep === 4 && (
              <div className="bg-[#111111] border border-zinc-800 rounded-xl p-8 text-center space-y-6 max-w-md mx-auto animate-scaleUp">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-xl">
                  ✓
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-white">Discovery Handshake Active!</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Thank you <strong className="text-white">{formData.fullName}</strong>. Your parameters have been parsed into a localized architecture session. A calendar invite has been dispatched to <strong className="text-white">{formData.email}</strong>.
                  </p>
                </div>

                <div className="bg-zinc-950 border border-zinc-900 p-4 rounded-lg text-left text-xs font-mono text-zinc-400 space-y-2">
                  <div className="text-[10px] text-zinc-500 border-b border-zinc-900 pb-1 uppercase tracking-wider font-semibold">Inquiry Summary Log</div>
                  <div><span className="text-zinc-500">Service:</span> {formData.projectType}</div>
                  <div><span className="text-zinc-500">Budget Scope:</span> {formData.budget}</div>
                  <div><span className="text-zinc-500">Role Calibrated:</span> {formData.expectedRole}</div>
                  <div><span className="text-zinc-500">Preferred Reach:</span> {formData.contactMethod}</div>
                </div>

                <button
                  onClick={handleFormReset}
                  className="bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 text-xs px-4 py-2 rounded-lg transition-colors"
                >
                  Initiate New Session
                </button>
              </div>
            )}
          </div>
        )}

        {/* ====================================
            WIRE-PAGE: CONNECT
            ==================================== */}
        {activeWireframePage === 'connect' && (
          <div className="p-6 md:p-12 space-y-12 animate-fadeIn max-w-4xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column: Direct details */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-medium">04 • Connect Node</span>
                  <h2 className="text-2xl font-display font-bold text-white tracking-tight">Access Channels</h2>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    No cluttering forms or secondary landing gates. Reach out directly to initiate immediate engineering sprints, scheduling consultations, or code audit requests.
                  </p>
                </div>

                {/* Availability status */}
                <div className="bg-zinc-950 border border-zinc-900 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-white block">Availability Node Status</span>
                      <span className="text-[10px] text-zinc-400">Accepting Q3-Q4 2026 Core Contracts</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-zinc-900 text-zinc-500 px-2 py-1 rounded">S.F. Timezone (PST)</span>
                </div>

                {/* Directory list of action cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a href="mailto:architect@dev-portfolio.io" className="p-3.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 rounded-xl flex items-center justify-between group transition-colors">
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-zinc-400" />
                      <span className="text-xs font-semibold text-white">Email Mailbox</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 rounded-xl flex items-center justify-between group transition-colors">
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-zinc-400" />
                      <span className="text-xs font-semibold text-white">LinkedIn Space</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors" />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 rounded-xl flex items-center justify-between group transition-colors">
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-zinc-400" />
                      <span className="text-xs font-semibold text-white">GitHub Forge</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors" />
                  </a>
                  <button className="p-3.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 rounded-xl flex items-center justify-between group transition-colors text-left">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-zinc-400" />
                      <span className="text-xs font-semibold text-white">PDF Resume (140kb)</span>
                    </div>
                    <Upload className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>

              {/* Right Column: Premium Digital Business Card with Hover Effects & QR Code Mock */}
              <div className="flex justify-center">
                <div className="relative group perspective-1000 w-full max-w-[320px]">
                  {/* Dynamic Gradient glow behind card */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
                  
                  {/* Business Card body */}
                  <div className="relative bg-[#111111] border border-zinc-800 rounded-xl p-6 shadow-2xl transition-transform duration-500 transform group-hover:rotate-y-12 group-hover:scale-[1.01] space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 bg-white rounded-full inline-block" />
                        <span className="font-display font-bold text-[13px] tracking-tight text-white">Architect.os</span>
                      </div>
                      <span className="text-[9px] font-mono bg-zinc-900 text-zinc-500 px-2 py-0.5 rounded border border-zinc-850">
                        VERIFIED SECURE
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-base font-display font-bold text-white tracking-tight">Mrunali Kale</h4>
                      <p className="text-[11px] font-mono text-zinc-400">Core Systems Architect</p>
                    </div>

                    {/* QR Code and Meta Spec layout */}
                    <div className="flex items-end justify-between border-t border-zinc-900 pt-5">
                      <div className="space-y-2 text-[10px] font-mono text-zinc-500">
                        <div>
                          <span className="block text-zinc-600 text-[8px] uppercase">LOCALIZED IP</span>
                          <span className="text-zinc-300">192.168.1.1</span>
                        </div>
                        <div>
                          <span className="block text-zinc-600 text-[8px] uppercase">GEO LAT/LONG</span>
                          <span className="text-zinc-300">37.7749° N, 122.4194° W</span>
                        </div>
                      </div>

                      {/* Mock QR Code */}
                      <div className="bg-white p-1.5 rounded-lg border border-zinc-800">
                        <QrCode className="w-14 h-14 text-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Simple professional closing statement */}
            <div className="border-t border-zinc-900 pt-6 text-center">
              <p className="text-[11px] text-zinc-500 font-mono">
                Designed under Swiss Typography mandates. Executed via standard React elements.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================
          CASE STUDY MODAL (INDIVIDUAL PROJECT PAGE DETAIL)
          ======================================================== */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-[#0D0D0D] border border-zinc-800 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-zinc-950 border-b border-zinc-800 px-6 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2.5 py-0.5 rounded border border-zinc-850">
                  Case Study • {selectedProject.category}
                </span>
                <span className="text-xs text-zinc-500">/</span>
                <span className="text-xs font-mono text-zinc-400 font-semibold">{selectedProject.title}</span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-zinc-500 hover:text-white text-xs font-mono bg-zinc-900 hover:bg-zinc-800 border border-zinc-850 px-2.5 py-1 rounded-md transition-colors"
              >
                Close Case ✕
              </button>
            </div>

            {/* Modal Body (Scrollable Case Study spec) */}
            <div className="p-6 md:p-8 space-y-8 overflow-y-auto no-scrollbar">
              {/* Hero Banner Area */}
              <div className="bg-zinc-900 h-48 md:h-64 rounded-xl border border-zinc-800 flex flex-col justify-end p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-20 font-mono text-[11px] tracking-widest text-zinc-400">
                  {selectedProject.banner} visual pipeline
                </div>
                <div className="relative z-20 space-y-1">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">{selectedProject.title} Specifications</h2>
                  <p className="text-xs text-zinc-400 max-w-2xl">{selectedProject.shortDescription}</p>
                </div>
              </div>

              {/* Action Buttons Link Row */}
              <div className="flex flex-wrap gap-2 pb-2 border-b border-zinc-900">
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-zinc-950 text-white border border-zinc-850 hover:bg-zinc-900 px-3 py-1.5 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors">
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
                <a href={selectedProject.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-zinc-950 hover:bg-zinc-100 px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-transform">
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Interactive Live Sandbox</span>
                </a>
                <a href={selectedProject.docUrl} target="_blank" rel="noopener noreferrer" className="bg-zinc-950 text-zinc-400 border border-zinc-850 hover:text-white px-3 py-1.5 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Architecture Documentation</span>
                </a>
              </div>

              {/* 3-Column Problem/Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-950/80 border border-zinc-900 p-5 rounded-xl space-y-3">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                    <SlidersHorizontal className="w-4 h-4 text-zinc-500" /> The Core Problem
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {selectedProject.problemStatement}
                  </p>
                </div>

                <div className="bg-zinc-950/80 border border-zinc-900 p-5 rounded-xl space-y-3">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-zinc-500" /> Engineered Solution
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Architecture & Features */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest border-b border-zinc-900 pb-1.5">
                    Integrated System Features
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Micro tech stack block */}
                <div className="bg-zinc-950 border border-zinc-900 p-5 rounded-xl space-y-3">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    Optimized Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono bg-zinc-900 border border-zinc-850 text-white px-2.5 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dev Journey (Challenges, Lessons, Future) */}
              <div className="space-y-6 border-t border-zinc-900 pt-6">
                <h3 className="text-sm font-semibold text-white tracking-tight">Development Retrospective</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block font-medium">Challenges & Bottlenecks</span>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">{selectedProject.challenges}</p>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block font-medium">Architectural Lessons</span>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">{selectedProject.lessonsLearned}</p>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block font-medium">Roadmap & Future Extensions</span>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">{selectedProject.futureImprovements}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Nav */}
            <div className="bg-zinc-950 border-t border-zinc-800 px-6 py-4 flex items-center justify-between shrink-0 text-xs font-mono text-zinc-500">
              <span>Security Verified • Portfolio OS v4</span>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-white hover:underline flex items-center gap-1.5"
              >
                <span>Return to Overview</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ABOUT PAGE CERTIFICATION EXPANSION MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#121212] border border-zinc-800 w-full max-w-md rounded-xl overflow-hidden shadow-2xl space-y-4 p-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Credential verification</span>
                <h4 className="text-sm font-semibold text-white mt-1">{selectedCert.title}</h4>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="text-zinc-500 hover:text-white text-xs font-mono"
              >
                ✕
              </button>
            </div>

            <div className="bg-zinc-950 border border-zinc-900 p-4 rounded-lg space-y-3 text-xs font-mono">
              <div>
                <span className="text-zinc-500">Verified Issuer:</span>
                <span className="text-white block font-sans font-medium mt-0.5">{selectedCert.issuer}</span>
              </div>
              <div>
                <span className="text-zinc-500">Acquisition Date:</span>
                <span className="text-white block mt-0.5">{selectedCert.date}</span>
              </div>
              <div>
                <span className="text-zinc-500">Validation Protocol:</span>
                <span className="text-zinc-400 block mt-0.5">SHA-256 secure hash verified against issuer credential registries.</span>
              </div>
            </div>

            <div className="flex gap-2">
              <a 
                href={selectedCert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-semibold py-2 px-3 rounded-lg text-center flex items-center justify-center gap-1.5"
              >
                <span>Verify Credential ID</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setSelectedCert(null)}
                className="bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white text-xs px-4 py-2 rounded-lg"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
