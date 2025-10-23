import { useState } from 'react';
import Employment from './Employment';
import type { EmploymentFlipCardProps } from '../Types';
import { LuMousePointerClick } from "react-icons/lu";


export default function EmploymentFlipCard({ tagline, employees, height = 250 }: EmploymentFlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => setFlipped(f => !f);

  return (
    <div
      className="employment-flip"
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onClick={handleClick}
      style={{ height }}
    >
      <div className={`ef-inner ${flipped ? 'flipped' : ''}`}>
        <div className="ef-face ef-front" aria-hidden={flipped}>
          <span className="employment-tagline">
            <LuMousePointerClick /> 
            {tagline}
          </span>
        </div>
        <div className="ef-face ef-back" aria-hidden={!flipped}>
          <Employment employees={employees} />
        </div>
      </div>
    </div>
  );
}
