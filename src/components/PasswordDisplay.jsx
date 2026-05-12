import React from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';

const PasswordDisplay = ({ password, copied, onCopy, onGenerate }) => {
  return (
    <div className="space-y-2">
      <label className="block text-[14px] font-bold text-[var(--color-on-dark)] uppercase tracking-[1.5px]">
        Generated Output
      </label>
      <div className="flex items-center bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-none h-16 px-4">
        <div className="flex-1 overflow-hidden">
          {password ? (
            <p className="text-[24px] font-mono font-light text-[var(--color-on-dark)] tracking-wider truncate">
              {password}
            </p>
          ) : (
            <p className="text-[24px] font-mono font-light text-[var(--color-muted)] tracking-wider">
              P@ssw0rd!
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 ml-4 pl-4 border-l border-[var(--color-hairline)] h-full">
          <button 
            onClick={onGenerate}
            className="w-10 h-10 flex items-center justify-center text-[var(--color-body)] hover:text-white hover:bg-[var(--color-surface-elevated)] rounded-none transition-colors"
            title="Generate New"
          >
            <RefreshCw size={20} strokeWidth={1.5} />
          </button>
          <button 
            onClick={onCopy}
            className="w-10 h-10 flex items-center justify-center text-[var(--color-body)] hover:text-white hover:bg-[var(--color-surface-elevated)] rounded-none transition-colors"
            title="Copy to Clipboard"
          >
            {copied ? <Check size={20} strokeWidth={1.5} className="text-[var(--color-success)]" /> : <Copy size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordDisplay;
