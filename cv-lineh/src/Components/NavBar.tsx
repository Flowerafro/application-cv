interface NavBarProps {
  view: 'moduls' | 'portfolio';
  onChange: (view: 'moduls' | 'portfolio') => void;
}

export default function NavBar({ view, onChange }: NavBarProps) {
  return (
    <nav className="nav-bar">
      <div className="nav-content">
        <button
          aria-pressed={view === 'moduls'}
          aria-current={view === 'moduls' ? 'page' : undefined}
          className={`nav-button ${view === 'moduls' ? 'active' : ''}`}
          onClick={() => onChange('moduls')}
        >
         About me
        </button>
        <button
          aria-pressed={view === 'portfolio'}
          aria-current={view === 'portfolio' ? 'page' : undefined}
          className={`nav-button ${view === 'portfolio' ? 'active' : ''}`}
          onClick={() => onChange('portfolio')}
        >
          Portfolio
        </button>
      </div>
    </nav>
  );
}
