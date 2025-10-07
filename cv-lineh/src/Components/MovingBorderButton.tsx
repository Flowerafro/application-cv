import React from 'react';
import '../Styles/moving-border.css';

interface MovingBorderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  borderRadius?: string;
  glow?: boolean;
}

const MovingBorderButton: React.FC<MovingBorderButtonProps> = ({
  children,
  className = '',
  borderRadius = '1.75rem',
  glow = true,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`moving-border-btn ${glow ? 'with-glow' : ''} ${className}`.trim()}
      style={{ ['--mb-radius' as any]: borderRadius }}
    >
      <span className="mb-btn-inner">{children}</span>
    </button>
  );
};

export default MovingBorderButton;
