interface NavBarProps {
  view: 'moduls' | 'portfolio';
  onChange: (view: 'moduls' | 'portfolio') => void;
}

export default function NavBar({ view, onChange }: NavBarProps) {
  return (
    <nav className="nav-bar">
      <button
        aria-pressed={view === 'moduls'}
        className={`nav-button ${view === 'moduls' ? 'active' : ''}`}
        onClick={() => onChange('moduls')}
      >
       About me
      </button>
      <button
        aria-pressed={view === 'portfolio'}
        className={`nav-button ${view === 'portfolio' ? 'active' : ''}`}
        onClick={() => onChange('portfolio')}
      >
        Portfolio
      </button>
    </nav>
  );
}
