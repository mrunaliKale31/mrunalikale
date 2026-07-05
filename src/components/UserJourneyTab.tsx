import { Users, Shield, Zap, Sparkles, AlertCircle, Eye, RefreshCw, Layers } from 'lucide-react';

export default function UserJourneyTab() {
  return (
    <div className="space-y-12">
      {/* Tab Header */}
      <div className="border-b border-zinc-800 pb-8">
        <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase flex items-center gap-1.5 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-zinc-400" /> Section 2.0 • User Journeys & Psychology
        </span>
        <h2 className="text-3xl font-display font-bold text-white tracking-tight">The Digital Experience Architecture</h2>
        <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
          How different user personas navigate the portfolio, and how we optimize the visual design system to maximize engagement, retention, and quick actions.
        </p>
      </div>

      {/* Target Personas & Journey Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recruiter Persona */}
        <div className="bg-[#121212] border border-zinc-800 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider font-semibold flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-blue-400" /> Persona A • Tech Recruiter
            </span>
            <span className="text-[10px] font-mono bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded">Duration: ~45s</span>
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-semibold text-white">Target Action: Quick Tech Calibration & Verification</h4>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Recruiters are under extreme cognitive loads. They need to instantly confirm tech-stack compatibility, download the PDF resume, and assess communications within 45 seconds.
            </p>
          </div>
          <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-900 space-y-2">
            <div className="text-[10px] font-mono text-zinc-500 font-semibold uppercase">Engineered Solutions:</div>
            <ul className="text-[10px] text-zinc-300 space-y-1.5 list-disc pl-3">
              <li>Header features quick statistics row (YTD contributions, availability, scale metrics).</li>
              <li>Tech-stack filters instantly scope case studies without refresh delays.</li>
              <li>One-tap resume download card with explicit byte-size metrics.</li>
            </ul>
          </div>
        </div>

        {/* Client Persona */}
        <div className="bg-[#121212] border border-zinc-800 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider font-semibold flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-amber-400" /> Persona B • Agency Client
            </span>
            <span className="text-[10px] font-mono bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded">Duration: ~3.5m</span>
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-semibold text-white">Target Action: High-Trust Discovery & Inquiry</h4>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Clients want to hire a technical leader, not just a line developer. They need to trust the engineering workflow, review visual screenshots, and formulate precise project requirements.
            </p>
          </div>
          <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-900 space-y-2">
            <div className="text-[10px] font-mono text-zinc-500 font-semibold uppercase">Engineered Solutions:</div>
            <ul className="text-[10px] text-zinc-300 space-y-1.5 list-disc pl-3">
              <li>A beautiful multi-step project discovery session form instead of a simple flat contact box.</li>
              <li>In-depth problem-to-solution layout structures in case studies.</li>
              <li>Clear visualization of project parameters (sizes, expected roles, budgets).</li>
            </ul>
          </div>
        </div>

        {/* Peer Developer Persona */}
        <div className="bg-[#121212] border border-zinc-800 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider font-semibold flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-emerald-400" /> Persona C • Peer Developer
            </span>
            <span className="text-[10px] font-mono bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded">Duration: ~1.5m</span>
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-semibold text-white">Target Action: Code Auditing & Craft Collaboration</h4>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Fellow developers evaluate codebase elegance, commit frequency, system architectures, and documentation depth. They seek to fork, collaborate, or star repositories.
            </p>
          </div>
          <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-900 space-y-2">
            <div className="text-[10px] font-mono text-zinc-500 font-semibold uppercase">Engineered Solutions:</div>
            <ul className="text-[10px] text-zinc-300 space-y-1.5 list-disc pl-3">
              <li>Direct links to GitHub forge with clean repository architectures.</li>
              <li>Durable design token spec highlighting pixel grids and type systems.</li>
              <li>Code syntax highlighting mockup components in detailed project modals.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* UX Psychology (Framer/Vercel/Linear models) */}
      <div className="bg-[#121212] border border-zinc-800 rounded-xl p-6 space-y-6">
        <h3 className="text-base font-display font-medium text-white flex items-center gap-2">
          <Eye className="w-5 h-5 text-zinc-400" /> Visual Psychology & Content Priority
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Traditional portfolios use overly saturated neon gradients, giant glowing text, and massive animated cards that cause high CPU spikes. We propose <strong className="text-white font-medium">Visual Anchoring</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-zinc-950 p-4 border border-zinc-900 rounded-lg space-y-1.5">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-white rounded-full" /> 1. Negative Space
            </span>
            <p className="text-[10px] text-zinc-400 leading-relaxed">
              Surround headers with ample spacing to create a high-end editorial feel (similar to Apple and Vercel).
            </p>
          </div>
          <div className="bg-zinc-950 p-4 border border-zinc-900 rounded-lg space-y-1.5">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full" /> 2. Muted Contrast
            </span>
            <p className="text-[10px] text-zinc-400 leading-relaxed">
              Secondary descriptions are rendered in slate-grey (#8F8F8F) to reduce eye strain over prolonged reading.
            </p>
          </div>
          <div className="bg-zinc-950 p-4 border border-zinc-900 rounded-lg space-y-1.5">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" /> 3. Micro Ticks
            </span>
            <p className="text-[10px] text-zinc-400 leading-relaxed">
              Only primary interactive elements (status dots, submit actions) receive active color accents, focusing attention.
            </p>
          </div>
          <div className="bg-zinc-950 p-4 border border-zinc-900 rounded-lg space-y-1.5">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" /> 4. Physical Physics
            </span>
            <p className="text-[10px] text-zinc-400 leading-relaxed">
              Modal scale-up transitions utilize spring-curve properties (damping and mass) to make components feel tangible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
