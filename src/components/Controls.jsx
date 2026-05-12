import React from 'react';

const Controls = ({ 
  length, 
  setLength, 
  includeNumbers, 
  setIncludeNumbers, 
  includeSymbols, 
  setIncludeSymbols,
  suggestion,
  setSuggestion
}) => {
  return (
    <div className="space-y-8">
      {/* Length Slider */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-[14px] font-bold text-[var(--color-on-dark)] uppercase tracking-[1.5px]">
            Length
          </label>
          <span className="text-[32px] font-bold text-[var(--color-on-dark)] leading-none">{length}</span>
        </div>
        <input 
          type="range" 
          min="8" 
          max="32" 
          value={length} 
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full h-1 bg-[var(--color-hairline)] rounded-none appearance-none cursor-pointer accent-white"
        />
      </div>

      {/* Toggles */}
      <div className="space-y-4">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="text-[16px] font-light text-[var(--color-body)] group-hover:text-white transition-colors">
            Include Numbers
          </span>
          <div className="relative">
            <input 
              type="checkbox" 
              checked={includeNumbers} 
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="sr-only peer"
            />
            {/* rounded.sm toggle pill as per spec */}
            <div className="w-10 h-5 bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-sm peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[var(--color-muted)] after:rounded-sm after:h-4 after:w-[18px] after:transition-all peer-checked:border-[var(--color-on-dark)] peer-checked:after:bg-[var(--color-on-dark)]"></div>
          </div>
        </label>
        
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="text-[16px] font-light text-[var(--color-body)] group-hover:text-white transition-colors">
            Include Symbols
          </span>
          <div className="relative">
            <input 
              type="checkbox" 
              checked={includeSymbols} 
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-10 h-5 bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-sm peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[var(--color-muted)] after:rounded-sm after:h-4 after:w-[18px] after:transition-all peer-checked:border-[var(--color-on-dark)] peer-checked:after:bg-[var(--color-on-dark)]"></div>
          </div>
        </label>
      </div>

      {/* Suggestion Input */}
      <div className="space-y-2">
        <label className="block text-[14px] font-bold text-[var(--color-on-dark)] uppercase tracking-[1.5px]">
          Suggestion
        </label>
        <p className="text-[14px] font-light text-[var(--color-muted)] mb-2">
          Embed a memorable string
        </p>
        <input 
          type="text" 
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          placeholder="e.g., puppy"
          maxLength={length - 4}
          className="w-full h-12 bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-none px-4 text-[16px] font-light text-[var(--color-on-dark)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-white transition-colors"
        />
      </div>
    </div>
  );
};

export default Controls;
