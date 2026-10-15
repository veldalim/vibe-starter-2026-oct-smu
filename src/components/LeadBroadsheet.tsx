import React from 'react';
import { ArrowRight, ChevronRight, BarChart3 } from 'lucide-react';
import { Article } from '../types';
import { HERO_ARTICLE, ARTICLES_DATA } from '../data/mockArticles';

interface LeadBroadsheetProps {
  onSelectArticle: (article: Article) => void;
  onOpenDataTracker: () => void;
}

export default function LeadBroadsheet({ onSelectArticle, onOpenDataTracker }: LeadBroadsheetProps) {
  const getArticle = (id: string): Article => {
    return ARTICLES_DATA.find(a => a.id === id) || HERO_ARTICLE;
  };

  const centralBanksArticle = getArticle('global-central-banks-pivot');
  const supremeCourtArticle = getArticle('supreme-court-water-rights');
  const ruralHospitalsArticle = getArticle('rural-hospitals-maternity-wards');
  const backchannelArticle = getArticle('backchannel-diplomacy-consensus');
  const friedmanArticle = getArticle('opinion-friedman-fracture');
  const ezraKleinArticle = getArticle('opinion-ezra-klein-speed');
  const atwoodArticle = getArticle('opinion-margaret-atwood-intuition');
  const editorialBoardArticle = getArticle('editorial-board-enforcement');

  return (
    <div className="w-full">
      {/* Live Updates Ribbon */}
      <section className="w-full border-t border-b border-surface-variant bg-surface-container-lowest py-3 px-4 mb-6 transition-all hover:bg-surface-bright">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start lg:items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 bg-[#ba1a1a] text-on-error font-kicker text-kicker uppercase px-2 py-0.5 tracking-wider text-[11px] font-extrabold shrink-0">
              <span className="w-2 h-2 rounded-full bg-on-error animate-ping"></span>
              LIVE UPDATES
            </span>
            <h2
              onClick={() => onSelectArticle(HERO_ARTICLE)}
              className="font-headline-sm text-base sm:text-lg font-bold text-primary hover:underline cursor-pointer"
            >
              Global Summit in Geneva: Delegates Weigh Historic Framework for AI &amp; Cybersecurity Safeguards
            </h2>
          </div>
          <div className="flex items-center gap-5 overflow-x-auto no-scrollbar text-caption font-label-nav text-on-surface-variant shrink-0 text-xs">
            <button
              onClick={() => onSelectArticle(HERO_ARTICLE)}
              className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer group whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a]"></span>
              <span className="font-medium group-hover:underline">U.S. and European envoys draft joint standard</span>
            </button>
            <span className="text-outline-variant select-none">•</span>
            <button
              onClick={() => onSelectArticle(backchannelArticle)}
              className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer group whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a]"></span>
              <span className="font-medium group-hover:underline">Key tech leaders testify in morning session</span>
            </button>
            <span className="text-outline-variant select-none">•</span>
            <button
              onClick={() => onSelectArticle(centralBanksArticle)}
              className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer group whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
              <span className="font-medium group-hover:underline">Market reaction remains cautious</span>
            </button>
          </div>
        </div>
      </section>

      {/* Lead Editorial Multi-Column Broadsheet Grid */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-primary pb-10 mb-10">
        {/* Left Column: Top Investigative & National News (Span 3) */}
        <article className="lg:col-span-3 flex flex-col justify-between pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-surface-variant pb-8 lg:pb-0 space-y-6">
          {/* Story 1: Global Central Banks */}
          <div className="space-y-2">
            <span className="font-kicker text-kicker uppercase text-secondary tracking-widest block text-[11px] font-bold">
              ECONOMIC POLICY
            </span>
            <h3
              onClick={() => onSelectArticle(centralBanksArticle)}
              className="font-headline-md text-xl sm:text-2xl font-bold text-primary hover:text-secondary cursor-pointer transition-colors leading-tight"
            >
              Global Central Banks Signal Pivot as Growth Resumes and Inflation Moderates
            </h3>
            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
              <span className="font-kicker text-[11px] font-bold text-primary mr-1">WASHINGTON —</span>
              With core gauges reaching pre-pandemic norms across three continents, governors convene behind closed doors to orchestrate an orderly transition toward gradual rate normalization.
            </p>
            <div className="flex items-center justify-between text-byline font-byline text-secondary pt-1 text-[11px]">
              <span>By JEANNA SMIALEK and PATRICIA COHEN</span>
              <span className="text-caption font-label-nav text-outline">7 MIN READ</span>
            </div>
          </div>

          <div className="w-full h-[1px] bg-surface-variant"></div>

          {/* Story 2: Supreme Court */}
          <div className="space-y-2">
            <span className="font-kicker text-kicker uppercase text-secondary tracking-widest block text-[11px] font-bold">
              SUPREME COURT
            </span>
            <h4
              onClick={() => onSelectArticle(supremeCourtArticle)}
              className="font-headline-sm text-lg font-bold text-primary hover:text-secondary cursor-pointer transition-colors leading-snug"
            >
              High Court Weighs Limits on Federal Regulatory Scope in Landmark Water Rights Case
            </h4>
            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
              Justices heard contentious oral arguments concerning Western river basin allocations, in a dispute that could redefine federal agency authority.
            </p>
            <div className="flex items-center gap-2 text-byline font-byline text-secondary text-[11px]">
              <span>By ADAM LIPTAK</span>
              <span>•</span>
              <span className="text-caption font-label-nav">38m ago</span>
            </div>
          </div>

          <div className="w-full h-[1px] bg-surface-variant"></div>

          {/* Story 3 with thumbnail: Rural Hospitals */}
          <div
            onClick={() => onSelectArticle(ruralHospitalsArticle)}
            className="flex gap-4 items-start cursor-pointer group"
          >
            <div className="flex-1 space-y-1">
              <span className="font-kicker text-kicker uppercase text-secondary tracking-widest block text-[11px] font-bold">
                HEALTH CARE
              </span>
              <h4 className="font-headline-sm text-[16px] leading-[22px] font-bold text-primary group-hover:text-secondary transition-colors">
                In Rural Hospitals, a Struggle to Keep Maternity Wards Open
              </h4>
              <p className="font-caption text-caption text-secondary text-xs">By SARAH KLIFF</p>
            </div>
            <div className="w-24 h-20 shrink-0 overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-300"
                alt="Rural hospital hallway"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApeuKbS8OQKG7vlOMr1FF0qi_n80fv-2wwzJbndbe_ThquQzrF_eAKhwhMpQXTxv1m9oz9SKdkRcnNuhYvPca4WpU1_50BJ1m6zjtfYjrz1H7RexdWanRsfui4lFPALMY4yd9OToBvInmLZvzBVnGqIIzP0ZIAaqKvlCvbgJe57a9dlBmL18ITHOHuXCJZmQJndD-yno6CQP4KXucn3JQnRBv0ylGuy-suYKre_LZAVHar7AyKMXQw"
              />
            </div>
          </div>
        </article>

        {/* Center Column: Visual Lead & Dominant Accord Story (Span 6) */}
        <article className="lg:col-span-6 flex flex-col px-0 lg:px-4 border-b lg:border-b-0 lg:border-r border-surface-variant pb-8 lg:pb-0 space-y-5">
          {/* Dominant Hero Photojournalism */}
          <div className="w-full flex flex-col space-y-2">
            <div
              onClick={() => onSelectArticle(HERO_ARTICLE)}
              className="w-full aspect-[16/10] bg-surface-container overflow-hidden relative cursor-pointer group"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                alt={HERO_ARTICLE.imageAlt}
                src={HERO_ARTICLE.imageUrl}
              />
            </div>
            <figcaption className="text-caption font-caption text-secondary flex justify-between items-baseline pt-1 border-b border-surface-variant pb-2 text-xs">
              <span>{HERO_ARTICLE.imageCaption}</span>
              <span className="text-outline font-label-nav text-[11px] shrink-0 ml-2">
                {HERO_ARTICLE.imageCredit}
              </span>
            </figcaption>
          </div>

          {/* Hero Headline & Analysis Deck */}
          <div className="space-y-3">
            <span className="font-kicker text-kicker uppercase text-error tracking-widest font-extrabold flex items-center gap-1.5 text-[11px]">
              <span className="w-1.5 h-1.5 bg-[#ba1a1a] inline-block"></span>
              ACCORD REACHED
            </span>
            <h2
              onClick={() => onSelectArticle(HERO_ARTICLE)}
              className="font-headline-hero text-[32px] sm:text-[40px] lg:text-[46px] leading-[36px] sm:leading-[44px] lg:leading-[50px] font-bold text-primary hover:text-on-surface-variant cursor-pointer transition-colors"
            >
              In Unprecedented Accord, Major Powers Agree on Common Guardrails for Frontier Models
            </h2>
            <p className="font-subhead-italic text-lg sm:text-xl text-secondary italic leading-relaxed">
              {HERO_ARTICLE.subhead}
            </p>
            <p className="font-body-md text-base text-on-surface leading-relaxed pt-1">
              <span className="font-kicker text-[11px] font-bold text-primary mr-1">GENEVA —</span>
              {HERO_ARTICLE.summary}
            </p>

            {/* Deep dive interactive tracker CTA block */}
            <div className="bg-surface-container-low p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-caption font-label-nav border border-surface-variant">
              <div className="flex items-center gap-2.5">
                <BarChart3 className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="font-bold text-primary mr-1">Interactive Tracker:</span>
                  <span className="text-secondary">Comparing commitments across all 34 participant states</span>
                </div>
              </div>
              <button
                onClick={onOpenDataTracker}
                className="text-primary font-bold hover:underline shrink-0 flex items-center gap-1 cursor-pointer uppercase text-xs tracking-wider"
              >
                EXPLORE THE DATA <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Supporting Secondary Story */}
          <div className="pt-4 border-t border-surface-variant space-y-2">
            <span className="font-kicker text-kicker uppercase text-secondary tracking-widest block text-[11px] font-bold">
              DIPLOMATIC DISPATCH
            </span>
            <h4
              onClick={() => onSelectArticle(backchannelArticle)}
              className="font-headline-sm text-lg font-bold text-primary hover:underline cursor-pointer"
            >
              How Six Months of Backchannel Diplomacy Paved the Way for Consensus
            </h4>
            <p className="font-body-sm text-sm text-secondary leading-relaxed">
              Behind quiet weekend retreats in Stockholm and Zurich, technical advisors built common verbiage that sidestepped traditional geopolitical friction points.
            </p>
            <div className="text-byline font-byline text-secondary text-[11px]">
              By STEVEN ERLANGER and DAVID E. SANGER
            </div>
          </div>
        </article>

        {/* Right Column: Opinion & Columnists (Span 3) */}
        <aside className="lg:col-span-3 flex flex-col pl-0 lg:pl-6 space-y-6">
          <div className="flex items-center justify-between border-b-2 border-primary pb-1">
            <h3 className="font-kicker text-[13px] tracking-wider uppercase font-extrabold text-primary">
              OPINION
            </h3>
            <button
              onClick={() => onSelectArticle(friedmanArticle)}
              className="text-caption font-label-nav text-secondary hover:text-primary cursor-pointer uppercase text-[11px] font-semibold"
            >
              ALL ESSAYS →
            </button>
          </div>

          {/* Opinion Item 1: Thomas Friedman */}
          <div className="space-y-3 pb-5 border-b border-surface-variant">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full object-cover border border-surface-variant"
                alt="Thomas L. Friedman"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5fbVBm8Lobxj45U_0txp7onRPCEu_9-ab6_Wk2s76xNePrG3GcBGYpumzG9EHSAeVw2YGSq_TsccM2sjmpXd3GT2KduXTilzk0eSYRSjYAxtlemtaOf_gk_9vlKk01y1SpBpWGtYBnKxtwbXZjBE4wTLmxdm4BVdXCJTxotLPqXAz4Zke0M_o91HvasekeNWrbvDZdg9EiVxFgeB29sgH3jjxA__Q0YVVj09lclGiK1ESfYbK1qNO"
              />
              <div>
                <span className="font-byline text-[11px] tracking-wider uppercase font-bold text-primary block">
                  THOMAS L. FRIEDMAN
                </span>
                <span className="font-caption text-[11px] text-secondary">Contributing Columnist</span>
              </div>
            </div>
            <h4
              onClick={() => onSelectArticle(friedmanArticle)}
              className="font-headline-sm text-[18px] leading-[24px] italic font-normal text-primary hover:text-secondary cursor-pointer transition-colors"
            >
              "The Real Crisis Isn’t the Machines. It’s Our Fracture."
            </h4>
            <p className="font-body-sm text-xs text-secondary leading-relaxed">
              We are constructing artificial intellects that can converse with the gods, while retaining political institutions that struggle to address basic infrastructure.
            </p>
          </div>

          {/* Opinion Item 2: Ezra Klein */}
          <div className="space-y-3 pb-5 border-b border-surface-variant">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full object-cover border border-surface-variant"
                alt="Ezra Klein"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy63L67XLcTxN0S6CN6241B_wiTbRk4rb0beiyp3fk6FB-h0Us0U-uoqSE7aDjn06IKWXJT409S8ZODcOa-oP3ERbH-tf8h5CP9ucQus_kUjpXYlI5qqkPx_ICxnq20IFIT87rx_Y_jLspAlinM64SVB_zR7yWgfWnFKupdIkuYWNpnX4PdHhn0VGqNLswVDFdvMYI86FQUV69zL1JG3aQa2Sc1SW9n4gCgpxKMNDHPoIKg8fb0dsK"
              />
              <div>
                <span className="font-byline text-[11px] tracking-wider uppercase font-bold text-primary block">
                  EZRA KLEIN
                </span>
                <span className="font-caption text-[11px] text-secondary">Opinion Columnist</span>
              </div>
            </div>
            <h4
              onClick={() => onSelectArticle(ezraKleinArticle)}
              className="font-headline-sm text-[18px] leading-[24px] italic font-normal text-primary hover:text-secondary cursor-pointer transition-colors"
            >
              "Why Government Is Moving Faster Than Expected on Tech"
            </h4>
            <p className="font-body-sm text-xs text-secondary leading-relaxed">
              The standard trope is that civil servants are hopelessly outmatched by Silicon Valley coders. Geneva proved that hypothesis wrong.
            </p>
          </div>

          {/* Opinion Item 3: Guest Essay Atwood */}
          <div className="space-y-2 pb-5 border-b border-surface-variant">
            <span className="font-kicker text-kicker uppercase text-secondary tracking-widest block text-[11px] font-bold">
              GUEST ESSAY
            </span>
            <h4
              onClick={() => onSelectArticle(atwoodArticle)}
              className="font-headline-sm text-[17px] leading-[23px] font-bold text-primary hover:underline cursor-pointer"
            >
              What Thirty Years in the Classroom Taught Me About Creative Intuition
            </h4>
            <div className="font-byline text-byline text-primary text-[11px]">By MARGARET ATWOOD</div>
            <p className="font-body-sm text-xs text-secondary leading-relaxed">
              True craft is not predictive token modeling. It is the unquantifiable friction of doubt, error, and physical mortality.
            </p>
          </div>

          {/* Opinion Item 4: Editorial Board */}
          <div className="space-y-2 pb-5 border-b border-surface-variant bg-surface-container-low p-3.5 border border-surface-variant">
            <span className="font-kicker text-kicker uppercase text-primary tracking-widest block font-extrabold text-[11px]">
              THE EDITORIAL BOARD
            </span>
            <h4
              onClick={() => onSelectArticle(editorialBoardArticle)}
              className="font-headline-sm text-[16px] leading-[22px] font-bold text-primary hover:underline cursor-pointer"
            >
              A Constructive First Step, but the Enforcement Challenge Awaits
            </h4>
            <p className="font-body-sm text-[12px] leading-[17px] text-secondary">
              Without statutory penalties and verified inspections, even the most eloquent diplomatic communiqués remain voluntary recommendations.
            </p>
          </div>

          {/* Letters Teaser */}
          <button
            onClick={() => onSelectArticle(editorialBoardArticle)}
            className="flex items-center justify-between text-caption font-label-nav text-secondary hover:text-primary cursor-pointer py-1"
          >
            <span className="font-semibold uppercase tracking-wider text-[11px]">LETTERS TO THE EDITOR (14)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </aside>
      </section>
    </div>
  );
}
