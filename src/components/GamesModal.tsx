import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, RotateCcw, HelpCircle, Check, Award } from 'lucide-react';

interface GamesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGame?: 'wordle' | 'connections' | 'mini';
}

// ----------------- WORDLE -----------------
const WORDLE_SOLUTION = 'TRUTH';
const WORDLE_WORD_LENGTH = 5;
const WORDLE_MAX_GUESSES = 6;

function WordleGame() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleKeyPress = (letter: string) => {
    if (isGameOver) return;
    if (currentGuess.length < WORDLE_WORD_LENGTH) {
      setCurrentGuess(prev => prev + letter);
    }
  };

  const handleBackspace = () => {
    if (isGameOver) return;
    setCurrentGuess(prev => prev.slice(0, -1));
  };

  const handleEnter = () => {
    if (isGameOver) return;
    if (currentGuess.length !== WORDLE_WORD_LENGTH) {
      setErrorMsg('Too short');
      setTimeout(() => setErrorMsg(''), 1500);
      return;
    }

    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    if (currentGuess === WORDLE_SOLUTION) {
      setIsGameOver(true);
      setIsWon(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } else if (newGuesses.length >= WORDLE_MAX_GUESSES) {
      setIsGameOver(true);
      setIsWon(false);
    }
    setCurrentGuess('');
  };

  const getLetterStatus = (letter: string, index: number, word: string) => {
    if (word[index] === WORDLE_SOLUTION[index]) return 'correct';
    if (WORDLE_SOLUTION.includes(letter)) return 'present';
    return 'absent';
  };

  const resetGame = () => {
    setGuesses([]);
    setCurrentGuess('');
    setIsGameOver(false);
    setIsWon(false);
    setErrorMsg('');
  };

  return (
    <div className="flex flex-col items-center max-w-md mx-auto py-2">
      <div className="flex items-center justify-between w-full mb-3 pb-2 border-b border-surface-variant">
        <div>
          <h3 className="font-headline-md text-lg font-bold">Wordle</h3>
          <p className="text-xs text-secondary font-label-nav">No. 1,068 • 6 attempts to solve</p>
        </div>
        <button
          onClick={resetGame}
          className="flex items-center gap-1 text-xs font-label-nav uppercase tracking-wider font-semibold hover:text-primary transition-colors text-secondary cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      {errorMsg && (
        <div className="bg-primary text-on-primary text-xs font-label-nav font-bold px-3 py-1 mb-2 animate-bounce">
          {errorMsg}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-rows-6 gap-1.5 mb-4 w-64">
        {Array.from({ length: WORDLE_MAX_GUESSES }).map((_, rowIndex) => {
          const guess = guesses[rowIndex];
          const isCurrentRow = rowIndex === guesses.length;

          return (
            <div key={rowIndex} className="grid grid-cols-5 gap-1.5 h-11">
              {Array.from({ length: WORDLE_WORD_LENGTH }).map((_, colIndex) => {
                let char = '';
                let status = 'empty';

                if (guess) {
                  char = guess[colIndex] || '';
                  status = getLetterStatus(char, colIndex, guess);
                } else if (isCurrentRow) {
                  char = currentGuess[colIndex] || '';
                  if (char) status = 'tbd';
                }

                let bgClass = 'border-2 border-surface-variant text-primary';
                if (status === 'correct') bgClass = 'bg-[#538d4e] text-white border-[#538d4e]';
                else if (status === 'present') bgClass = 'bg-[#b59f3b] text-white border-[#b59f3b]';
                else if (status === 'absent') bgClass = 'bg-[#787c7e] text-white border-[#787c7e]';
                else if (status === 'tbd') bgClass = 'border-2 border-primary text-primary font-bold';

                return (
                  <div
                    key={colIndex}
                    className={`flex items-center justify-center text-lg font-bold uppercase transition-all duration-300 ${bgClass}`}
                  >
                    {char}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Result feedback */}
      {isGameOver && (
        <div className="mb-4 text-center p-3 bg-surface-container-low border border-surface-variant w-full">
          {isWon ? (
            <div className="text-sm font-bold text-[#137333] font-headline-sm">
              Splendid! You solved today’s Wordle in {guesses.length} {guesses.length === 1 ? 'guess' : 'guesses'}.
            </div>
          ) : (
            <div className="text-sm font-bold text-error font-headline-sm">
              Game Over. The word was <span className="underline">{WORDLE_SOLUTION}</span>.
            </div>
          )}
        </div>
      )}

      {/* On-screen Keyboard */}
      <div className="w-full space-y-1.5 text-xs font-bold font-label-nav select-none">
        {['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'].map((row, rIdx) => (
          <div key={rIdx} className="flex justify-center gap-1">
            {rIdx === 2 && (
              <button
                onClick={handleEnter}
                className="px-2.5 py-3 bg-surface-container-high rounded text-[11px] hover:bg-surface-container-highest cursor-pointer font-bold"
              >
                ENTER
              </button>
            )}
            {row.split('').map(letter => {
              let keyBg = 'bg-surface-container-high hover:bg-surface-container-highest';
              for (const g of guesses) {
                if (g.includes(letter)) {
                  keyBg = 'bg-[#787c7e] text-white';
                }
              }
              for (const g of guesses) {
                for (let i = 0; i < 5; i++) {
                  if (g[i] === letter && WORDLE_SOLUTION[i] === letter) {
                    keyBg = 'bg-[#538d4e] text-white';
                  }
                }
              }
              return (
                <button
                  key={letter}
                  onClick={() => handleKeyPress(letter)}
                  className={`w-7 sm:w-8 h-10 flex items-center justify-center rounded cursor-pointer transition-colors ${keyBg}`}
                >
                  {letter}
                </button>
              );
            })}
            {rIdx === 2 && (
              <button
                onClick={handleBackspace}
                className="px-2.5 py-3 bg-surface-container-high rounded text-[11px] hover:bg-surface-container-highest cursor-pointer font-bold"
              >
                ⌫
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ----------------- CONNECTIONS -----------------
interface ConnectionCategory {
  category: string;
  items: string[];
  color: string;
  bgColor: string;
}

const CONNECTIONS_CATEGORIES: ConnectionCategory[] = [
  {
    category: 'FRONTIER AI VOCABULARY',
    items: ['WEIGHTS', 'TOKENS', 'COMPUTE', 'RED-TEAM'],
    color: '#000000',
    bgColor: '#f9df6d' // Yellow
  },
  {
    category: 'NEWSPAPER BROADSHEET JARGON',
    items: ['BYLINE', 'MASTHEAD', 'KICKER', 'SCOOP'],
    color: '#000000',
    bgColor: '#a0c35a' // Green
  },
  {
    category: 'CULINARY SEARING METHODS',
    items: ['BLISTER', 'CRISP', 'CARAMELIZE', 'BROWN'],
    color: '#ffffff',
    bgColor: '#b0c4de' // Blue
  },
  {
    category: 'WORDS BEFORE "BOARD"',
    items: ['CIRCUIT', 'SPRING', 'CHESS', 'SMORGAS'],
    color: '#ffffff',
    bgColor: '#ba81c5' // Purple
  }
];

function ConnectionsGame() {
  const [shuffledItems, setShuffledItems] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [solvedCategories, setSolvedCategories] = useState<ConnectionCategory[]>([]);
  const [mistakesRemaining, setMistakesRemaining] = useState(4);
  const [message, setMessage] = useState('');

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const all = CONNECTIONS_CATEGORIES.flatMap(c => c.items);
    setShuffledItems(all.sort(() => Math.random() - 0.5));
    setSelectedItems([]);
  };

  const toggleSelect = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      if (selectedItems.length < 4) {
        setSelectedItems([...selectedItems, item]);
      }
    }
  };

  const handleGuess = () => {
    if (selectedItems.length !== 4) return;

    for (const cat of CONNECTIONS_CATEGORIES) {
      const matchAll = selectedItems.every(item => cat.items.includes(item));
      if (matchAll) {
        // Solved category
        setSolvedCategories(prev => [...prev, cat]);
        setShuffledItems(prev => prev.filter(item => !selectedItems.includes(item)));
        setSelectedItems([]);
        setMessage(`Category Solved: ${cat.category}`);
        setTimeout(() => setMessage(''), 2000);
        if (solvedCategories.length === 3) {
          confetti({ particleCount: 120, spread: 80 });
        }
        return;
      }
    }

    // Check if one away
    let isOneAway = false;
    for (const cat of CONNECTIONS_CATEGORIES) {
      const matchCount = selectedItems.filter(i => cat.items.includes(i)).length;
      if (matchCount === 3) isOneAway = true;
    }

    setMistakesRemaining(prev => Math.max(0, prev - 1));
    setMessage(isOneAway ? 'One away...' : 'Incorrect guess');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div className="flex flex-col items-center max-w-lg mx-auto py-2">
      <div className="flex items-center justify-between w-full mb-3 pb-2 border-b border-surface-variant">
        <div>
          <h3 className="font-headline-md text-lg font-bold">Connections</h3>
          <p className="text-xs text-secondary font-label-nav">Group words that share a common thread</p>
        </div>
        <div className="flex items-center gap-1 text-xs font-label-nav text-secondary">
          Mistakes remaining:
          <span className="flex gap-1 ml-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${i < mistakesRemaining ? 'bg-primary' : 'bg-surface-variant'}`}
              />
            ))}
          </span>
        </div>
      </div>

      {message && (
        <div className="bg-primary text-on-primary text-xs font-label-nav font-bold px-3 py-1 mb-2 animate-pulse">
          {message}
        </div>
      )}

      {/* Solved Categories */}
      <div className="w-full space-y-2 mb-3">
        {solvedCategories.map(cat => (
          <div
            key={cat.category}
            style={{ backgroundColor: cat.bgColor, color: cat.color }}
            className="p-3 text-center rounded font-label-nav"
          >
            <div className="font-bold text-xs uppercase tracking-wider">{cat.category}</div>
            <div className="text-xs mt-0.5">{cat.items.join(', ')}</div>
          </div>
        ))}
      </div>

      {/* Words Grid */}
      {shuffledItems.length > 0 && (
        <div className="grid grid-cols-4 gap-2 w-full mb-4">
          {shuffledItems.map(item => {
            const isSelected = selectedItems.includes(item);
            return (
              <button
                key={item}
                onClick={() => toggleSelect(item)}
                className={`h-16 flex items-center justify-center p-1 text-center font-bold text-xs font-label-nav rounded uppercase transition-colors cursor-pointer border ${
                  isSelected
                    ? 'bg-primary text-on-primary border-primary'
                    : 'bg-surface-container-low text-primary border-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2 font-label-nav text-xs font-bold">
        <button
          onClick={shuffleCards}
          className="px-4 py-2 border border-primary text-primary hover:bg-surface-variant rounded-full cursor-pointer"
        >
          Shuffle
        </button>
        <button
          onClick={() => setSelectedItems([])}
          disabled={selectedItems.length === 0}
          className="px-4 py-2 border border-outline text-secondary hover:border-primary hover:text-primary rounded-full cursor-pointer disabled:opacity-40"
        >
          Deselect All
        </button>
        <button
          onClick={handleGuess}
          disabled={selectedItems.length !== 4 || mistakesRemaining === 0}
          className="px-5 py-2 bg-primary text-on-primary rounded-full cursor-pointer disabled:opacity-40 hover:bg-surface-container-highest hover:text-primary transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

// ----------------- MINI CROSSWORD -----------------
const MINI_ACROSS = [
  { num: 1, clue: 'Non-binding diplomatic treaty reached in Geneva', answer: 'ACCORD' },
  { num: 2, clue: 'Newspaper piece expressing personal commentary', answer: 'OPINION' },
  { num: 3, clue: 'Culinary potato dumpling pan-fried to crisp perfection', answer: 'GNOCCHI' }
];

export default function GamesModal({ isOpen, onClose, initialGame = 'wordle' }: GamesModalProps) {
  const [activeTab, setActiveTab] = useState<'wordle' | 'connections' | 'mini'>(initialGame);

  useEffect(() => {
    setActiveTab(initialGame);
  }, [initialGame]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-surface-container-lowest max-w-xl w-full border border-primary shadow-2xl p-6 relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-secondary hover:text-primary transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Tab switcher */}
        <div className="flex border-b border-surface-variant mb-4 gap-4">
          <button
            onClick={() => setActiveTab('wordle')}
            className={`pb-2 font-kicker text-xs font-bold uppercase tracking-wider cursor-pointer border-b-2 transition-colors ${
              activeTab === 'wordle' ? 'border-primary text-primary' : 'border-transparent text-secondary hover:text-primary'
            }`}
          >
            Wordle
          </button>
          <button
            onClick={() => setActiveTab('connections')}
            className={`pb-2 font-kicker text-xs font-bold uppercase tracking-wider cursor-pointer border-b-2 transition-colors ${
              activeTab === 'connections' ? 'border-primary text-primary' : 'border-transparent text-secondary hover:text-primary'
            }`}
          >
            Connections
          </button>
          <button
            onClick={() => setActiveTab('mini')}
            className={`pb-2 font-kicker text-xs font-bold uppercase tracking-wider cursor-pointer border-b-2 transition-colors ${
              activeTab === 'mini' ? 'border-primary text-primary' : 'border-transparent text-secondary hover:text-primary'
            }`}
          >
            The Mini Crossword
          </button>
        </div>

        {activeTab === 'wordle' && <WordleGame />}
        {activeTab === 'connections' && <ConnectionsGame />}
        {activeTab === 'mini' && (
          <div className="space-y-4">
            <div className="border-b border-surface-variant pb-2">
              <h3 className="font-headline-md text-lg font-bold">The Mini Crossword</h3>
              <p className="text-xs text-secondary font-label-nav">Solve in 60 seconds or less • Wednesday Edition</p>
            </div>
            <div className="bg-surface-container-low p-4 rounded text-sm space-y-3 font-label-nav">
              <div className="font-bold text-primary uppercase text-xs tracking-wider">Across Clues:</div>
              {MINI_ACROSS.map(c => (
                <div key={c.num} className="flex gap-2">
                  <span className="font-bold text-primary">{c.num}.</span>
                  <span className="text-on-surface-variant">{c.clue}</span>
                  <span className="font-mono text-xs text-secondary">({c.answer.length})</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="text-xs text-secondary font-mono">Timer: 0:42</div>
              <button
                onClick={() => confetti({ particleCount: 60 })}
                className="px-4 py-1.5 bg-primary text-on-primary font-kicker text-xs uppercase font-bold tracking-wider hover:bg-surface-variant hover:text-primary transition-colors cursor-pointer"
              >
                Check Puzzle
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
