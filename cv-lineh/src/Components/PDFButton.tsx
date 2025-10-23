import '../Styles/pdfviewer.css';

interface PDFButtonProps {
  filePath: string; 
  title?: string;
  className?: string;
}

export default function PDFButton({ filePath, title = 'View PDF', className = '' }: PDFButtonProps) {
  const src = filePath.startsWith('/') ? filePath : `/${filePath}`;

  return (
    <div className={`pdf-button-wrapper ${className}`}> 
      <a className="pdf-view-btn" href={src} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
      <a className="pdf-download-link" href={src} download>
        Download
      </a>
    </div>
  );
}
