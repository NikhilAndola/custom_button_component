import React from "react";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: string;
  backgroundColor?: string;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const { children, color, backgroundColor, style } = props;

  let _style: React.CSSProperties = style || {};

  /** Override defaults */
  if (backgroundColor) _style.backgroundColor = backgroundColor;
  if (color) _style.color = color;

  return (
    <button style={_style} {...props}>
      {children}
    </button>
  );
};
