import { ShieldAlert, CheckCircle, Heart, Smartphone, Accessibility, Eye, HelpCircle } from 'lucide-react';

export default function GuidelineTab() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-zinc-800 pb-8">
        <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase flex items-center gap-1.5 mb-2">
          <ShieldAlert className="w-3.5 h-3.5 text-zinc-400" /> Section 3.0 • Design Guidelines & Standards
        </span>
        <h2 className="text-3xl font-display font-bold text-white tracking-tight">System Specification Handbook</h2>
        <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
          Comprehensive compliance specifications covering accessibility ratios, touch boundary calculations, performance standards, and animation parameters.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mobile Responsiveness & Touch Boundaries */}
        <div className="bg-[#121212] border border-zinc-800 rounded-xl p-6 space-y-4">
          <h3 className="text-base font-display font-medium text-white flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-zinc-400" /> Mobile Responsiveness Strategy
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Many portfolios break on tablet dimensions or small devices (e.g. iPhone SE). We enforce a strict fluid container layout:
          </p>
          <ul className="space-y-3.5 text-xs text-zinc-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong>Minimum Touch Target Limits:</strong> Every clickable button, card footer, or navigation selector has a minimum tap boundary of <strong className="text-white">44px x 44px</strong> to prevent accidental taps.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong>Responsive Font Sizing:</strong> Display headers dynamically step down on screens smaller than 768px (e.g., `text-5xl md:text-3xl`) to ensure titles do not wrap awkwardly.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong>Zero-Horizontal-Scroll Enforcer:</strong> All section containers utilize nested grid layouts with `w-full overflow-hidden` limits to safeguard against unintentional canvas overflow.
              </div>
            </li>
          </ul>
        </div>

        {/* Accessibility & Inclusivity (WCAG 2.1 AA) */}
        <div className="bg-[#121212] border border-zinc-800 rounded-xl p-6 space-y-4">
          <h3 className="text-base font-display font-medium text-white flex items-center gap-2">
            <Accessibility className="w-5 h-5 text-zinc-400" /> WCAG 2.1 AA Accessibility Spec
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            A premium visual design must be readable by everyone. We enforce highly visible contrast metrics:
          </p>
          <ul className="space-y-3.5 text-xs text-zinc-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong>Contrast Compliance Ratios:</strong> Main textual copy maintains a contrast ratio of at least <strong className="text-white">4.5:1</strong> against dark canvas backgrounds, conforming strictly to AA criteria.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong>Focus Ring Indicators:</strong> Interactive buttons and input fields render with a 2px offset border when accessed via keyboard navigation.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong>Semantic Landmarks:</strong> Layout structures are framed with descriptive HTML element markup (e.g., "main", "section", "nav", "aside") to support auxiliary screen reader software.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Animation & Micro-interaction Timing Table */}
      <div className="bg-[#121212] border border-zinc-800 rounded-xl p-6 space-y-4">
        <h3 className="text-base font-display font-medium text-white flex items-center gap-2">
          <Heart className="w-5 h-5 text-zinc-400" /> Motion Standards & Timings
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Animation overload causes cognitive distraction. Motion should guide, never delay. Here are the system rules:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-zinc-400 font-sans border-collapse">
            <thead>
              <tr className="border-b border-zinc-850 text-zinc-500 font-mono text-[10px] uppercase">
                <th className="py-2.5">Interaction Type</th>
                <th className="py-2.5">Target Duration</th>
                <th className="py-2.5">Easing/Spring Curve Specs</th>
                <th className="py-2.5">Visual Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900 text-xs">
              <tr>
                <td className="py-3 font-semibold text-white">Button Hover / Tap</td>
                <td className="py-3 font-mono text-[11px]">150ms</td>
                <td className="py-3 font-mono text-[11px]">cubic-bezier(0.16, 1, 0.3, 1)</td>
                <td className="py-3">Subtle depth increase, color accent transition</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-white">Case Study Modal Entrance</td>
                <td className="py-3 font-mono text-[11px]">300ms</td>
                <td className="py-3 font-mono text-[11px]">spring(stiffness: 300, damping: 24)</td>
                <td className="py-3">Smooth scale-up backdrop-blur fade-in</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-white">Role Subtitle Rotation</td>
                <td className="py-3 font-mono text-[11px]">400ms</td>
                <td className="py-3 font-mono text-[11px]">cubic-bezier(0.34, 1.56, 0.64, 1)</td>
                <td className="py-3">Dynamic slide-up-and-fade, elegant settle effect</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-white">Continuous Certifications Scroll</td>
                <td className="py-3 font-mono text-[11px]">Continuous</td>
                <td className="py-3 font-mono text-[11px]">linear loop</td>
                <td className="py-3">Fluid infinite marquee; pauses smoothly on hover</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
