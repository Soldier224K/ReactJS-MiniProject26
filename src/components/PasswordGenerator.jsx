import React, { useState, useEffect, useCallback } from 'react';
import PasswordDisplay from './PasswordDisplay';
import Controls from './Controls';
import StrengthIndicator from './StrengthIndicator';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [suggestion, setSuggestion] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let requiredChars = [];
    requiredChars.push(lower[Math.floor(Math.random() * lower.length)]);
    requiredChars.push(upper[Math.floor(Math.random() * upper.length)]);

    let allowedChars = lower + upper;

    if (includeNumbers) {
      requiredChars.push(numbers[Math.floor(Math.random() * numbers.length)]);
      allowedChars += numbers;
    }

    if (includeSymbols) {
      requiredChars.push(symbols[Math.floor(Math.random() * symbols.length)]);
      allowedChars += symbols;
    }

    let remainingLength = length - requiredChars.length;
    
    let suggestionPart = '';
    if (suggestion) {
      suggestionPart = suggestion.replace(/\s+/g, '');
      if (suggestionPart.length > remainingLength) {
        suggestionPart = suggestionPart.slice(0, remainingLength);
      }
      remainingLength -= suggestionPart.length;
    }

    let randomPart = '';
    for (let i = 0; i < remainingLength; i++) {
      randomPart += allowedChars[Math.floor(Math.random() * allowedChars.length)];
    }

    let combined = [...requiredChars, ...suggestionPart.split(''), ...randomPart.split('')];
    
    for (let i = combined.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combined[i], combined[j]] = [combined[j], combined[i]];
    }

    setPassword(combined.join(''));
    setCopied(false);
  }, [length, includeNumbers, includeSymbols, suggestion]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[var(--color-surface-card)] border border-[var(--color-hairline)] rounded-none p-8 space-y-8">
      <PasswordDisplay 
        password={password} 
        copied={copied} 
        onCopy={handleCopy} 
        onGenerate={generatePassword} 
      />
      
      <div className="h-px w-full bg-[var(--color-hairline)]"></div>
      
      <Controls 
        length={length}
        setLength={setLength}
        includeNumbers={includeNumbers}
        setIncludeNumbers={setIncludeNumbers}
        includeSymbols={includeSymbols}
        setIncludeSymbols={setIncludeSymbols}
        suggestion={suggestion}
        setSuggestion={setSuggestion}
      />

      <div className="h-px w-full bg-[var(--color-hairline)]"></div>

      <StrengthIndicator 
        password={password} 
        length={length} 
        hasNumbers={includeNumbers} 
        hasSymbols={includeSymbols} 
      />
      
      <div className="pt-4">
        <button
          onClick={generatePassword}
          className="w-full h-12 flex items-center justify-center bg-[var(--color-canvas)] text-[var(--color-on-dark)] border border-white rounded-none font-bold uppercase text-[14px] tracking-[1.5px] hover:bg-white hover:text-black transition-colors"
        >
          GENERATE PASSWORD
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
