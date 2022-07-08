import React from 'react';
import clsx from 'clsx';

export interface ButtonProps {
  label: string;
  onClick?: (e: any) => void;
  type?: 'button' | 'submit';
  buttonStyle?: 'primary' | 'secondary';
  isDisabled?: boolean;
  className?: string;
}

export function Button({
  onClick,
  label,
  type = 'button',
  buttonStyle = 'primary',
  isDisabled = false,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={!isDisabled ? onClick : undefined}
      className={clsx(
        'text-sm px-4 py-2 rounded-full flex gap-2 items-center justify-center',
        buttonStyle === 'primary' ? 'text-white bg-brand' : 'text-brand border border-brand',
        isDisabled ? 'opacity-50' : 'hover:bg-primary-600',
        className ? className : '',
      )}
      type={type}
    >
      <p>{label}</p>
    </button>
  );
}

export function PrimaryButton(props: Omit<ButtonProps, 'type'>) {
  return <Button {...props} buttonStyle="primary" />;
}

export function SecondaryButton(props: Omit<ButtonProps, 'type'>) {
  return <Button {...props} buttonStyle="secondary" />;
}
