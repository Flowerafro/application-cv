import type { Employment as EmploymentType } from '../Types';
import PDFButton from './PDFButton';

interface EmploymentProps {
  employees: EmploymentType[];
}

export default function Employment({ employees }: EmploymentProps) {
  if (!employees.length) return null;

  return (
    <ul className="employment-list" aria-label="Previous employment history">
       <PDFButton filePath="/application-cv/Resume2025-2.pdf" title="Resume"/>
    </ul>
  );
}