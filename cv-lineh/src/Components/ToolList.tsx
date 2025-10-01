import { useCallback } from 'react';
import Tool from './Tool';
import type { Tool as ToolType } from '../Types';

// fallback: if tool has a link, render as <a>, else as <button>

export default function ToolList({ tools, onHover, onLeave }: { tools: ToolType[]; onHover: (name: string) => void; onLeave: () => void }) {
  const handleMouseEnter = useCallback((name: string) => onHover(name), [onHover]);
  const handleMouseLeave = useCallback(() => onLeave(), [onLeave]);

  return (
    <div className="tools-list">
      {tools.map((tool) => (
        tool.link ? (
          <a
            key={tool.name}
            className="tool-item"
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleMouseEnter(tool.name)}
            onFocus={() => handleMouseEnter(tool.name)}
            onMouseLeave={handleMouseLeave}
            onBlur={handleMouseLeave}
            aria-label={tool.name}
          >
            <Tool icon={tool.icon} />
          </a>
        ) : (
          <button
            key={tool.name}
            type="button"
            className="tool-item"
            onMouseEnter={() => handleMouseEnter(tool.name)}
            onFocus={() => handleMouseEnter(tool.name)}
            onMouseLeave={handleMouseLeave}
            onBlur={handleMouseLeave}
            aria-label={tool.name}
          >
            <Tool icon={tool.icon} />
          </button>
        )
      ))}
    </div>
  );
}
