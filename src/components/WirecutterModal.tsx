import React, { useState } from 'react';
import { X, Check, Award, ThumbsUp, Shield, ExternalLink, Headphones } from 'lucide-react';

interface WirecutterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WirecutterModal({ isOpen, onClose }: WirecutterModalProps) {
  const [selectedModel, setSelectedModel] = useState<number>(0);

  if (!isOpen) return null;

  const models = [
    {
      badge: 'TOP PICK',
      name: 'Sony WH-1000XM5',
      price: '$398',
      score: '9.8 / 10',
      ancRating: 'Superior',
      battery: '30 hours (ANC on)',
      weight: '250 grams',
      pros: ['Class-leading high-frequency noise cancellation', 'Featherlight comfortable headband', 'Superb mic voice isolation'],
      cons: ['Does not fold down into compact clamshell case'],
      summary: 'After 140 hours of rigorous acoustic tests in anechoic chambers and daily subway commutes, the XM5 continues to reign as the most dependable and effective noise-canceling headphone on the market.'
    },
    {
      badge: 'RUNNER-UP',
      name: 'Bose QuietComfort Ultra',
      price: '$429',
      score: '9.5 / 10',
      ancRating: 'Exceptional',
      battery: '24 hours',
      weight: '253 grams',
      pros: ['Sublime plush earcups for glasses wearers', 'Immersive Spatial Audio mode', 'Folds into tight case'],
      cons: ['Slightly lower battery life than Sony'],
      summary: 'For pure physical ear cushion comfort over 8+ hour transatlantic flights, Bose remains unmatched, with ANC that nearly matches Sony in the low-frequency rumble ranges.'
    },
    {
      badge: 'BUDGET PICK',
      name: 'Anker Soundcore Space Q45',
      price: '$149',
      score: '8.7 / 10',
      ancRating: 'Great value',
      battery: '50 hours',
      weight: '292 grams',
      pros: ['Astonishing 50-hour battery stamina', 'Sturdy build at under $150', 'Custom EQ app'],
      cons: ['Plastics feel slightly rigid'],
      summary: 'Proof you don’t need to spend $400 for legitimate subway isolation. The Q45 delivers 85% of flagship noise reduction for a fraction of the cost.'
    },
    {
      badge: 'UPGRADE PICK',
      name: 'Apple AirPods Max',
      price: '$549',
      score: '9.2 / 10',
      ancRating: 'Exceptional',
      battery: '20 hours',
      weight: '384 grams',
      pros: ['Exquisite anodized aluminum build', 'Best-in-class Transparency mode', 'Intuitive digital crown dial'],
      cons: ['Heavy weight on crown of head', 'Included Smart Case offers minimal protection'],
      summary: 'If you reside firmly inside Apple’s hardware ecosystem and value unrivaled ambient pass-through transparency, the AirPods Max remains a luxury tour de force.'
    }
  ];

  const current = models[selectedModel];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-surface-container-lowest max-w-3xl w-full border border-primary shadow-2xl relative my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-surface-container-lowest border-b border-surface-variant p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-kicker text-kicker uppercase tracking-widest text-primary font-extrabold">
              WIRECUTTER
            </span>
            <span className="text-outline-variant">|</span>
            <span className="bg-surface-container-highest font-kicker text-[10px] uppercase px-1.5 py-0.5 font-bold">
              LAB TESTED
            </span>
          </div>
          <button onClick={onClose} className="p-1 text-secondary hover:text-primary cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="space-y-2 border-b border-surface-variant pb-4">
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold leading-tight">
              The 6 Best Noise-Canceling Headphones of 2025
            </h2>
            <div className="flex items-center gap-3 text-xs font-label-nav text-secondary">
              <span>By <strong className="text-primary font-bold">LAUREN DRAGAN</strong></span>
              <span>•</span>
              <span>Updated May 2025</span>
              <span>•</span>
              <span className="text-[#137333] font-semibold flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" /> 100% Independent Lab Testing
              </span>
            </div>
          </div>

          <div className="aspect-[16/9] w-full overflow-hidden bg-surface-container">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXQnEPjFeyECnTnU8au5_9pZBGGB5kCy02BkSiJ67vJ_iS3IVXHV4vKLd6RVQuZnu5cSmJfXVgjTKB_G5XnAIvfQtOqjnV8O261qHEiCxhLOZApHVIguU4KK0GrAFUxFMkzcywr2gxK1mDAzLKOhDEbnsRSbhh2-FBrN53PV3j678v4tgqKC0Cv9RqoXVps5ph83cYwnr6xL_02_2vtc-Zv8mZynomAvOv_Us_maOQXh8LceEL2kjF"
              alt="Tested headphones"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Model selector pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar font-label-nav text-xs">
            {models.map((m, idx) => (
              <button
                key={m.name}
                onClick={() => setSelectedModel(idx)}
                className={`px-3 py-1.5 rounded cursor-pointer whitespace-nowrap transition-colors flex items-center gap-1.5 font-bold ${
                  selectedModel === idx
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-low text-secondary hover:text-primary border border-surface-variant'
                }`}
              >
                <span>{m.badge}:</span>
                <span className="font-normal">{m.name}</span>
              </button>
            ))}
          </div>

          {/* Current selected review card */}
          <div className="p-5 border border-primary bg-surface-container-low space-y-4 font-label-nav">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-surface-variant pb-3">
              <div>
                <span className="text-error font-kicker text-xs uppercase font-extrabold tracking-wider">
                  {current.badge}
                </span>
                <h3 className="font-headline-md text-xl font-bold text-primary mt-0.5">{current.name}</h3>
              </div>
              <div className="text-right">
                <div className="font-mono text-lg font-bold text-primary">{current.price}</div>
                <div className="text-[11px] text-secondary">Wirecutter Score: {current.score}</div>
              </div>
            </div>

            <p className="font-body-md text-sm leading-relaxed text-on-surface">
              {current.summary}
            </p>

            <div className="grid grid-cols-3 gap-2 py-2 bg-surface-container-lowest border border-surface-variant text-center text-xs">
              <div>
                <div className="text-[10px] uppercase text-secondary font-bold">ANC POWER</div>
                <div className="font-bold text-primary mt-0.5">{current.ancRating}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase text-secondary font-bold">BATTERY</div>
                <div className="font-bold text-primary mt-0.5">{current.battery}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase text-secondary font-bold">WEIGHT</div>
                <div className="font-bold text-primary mt-0.5">{current.weight}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
              <div className="space-y-1">
                <div className="font-bold text-[#137333] uppercase text-[11px]">Key Strengths</div>
                {current.pros.map((pro, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-on-surface">
                    <Check className="w-3.5 h-3.5 text-[#137333] shrink-0 mt-0.5" />
                    <span>{pro}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <div className="font-bold text-secondary uppercase text-[11px]">Trade-Offs</div>
                {current.cons.map((con, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-secondary">
                    <span className="text-outline shrink-0">•</span>
                    <span>{con}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
