import React, { useState } from 'react';
import { X, Star, Clock, Users, Bookmark, Check, Utensils } from 'lucide-react';

interface RecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RecipeModal({ isOpen, onClose }: RecipeModalProps) {
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([]);
  const [servings, setServings] = useState(4);
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const baseIngredients = [
    { amount: 1, unit: 'lb', name: 'shelf-stable or refrigerated potato gnocchi' },
    { amount: 3, unit: 'tbsp', name: 'extra-virgin olive oil' },
    { amount: 1, unit: 'pint', name: 'cherry or grape tomatoes' },
    { amount: 2, unit: 'cloves', name: 'garlic, thinly sliced' },
    { amount: 8, unit: 'oz', name: 'fresh mozzarella, torn into bite-size pieces' },
    { amount: 1, unit: 'cup', name: 'fresh basil leaves, roughly torn' },
    { amount: 0.5, unit: 'tsp', name: 'flaky sea salt and freshly cracked black pepper' },
    { amount: 0.25, unit: 'tsp', name: 'crushed red-pepper flakes (optional)' }
  ];

  const steps = [
    'Heat 2 tablespoons of olive oil in a 12-inch heavy skillet (cast-iron preferred) over medium-high heat until shimmering.',
    'Add gnocchi straight from the package, breaking up any that are stuck together. Cook without moving until deeply browned and crisp on the bottom, 4 to 6 minutes.',
    'Toss gnocchi and continue to cook, stirring occasionally, until crisp and golden all over, about 3 to 4 minutes more. Transfer to a warm plate.',
    'Add remaining 1 tablespoon oil to skillet with tomatoes and garlic. Season with salt, pepper, and red-pepper flakes. Cook, tossing frequently, until tomatoes burst and turn jammy, 6 to 8 minutes.',
    'Return crisped gnocchi to skillet. Scatter fresh mozzarella over the top. Cover with a lid or foil for 1 to 2 minutes until cheese softens and begins to melt.',
    'Remove from heat, shower generously with torn basil leaves, drizzle with good olive oil, and serve immediately in shallow bowls.'
  ];

  const toggleIngredient = (idx: number) => {
    if (checkedIngredients.includes(idx)) {
      setCheckedIngredients(checkedIngredients.filter(i => i !== idx));
    } else {
      setCheckedIngredients([...checkedIngredients, idx]);
    }
  };

  const scaleMultiplier = servings / 4;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-surface-container-lowest max-w-2xl w-full border border-primary shadow-2xl relative my-auto max-h-[92vh] flex flex-col">
        {/* Header bar */}
        <div className="sticky top-0 z-10 bg-surface-container-lowest border-b border-surface-variant p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-kicker text-kicker uppercase tracking-widest text-error font-extrabold">
              NYT COOKING
            </span>
            <span className="text-outline-variant">|</span>
            <span className="text-caption font-label-nav text-secondary">Weeknight Favorite</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`p-1.5 rounded cursor-pointer transition-colors ${
                isSaved ? 'text-primary bg-surface-container-high' : 'text-secondary hover:text-primary'
              }`}
              title="Save to Recipe Box"
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>
            <button onClick={onClose} className="p-1 text-secondary hover:text-primary cursor-pointer">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="space-y-2 border-b border-surface-variant pb-4">
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold leading-tight">
              Crispy Gnocchi with Burst Tomatoes, Basil and Fresh Mozzarella
            </h2>
            <div className="flex items-center gap-4 text-xs font-label-nav text-secondary">
              <span>Recipe by <strong className="text-primary font-bold">ALI SLAGLE</strong></span>
              <span className="text-outline-variant">•</span>
              <div className="flex items-center gap-1 text-primary font-bold">
                <Star className="w-3.5 h-3.5 fill-current text-[#e37400]" />
                <span>4.9 (2,410 ratings)</span>
              </div>
            </div>
          </div>

          <div className="aspect-[16/10] w-full overflow-hidden bg-surface-container">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUaq8vM6jzuj_DscAR52cl8llDthvMUpabxKAowQc5ISC4XnzSHJNnL8aVfTNcjL9EUtIldoHxnOOLVlBQpx-EoGEd8OvrVPWAtaMML4u3GIN9sn_n1Uwn6JWMpNSbOYQ6vKl56LY7kbuqJvLFDB2t0tM-Rf_p6V0GbmdWqkJ0tQyPbiRrY7Ogd4T3Bjw3xmBwdGFm7ea78RGG9goWytOPF7_zgdmQWHjNYXDDIEdroHPpZxQsESS2"
              alt="Crispy Gnocchi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 py-3 bg-surface-container-low border border-surface-variant text-center font-label-nav">
            <div>
              <div className="text-[10px] uppercase font-bold text-secondary">TOTAL TIME</div>
              <div className="font-bold text-sm text-primary flex items-center justify-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5" /> 25 Minutes
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-secondary">PREP / COOK</div>
              <div className="font-bold text-sm text-primary mt-0.5">10m / 15m</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-secondary">SERVINGS</div>
              <div className="flex items-center justify-center gap-1.5 mt-0.5">
                {[2, 4, 6].map(s => (
                  <button
                    key={s}
                    onClick={() => setServings(s)}
                    className={`px-1.5 py-0.5 text-xs font-bold rounded cursor-pointer ${
                      servings === s ? 'bg-primary text-on-primary' : 'bg-surface-container text-secondary'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Ingredients with interactive checklist */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-primary pb-1">
              <h3 className="font-kicker text-xs font-extrabold uppercase tracking-widest text-primary">
                INGREDIENTS
              </h3>
              <span className="text-[11px] font-label-nav text-secondary">
                {checkedIngredients.length}/{baseIngredients.length} checked
              </span>
            </div>
            <ul className="space-y-2 font-body-sm text-sm">
              {baseIngredients.map((ing, idx) => {
                const isChecked = checkedIngredients.includes(idx);
                const scaledAmount = (ing.amount * scaleMultiplier).toFixed(
                  Number.isInteger(ing.amount * scaleMultiplier) ? 0 : 2
                );
                return (
                  <li
                    key={idx}
                    onClick={() => toggleIngredient(idx)}
                    className={`flex items-start gap-2.5 p-1.5 cursor-pointer rounded transition-colors ${
                      isChecked ? 'bg-surface-container-low text-secondary line-through' : 'hover:bg-surface-bright'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="mt-1 accent-primary cursor-pointer"
                    />
                    <span>
                      <strong className="font-semibold text-primary">{scaledAmount} {ing.unit}</strong> {ing.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Preparation steps */}
          <div className="space-y-4 pt-2">
            <h3 className="font-kicker text-xs font-extrabold uppercase tracking-widest text-primary border-b border-primary pb-1">
              PREPARATION
            </h3>
            <ol className="space-y-4 font-body-md text-sm text-on-surface">
              {steps.map((step, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="font-kicker font-bold text-primary shrink-0 text-xs mt-0.5">
                    STEP {idx + 1}
                  </span>
                  <p className="leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
