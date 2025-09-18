import React from "react";
import type { IconType } from "react-icons";

export default function Tool({ icon, link }: { icon: IconType; link: string }) {
    return (
        <div className="tool-item">
            <a href={link} target="_blank" rel="noopener noreferrer">
                {icon && React.createElement(icon, { className: 'tool-icon' })}
            </a>
        </div>
    );
}