import React from 'react';

const StrengthIndicator = ({ password, length, hasNumbers, hasSymbols }) => {
  const getStrength = () => {
    let score = 0;
    if (length > 8) score += 1;
    if (length >= 12) score += 1;
    if (hasNumbers) score += 1;
    if (hasSymbols) score += 1;

    // Mapping to semantic colors
    if (score <= 1) return { label: 'WEAK', color: 'bg-[var(--color-m-red)]', bars: 1 };
    if (score === 2) return { label: 'FAIR', color: 'bg-[var(--color-warning)]', bars: 2 };
    if (score === 3) return { label: 'GOOD', color: 'bg-[var(--color-m-blue-light)]', bars: 3 };
    return { label: 'STRONG', color: 'bg-[var(--color-success)]', bars: 4 };
  };

  const strength = getStrength();

  return (
    <div className="flex items-center justify-between">
      <span className="text-[14px] font-bold text-[var(--color-on-dark)] uppercase tracking-[1.5px]">
        Strength
      </span>
      <div className="flex items-center gap-4">
        <span className="text-[14px] font-bold text-[var(--color-on-dark)] tracking-[1.5px]">
          {strength.label}
        </span>
        <div className="flex gap-1">
          {[1, 2, 3, 4].map((bar) => (
            <div 
              key={bar}
              className={`h-4 w-3 rounded-none transition-colors duration-300 ${
                bar <= strength.bars ? strength.color : 'bg-[var(--color-canvas)] border border-[var(--color-hairline)]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrengthIndicator;
