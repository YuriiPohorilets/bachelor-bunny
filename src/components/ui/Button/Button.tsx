import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ type = 'button' }) => {
  return <button type={type}>Button</button>;
};
