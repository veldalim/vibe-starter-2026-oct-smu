import React, { useState } from 'react';
import { Search, Bookmark, ChevronDown, User, Check, Globe } from 'lucide-react';
import { SectionId } from '../types';

interface HeaderProps {
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  onOpenSubscribe: () => void;
  onOpenBookmarks: () => void;
  onOpenSearch: () => void;
  onOpenGames: (game?: 'wordle' | 'connections' | 'mini') => void;
  bookmarksCount: number;
  isSubscribed: boolean;
}

export default function Header({
  activeSection,
  onSelectSection,
  onOpenSubscribe,
  onOpenBookmarks,
  onOpenSearch,
  onOpenGames,
  bookmarksCount,
  isSubscribed
}: HeaderProps) {
  const [edition, setEdition] = useState<'U.S. Edition' | 'International Edition' | 'Canadian Edition' | 'Español' | '中文'>('U.S. Edition');
  const [showEditionMenu, setShowEditionMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const sections: { id: SectionId; label: string }[] = [
    { id: 'front-page', label: 'U.S.' },
    { id: 'world', label: 'World' },
    { id: 'politics', label: 'Politics' },
    { id: 'business', label: 'Business' },
    { id: 'opinion', label: 'Opinion' },
    { id: 'tech', label: 'Tech' },
    { id: 'science', label: 'Science' },
    { id: 'health', label: 'Health' },
    { id: 'sports', label: 'Sports' },
    { id: 'arts', label: 'Arts' },
    { id: 'books', label: 'Books' },
    { id: 'style', label: 'Style' },
    { id: 'food', label: 'Food' },
    { id: 'travel', label: 'Travel' },
    { id: 'magazine', label: 'Magazine' },
    { id: 'games', label: 'Games' },
    { id: 'cooking', label: 'Cooking' },
    { id: 'wirecutter', label: 'Wirecutter' },
    { id: 'the-athletic', label: 'The Athletic' }
  ];

  const editions: ('U.S. Edition' | 'International Edition' | 'Canadian Edition' | 'Español' | '中文')[] = [
    'U.S. Edition',
    'International Edition',
    'Canadian Edition',
    'Español',
    '中文'
  ];

  return (
    <header className="w-full bg-surface-container-lowest border-b border-surface-variant relative z-30">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Utility Bar */}
        <div className="h-10 flex items-center justify-between text-on-surface-variant font-label-nav text-caption">
          {/* Left: Date & Editions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="hidden sm:inline">Wednesday, May 21, 2025</span>
            <span className="sm:hidden">May 21, 2025</span>
            <span className="text-outline-variant select-none">|</span>
            <button
              onClick={() => onSelectSection('front-page')}
              className="hover:text-primary transition-colors font-semibold cursor-pointer"
            >
              Today’s Paper
            </button>
            <span className="text-outline-variant select-none">|</span>
            <div className="relative">
              <button
                onClick={() => setShowEditionMenu(!showEditionMenu)}
                className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors font-medium"
              >
                <span>{edition}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {showEditionMenu && (
                <div className="absolute top-full left-0 mt-1 bg-surface-container-lowest border border-surface-variant shadow-lg py-1.5 min-w-[160px] z-40 font-label-nav">
                  {editions.map(ed => (
                    <button
                      key={ed}
                      onClick={() => {
                        setEdition(ed);
                        setShowEditionMenu(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs hover:bg-surface-container flex items-center justify-between cursor-pointer"
                    >
                      <span>{ed}</span>
                      {edition === ed && <Check className="w-3 h-3 text-primary" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Financial Ticker, Actions, Profile */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Markets ticker */}
            <div className="hidden xl:flex items-center gap-4 text-[11px] font-mono">
              <span className="flex items-center gap-1">
                <span className="font-semibold text-primary">S&amp;P 500</span>
                <span className="text-[#137333]">+0.42%</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="font-semibold text-primary">NASDAQ</span>
                <span className="text-[#137333]">+0.68%</span>
              </span>
            </div>

            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="p-1 hover:text-primary transition-colors cursor-pointer text-secondary"
              title="Search The Times"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Saved bookmarks */}
            <button
              onClick={onOpenBookmarks}
              className="p-1 hover:text-primary transition-colors cursor-pointer text-secondary relative"
              title="Saved Articles"
            >
              <Bookmark className="w-4 h-4" />
              {bookmarksCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                  {bookmarksCount}
                </span>
              )}
            </button>

            {/* Subscription CTA button */}
            {!isSubscribed ? (
              <button
                onClick={onOpenSubscribe}
                className="bg-primary text-on-primary font-kicker text-kicker uppercase px-2.5 sm:px-3 py-1 sm:py-1.5 hover:bg-surface-container-highest hover:text-on-surface transition-colors tracking-wider text-[10px] sm:text-[11px] font-bold cursor-pointer"
              >
                SUBSCRIBE FOR $1/WK
              </button>
            ) : (
              <span className="bg-[#137333] text-white font-kicker text-[10px] uppercase px-2.5 py-1 tracking-wider font-bold">
                ALL ACCESS SUBSCRIBER
              </span>
            )}

            {/* User Profile */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center cursor-pointer ml-1"
                title="Account Settings"
              >
                <img
                  alt="Profile"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-surface-variant"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjbq7nOAmXto8EnNwFDh2pKUlfJJ6FiWWOrnNN80HR7d5Y7PLErtx_YOyKJnn2KDZwrwdBN0Z0odg4aXhJESXKNgxu4IXV3diomQ4jbPln-UXG7B1v_fRTkM0lmoqSy4EGJTJ7kkFBR8XxMt5YLKWIaRcp2ghH3vaF_VTsP85pT2kNLvRthXEQ_gkdyb3xgZP_0yeeksSYw8G3CR2JAtnBoIBI1VjjoL7Wr6JZbHCMqjI6XkaiCp_1"
                />
              </button>

              {showUserMenu && (
                <div className="absolute top-full right-0 mt-1 bg-surface-container-lowest border border-surface-variant shadow-xl py-2 min-w-[200px] z-40 font-label-nav text-xs">
                  <div className="px-3 py-2 border-b border-surface-variant">
                    <div className="font-bold text-primary">Velda Bennett</div>
                    <div className="text-[11px] text-secondary">velda87@gmail.com</div>
                    <div className="mt-1 text-[10px] font-kicker uppercase text-[#137333] font-bold">
                      {isSubscribed ? 'Digital Subscriber' : 'Standard Member'}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      onOpenBookmarks();
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-surface-container flex items-center gap-2 cursor-pointer"
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>Saved Articles ({bookmarksCount})</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      onOpenGames('wordle');
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-surface-container flex items-center gap-2 cursor-pointer"
                  >
                    <span>Play Today's Wordle</span>
                  </button>
                  {!isSubscribed && (
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        onOpenSubscribe();
                      }}
                      className="w-full text-left px-3 py-2 text-error font-bold hover:bg-surface-container cursor-pointer"
                    >
                      Upgrade for $1/wk
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Big Masthead */}
        <div className="py-5 sm:py-6 flex flex-col items-center justify-center">
          <button
            onClick={() => onSelectSection('front-page')}
            className="text-center group cursor-pointer"
          >
            <h1 className="masthead-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-primary leading-none select-none drop-shadow-xs">
              The New York Times
            </h1>
          </button>
          <div className="text-center mt-2 font-subhead-italic text-caption text-secondary italic">
            "All the News That's Fit to Print"
          </div>
        </div>

        {/* Section Navigation Bar */}
        <div className="border-t-[3px] border-b border-primary py-2">
          <nav className="flex items-center justify-between overflow-x-auto no-scrollbar gap-5 text-on-surface-variant font-label-nav text-xs sm:text-sm whitespace-nowrap">
            {sections.map(sec => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => onSelectSection(sec.id)}
                  className={`transition-colors cursor-pointer shrink-0 pb-0.5 ${
                    isActive
                      ? 'font-bold text-primary underline underline-offset-4 decoration-primary decoration-2'
                      : 'hover:text-primary font-medium'
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Trending Ribbon */}
        <div className="border-b border-surface-variant py-2 flex items-center gap-4 overflow-x-auto no-scrollbar text-caption font-label-nav">
          <div className="flex items-center gap-1.5 shrink-0 text-error font-bold uppercase tracking-wider text-[11px]">
            <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
            TRENDING:
          </div>
          <div className="flex items-center gap-4 text-on-surface-variant shrink-0 text-xs">
            <button
              onClick={() => onSelectSection('tech')}
              className="hover:text-primary hover:underline transition-all cursor-pointer"
            >
              Live Updates
            </button>
            <span className="text-outline-variant select-none">•</span>
            <button
              onClick={() => onSelectSection('world')}
              className="hover:text-primary hover:underline transition-all cursor-pointer"
            >
              Global Summit
            </button>
            <span className="text-outline-variant select-none">•</span>
            <button
              onClick={() => onSelectSection('tech')}
              className="hover:text-primary hover:underline transition-all cursor-pointer"
            >
              Tech Regulation
            </button>
            <span className="text-outline-variant select-none">•</span>
            <button
              onClick={() => onSelectSection('business')}
              className="hover:text-primary hover:underline transition-all cursor-pointer"
            >
              Economic Outlook
            </button>
            <span className="text-outline-variant select-none">•</span>
            <button
              onClick={() => onOpenGames('wordle')}
              className="hover:text-primary hover:underline transition-all cursor-pointer font-bold"
            >
              Wordle
            </button>
            <span className="text-outline-variant select-none">•</span>
            <button
              onClick={() => onOpenGames('mini')}
              className="hover:text-primary hover:underline transition-all cursor-pointer font-bold"
            >
              The Mini
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
