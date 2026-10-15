import React, { useState } from 'react';
import { X, Bookmark, Share2, Volume2, VolumeX, Play, Pause, ThumbsUp, MessageSquare, Send, Check } from 'lucide-react';
import { Article, ArticleComment } from '../types';

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
  onOpenDataTracker?: () => void;
}

export default function ArticleModal({
  article,
  isOpen,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onOpenDataTracker
}: ArticleModalProps) {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [comments, setComments] = useState<ArticleComment[]>(article?.comments || []);
  const [newCommentText, setNewCommentText] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');

  if (!isOpen || !article) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: ArticleComment = {
      id: `user-${Date.now()}`,
      author: commentAuthor.trim() || 'Reader',
      location: 'New York, NY',
      timestamp: 'Just now',
      content: newCommentText.trim(),
      likes: 1
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
  };

  const handleLikeComment = (commentId: string) => {
    setComments(prev =>
      prev.map(c => (c.id === commentId ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  const fontSizeClasses = {
    normal: 'text-base leading-relaxed',
    large: 'text-lg leading-loose',
    xlarge: 'text-xl leading-loose'
  }[fontSize];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-surface-container-lowest max-w-3xl w-full border border-primary shadow-2xl relative my-auto max-h-[96vh] flex flex-col">
        {/* Sticky Utility Bar */}
        <div className="sticky top-0 z-20 bg-surface-container-lowest/95 backdrop-blur-xs border-b border-surface-variant px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-kicker text-kicker uppercase tracking-widest font-extrabold text-primary">
              {article.kicker}
            </span>
            <span className="text-outline-variant">|</span>
            <span className="text-caption font-label-nav text-secondary">{article.readTime}</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Audio narration simulation */}
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-label-nav rounded cursor-pointer transition-colors ${
                isPlayingAudio ? 'bg-primary text-on-primary' : 'bg-surface-container hover:bg-surface-container-high text-primary'
              }`}
              title="Listen to story"
            >
              {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isPlayingAudio ? 'Playing 0:45' : 'Listen (5m)'}</span>
            </button>

            {/* Font size toggles */}
            <div className="hidden sm:flex items-center border border-surface-variant rounded">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-0.5 text-xs font-serif ${fontSize === 'normal' ? 'bg-primary text-on-primary font-bold' : 'text-secondary hover:text-primary'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-0.5 text-sm font-serif ${fontSize === 'large' ? 'bg-primary text-on-primary font-bold' : 'text-secondary hover:text-primary'}`}
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-0.5 text-base font-serif ${fontSize === 'xlarge' ? 'bg-primary text-on-primary font-bold' : 'text-secondary hover:text-primary'}`}
              >
                A++
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                isBookmarked ? 'text-primary bg-surface-container-high' : 'text-secondary hover:text-primary'
              }`}
              title={isBookmarked ? 'Saved to bookmarks' : 'Save article'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-1.5 text-secondary hover:text-primary transition-colors cursor-pointer relative"
              title="Share article"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1 text-secondary hover:text-primary transition-colors cursor-pointer ml-1"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto px-6 sm:px-12 py-8 space-y-6">
          {/* Article Header */}
          <div className="space-y-3 border-b border-surface-variant pb-6">
            <h1 className="font-headline-hero text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
              {article.title}
            </h1>

            {article.subhead && (
              <p className="font-subhead-italic text-lg sm:text-xl text-secondary italic leading-snug">
                {article.subhead}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-between text-byline font-byline text-secondary pt-3 gap-2">
              <div className="flex items-center gap-3">
                {article.authorImage && (
                  <img
                    src={article.authorImage}
                    alt={article.byline}
                    className="w-10 h-10 rounded-full object-cover border border-surface-variant"
                  />
                )}
                <div>
                  <div className="font-bold text-primary uppercase tracking-wider">{article.byline}</div>
                  {article.bylineRole && <div className="text-caption text-secondary">{article.bylineRole}</div>}
                </div>
              </div>
              <div className="text-caption font-label-nav text-outline">{article.timestamp}</div>
            </div>
          </div>

          {/* Lead Photojournalism Image if present */}
          {article.imageUrl && (
            <div className="w-full space-y-2">
              <div className="w-full aspect-[16/10] bg-surface-container overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.imageAlt || article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {article.imageCaption && (
                <figcaption className="text-caption font-caption text-secondary flex justify-between items-baseline pt-1 border-b border-surface-variant pb-2">
                  <span>{article.imageCaption}</span>
                  {article.imageCredit && (
                    <span className="text-outline font-label-nav text-[11px] shrink-0 ml-2">
                      {article.imageCredit}
                    </span>
                  )}
                </figcaption>
              )}
            </div>
          )}

          {/* Interactive Tracker Teaser Banner inside lead article */}
          {article.hasInteractiveTracker && (
            <div className="bg-surface-container-low p-4 border border-surface-variant flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-caption font-label-nav">
              <div className="space-y-0.5">
                <div className="font-bold text-primary uppercase tracking-wider">
                  Interactive Tracker: Comparing commitments across all 34 participant states
                </div>
                <div className="text-secondary">
                  Access official thresholds, inspection protocol timelines, and verification enclaves.
                </div>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenDataTracker?.();
                }}
                className="px-4 py-2 bg-primary text-on-primary font-kicker text-xs uppercase font-bold tracking-wider hover:bg-surface-container-highest hover:text-primary transition-colors cursor-pointer shrink-0"
              >
                Explore The Data →
              </button>
            </div>
          )}

          {/* Article Text Content */}
          <div className={`space-y-5 font-body-md text-on-surface ${fontSizeClasses}`}>
            {article.fullContent.map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'first-letter:text-5xl first-letter:font-headline-hero first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-primary leading-relaxed'
                    : 'leading-relaxed'
                }
              >
                {idx === 0 && article.location && (
                  <span className="font-kicker text-xs font-bold text-primary mr-1">
                    {article.location} —
                  </span>
                )}
                {paragraph}
              </p>
            ))}
          </div>

          {/* Pull quote if available */}
          {article.pullQuote && (
            <div className="my-8 py-6 border-t-2 border-b-2 border-primary text-center px-4">
              <blockquote className="font-headline-md text-xl sm:text-2xl italic font-normal text-primary leading-snug">
                “{article.pullQuote.quote}”
              </blockquote>
              <cite className="block text-byline font-byline text-secondary uppercase tracking-widest mt-3 not-italic">
                — {article.pullQuote.attribution}
              </cite>
            </div>
          )}

          {/* Comments Section */}
          <div className="pt-8 border-t border-primary space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h3 className="font-headline-sm text-lg font-bold">Reader Discussion ({comments.length})</h3>
              </div>
              <span className="text-caption font-label-nav text-secondary">Moderated by NYT editors</span>
            </div>

            {/* Post comment box */}
            <form onSubmit={handleAddComment} className="bg-surface-container-low p-4 border border-surface-variant space-y-3">
              <div className="text-xs font-label-nav font-bold uppercase tracking-wider text-primary">
                Join the conversation
              </div>
              <input
                type="text"
                placeholder="Your name or handle..."
                value={commentAuthor}
                onChange={e => setCommentAuthor(e.target.value)}
                className="w-full bg-surface-container-lowest border border-surface-variant px-3 py-1.5 text-xs font-label-nav focus:outline-none focus:border-primary"
              />
              <textarea
                rows={3}
                placeholder="Share your perspective on this report..."
                value={newCommentText}
                onChange={e => setNewCommentText(e.target.value)}
                className="w-full bg-surface-container-lowest border border-surface-variant p-3 text-xs font-label-nav focus:outline-none focus:border-primary resize-none"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!newCommentText.trim()}
                  className="flex items-center gap-1.5 px-4 py-2 bg-primary text-on-primary font-kicker text-xs uppercase font-bold tracking-wider hover:bg-surface-container-highest hover:text-primary transition-colors cursor-pointer disabled:opacity-40"
                >
                  <Send className="w-3.5 h-3.5" /> Submit Comment
                </button>
              </div>
            </form>

            {/* Comments list */}
            <div className="space-y-4">
              {comments.map(c => (
                <div key={c.id} className="p-4 border border-surface-variant bg-surface-container-lowest space-y-2">
                  <div className="flex items-center justify-between text-xs font-label-nav">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-primary">{c.author}</span>
                      <span className="text-secondary">{c.location}</span>
                      {c.isEditorsPick && (
                        <span className="bg-[#1c1b1b] text-on-primary text-[10px] px-1.5 py-0.5 uppercase tracking-wider font-bold">
                          NYT Pick
                        </span>
                      )}
                    </div>
                    <span className="text-secondary text-[11px]">{c.timestamp}</span>
                  </div>
                  <p className="text-xs font-body-sm text-on-surface leading-relaxed">{c.content}</p>
                  <div className="flex items-center justify-end pt-1">
                    <button
                      onClick={() => handleLikeComment(c.id)}
                      className="flex items-center gap-1 text-[11px] text-secondary hover:text-primary transition-colors cursor-pointer font-label-nav"
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>{c.likes} Recommended</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
