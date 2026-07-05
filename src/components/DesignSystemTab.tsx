import { useState } from 'react';
import { ColorSwatch } from '../types';
import { DARK_PALETTE, LIGHT_PALETTE } from '../data';
import { Copy, Check, Type, Square, HelpCircle, Layers, MousePointer, Info, Sparkles } from 'lucide-react';

export default function DesignSystemTab() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeMode, setActiveMode] = useState<'dark' | 'light'>('dark');
  const [buttonState, setButtonState] = useState<'idle' | 'loading' | 'success'>('idle');

  const palette = activeMode === 'dark' ? DARK_PALETTE : LIGHT_PALETTE;

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const triggerButtonInteraction = () => {
    setButtonState('loading');
    setTimeout(() => {
      setButtonState('success');
      setTimeout(() => setButtonState('idle'), 2000);
    }, 1500);
  };

  return (
    <div className="space-y-12">
      {/* Design System Hero Header */}
      <div className="border-b border-zinc-800 pb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-zinc-400" /> Section 1.0 • Global Foundations
            </span>
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">Design System & Token Spec</h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
              Inspired by design titans like Vercel and Linear. Focuses on deep, non-pure dark palettes, stark margins, structural negative space, and modern geometric curves.
            </p>
          </div>
          <div className="flex items-center gap-1 p-1 bg-zinc-900 border border-zinc-800 rounded-lg self-start">
            <button
              onClick={() => setActiveMode('dark')}
              className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeMode === 'dark'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Dark Mode (Default)
            </button>
            <button
              onClick={() => setActiveMode('light')}
              className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeMode === 'light'
                  ? 'bg-white text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Light Mode Option
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Foundations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Color Palette Specification */}
        <div className="bg-[#121212] border border-zinc-800 rounded-xl p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-display font-medium text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-zinc-400" /> Color Token Spec
            </h3>
            <span className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-0.5 rounded-full uppercase">
              {activeMode} Tokens
            </span>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed">
            Every color token uses subtle offsets to ensure readability on both high-density mobile screens and wide professional monitors. Click any hex code to copy.
          </p>

          <div className="space-y-3.5">
            {palette.map((color) => (
              <div
                key={color.name}
                onClick={() => handleCopy(color.hex)}
                className="group flex items-center justify-between p-3 bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 rounded-lg cursor-pointer transition-all"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-md border border-zinc-700/50 shadow-sm transition-transform group-hover:scale-105"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <h4 className="text-xs font-medium text-white group-hover:text-zinc-200 transition-colors">
                      {color.name}
                    </h4>
                    <p className="text-[11px] text-zinc-400 mt-0.5 max-w-[280px] md:max-w-[340px] leading-snug">
                      {color.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                    {color.hex}
                  </code>
                  {copiedHex === color.hex ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-zinc-500 opacity-0 group-hover:opacity-100 transition-all" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography Scale */}
        <div className="bg-[#121212] border border-zinc-800 rounded-xl p-6 space-y-6">
          <h3 className="text-base font-display font-medium text-white flex items-center gap-2">
            <Type className="w-4 h-4 text-zinc-400" /> Font Scaling & Hierarchy
          </h3>

          <p className="text-xs text-zinc-400 leading-relaxed">
            The system pairs <strong className="text-white font-medium">Outfit</strong> for geometric display headers with <strong className="text-white font-medium">Inter</strong> for durable, neutral content reading, accented with <strong className="text-white font-medium">JetBrains Mono</strong> for developer metrics.
          </p>

          <div className="space-y-5 bg-zinc-950 p-4 border border-zinc-900 rounded-lg">
            {/* Display XXL */}
            <div>
              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 border-b border-zinc-900 pb-1 mb-2">
                <span>Display Heading (Outfit • Bold • 32px / 2rem • tracking-tight)</span>
                <span>font-display font-bold text-3xl</span>
              </div>
              <p className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
                Software engineered for high scale.
              </p>
            </div>

            {/* Accent Role Subtitle */}
            <div>
              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 border-b border-zinc-900 pb-1 mb-2">
                <span>Interactive Metric / Subtitle (JetBrains Mono • 14px • tracking-wide)</span>
                <span>font-mono text-sm tracking-wide text-zinc-400</span>
              </div>
              <p className="font-mono text-sm text-zinc-400 tracking-wide flex items-center gap-2">
                <span>const role = </span>
                <span className="text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/10">"Full-Stack Architect"</span>
              </p>
            </div>

            {/* Standard Body */}
            <div>
              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 border-b border-zinc-900 pb-1 mb-2">
                <span>Standard Reading Text (Inter • Light • 14px / 0.875rem • leading-relaxed)</span>
                <span>font-sans text-xs text-zinc-400</span>
              </div>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                Each section naturally slides into the next, utilizing responsive margins to establish breathing room. Rather than distracting the eye with heavy neon colors, we build flow with pure visual hierarchy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing, Radius, and interactive Component Specs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Spatial Guidelines */}
        <div className="bg-[#121212] border border-zinc-800 rounded-xl p-6 space-y-4">
          <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-2">
            <Square className="w-4 h-4 text-zinc-400" /> Grid & Radius
          </h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            The spatial layout strictly aligns to an 8px grid baseline. Content containers and cards utilize precise geometric curve ratios to fit within outer frames seamlessly:
          </p>
          <ul className="text-xs text-zinc-300 space-y-2 font-mono">
            <li className="flex items-center justify-between border-b border-zinc-900 pb-1.5">
              <span>Card Corners:</span>
              <span className="text-white">rounded-xl (12px)</span>
            </li>
            <li className="flex items-center justify-between border-b border-zinc-900 pb-1.5">
              <span>Interactive Targets:</span>
              <span className="text-white">rounded-lg (8px)</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Outer Page Padding:</span>
              <span className="text-white">px-6 md:px-12 (24px - 48px)</span>
            </li>
          </ul>
        </div>

        {/* Interaction Micro-States */}
        <div className="bg-[#121212] border border-zinc-800 rounded-xl p-6 space-y-4">
          <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-2">
            <MousePointer className="w-4 h-4 text-zinc-400" /> Interactive Spec
          </h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Hover states feel crisp and satisfying. Click below to experience a live state-transition simulating a portfolio contact response.
          </p>

          <button
            onClick={triggerButtonInteraction}
            disabled={buttonState !== 'idle'}
            className="w-full py-2.5 px-4 text-xs font-medium rounded-lg flex items-center justify-center gap-2 transition-all relative overflow-hidden"
            style={{
              backgroundColor: buttonState === 'success' ? '#10B981' : '#FFFFFF',
              color: buttonState === 'success' ? '#FFFFFF' : '#000000',
              opacity: buttonState === 'loading' ? 0.8 : 1,
              cursor: buttonState !== 'idle' ? 'not-allowed' : 'pointer'
            }}
          >
            {buttonState === 'idle' && (
              <>
                <span>Test Interactive Action</span>
                <span className="text-[10px] bg-zinc-100 text-zinc-800 px-1.5 py-0.2 rounded font-mono font-bold">1ms</span>
              </>
            )}
            {buttonState === 'loading' && (
              <span className="flex items-center gap-2 font-mono">
                <svg className="animate-spin h-3.5 w-3.5 text-zinc-900" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </span>
            )}
            {buttonState === 'success' && (
              <span className="font-sans font-semibold text-white">Action Complete! ✓</span>
            )}
          </button>
        </div>

        {/* Senior UX Wisdom */}
        <div className="bg-[#121212] border border-zinc-800 rounded-xl p-6 space-y-4">
          <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-2">
            <Info className="w-4 h-4 text-zinc-400" /> Senior UI/UX Wisdom
          </h4>
          <blockquote className="text-xs text-zinc-400 italic border-l-2 border-zinc-600 pl-3 leading-relaxed">
            "A portfolio isn't a gallery of flashy tricks. It is a communication device. Recruiters buy software architectures, not fancy scrolling effects. Keep animations restricted to 200ms ease-out, reserving high-contrast states for clickable buttons."
          </blockquote>
          <p className="text-[10px] text-zinc-500 font-mono text-right">— Design Team Architect</p>
        </div>
      </div>
    </div>
  );
}
