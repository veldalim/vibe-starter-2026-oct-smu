import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export default function SearchModal({ isOpen, onClose, articles, onSelectArticle }: SearchModalProps) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = articles.filter(a => {
    if (!query.trim()) return false;
    const q = query.toLowerCase();
    return (
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.byline.toLowerCase().includes(q) ||
      a.kicker.toLowerCase().includes(q) ||
      a.section.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-xs p-4 pt-16 animate-in fade-in duration-200">
      <div className="bg-surface-container-lowest max-w-2xl w-full border border-primary shadow-2xl p-6 relative flex flex-col max-h-[85vh]">
        <div className="flex items-center justify-between pb-3 border-b border-primary">
          <div className="flex items-center gap-2 flex-1 mr-4">
            <Search className="w-5 h-5 text-secondary shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="Search The New York Times (e.g. Geneva, tariffs, gnocchi, headphones)..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full text-base font-label-nav focus:outline-none bg-transparent"
            />
          </div>
          <button
            onClick={onClose}
            className="p-1 text-secondary hover:text-primary transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {query.trim() === '' ? (
            <div className="text-secondary font-label-nav text-xs space-y-2">
              <div className="font-bold text-primary uppercase text-[11px] tracking-wider">Suggested Searches:</div>
              <div className="flex flex-wrap gap-2">
                {['Geneva Summit', 'Central Banks', 'Water Rights', 'Wordle', 'Gnocchi Recipe', 'Headphones', 'David Leonhardt'].map(s => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="px-2.5 py-1 bg-surface-container hover:bg-surface-container-high rounded text-xs cursor-pointer text-primary transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-8 text-secondary font-label-nav text-sm">
              No articles found matching "{query}". Try a different search term.
            </div>
          ) : (
            results.map(article => (
              <div
                key={article.id}
                onClick={() => {
                  onSelectArticle(article);
                  onClose();
                }}
                className="p-3 border border-surface-variant hover:border-primary transition-colors cursor-pointer bg-surface-container-low hover:bg-surface-bright group"
              >
                <div className="flex items-center gap-2 text-[10px] font-kicker uppercase font-bold text-secondary">
                  <span>{article.kicker}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h4 className="font-headline-sm text-base font-bold text-primary group-hover:underline mt-0.5">
                  {article.title}
                </h4>
                <p className="font-body-sm text-xs text-secondary mt-1 line-clamp-2">
                  {article.summary}
                </p>
                <div className="text-byline text-[11px] text-secondary mt-2">
                  {article.byline}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
