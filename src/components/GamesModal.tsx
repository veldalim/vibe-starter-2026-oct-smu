import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { X, RotateCcw, HelpCircle, Check, Award, Share2, Play, Pause, AlertCircle, RefreshCw } from 'lucide-react';

interface GamesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGame?: 'wordle' | 'connections' | 'mini';
}

// ==========================================
// 1. PRO WORDLE
// ==========================================
const WORDLE_SOLUTION = 'TRUTH';
const VALID_WORDS = new Set([
  'TRUTH', 'ABOUT', 'ALERT', 'AGREE', 'APPLE', 'BREAD', 'BRAIN', 'CANDY',
  'CHAIR', 'CLEAN', 'CLOCK', 'COURT', 'DREAM', 'DRIVE', 'EARTH', 'FAITH',
  'FIELD', 'FLOOR', 'FRAME', 'FRUIT', 'GLASS', 'GREEN', 'GUARD', 'HEART',
  'HOUSE', 'LIGHT', 'MONEY', 'MUSIC', 'NIGHT', 'NOVEL', 'OCEAN', 'PAPER',
  'PEACE', 'PLANT', 'POWER', 'RADIO', 'RIVER', 'ROUND', 'SCALE', 'SCENE',
  'SHARE', 'SHIFT', 'SMILE', 'SPACE', 'STAND', 'STONE', 'STORY', 'TABLE',
  'TIMES', 'TOUCH', 'TRAIN', 'VOICE', 'WATER', 'WHITE', 'WORLD', 'WORDS'
]);

function WordleGame() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [stats, setStats] = useState({ played: 14, wins: 13, streak: 8, maxStreak: 12 });
  const [showStats, setShowStats] = useState(false);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 1800);
  };

  const handleKeyPress = (letter: string) => {
    if (isGameOver) return;
    if (currentGuess.length < 5) {
      setCurrentGuess(prev => prev + letter);
    }
  };

  const handleBackspace = () => {
    if (isGameOver) return;
    setCurrentGuess(prev => prev.slice(0, -1));
  };

  const handleEnter = () => {
    if (isGameOver) return;
    if (currentGuess.length < 5) {
      showToast('Not enough letters');
      return;
    }

    if (!VALID_WORDS.has(currentGuess) && currentGuess !== WORDLE_SOLUTION) {
      showToast('Not in word list');
      return;
    }

    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);

    if (currentGuess === WORDLE_SOLUTION) {
      setIsGameOver(true);
      setIsWon(true);
      setStats(prev => ({
        ...prev,
        played: prev.played + 1,
        wins: prev.wins + 1,
        streak: prev.streak + 1,
        maxStreak: Math.max(prev.maxStreak, prev.streak + 1)
      }));
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      setTimeout(() => setShowStats(true), 1200);
    } else if (newGuesses.length >= 6) {
      setIsGameOver(true);
      setIsWon(false);
      setStats(prev => ({ ...prev, played: prev.played + 1, streak: 0 }));
      setTimeout(() => setShowStats(true), 1200);
    }
    setCurrentGuess('');
  };

  const getLetterStatus = (letter: string, index: number, word: string) => {
    if (word[index] === WORDLE_SOLUTION[index]) return 'correct';
    if (WORDLE_SOLUTION.includes(letter)) return 'present';
    return 'absent';
  };

  const handleShare = () => {
    const gridEmoji = guesses.map(g => {
      return g.split('').map((char, i) => {
        const s = getLetterStatus(char, i, g);
        if (s === 'correct') return '🟩';
        if (s === 'present') return '🟨';
        return '⬛';
      }).join('');
    }).join('\n');

    const shareText = `Wordle 1,068 ${isWon ? guesses.length : 'X'}/6\n\n${gridEmoji}\n\nThe New York Times`;
    navigator.clipboard?.writeText(shareText);
    showToast('Copied result to clipboard!');
  };

  const resetGame = () => {
    setGuesses([]);
    setCurrentGuess('');
    setIsGameOver(false);
    setIsWon(false);
    setShowStats(false);
    setToastMsg('');
  };

  return (
    <div className="flex flex-col items-center max-w-md mx-auto py-1">
      {/* Top Header */}
      <div className="flex items-center justify-between w-full mb-3 pb-2 border-b border-surface-variant font-label-nav">
        <div>
          <h3 className="font-headline-md text-xl font-bold tracking-tight">Wordle</h3>
          <p className="text-[11px] text-secondary">No. 1,068 • 6 tries to find the secret 5-letter word</p>
        </div>
        <div className="flex items-center gap-2">
          {isGameOver && (
            <button
              onClick={() => setShowStats(true)}
              className="p-1.5 hover:bg-surface-container rounded text-secondary hover:text-primary transition-colors cursor-pointer"
              title="View Statistics"
            >
              <Award className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={resetGame}
            className="flex items-center gap-1 text-[11px] font-kicker uppercase font-bold text-secondary hover:text-primary transition-colors cursor-pointer px-2 py-1 bg-surface-container rounded"
          >
            <RotateCcw className="w-3 h-3" /> New Game
          </button>
        </div>
      </div>

      {toastMsg && (
        <div className="bg-primary text-on-primary text-xs font-label-nav font-bold px-3 py-1.5 mb-2 rounded shadow animate-bounce z-10">
          {toastMsg}
        </div>
      )}

      {/* Wordle 6-Row Grid */}
      <div className="grid grid-rows-6 gap-1.5 mb-4 w-64 sm:w-72">
        {Array.from({ length: 6 }).map((_, rowIndex) => {
          const guess = guesses[rowIndex];
          const isCurrentRow = rowIndex === guesses.length;

          return (
            <div key={rowIndex} className="grid grid-cols-5 gap-1.5 h-12">
              {Array.from({ length: 5 }).map((_, colIndex) => {
                let char = '';
                let status = 'empty';

                if (guess) {
                  char = guess[colIndex] || '';
                  status = getLetterStatus(char, colIndex, guess);
                } else if (isCurrentRow) {
                  char = currentGuess[colIndex] || '';
                  if (char) status = 'tbd';
                }

                let styleClass = 'border-2 border-surface-variant bg-surface text-primary';
                if (status === 'correct') {
                  styleClass = 'bg-[#538d4e] text-white border-[#538d4e]';
                } else if (status === 'present') {
                  styleClass = 'bg-[#b59f3b] text-white border-[#b59f3b]';
                } else if (status === 'absent') {
                  styleClass = 'bg-[#787c7e] text-white border-[#787c7e]';
                } else if (status === 'tbd') {
                  styleClass = 'border-2 border-primary text-primary font-bold scale-105';
                }

                return (
                  <div
                    key={colIndex}
                    className={`flex items-center justify-center text-xl font-bold uppercase transition-all duration-300 font-label-nav select-none ${styleClass}`}
                  >
                    {char}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Keyboard */}
      <div className="w-full space-y-1.5 text-xs font-bold font-label-nav select-none px-1">
        {['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'].map((row, rIdx) => (
          <div key={rIdx} className="flex justify-center gap-1">
            {rIdx === 2 && (
              <button
                onClick={handleEnter}
                className="px-2.5 sm:px-3 h-11 bg-surface-container-high rounded text-[11px] font-extrabold hover:bg-surface-container-highest cursor-pointer active:scale-95 transition-transform"
              >
                ENTER
              </button>
            )}
            {row.split('').map(letter => {
              let keyBg = 'bg-surface-container-high hover:bg-surface-container-highest text-primary';
              for (const g of guesses) {
                if (g.includes(letter)) keyBg = 'bg-[#787c7e] text-white';
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
                  className={`w-7 sm:w-8 h-11 flex items-center justify-center rounded cursor-pointer font-bold transition-colors active:scale-95 ${keyBg}`}
                >
                  {letter}
                </button>
              );
            })}
            {rIdx === 2 && (
              <button
                onClick={handleBackspace}
                className="px-2.5 sm:px-3 h-11 bg-surface-container-high rounded text-[11px] font-extrabold hover:bg-surface-container-highest cursor-pointer active:scale-95 transition-transform"
              >
                ⌫
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Stats Modal overlay */}
      {showStats && (
        <div className="mt-4 p-4 border border-primary bg-surface-container-low w-full text-center space-y-3 font-label-nav animate-in fade-in">
          <div className="font-kicker text-xs uppercase font-extrabold text-primary">
            {isWon ? 'Splendid!' : 'Next Time!'}
          </div>
          <div className="text-sm font-body-sm text-secondary">
            The word was <strong className="text-primary font-bold">{WORDLE_SOLUTION}</strong>.
          </div>
          <div className="grid grid-cols-4 gap-2 pt-2 border-t border-surface-variant text-center">
            <div>
              <div className="font-mono text-xl font-bold">{stats.played}</div>
              <div className="text-[10px] text-secondary uppercase">Played</div>
            </div>
            <div>
              <div className="font-mono text-xl font-bold">{Math.round((stats.wins / stats.played) * 100)}%</div>
              <div className="text-[10px] text-secondary uppercase">Win %</div>
            </div>
            <div>
              <div className="font-mono text-xl font-bold">{stats.streak}</div>
              <div className="text-[10px] text-secondary uppercase">Current</div>
            </div>
            <div>
              <div className="font-mono text-xl font-bold">{stats.maxStreak}</div>
              <div className="text-[10px] text-secondary uppercase">Max Streak</div>
            </div>
          </div>
          <div className="flex gap-2 justify-center pt-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#538d4e] text-white font-kicker text-xs uppercase font-bold rounded cursor-pointer hover:opacity-90"
            >
              <Share2 className="w-3.5 h-3.5" /> Share Score
            </button>
            <button
              onClick={resetGame}
              className="px-4 py-2 bg-primary text-on-primary font-kicker text-xs uppercase font-bold rounded cursor-pointer"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 2. PRO CONNECTIONS
// ==========================================
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
        setSolvedCategories(prev => [...prev, cat]);
        setShuffledItems(prev => prev.filter(item => !selectedItems.includes(item)));
        setSelectedItems([]);
        setMessage(`Solved: ${cat.category}`);
        setTimeout(() => setMessage(''), 2000);
        if (solvedCategories.length === 3) {
          confetti({ particleCount: 120, spread: 80 });
        }
        return;
      }
    }

    let isOneAway = false;
    for (const cat of CONNECTIONS_CATEGORIES) {
      const matchCount = selectedItems.filter(i => cat.items.includes(i)).length;
      if (matchCount === 3) isOneAway = true;
    }

    setMistakesRemaining(prev => Math.max(0, prev - 1));
    setMessage(isOneAway ? 'One away...' : 'Incorrect guess');
    setTimeout(() => setMessage(''), 2000);
  };

  const resetGame = () => {
    setSolvedCategories([]);
    setMistakesRemaining(4);
    shuffleCards();
    setMessage('');
  };

  return (
    <div className="flex flex-col items-center max-w-lg mx-auto py-1">
      <div className="flex items-center justify-between w-full mb-3 pb-2 border-b border-surface-variant font-label-nav">
        <div>
          <h3 className="font-headline-md text-xl font-bold">Connections</h3>
          <p className="text-[11px] text-secondary">Find groups of four items that share something in common</p>
        </div>
        <button
          onClick={resetGame}
          className="flex items-center gap-1 text-[11px] font-kicker uppercase font-bold text-secondary hover:text-primary transition-colors cursor-pointer px-2 py-1 bg-surface-container rounded"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      {message && (
        <div className="bg-primary text-on-primary text-xs font-label-nav font-bold px-3 py-1.5 mb-2 rounded shadow animate-bounce">
          {message}
        </div>
      )}

      {/* Solved Categories */}
      <div className="w-full space-y-2 mb-3">
        {solvedCategories.map(cat => (
          <div
            key={cat.category}
            style={{ backgroundColor: cat.bgColor, color: cat.color }}
            className="p-3.5 text-center rounded-lg font-label-nav shadow-xs animate-in zoom-in-95"
          >
            <div className="font-extrabold text-xs uppercase tracking-wider">{cat.category}</div>
            <div className="text-xs mt-1 font-medium tracking-wide">{cat.items.join(' • ')}</div>
          </div>
        ))}
      </div>

      {/* Remaining Words Grid */}
      {shuffledItems.length > 0 && (
        <div className="grid grid-cols-4 gap-2 w-full mb-4">
          {shuffledItems.map(item => {
            const isSelected = selectedItems.includes(item);
            return (
              <button
                key={item}
                onClick={() => toggleSelect(item)}
                className={`h-16 flex items-center justify-center p-1.5 text-center font-bold text-xs font-label-nav rounded uppercase transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-primary text-on-primary border-primary scale-98 shadow-sm'
                    : 'bg-surface-container-low text-primary border-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}

      {/* Mistakes & Controls */}
      <div className="flex flex-col items-center gap-3 w-full font-label-nav text-xs">
        <div className="flex items-center gap-1 text-secondary">
          <span>Mistakes remaining:</span>
          <span className="flex gap-1.5 ml-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i < mistakesRemaining ? 'bg-primary' : 'bg-surface-variant'
                }`}
              />
            ))}
          </span>
        </div>

        <div className="flex items-center gap-2 font-bold">
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
    </div>
  );
}

// ==========================================
// 3. PRO MINI CROSSWORD (5x5 Playable Grid)
// ==========================================
const MINI_SOLUTION = [
  ['A', 'C', 'C', 'O', 'R'],
  ['P', 'E', 'A', 'C', 'E'],
  ['P', 'O', 'L', 'I', 'C'],
  ['L', 'E', 'A', 'D', 'E'],
  ['E', 'X', 'I', 'S', 'T']
];

const MINI_CLUES = {
  across: [
    { num: 1, text: 'Geneva diplomatic pact initialed Wednesday', row: 0, col: 0, len: 5 },
    { num: 2, text: 'Tranquil state or global harmony', row: 1, col: 0, len: 5 },
    { num: 3, text: 'Governing regulatory framework or stance', row: 2, col: 0, len: 5 },
    { num: 4, text: 'Frontier delegator or state chief', row: 3, col: 0, len: 5 },
    { num: 5, text: 'To be real or thrive in computational space', row: 4, col: 0, len: 5 }
  ],
  down: [
    { num: 1, text: 'Fruit associated with Newton and Turing', row: 0, col: 0, len: 5 },
    { num: 2, text: 'Venture allocator or startup head', row: 0, col: 1, len: 5 },
    { num: 3, text: 'Water route or historical compact', row: 0, col: 2, len: 5 },
    { num: 4, text: 'Acid test or frontier verification step', row: 0, col: 3, len: 5 },
    { num: 5, text: 'Fastest compute chip or engine unit', row: 0, col: 4, len: 5 }
  ]
};

function MiniCrosswordGame() {
  const [grid, setGrid] = useState<string[][]>([
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ]);
  const [selectedCell, setSelectedCell] = useState<[number, number]>([0, 0]);
  const [direction, setDirection] = useState<'across' | 'down'>('across');
  const [timerSeconds, setTimerSeconds] = useState(42);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const inputRefs = useRef<Array<Array<HTMLInputElement | null>>>([
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null]
  ]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && !isCompleted) {
      interval = setInterval(() => setTimerSeconds(s => s + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, isCompleted]);

  const handleCellChange = (r: number, c: number, value: string) => {
    const val = value.slice(-1).toUpperCase();
    const newGrid = grid.map(row => [...row]);
    newGrid[r][c] = val;
    setGrid(newGrid);

    // Auto advance
    if (val && direction === 'across' && c < 4) {
      setSelectedCell([r, c + 1]);
      inputRefs.current[r][c + 1]?.focus();
    } else if (val && direction === 'down' && r < 4) {
      setSelectedCell([r + 1, c]);
      inputRefs.current[r + 1][c]?.focus();
    }

    // Check complete
    checkIfSolved(newGrid);
  };

  const handleKeyDown = (r: number, c: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !grid[r][c]) {
      if (direction === 'across' && c > 0) {
        setSelectedCell([r, c - 1]);
        inputRefs.current[r][c - 1]?.focus();
      } else if (direction === 'down' && r > 0) {
        setSelectedCell([r - 1, c]);
        inputRefs.current[r - 1][c]?.focus();
      }
    } else if (e.key === 'ArrowRight' && c < 4) {
      setSelectedCell([r, c + 1]);
      inputRefs.current[r][c + 1]?.focus();
    } else if (e.key === 'ArrowLeft' && c > 0) {
      setSelectedCell([r, c - 1]);
      inputRefs.current[r][c - 1]?.focus();
    } else if (e.key === 'ArrowDown' && r < 4) {
      setSelectedCell([r + 1, c]);
      inputRefs.current[r + 1][c]?.focus();
    } else if (e.key === 'ArrowUp' && r > 0) {
      setSelectedCell([r - 1, c]);
      inputRefs.current[r - 1][c]?.focus();
    }
  };

  const checkIfSolved = (currentGrid: string[][]) => {
    let allFilled = true;
    let allCorrect = true;
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (!currentGrid[r][c]) allFilled = false;
        if (currentGrid[r][c] !== MINI_SOLUTION[r][c]) allCorrect = false;
      }
    }
    if (allFilled && allCorrect) {
      setIsCompleted(true);
      setIsTimerRunning(false);
      confetti({ particleCount: 150, spread: 80 });
    }
  };

  const handleRevealAll = () => {
    setGrid(MINI_SOLUTION);
    setIsCompleted(true);
    setIsTimerRunning(false);
  };

  const handleClear = () => {
    setGrid([
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ]);
    setIsCompleted(false);
  };

  const formatTimer = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="flex flex-col items-center max-w-xl mx-auto py-1 font-label-nav">
      {/* Top Header */}
      <div className="flex items-center justify-between w-full mb-3 pb-2 border-b border-surface-variant">
        <div>
          <h3 className="font-headline-md text-xl font-bold">The Mini Crossword</h3>
          <p className="text-[11px] text-secondary">Wednesday, May 21, 2025 • Daily 5×5 Puzzle</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 font-mono text-xs font-bold bg-surface-container px-2 py-1 rounded">
            <span>{formatTimer(timerSeconds)}</span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="text-secondary hover:text-primary cursor-pointer"
            >
              {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
          </div>
          <button
            onClick={handleClear}
            className="text-[11px] uppercase font-bold text-secondary hover:text-primary cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>

      {isCompleted && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold rounded mb-3 w-full text-center">
          🎉 Congratulations! You completed The Mini in {formatTimer(timerSeconds)}!
        </div>
      )}

      {/* Grid and Clues 2-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full items-start">
        {/* 5x5 Grid */}
        <div className="md:col-span-6 flex flex-col items-center">
          <div className="grid grid-cols-5 gap-1 p-2 bg-primary w-64 h-64 shadow-md">
            {grid.map((row, r) =>
              row.map((cell, c) => {
                const isSelected = selectedCell[0] === r && selectedCell[1] === c;
                const isWordHighlighted =
                  (direction === 'across' && selectedCell[0] === r) ||
                  (direction === 'down' && selectedCell[1] === c);

                return (
                  <div key={`${r}-${c}`} className="relative w-full h-full bg-white">
                    {/* Clue number tag */}
                    {r === 0 && (
                      <span className="absolute top-0.5 left-1 text-[9px] text-secondary font-mono font-bold pointer-events-none">
                        {c + 1}
                      </span>
                    )}
                    {c === 0 && r > 0 && (
                      <span className="absolute top-0.5 left-1 text-[9px] text-secondary font-mono font-bold pointer-events-none">
                        {r + 1}
                      </span>
                    )}
                    <input
                      ref={el => {
                        inputRefs.current[r][c] = el;
                      }}
                      type="text"
                      maxLength={1}
                      value={cell}
                      onChange={e => handleCellChange(r, c, e.target.value)}
                      onKeyDown={e => handleKeyDown(r, c, e)}
                      onClick={() => {
                        if (selectedCell[0] === r && selectedCell[1] === c) {
                          setDirection(direction === 'across' ? 'down' : 'across');
                        } else {
                          setSelectedCell([r, c]);
                        }
                      }}
                      className={`w-full h-full text-center text-xl font-bold uppercase focus:outline-none cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-[#ffda00] text-black font-extrabold'
                          : isWordHighlighted
                          ? 'bg-[#a7d8ff] text-black'
                          : 'bg-white text-black'
                      }`}
                    />
                  </div>
                );
              })
            )}
          </div>

          <div className="flex gap-3 mt-3 text-xs">
            <button
              onClick={() => setDirection(direction === 'across' ? 'down' : 'across')}
              className="px-3 py-1 bg-surface-container rounded hover:bg-surface-container-high font-bold cursor-pointer"
            >
              Direction: <span className="uppercase text-primary">{direction}</span>
            </button>
            <button
              onClick={handleRevealAll}
              className="px-3 py-1 text-secondary hover:text-primary underline cursor-pointer"
            >
              Reveal Puzzle
            </button>
          </div>
        </div>

        {/* Clues Pane */}
        <div className="md:col-span-6 space-y-4 text-xs">
          <div>
            <div className="font-bold text-primary uppercase text-[11px] tracking-wider border-b border-surface-variant pb-1 mb-1.5 flex items-center justify-between">
              <span>ACROSS</span>
              <span className="text-secondary font-normal">5 words</span>
            </div>
            <div className="space-y-1.5">
              {MINI_CLUES.across.map(c => {
                const isActive = direction === 'across' && selectedCell[0] === c.row;
                return (
                  <div
                    key={c.num}
                    onClick={() => {
                      setDirection('across');
                      setSelectedCell([c.row, 0]);
                      inputRefs.current[c.row][0]?.focus();
                    }}
                    className={`p-1.5 rounded cursor-pointer transition-colors flex items-start gap-1.5 ${
                      isActive ? 'bg-[#ffda00]/30 font-semibold text-primary' : 'hover:bg-surface-container-low text-secondary'
                    }`}
                  >
                    <span className="font-mono font-bold text-primary">{c.num}.</span>
                    <span>{c.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="font-bold text-primary uppercase text-[11px] tracking-wider border-b border-surface-variant pb-1 mb-1.5 flex items-center justify-between">
              <span>DOWN</span>
              <span className="text-secondary font-normal">5 words</span>
            </div>
            <div className="space-y-1.5">
              {MINI_CLUES.down.map(c => {
                const isActive = direction === 'down' && selectedCell[1] === c.col;
                return (
                  <div
                    key={c.num}
                    onClick={() => {
                      setDirection('down');
                      setSelectedCell([0, c.col]);
                      inputRefs.current[0][c.col]?.focus();
                    }}
                    className={`p-1.5 rounded cursor-pointer transition-colors flex items-start gap-1.5 ${
                      isActive ? 'bg-[#a7d8ff]/30 font-semibold text-primary' : 'hover:bg-surface-container-low text-secondary'
                    }`}
                  >
                    <span className="font-mono font-bold text-primary">{c.num}.</span>
                    <span>{c.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// MASTER GAMES MODAL CONTAINER
// ==========================================
export default function GamesModal({ isOpen, onClose, initialGame = 'wordle' }: GamesModalProps) {
  const [activeTab, setActiveTab] = useState<'wordle' | 'connections' | 'mini'>(initialGame);

  useEffect(() => {
    setActiveTab(initialGame);
  }, [initialGame]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-surface-container-lowest max-w-2xl w-full border border-primary shadow-2xl p-5 sm:p-7 relative max-h-[94vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-secondary hover:text-primary transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Tab switcher */}
        <div className="flex border-b border-surface-variant mb-5 gap-6">
          <button
            onClick={() => setActiveTab('wordle')}
            className={`pb-2.5 font-kicker text-xs font-bold uppercase tracking-wider cursor-pointer border-b-2 transition-colors ${
              activeTab === 'wordle' ? 'border-primary text-primary' : 'border-transparent text-secondary hover:text-primary'
            }`}
          >
            Wordle
          </button>
          <button
            onClick={() => setActiveTab('connections')}
            className={`pb-2.5 font-kicker text-xs font-bold uppercase tracking-wider cursor-pointer border-b-2 transition-colors ${
              activeTab === 'connections' ? 'border-primary text-primary' : 'border-transparent text-secondary hover:text-primary'
            }`}
          >
            Connections
          </button>
          <button
            onClick={() => setActiveTab('mini')}
            className={`pb-2.5 font-kicker text-xs font-bold uppercase tracking-wider cursor-pointer border-b-2 transition-colors ${
              activeTab === 'mini' ? 'border-primary text-primary' : 'border-transparent text-secondary hover:text-primary'
            }`}
          >
            The Mini Crossword
          </button>
        </div>

        {activeTab === 'wordle' && <WordleGame />}
        {activeTab === 'connections' && <ConnectionsGame />}
        {activeTab === 'mini' && <MiniCrosswordGame />}
      </div>
    </div>
  );
}
