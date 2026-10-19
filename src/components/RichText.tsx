import React from 'react';

interface RichTextProps {
  text: string;
  className?: string;
}

/**
 * Cleanly formats inline Markdown (**bold**, *italic*, `code`) and LaTeX math ($...$)
 * into high-craft editorial typography without raw syntax symbols.
 */
export const formatInlineTokens = (input: string): React.ReactNode[] => {
  // Match **bold**, `code`, $math$, or *italic*
  const tokenRegex = /(\*\*[^*]+\*\*|`[^`]+`|\$[^$]+\$|\*[^*\n]+\*)/g;
  const parts = input.split(tokenRegex);

  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong
          key={idx}
          className="font-semibold text-slate-900 dark:text-white"
        >
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <code
          key={idx}
          className="px-1.5 py-0.5 mx-0.5 text-[0.88em] font-mono-code bg-[#F3EFEA] dark:bg-slate-800 text-[#EA580C] dark:text-amber-300 border border-[#E5E0D8] dark:border-slate-700 rounded-xs"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
      const cleanedMath = part
        .slice(1, -1)
        .replace(/\\text\{([^}]+)\}/g, '$1')
        .replace(/\\mathrm\{([^}]+)\}/g, '$1')
        .replace(/\\times/g, '×')
        .replace(/\\approx/g, '≈')
        .replace(/\\le/g, '≤')
        .replace(/\\ge/g, '≥')
        .replace(/\\ll/g, '≪')
        .replace(/\\gg/g, '≫')
        .replace(/\\to/g, '→')
        .replace(/\\rightarrow/g, '→')
        .replace(/\\parallel/g, '∥')
        .replace(/\\sum/g, '∑')
        .replace(/\\prod/g, '∏')
        .replace(/\\alpha/g, 'α')
        .replace(/\\beta/g, 'β')
        .replace(/\\gamma/g, 'γ')
        .replace(/\\Delta/g, 'Δ')
        .replace(/\\theta/g, 'θ')
        .replace(/\\lambda/g, 'λ')
        .replace(/\\mu/g, 'μ')
        .replace(/\\sigma/g, 'σ')
        .replace(/\\in/g, '∈')
        .replace(/\\mathbb\{R\}/g, 'ℝ');
      return (
        <span
          key={idx}
          className="px-1.5 py-0.5 mx-0.5 text-[0.9em] font-mono-code italic bg-slate-100 dark:bg-slate-800/90 text-indigo-900 dark:text-indigo-300 border border-slate-200 dark:border-slate-700 rounded-xs"
        >
          {cleanedMath}
        </span>
      );
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return (
        <em key={idx} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
};

export const RichParagraphs: React.FC<RichTextProps> = ({ text, className = '' }) => {
  const blocks = text.split('\n\n');

  return (
    <div className={`space-y-4 ${className}`}>
      {blocks.map((block, bIdx) => {
        const lines = block.split('\n').filter((l) => l.trim().length > 0);
        const isList = lines.length > 1 && lines.every((l) => l.trim().startsWith('- ') || /^\d+\.\s/.test(l.trim()));

        if (isList) {
          return (
            <ul key={bIdx} className="space-y-2 pl-4 border-l-2 border-[#E5E0D8] dark:border-slate-700">
              {lines.map((line, lIdx) => {
                const stripped = line.trim().replace(/^(- |\d+\.\s)/, '');
                return (
                  <li key={lIdx} className="text-[0.98rem] leading-relaxed">
                    {formatInlineTokens(stripped)}
                  </li>
                );
              })}
            </ul>
          );
        }

        // Mixed block (header line + bullet lines)
        if (lines.length > 1 && lines.slice(1).some((l) => l.trim().startsWith('- '))) {
          return (
            <div key={bIdx} className="space-y-2">
              {lines.map((line, lIdx) => {
                if (line.trim().startsWith('- ')) {
                  return (
                    <div
                      key={lIdx}
                      className="pl-4 border-l-2 border-[#EA580C]/40 text-[0.96rem] leading-relaxed"
                    >
                      • {formatInlineTokens(line.trim().slice(2))}
                    </div>
                  );
                }
                return (
                  <p key={lIdx} className="leading-[1.78]">
                    {formatInlineTokens(line)}
                  </p>
                );
              })}
            </div>
          );
        }

        return (
          <p key={bIdx} className="leading-[1.78]">
            {formatInlineTokens(block)}
          </p>
        );
      })}
    </div>
  );
};
