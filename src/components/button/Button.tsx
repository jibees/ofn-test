import React from 'react';

export interface ButtonProps {
  /**
   * Color of the button
   * 
   */
  color?: "green" | "orange" | "dark-orange";
  /**
   * How large should the button be?
   */
  size?: 'small' | 'default' ;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  color = "orange",
  size = 'default',
  label,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`bg-ofn-${color} text-white ${ size === "small" ? "py-1 px-2" : "py-2 px-3" }  ${ size === "small" ? "text-sm" : "text-base" } font-bold rounded`}
      {...props}
    >
      {label}
    </button>
  );
};
