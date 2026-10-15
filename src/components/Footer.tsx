import React, { useState } from 'react';
import { SectionId } from '../types';

interface FooterProps {
  onSelectSection: (section: SectionId) => void;
  onOpenSubscribe: () => void;
  onOpenGames: (game?: 'wordle' | 'connections' | 'mini') => void;
}

export default function Footer({ onSelectSection, onOpenSubscribe, onOpenGames }: FooterProps) {
  const [email, setEmail] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  const handleSubscribeNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSignedUp(true);
    setTimeout(() => {
      setEmail('');
      setSignedUp(false);
    }, 4000);
  };

  return (
    <footer className="w-full bg-surface-container-lowest border-t-4 border-double border-primary mt-12">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Masthead & Quick links */}
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-surface-variant pb-6 mb-8 gap-4">
          <div
            onClick={() => onSelectSection('front-page')}
            className="masthead-font text-3xl sm:text-4xl text-primary cursor-pointer select-none"
          >
            The New York Times
          </div>
          <div className="flex flex-wrap items-center gap-6 font-label-nav text-caption text-secondary text-xs">
            <button onClick={() => onSelectSection('front-page')} className="hover:text-primary hover:underline cursor-pointer">
              Home Page
            </button>
            <button onClick={() => onSelectSection('world')} className="hover:text-primary hover:underline cursor-pointer">
              World News
            </button>
            <button onClick={() => onSelectSection('front-page')} className="hover:text-primary hover:underline cursor-pointer">
              Today's Paper
            </button>
            <button onClick={onOpenSubscribe} className="hover:text-primary hover:underline cursor-pointer font-bold text-primary">
              Digital Subscriptions
            </button>
          </div>
        </div>

        {/* 5-Column Sitemap */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-10 border-b border-surface-variant font-label-nav text-xs">
          {/* News */}
          <div>
            <h4 className="font-kicker text-kicker uppercase text-primary mb-3 font-extrabold text-[11px]">
              NEWS
            </h4>
            <ul className="space-y-2 text-secondary">
              <li>
                <button onClick={() => onSelectSection('front-page')} className="hover:text-primary hover:underline cursor-pointer">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('world')} className="hover:text-primary hover:underline cursor-pointer">
                  World
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('politics')} className="hover:text-primary hover:underline cursor-pointer">
                  Politics
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('business')} className="hover:text-primary hover:underline cursor-pointer">
                  Business
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('tech')} className="hover:text-primary hover:underline cursor-pointer">
                  Tech
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('science')} className="hover:text-primary hover:underline cursor-pointer">
                  Science
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('health')} className="hover:text-primary hover:underline cursor-pointer">
                  Health
                </button>
              </li>
            </ul>
          </div>

          {/* Opinion */}
          <div>
            <h4 className="font-kicker text-kicker uppercase text-primary mb-3 font-extrabold text-[11px]">
              OPINION
            </h4>
            <ul className="space-y-2 text-secondary">
              <li>
                <button onClick={() => onSelectSection('opinion')} className="hover:text-primary hover:underline cursor-pointer">
                  Today's Opinion
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('opinion')} className="hover:text-primary hover:underline cursor-pointer">
                  Columnists
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('opinion')} className="hover:text-primary hover:underline cursor-pointer">
                  Editorials
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('opinion')} className="hover:text-primary hover:underline cursor-pointer">
                  Guest Essays
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('opinion')} className="hover:text-primary hover:underline cursor-pointer">
                  Letters
                </button>
              </li>
            </ul>
          </div>

          {/* Arts & Life */}
          <div>
            <h4 className="font-kicker text-kicker uppercase text-primary mb-3 font-extrabold text-[11px]">
              ARTS &amp; LIFE
            </h4>
            <ul className="space-y-2 text-secondary">
              <li>
                <button onClick={() => onSelectSection('arts')} className="hover:text-primary hover:underline cursor-pointer">
                  Arts
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('books')} className="hover:text-primary hover:underline cursor-pointer">
                  Books
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('style')} className="hover:text-primary hover:underline cursor-pointer">
                  Style
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('food')} className="hover:text-primary hover:underline cursor-pointer">
                  Food
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('travel')} className="hover:text-primary hover:underline cursor-pointer">
                  Travel
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('magazine')} className="hover:text-primary hover:underline cursor-pointer">
                  Magazine
                </button>
              </li>
            </ul>
          </div>

          {/* Lifestyle */}
          <div>
            <h4 className="font-kicker text-kicker uppercase text-primary mb-3 font-extrabold text-[11px]">
              LIFESTYLE
            </h4>
            <ul className="space-y-2 text-secondary">
              <li>
                <button onClick={() => onOpenGames()} className="hover:text-primary hover:underline cursor-pointer">
                  Games &amp; Puzzles
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('cooking')} className="hover:text-primary hover:underline cursor-pointer">
                  Cooking
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('wirecutter')} className="hover:text-primary hover:underline cursor-pointer">
                  Wirecutter
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('the-athletic')} className="hover:text-primary hover:underline cursor-pointer">
                  The Athletic
                </button>
              </li>
              <li>
                <button onClick={() => onOpenGames('wordle')} className="hover:text-primary hover:underline cursor-pointer">
                  Wordle
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletters Signup Form (Span 2) */}
          <div className="col-span-2">
            <h4 className="font-kicker text-kicker uppercase text-primary mb-3 font-extrabold text-[11px]">
              NEWSLETTERS &amp; UPDATES
            </h4>
            <p className="text-on-surface-variant font-body-sm text-xs mb-3 leading-relaxed">
              Get the Morning newsletter delivered directly to your inbox with the day's top headlines.
            </p>
            {signedUp ? (
              <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold">
                ✓ Thank you. You are subscribed to The Morning newsletter.
              </div>
            ) : (
              <form onSubmit={handleSubscribeNewsletter} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="bg-surface border border-primary px-3 py-2 text-xs font-label-nav w-full focus:outline-none placeholder:text-outline"
                />
                <button
                  type="submit"
                  className="bg-primary text-on-primary font-kicker text-kicker uppercase px-4 py-2 hover:bg-surface-container-highest hover:text-on-surface transition-colors shrink-0 text-xs font-bold cursor-pointer"
                >
                  SIGN UP
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between font-label-nav text-[11px] text-secondary gap-4">
          <div>© 2025 The New York Times Company</div>
          <div className="flex flex-wrap gap-4">
            <span className="font-semibold text-primary">NYTCo</span>
            <a className="hover:underline" href="#">Contact Us</a>
            <a className="hover:underline" href="#">Accessibility</a>
            <a className="hover:underline" href="#">Work with us</a>
            <a className="hover:underline" href="#">Advertise</a>
            <a className="hover:underline" href="#">Privacy Policy</a>
            <a className="hover:underline" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
