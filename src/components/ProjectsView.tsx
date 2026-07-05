import React, { useState } from 'react';
import { Project } from '../types';
import { SAMPLE_PROJECTS } from '../data';
import { 
  Search, SlidersHorizontal, ArrowUpRight, 
  Sparkles, CheckCircle, HelpCircle, KanbanSquare 
} from 'lucide-react';

interface ProjectsViewProps {
  onSelectProject: (project: Project) => void;
  isDarkMode: boolean;
}

export default function ProjectsView({ onSelectProject, isDarkMode }: ProjectsViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'Frontend / Tooling', 'Productivity'];

  const filteredProjects = SAMPLE_PROJECTS.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Page Header */}
      <div className="space-y-3">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-semibold">Project Registry</span>
        <h2 className={`text-3xl font-display font-bold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Academic & Personal Projects</h2>
        <p className={`text-sm max-w-2xl leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
          Here are some projects I've built while learning and exploring web development. Each one represents a challenge I took on, a problem I solved, and a skill I developed along the way.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className={`flex flex-col sm:flex-row gap-4 items-stretch justify-between p-4 border rounded-xl transition-all ${
        isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
      }`}>
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search stack, names, words (e.g. 'linear', 'react', 'sync')..."
            className={`w-full focus:outline-hidden rounded-lg py-2.5 pl-10 pr-4 text-xs transition-all ${
              isDarkMode 
                ? 'bg-zinc-900/40 border border-zinc-800/80 focus:border-zinc-700 focus:bg-zinc-900 text-white placeholder-zinc-500' 
                : 'bg-zinc-50 border border-zinc-200 focus:border-zinc-350 focus:bg-white text-zinc-900 placeholder-zinc-500'
            }`}
          />
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-2 text-[10px] font-mono uppercase tracking-wider rounded-md border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? isDarkMode 
                    ? 'bg-white text-zinc-950 border-white font-semibold' 
                    : 'bg-zinc-950 text-white border-zinc-950 font-semibold'
                  : isDarkMode 
                    ? 'bg-zinc-900 text-zinc-400 border-zinc-850 hover:text-white hover:border-zinc-700' 
                    : 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:text-zinc-950 hover:bg-zinc-100 shadow-2xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`group border rounded-xl cursor-pointer overflow-hidden transition-all flex flex-col justify-between ${
                isDarkMode 
                  ? 'bg-zinc-950 border-zinc-900/80 hover:border-zinc-800' 
                  : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-xs hover:shadow-sm'
              }`}
            >
              {/* Visual Banner */}
              <div className={`h-36 flex items-center justify-center relative border-b transition-all ${
                isDarkMode 
                  ? 'bg-gradient-to-b from-zinc-900 to-zinc-950 border-zinc-900' 
                  : 'bg-gradient-to-b from-zinc-50 to-zinc-100/50 border-zinc-200'
              }`}>
                <span className={`text-[10px] font-mono uppercase tracking-widest ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400 font-semibold'}`}>{project.banner}</span>
                <div className="absolute top-3 right-3 flex gap-1.5">
                  <span className={`text-[9px] font-mono border px-2 py-0.5 rounded-full ${
                    isDarkMode 
                      ? 'bg-zinc-950 border-zinc-850 text-zinc-400' 
                      : 'bg-white border-zinc-200 text-zinc-650 shadow-2xs'
                  }`}>
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

              {/* Text content info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className={`text-xs font-semibold flex items-center justify-between transition-colors ${
                    isDarkMode ? 'text-white group-hover:text-zinc-200' : 'text-zinc-900 group-hover:text-zinc-750'
                  }`}>
                    <span>{project.title}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isDarkMode ? 'text-zinc-500 group-hover:text-white' : 'text-zinc-400 group-hover:text-zinc-950'
                    }`} />
                  </h3>
                  <p className={`text-xs leading-relaxed line-clamp-3 transition-colors ${
                    isDarkMode ? 'text-zinc-400' : 'text-zinc-650'
                  }`}>
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className={`text-[9px] font-mono px-2 py-0.5 rounded border transition-colors ${
                      isDarkMode 
                        ? 'bg-zinc-900 text-zinc-400 border-zinc-850/40' 
                        : 'bg-zinc-100 text-zinc-650 border-zinc-200/40'
                    }`}>
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
        <div className={`border rounded-xl p-16 text-center space-y-4 ${
          isDarkMode ? 'border-zinc-900 bg-zinc-950/40' : 'border-zinc-200 bg-white shadow-xs'
        }`}>
          <KanbanSquare className="w-8 h-8 text-zinc-500 mx-auto" />
          <div className="space-y-1">
            <h4 className={`text-xs font-semibold ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>No Projects Located</h4>
            <p className={`text-[11px] max-w-sm mx-auto ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>Try revising your active search parameters or clearing filters to query all structures.</p>
          </div>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer border ${
              isDarkMode 
                ? 'bg-zinc-900 border-zinc-800 hover:bg-zinc-850 text-white' 
                : 'bg-zinc-50 border-zinc-200 hover:bg-zinc-100 text-zinc-850 shadow-2xs'
            }`}
          >
            Clear Query Filters
          </button>
        </div>
      )}

    </div>
  );
}
