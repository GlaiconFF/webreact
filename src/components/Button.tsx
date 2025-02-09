// src/components/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', className, ...props }) => {
  const baseStyle = "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition transform";
  const primaryStyle = "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 hover:scale-105";
  const secondaryStyle = "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 hover:scale-105";
  
  const finalStyle = `${baseStyle} ${variant === 'primary' ? primaryStyle : secondaryStyle} ${className || ''}`;

  return (
    <button className={finalStyle} {...props}>
      {label}
    </button>
  );
};

export default Button;
