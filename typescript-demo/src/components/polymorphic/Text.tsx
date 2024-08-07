import React from "react";

type TextProps = {
    size?: "small" | "medium" | "large";
    color?: "primary" | "secondary";
    children: React.ReactNode;
    as: React.ElementType;
}

export const Text = ({ size, color, children, as }: TextProps) => {
    const Component = as || 'div';
    return (
        <Component className={`class-width-${size}-${color}`}>
            {children}
        </Component>
    );
};