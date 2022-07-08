import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { FunctionalColorsType } from '../../types/colors';

interface Props {
  label: string | ReactNode;
  color?: FunctionalColorsType;
}

export function Label({ label, color = FunctionalColorsType.DEFAULT }: Props) {
  return (
    <div className={clsx('px-3 py-1 text-xs rounded-full leading-5 font-medium', COLOR_MAP[color])}>
      {label}
    </div>
  );
}

export const COLOR_MAP = {
  [FunctionalColorsType.DEFAULT]: 'bg-text text-white',
  [FunctionalColorsType.ERROR]: 'bg-red text-white',
  [FunctionalColorsType.SUCCESS]: 'bg-green text-white',
  [FunctionalColorsType.WARNING]: 'bg-orange text-white',
};

Label.colors = FunctionalColorsType;
