import React, { useState } from 'react';
import { X, Check, ShieldCheck, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribed: () => void;
}

export default function SubscribeModal({ isOpen, onClose, onSubscribed }: SubscribeModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    confetti({ particleCount: 100, spread: 70 });
    setTimeout(() => {
      onSubscribed();
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-surface-container-lowest max-w-lg w-full border border-primary shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-secondary hover:text-primary transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="masthead-font text-3xl">The New York Times</div>
              <div className="text-xs uppercase font-kicker tracking-widest text-error font-extrabold">
                LIMITED-TIME INTRODUCTORY OFFER
              </div>
              <h2 className="font-headline-lg text-3xl font-bold">
                Subscribe for $1 / week
              </h2>
              <p className="font-body-sm text-xs sm:text-sm text-secondary">
                Billed every 4 weeks for your first year. Cancel anytime with one click.
              </p>
            </div>

            <div className="bg-surface-container-low p-4 border border-surface-variant space-y-2.5 text-xs font-label-nav">
              <div className="font-bold text-primary uppercase text-[11px] tracking-wider">
                Everything Included with Digital All Access:
              </div>
              {[
                'Unlimited news reporting from 1,700+ journalists in 150+ countries',
                'NYT Games including Wordle, Connections, Spelling Bee & The Crossword',
                'NYT Cooking with 20,000+ curated recipes and step-by-step cook mode',
                'Wirecutter independent reviews & real-time deal alerts',
                'The Athletic in-depth sports journalism and tactical coverage'
              ].map((perk, i) => (
                <div key={i} className="flex items-start gap-2 text-on-surface">
                  <Check className="w-4 h-4 text-[#137333] shrink-0 mt-0.5" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-label-nav font-bold uppercase text-secondary mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email to activate $1/wk rate"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-surface border border-primary px-3 py-2 text-sm font-label-nav focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-on-primary font-kicker text-xs uppercase tracking-wider font-extrabold hover:bg-surface-container-highest hover:text-primary transition-colors cursor-pointer"
              >
                START DIGITAL ALL ACCESS PASS →
              </button>

              <div className="text-[11px] text-center text-outline flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Secure 256-bit SSL encrypted checkout</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-[#137333] rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-headline-md text-2xl font-bold">Welcome to The Times</h3>
            <p className="font-body-sm text-sm text-secondary">
              Your Digital All Access subscription is now active for <strong>{email}</strong>. Enjoy unlimited journalism, cooking, games, and Wirecutter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
