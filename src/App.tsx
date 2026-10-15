import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LeadBroadsheet from './components/LeadBroadsheet';
import NewsCultureVerticals from './components/NewsCultureVerticals';
import LowerBroadsheet from './components/LowerBroadsheet';
import SectionView from './components/SectionView';
import Footer from './components/Footer';
import ArticleModal from './components/ArticleModal';
import DataTrackerModal from './components/DataTrackerModal';
import GamesModal from './components/GamesModal';
import RecipeModal from './components/RecipeModal';
import WirecutterModal from './components/WirecutterModal';
import SubscribeModal from './components/SubscribeModal';
import BookmarksDrawer from './components/BookmarksDrawer';
import SearchModal from './components/SearchModal';

import { SectionId, Article } from './types';
import { ARTICLES_DATA, HERO_ARTICLE } from './data/mockArticles';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('front-page');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isDataTrackerOpen, setIsDataTrackerOpen] = useState(false);
  const [gamesModalState, setGamesModalState] = useState<{ isOpen: boolean; initialGame: 'wordle' | 'connections' | 'mini' }>({
    isOpen: false,
    initialGame: 'wordle'
  });
  const [isRecipeOpen, setIsRecipeOpen] = useState(false);
  const [isWirecutterOpen, setIsWirecutterOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [paperTheme, setPaperTheme] = useState<'newsprint' | 'sepia' | 'dark'>('newsprint');
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>([
    'geneva-accord-frontier-models',
    'cooking-crispy-gnocchi'
  ]);

  useEffect(() => {
    if (paperTheme === 'newsprint') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', paperTheme);
    }
  }, [paperTheme]);

  const handleToggleBookmark = (articleId: string) => {
    setSavedArticleIds(prev =>
      prev.includes(articleId) ? prev.filter(id => id !== articleId) : [...prev, articleId]
    );
  };

  const handleOpenGames = (game: 'wordle' | 'connections' | 'mini' = 'wordle') => {
    setGamesModalState({ isOpen: true, initialGame: game });
  };

  const savedArticlesList = ARTICLES_DATA.filter(a => savedArticleIds.includes(a.id));
  const athleticArticle = ARTICLES_DATA.find(a => a.id === 'athletic-champions-league') || HERO_ARTICLE;

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col font-body-md antialiased selection:bg-surface-variant transition-colors duration-300">
      {/* Top Masthead & Navigation */}
      <Header
        activeSection={activeSection}
        onSelectSection={sec => {
          if (sec === 'games') {
            handleOpenGames('wordle');
          } else if (sec === 'cooking') {
            setIsRecipeOpen(true);
          } else if (sec === 'wirecutter') {
            setIsWirecutterOpen(true);
          } else {
            setActiveSection(sec);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenGames={handleOpenGames}
        bookmarksCount={savedArticleIds.length}
        isSubscribed={isSubscribed}
        paperTheme={paperTheme}
        onChangePaperTheme={setPaperTheme}
      />

      {/* Main Newspaper Canvas */}
      <main className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1">
        {activeSection === 'front-page' ? (
          <div className="flex flex-col w-full">
            {/* Top Broadsheet: Live Updates, 3-Column Lead & Opinions */}
            <LeadBroadsheet
              onSelectArticle={article => setSelectedArticle(article)}
              onOpenDataTracker={() => setIsDataTrackerOpen(true)}
            />

            {/* Middle Feature Strip: Cooking, Athletic, Games, Wirecutter */}
            <NewsCultureVerticals
              onOpenRecipe={() => setIsRecipeOpen(true)}
              onOpenWirecutter={() => setIsWirecutterOpen(true)}
              onOpenGames={handleOpenGames}
              onSelectArticle={article => setSelectedArticle(article)}
              athleticArticle={athleticArticle}
            />

            {/* Lower Broadsheet: The Morning, Business/Tech, Arts/Leisure */}
            <LowerBroadsheet
              onSelectArticle={article => setSelectedArticle(article)}
            />
          </div>
        ) : (
          <SectionView
            sectionId={activeSection}
            onBackToFrontPage={() => setActiveSection('front-page')}
            onSelectArticle={article => setSelectedArticle(article)}
            onToggleBookmark={handleToggleBookmark}
            savedArticleIds={savedArticleIds}
          />
        )}
      </main>

      {/* Broadsheet Footer */}
      <Footer
        onSelectSection={sec => {
          if (sec === 'games') {
            handleOpenGames('wordle');
          } else if (sec === 'cooking') {
            setIsRecipeOpen(true);
          } else if (sec === 'wirecutter') {
            setIsWirecutterOpen(true);
          } else {
            setActiveSection(sec);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        onOpenGames={handleOpenGames}
      />

      {/* Interactive Modal Screens */}
      <ArticleModal
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        isBookmarked={selectedArticle ? savedArticleIds.includes(selectedArticle.id) : false}
        onToggleBookmark={handleToggleBookmark}
        onOpenDataTracker={() => setIsDataTrackerOpen(true)}
        onSelectRelatedArticle={rel => setSelectedArticle(rel)}
      />

      <DataTrackerModal
        isOpen={isDataTrackerOpen}
        onClose={() => setIsDataTrackerOpen(false)}
      />

      <GamesModal
        isOpen={gamesModalState.isOpen}
        onClose={() => setGamesModalState({ isOpen: false, initialGame: 'wordle' })}
        initialGame={gamesModalState.initialGame}
      />

      <RecipeModal
        isOpen={isRecipeOpen}
        onClose={() => setIsRecipeOpen(false)}
      />

      <WirecutterModal
        isOpen={isWirecutterOpen}
        onClose={() => setIsWirecutterOpen(false)}
      />

      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
        onSubscribed={() => setIsSubscribed(true)}
      />

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        savedArticles={savedArticlesList}
        onRemoveBookmark={handleToggleBookmark}
        onSelectArticle={article => setSelectedArticle(article)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={ARTICLES_DATA}
        onSelectArticle={article => setSelectedArticle(article)}
      />
    </div>
  );
}
