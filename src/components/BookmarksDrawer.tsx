import React from 'react';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onRemoveBookmark: (articleId: string) => void;
  onSelectArticle: (article: Article) => void;
}

export default function BookmarksDrawer({
  isOpen,
  onClose,
  savedArticles,
  onRemoveBookmark,
  onSelectArticle
}: BookmarksDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-surface-container-lowest max-w-md w-full h-full shadow-2xl border-l border-primary p-6 flex flex-col">
        <div className="flex items-center justify-between pb-4 border-b border-primary">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-primary fill-current" />
            <h2 className="font-headline-md text-xl font-bold">Saved Articles</h2>
            <span className="text-xs bg-surface-container-high px-2 py-0.5 font-mono font-bold rounded-full">
              {savedArticles.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-secondary hover:text-primary transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {savedArticles.length === 0 ? (
            <div className="text-center py-12 space-y-2 text-secondary font-label-nav">
              <Bookmark className="w-8 h-8 mx-auto stroke-1 text-outline" />
              <div className="font-bold text-primary">No saved articles yet</div>
              <p className="text-xs max-w-xs mx-auto">
                Click the bookmark icon on any article card or while reading to save it for offline reading later.
              </p>
            </div>
          ) : (
            savedArticles.map(article => (
              <div
                key={article.id}
                className="p-3 border border-surface-variant hover:border-primary transition-colors bg-surface-container-low group relative"
              >
                <div className="flex justify-between items-start">
                  <span className="font-kicker text-[10px] uppercase font-bold text-secondary">
                    {article.kicker}
                  </span>
                  <button
                    onClick={() => onRemoveBookmark(article.id)}
                    className="text-secondary hover:text-error p-1 transition-colors cursor-pointer"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <h4
                  onClick={() => {
                    onSelectArticle(article);
                    onClose();
                  }}
                  className="font-headline-sm text-sm font-bold text-primary hover:underline cursor-pointer mt-1"
                >
                  {article.title}
                </h4>
                <div className="flex items-center justify-between text-[11px] font-label-nav text-secondary mt-2">
                  <span>{article.byline}</span>
                  <button
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                    className="flex items-center gap-0.5 font-bold text-primary hover:underline cursor-pointer"
                  >
                    Read <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {savedArticles.length > 0 && (
          <div className="pt-3 border-t border-surface-variant text-caption text-secondary font-label-nav flex justify-between items-center">
            <span>Reading list synced</span>
            <span className="text-[11px] text-outline">Offline ready</span>
          </div>
        )}
      </div>
    </div>
  );
}
