import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Article } from '../types';
import { ARTICLES_DATA } from '../data/mockArticles';

interface LowerBroadsheetProps {
  onSelectArticle: (article: Article) => void;
}

export default function LowerBroadsheet({ onSelectArticle }: LowerBroadsheetProps) {
  const getArticle = (id: string): Article => {
    return ARTICLES_DATA.find(a => a.id === id) || ARTICLES_DATA[0];
  };

  const morningArticle = getArticle('the-morning-global-trade');
  const siliconValleyArticle = getArticle('silicon-valley-seed-rounds');
  const autoGiantsArticle = getArticle('auto-giants-hybrid-rollout');
  const broadwayArticle = getArticle('broadway-revival-stripped-down');
  const pynchonArticle = getArticle('thomas-pynchon-biography');

  return (
    <section className="w-full border-t border-primary pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* The Morning Daily Anchor Card (Span 4) */}
      <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-surface-variant pr-0 lg:pr-6 pb-8 lg:pb-0 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full object-cover border border-surface-variant"
              alt="David Leonhardt"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdu90kduQSgvq9IM_XLVpY8tcYDW_DbZbrAlbqx84zY-q8gFFkhHkKlj5G3zaXBn3LYlmvuBBIgTqI0k2V7uvbambJ2-YA0qbsTHFFB9d0Bjh4iKCG2jecMYI2Waar-Uo3nvBdC4equH92JMu9GNeu4ggdfpXwN5Da8kpEGoSDbwACHo4SUvkVSZFmsLMw80Yw4jaTcCtyUokhxMWAcOqJgU9-hSDpkRIJj_VZKgyFIwTl2kt053b3"
            />
            <div>
              <span className="font-kicker text-kicker tracking-widest uppercase font-extrabold text-primary block text-xs">
                THE MORNING
              </span>
              <span className="font-byline text-byline text-secondary text-xs">By David Leonhardt</span>
            </div>
          </div>

          <h3
            onClick={() => onSelectArticle(morningArticle)}
            className="font-headline-md text-xl sm:text-2xl font-bold text-primary hover:underline cursor-pointer leading-tight"
          >
            The Shifting Contours of Global Trade in an Era of Tariffs and Tenacity
          </h3>

          <p className="font-body-md text-sm text-on-surface leading-relaxed">
            Good morning. For decades, supply chain efficiency was governed by a solitary objective: lowest absolute unit cost. Today, redundancy, homeland security covenants, and green certificates dictate shipping manifests.
          </p>

          <p className="font-body-sm text-xs sm:text-sm text-secondary leading-relaxed">
            In today's newsletter: A breakdown of who bears the true levy burden, why Southeast Asian manufacturing clusters are booming, and what it implies for domestic inflation in the coming quarter.
          </p>
        </div>

        <div className="pt-3 border-t border-surface-variant">
          <button
            onClick={() => onSelectArticle(morningArticle)}
            className="w-full font-label-nav text-caption font-bold text-primary flex items-center justify-between group cursor-pointer text-xs"
          >
            <span className="group-hover:underline uppercase tracking-wider">READ THE MORNING ESSAY</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Business & Tech Coverage (Span 4) */}
      <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-surface-variant pr-0 lg:pr-6 pb-8 lg:pb-0 space-y-6">
        <div className="border-b border-primary pb-1">
          <h4 className="font-kicker text-kicker uppercase tracking-widest font-extrabold text-primary text-xs">
            BUSINESS &amp; TECHNOLOGY
          </h4>
        </div>

        {/* Business Story 1 */}
        <div className="space-y-2">
          <h4
            onClick={() => onSelectArticle(siliconValleyArticle)}
            className="font-headline-sm text-lg font-bold text-primary hover:underline cursor-pointer leading-snug"
          >
            Silicon Valley Adjusts to New Capital Realities as Seed Rounds Tighten
          </h4>
          <p className="font-body-sm text-xs sm:text-sm text-secondary leading-relaxed">
            <span className="font-kicker text-[11px] font-bold text-primary mr-1">SAN FRANCISCO —</span>
            Venture allocations dropped 18 percent year-over-year as institutional backers demand verified unit economics and immediate operating profits over speculative headcounts.
          </p>
          <div className="text-byline font-byline text-secondary text-xs">By ERIN GRIFFITH</div>
        </div>

        <div className="w-full h-[1px] bg-surface-variant"></div>

        {/* Business Story 2 */}
        <div className="space-y-2">
          <h4
            onClick={() => onSelectArticle(autoGiantsArticle)}
            className="font-headline-sm text-[17px] leading-[23px] font-bold text-primary hover:underline cursor-pointer"
          >
            Auto Giants Accelerate Hybrid Rollouts Amid Cooling Demand for Full Electrics
          </h4>
          <p className="font-body-sm text-xs text-secondary leading-relaxed">
            Consumer range anxiety and residual value volatility push automakers back toward flexible dual-powertrain assemblies.
          </p>
          <div className="text-byline font-byline text-secondary text-xs">By JACK EWING • 2h ago</div>
        </div>
      </div>

      {/* Arts, Leisure & Culture (Span 4) */}
      <div className="lg:col-span-4 space-y-6">
        <div className="border-b border-primary pb-1">
          <h4 className="font-kicker text-kicker uppercase tracking-widest font-extrabold text-primary text-xs">
            ARTS &amp; LEISURE
          </h4>
        </div>

        {/* Arts Story 1 */}
        <div className="space-y-2">
          <div
            onClick={() => onSelectArticle(broadwayArticle)}
            className="aspect-[16/9] w-full overflow-hidden bg-surface-container mb-2 cursor-pointer group"
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="Stage play with two actors under spotlight"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0kFe0EVbwa4E8xlillmSyM_oHrbGZaIDcOl4ENenLj3FbwtZp8vhYCgtDgBgIhocA9gNp726u26I7Lr80rXA_aWwjA87YvEFWMzmSQ6JUI6GXQiBYrAtbEt2pw9dkSbYV6fvxJrya9tWzF-LBPQYw5LnKg0xu4tVZlYp0ggeVihfaLm-SC7OfYmqvQpxbjLZm3g1G6tVQAXhSq41JjR2NRHXMlMRxSZoq3NmyVFvLXsEkt68v9pvk"
            />
          </div>
          <h4
            onClick={() => onSelectArticle(broadwayArticle)}
            className="font-headline-sm text-lg font-bold text-primary hover:underline cursor-pointer leading-snug"
          >
            A Triumphant Return to Broadway in an Intimate, Stripped-Down Revival
          </h4>
          <p className="font-body-sm text-xs sm:text-sm text-secondary leading-relaxed">
            Director Sam Gold’s radical re-staging of the classical tragedy discards ornate scenic illusions in favor of raw emotional proximity.
          </p>
          <div className="text-byline font-byline text-secondary text-xs">
            By JESSE GREEN (Chief Theater Critic)
          </div>
        </div>

        <div className="w-full h-[1px] bg-surface-variant"></div>

        {/* Arts Story 2 */}
        <div className="space-y-1">
          <span className="font-kicker text-kicker uppercase text-secondary tracking-widest block text-xs font-bold">
            BOOK REVIEW
          </span>
          <h5
            onClick={() => onSelectArticle(pynchonArticle)}
            className="font-headline-sm text-[16px] leading-[22px] font-bold text-primary hover:underline cursor-pointer"
          >
            The Architect of Modern Anonymity: A Biography of Thomas Pynchon
          </h5>
          <div className="text-byline font-byline text-secondary text-xs">Reviewed by DWIGHT GARNER</div>
        </div>
      </div>
    </section>
  );
}
