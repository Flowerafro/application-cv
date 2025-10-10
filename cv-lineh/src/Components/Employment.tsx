import type { Employment as EmploymentType } from '../Types';
import PDFButton from './PDFButton';

interface EmploymentProps {
  employees: EmploymentType[];
}

export default function Employment({ employees }: EmploymentProps) {
  if (!employees.length) return null;

  return (
    <ul className="employment-list" aria-label="Previous employment history">
     {/*  {employees.map(emp => (
        <li key={emp.id} className="employment-item">
          <strong>{emp.title}</strong>
          {emp.period && <span className="employment-period">{emp.period}</span>}
        </li>
      ))} */}
       <PDFButton filePath="/application-cv/Resume2025.pdf" title="Resume"/>
    </ul>
  );
}