import React from 'react';
import { LayoutGrid, Star, ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface NewsCultureVerticalsProps {
  onOpenRecipe: () => void;
  onOpenWirecutter: () => void;
  onOpenGames: (game?: 'wordle' | 'connections' | 'mini') => void;
  onSelectArticle: (article: Article) => void;
  athleticArticle: Article;
}

export default function NewsCultureVerticals({
  onOpenRecipe,
  onOpenWirecutter,
  onOpenGames,
  onSelectArticle,
  athleticArticle
}: NewsCultureVerticalsProps) {
  return (
    <section className="w-full mb-12">
      {/* Section Divider */}
      <div className="border-t-[3px] border-b border-primary py-1.5 mb-6 flex items-center justify-between">
        <span className="font-kicker text-kicker tracking-widest uppercase font-extrabold text-primary text-xs">
          NEWS &amp; CULTURE VERTICALS
        </span>
        <span className="font-label-nav text-caption text-secondary text-xs">
          Curated selections from the newsroom
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* NYT Cooking Card */}
        <div
          onClick={onOpenRecipe}
          className="group flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-surface-variant pb-6 lg:pb-0 pr-0 lg:pr-5 cursor-pointer"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-kicker text-kicker tracking-widest uppercase text-error font-extrabold text-xs">
                NYT COOKING
              </span>
              <span className="flex items-center text-primary text-[12px] font-bold">
                ★ 4.9 <span className="text-secondary font-normal ml-0.5">(2.4k)</span>
              </span>
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Crispy Gnocchi with Tomatoes"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUaq8vM6jzuj_DscAR52cl8llDthvMUpabxKAowQc5ISC4XnzSHJNnL8aVfTNcjL9EUtIldoHxnOOLVlBQpx-EoGEd8OvrVPWAtaMML4u3GIN9sn_n1Uwn6JWMpNSbOYQ6vKl56LY7kbuqJvLFDB2t0tM-Rf_p6V0GbmdWqkJ0tQyPbiRrY7Ogd4T3Bjw3xmBwdGFm7ea78RGG9goWytOPF7_zgdmQWHjNYXDDIEdroHPpZxQsESS2"
              />
            </div>
            <h4 className="font-headline-sm text-base sm:text-lg font-bold text-primary group-hover:underline">
              Crispy Gnocchi with Burst Tomatoes, Basil and Fresh Mozzarella
            </h4>
            <p className="font-body-sm text-xs sm:text-sm text-secondary leading-relaxed">
              A 25-minute weeknight miracle where skillet heat caramelizes the potato pillows without boiling water.
            </p>
          </div>
          <div className="font-byline text-byline text-secondary mt-3 text-xs">Recipe by ALI SLAGLE</div>
        </div>

        {/* The Athletic Card */}
        <div
          onClick={() => onSelectArticle(athleticArticle)}
          className="group flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-surface-variant pb-6 lg:pb-0 pr-0 lg:pr-5 cursor-pointer"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-kicker text-kicker tracking-widest uppercase text-primary font-extrabold text-xs">
                THE ATHLETIC
              </span>
              <span className="font-caption text-[11px] uppercase tracking-wider text-secondary">TACTICAL TAPE</span>
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Champions League match action"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvsUBszmcGWTJ454-eK5RuRKcUlGxIKfQkBJjagttTejxp7b9DegP39cP4qNohM15v8_Nzf_bDERp7-W7Xkjb_1kP7ojLeNcP8V5N2wZTv9ZY0irD5veYDgKx_U1paYOXKTtb6crgaXqfm_cfLaKKiYcSodKEHGOUZZONgz3tsGS9kbGzKSZDnXZxGCN_RtL3mkeeuQEEKfe8C0hRRGxzqDeNUrY3tub1OEksSKbePjQGarwAb4NwP"
              />
            </div>
            <h4 className="font-headline-sm text-base sm:text-lg font-bold text-primary group-hover:underline">
              How Tactical Re-Engineering Reshaped the Champions League Final
            </h4>
            <p className="font-body-sm text-xs sm:text-sm text-secondary leading-relaxed">
              An inverted fullback strategy neutralized the transition blitz that had defined the European season.
            </p>
          </div>
          <div className="font-byline text-byline text-secondary mt-3 text-xs">By MICHAEL COX</div>
        </div>

        {/* NYT Games Card */}
        <div className="flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-surface-variant pb-6 lg:pb-0 pr-0 lg:pr-5 bg-surface-container-low p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-kicker text-kicker tracking-widest uppercase text-primary font-extrabold text-xs">
                NYT GAMES
              </span>
              <span className="text-caption font-label-nav text-secondary font-medium text-xs">Daily Play</span>
            </div>

            {/* Wordle preview block */}
            <div
              onClick={() => onOpenGames('wordle')}
              className="bg-surface-container-lowest p-3 border border-surface-variant flex items-center justify-between cursor-pointer hover:border-primary transition-colors group"
            >
              <div>
                <span className="font-headline-sm text-[15px] font-bold block text-primary group-hover:underline">Wordle</span>
                <span className="text-caption font-caption text-secondary text-[11px]">No. 1,068 • Guess the 5-letter word</span>
              </div>
              <div className="grid grid-cols-5 gap-1 shrink-0">
                <span className="w-4 h-4 bg-primary text-[9px] text-on-primary flex items-center justify-center font-bold">W</span>
                <span className="w-4 h-4 bg-primary-fixed-dim text-[9px] bg-amber-400 text-black flex items-center justify-center font-bold">O</span>
                <span className="w-4 h-4 bg-primary text-[9px] text-on-primary flex items-center justify-center font-bold">R</span>
                <span className="w-4 h-4 bg-surface-variant text-[9px] flex items-center justify-center font-bold">D</span>
                <span className="w-4 h-4 bg-primary text-[9px] text-on-primary flex items-center justify-center font-bold">S</span>
              </div>
            </div>

            {/* Connections preview block */}
            <div
              onClick={() => onOpenGames('connections')}
              className="bg-surface-container-lowest p-3 border border-surface-variant flex items-center justify-between cursor-pointer hover:border-primary transition-colors group"
            >
              <div>
                <span className="font-headline-sm text-[15px] font-bold block text-primary group-hover:underline">Connections</span>
                <span className="text-caption font-caption text-secondary text-[11px]">Group words that share a common thread</span>
              </div>
              <LayoutGrid className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
            </div>

            {/* Mini Crossword */}
            <div
              onClick={() => onOpenGames('mini')}
              className="bg-surface-container-lowest p-3 border border-surface-variant flex items-center justify-between cursor-pointer hover:border-primary transition-colors group"
            >
              <div>
                <span className="font-headline-sm text-[15px] font-bold block text-primary group-hover:underline">The Mini Crossword</span>
                <span className="text-caption font-caption text-secondary text-[11px]">Solve in 60 seconds or less</span>
              </div>
              <span className="font-label-nav text-caption font-bold text-primary">0:42</span>
            </div>
          </div>

          <button
            onClick={() => onOpenGames('wordle')}
            className="mt-4 block w-full text-center font-kicker text-kicker uppercase text-primary border border-primary py-2 hover:bg-primary hover:text-on-primary transition-colors cursor-pointer text-xs font-bold"
          >
            PLAY TODAY'S PUZZLES
          </button>
        </div>

        {/* Wirecutter Card */}
        <div
          onClick={onOpenWirecutter}
          className="group flex flex-col justify-between pb-6 lg:pb-0 cursor-pointer"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-kicker text-kicker tracking-widest uppercase text-primary font-extrabold text-xs">
                WIRECUTTER
              </span>
              <span className="bg-surface-container-highest font-kicker text-[10px] uppercase px-1.5 py-0.5 font-bold">
                TESTER PICK
              </span>
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Headphones product review"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXQnEPjFeyECnTnU8au5_9pZBGGB5kCy02BkSiJ67vJ_iS3IVXHV4vKLd6RVQuZnu5cSmJfXVgjTKB_G5XnAIvfQtOqjnV8O261qHEiCxhLOZApHVIguU4KK0GrAFUxFMkzcywr2gxK1mDAzLKOhDEbnsRSbhh2-FBrN53PV3j678v4tgqKC0Cv9RqoXVps5ph83cYwnr6xL_02_2vtc-Zv8mZynomAvOv_Us_maOQXh8LceEL2kjF"
              />
            </div>
            <h4 className="font-headline-sm text-base sm:text-lg font-bold text-primary group-hover:underline">
              The 6 Best Noise-Canceling Headphones of 2025
            </h4>
            <p className="font-body-sm text-xs sm:text-sm text-secondary leading-relaxed">
              After 140 hours of rigorous acoustic laboratory testing and real-world subway commutes, one model surpassed Sony and Bose.
            </p>
          </div>
          <div className="font-byline text-byline text-secondary mt-3 text-xs">By LAUREN DRAGAN</div>
        </div>
      </div>
    </section>
  );
}
