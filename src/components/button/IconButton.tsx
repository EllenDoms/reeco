import React from 'react';
import clsx from 'clsx';
import * as Icons from '@mui/icons-material';

export interface IconButtonProps {
  icon: keyof typeof Icons;
  onClick?: (e: any) => void;
  isDisabled?: boolean;
  buttonStyle?: IconButtonStyles;
}

// I looked at the types of IconButtons (icons with actions) that you have on the designs
// This is something that should be improved depending on the rest of the product of course
export enum IconButtonStyles {
  PRIMARY = 'PRIMARY',
  POSITIVE = 'POSITIVE',
  NEGATIVE = 'NEGATIVE',
  FILLED = 'FILLED',
}

export function IconButton({
  icon,
  onClick,
  buttonStyle = IconButtonStyles.PRIMARY,
  isDisabled = false,
}: IconButtonProps) {
  const Icon = Icons[icon];

  return (
    <button
      onClick={!isDisabled ? onClick : undefined}
      className={clsx(
        'text-sm p-2 rounded-full flex gap-2 items-center justify-center outline-none',
        ButtonStyleMap[buttonStyle],
        isDisabled ? 'opacity-50' : 'hover:bg-primary-600 ',
      )}
      type="button"
    >
      <Icon fontSize="small" />
    </button>
  );
}

IconButton.style = IconButtonStyles;

export const ButtonStyleMap = {
  [IconButtonStyles.PRIMARY]: 'text-text focus:bg-gray-100 hover:bg-gray-100 rounded-md',
  [IconButtonStyles.NEGATIVE]: 'text-red focus:bg-red-100 hover:bg-red-100 rounded-md',
  [IconButtonStyles.POSITIVE]: 'text-green focus:bg-green-100 hover:bg-green-100 rounded-md',
  [IconButtonStyles.FILLED]:
    'text-white bg-green focus:ring-green focus:ring-4 ring-offset-1 rounded-full',
};
