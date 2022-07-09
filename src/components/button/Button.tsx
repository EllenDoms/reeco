import React from 'react';
import clsx from 'clsx';

export interface ButtonProps {
  label: string;
  onClick?: (e: any) => void;
  type?: 'button' | 'submit';
  buttonStyle?: ButtonStyles;
  isDisabled?: boolean;
}

export enum ButtonStyles {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
}

export function Button({
  onClick,
  label,
  type = 'button',
  buttonStyle = ButtonStyles.PRIMARY,
  isDisabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={!isDisabled ? onClick : undefined}
      className={clsx(
        'text-sm px-4 py-2 rounded-full flex gap-2 items-center justify-center outline-none',
        ButtonStyleMap[buttonStyle],
        isDisabled ? 'opacity-50' : 'hover:bg-primary-600 ',
      )}
      type={type}
    >
      <p>{label}</p>
    </button>
  );
}

Button.style = ButtonStyles;

export const ButtonStyleMap = {
  [ButtonStyles.PRIMARY]:
    'text-white bg-brand focus:ring-brand focus:ring-4 focus:border-brand ring-offset-1',
  [ButtonStyles.SECONDARY]:
    'text-brand border border-brand focus:ring-brand focus:ring-4 focus:border-brand ring-offset-1',
  [ButtonStyles.TERTIARY]: 'text-text hover:underline focus:underline focus:bg-gray-100',
};

export function PrimaryButton(props: Omit<ButtonProps, 'type'>) {
  return <Button {...props} buttonStyle={Button.style.PRIMARY} />;
}

export function SecondaryButton(props: Omit<ButtonProps, 'type'>) {
  return <Button {...props} buttonStyle={Button.style.SECONDARY} />;
}

export function LinkButton(props: Omit<ButtonProps, 'type'>) {
  return <Button {...props} buttonStyle={Button.style.TERTIARY} />;
}
