import React from 'react';
import { ArrowLeft, Clock, Bookmark } from 'lucide-react';
import { SectionId, Article } from '../types';
import { ARTICLES_DATA } from '../data/mockArticles';

interface SectionViewProps {
  sectionId: SectionId;
  onBackToFrontPage: () => void;
  onSelectArticle: (article: Article) => void;
  onToggleBookmark: (articleId: string) => void;
  savedArticleIds: string[];
}

export default function SectionView({
  sectionId,
  onBackToFrontPage,
  onSelectArticle,
  onToggleBookmark,
  savedArticleIds
}: SectionViewProps) {
  const sectionTitles: Record<SectionId, { title: string; subtitle: string }> = {
    'front-page': { title: 'Today\'s Front Page', subtitle: 'National & Global Broadsheet' },
    'world': { title: 'World News', subtitle: 'Global dispatches, diplomacy, and international developments' },
    'politics': { title: 'Politics & Law', subtitle: 'Capitol Hill, Supreme Court, and presidential campaigns' },
    'business': { title: 'Business & Economy', subtitle: 'Central banking, corporate strategy, labor, and markets' },
    'opinion': { title: 'The Opinion Pages', subtitle: 'Editorials, contributing columnists, and guest essays' },
    'tech': { title: 'Technology & Frontier Computing', subtitle: 'Silicon Valley, artificial intelligence, chip architecture, and digital policy' },
    'science': { title: 'Science & Cosmos', subtitle: 'Space exploration, astrophysics, and climate diagnostics' },
    'health': { title: 'Health & Medicine', subtitle: 'Public health systems, clinical breakthroughs, and rural healthcare' },
    'sports': { title: 'Sports & Athletics', subtitle: 'Tactical analysis, global championships, and investigative sports reporting' },
    'arts': { title: 'Arts & Culture', subtitle: 'Broadway revivals, museum exhibitions, cinema, and music critique' },
    'books': { title: 'The Book Review', subtitle: 'Author biographies, fiction critiques, and Sunday essays' },
    'style': { title: 'Style & Design', subtitle: 'Fashion houses, industrial design, and cultural aesthetics' },
    'food': { title: 'Food & Dining', subtitle: 'Restaurant reviews, culinary journeys, and market provisions' },
    'travel': { title: 'Travel & Expeditions', subtitle: '36 Hours itineraries and sustainable exploration' },
    'magazine': { title: 'The New York Times Magazine', subtitle: 'Narrative long-form journalism and photo-essays' },
    'games': { title: 'NYT Games', subtitle: 'Wordle, Spelling Bee, The Crossword, and Connections' },
    'cooking': { title: 'NYT Cooking', subtitle: 'Everyday weeknight dinners, holiday baking, and kitchen guides' },
    'wirecutter': { title: 'Wirecutter', subtitle: 'Independent lab product reviews, tester picks, and consumer advice' },
    'the-athletic': { title: 'The Athletic', subtitle: 'In-depth tactical tape, team coverage, and sports storytelling' }
  };

  const meta = sectionTitles[sectionId] || { title: sectionId.toUpperCase(), subtitle: 'Latest reporting' };

  // Filter matching articles for this section or return related articles
  let sectionArticles = ARTICLES_DATA.filter(a => a.section === sectionId);
  if (sectionArticles.length === 0) {
    // Fallback: show top stories with a banner
    sectionArticles = ARTICLES_DATA.slice(0, 4);
  }

  const leadStory = sectionArticles[0];
  const otherStories = sectionArticles.slice(1);

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-200">
      {/* Return button & section header */}
      <div className="border-b-2 border-primary pb-4">
        <button
          onClick={onBackToFrontPage}
          className="flex items-center gap-1.5 text-xs font-label-nav text-secondary hover:text-primary transition-colors cursor-pointer mb-3 uppercase tracking-wider font-bold"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Front Page
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <span className="font-kicker text-kicker uppercase tracking-widest text-primary font-extrabold text-xs block">
              THE NEW YORK TIMES • SECTION
            </span>
            <h1 className="font-headline-hero text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-1">
              {meta.title}
            </h1>
          </div>
          <p className="font-body-sm text-xs sm:text-sm text-secondary max-w-md">
            {meta.subtitle}
          </p>
        </div>
      </div>

      {/* Lead Story for this section */}
      {leadStory && (
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-surface-variant pb-8">
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="font-kicker text-kicker uppercase text-error tracking-widest font-extrabold text-xs">
                {leadStory.kicker}
              </span>
              <h2
                onClick={() => onSelectArticle(leadStory)}
                className="font-headline-hero text-2xl sm:text-3xl lg:text-4xl font-bold text-primary hover:text-secondary cursor-pointer leading-tight transition-colors"
              >
                {leadStory.title}
              </h2>
              {leadStory.subhead && (
                <p className="font-subhead-italic text-base sm:text-lg text-secondary italic">
                  {leadStory.subhead}
                </p>
              )}
              <p className="font-body-md text-sm text-on-surface leading-relaxed">
                {leadStory.summary}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-label-nav text-secondary pt-2">
              <span className="font-bold text-primary">{leadStory.byline}</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {leadStory.readTime}
                </span>
                <button
                  onClick={() => onToggleBookmark(leadStory.id)}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  <Bookmark
                    className={`w-4 h-4 ${savedArticleIds.includes(leadStory.id) ? 'fill-current text-primary' : ''}`}
                  />
                </button>
              </div>
            </div>
          </div>

          {leadStory.imageUrl && (
            <div className="lg:col-span-5 aspect-[16/10] overflow-hidden bg-surface-container">
              <img
                src={leadStory.imageUrl}
                alt={leadStory.imageAlt || leadStory.title}
                className="w-full h-full object-cover cursor-pointer hover:scale-102 transition-transform duration-500"
                onClick={() => onSelectArticle(leadStory)}
              />
            </div>
          )}
        </article>
      )}

      {/* Grid of other stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherStories.map(story => (
          <div
            key={story.id}
            className="flex flex-col justify-between border-b border-surface-variant pb-6 group"
          >
            <div className="space-y-2">
              {story.imageUrl && (
                <div
                  onClick={() => onSelectArticle(story)}
                  className="aspect-[16/10] w-full overflow-hidden bg-surface-container mb-3 cursor-pointer"
                >
                  <img
                    src={story.imageUrl}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <span className="font-kicker text-kicker uppercase text-secondary tracking-widest font-bold text-[10px]">
                {story.kicker}
              </span>
              <h3
                onClick={() => onSelectArticle(story)}
                className="font-headline-sm text-lg font-bold text-primary group-hover:underline cursor-pointer leading-snug"
              >
                {story.title}
              </h3>
              <p className="font-body-sm text-xs text-secondary leading-relaxed line-clamp-3">
                {story.summary}
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] font-label-nav text-secondary mt-4 pt-2 border-t border-surface-variant">
              <span>{story.byline}</span>
              <button
                onClick={() => onToggleBookmark(story.id)}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                <Bookmark
                  className={`w-3.5 h-3.5 ${savedArticleIds.includes(story.id) ? 'fill-current text-primary' : ''}`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
