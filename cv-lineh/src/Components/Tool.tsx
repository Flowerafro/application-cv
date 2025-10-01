import React from "react";
import type { IconType } from "react-icons";

export default function Tool({ icon }: { icon: IconType }) {
    return (
        <>
            {icon && React.createElement(icon, { className: 'tool-icon' })}
        </>
    );
}