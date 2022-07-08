export enum FunctionalColorsType {
  DEFAULT = 'DEFAULT',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  SUCCESS = 'SUCCESS',
}

export const FunctionalColorBgs = {
  [FunctionalColorsType.DEFAULT]: 'bg-gray-500',
  [FunctionalColorsType.ERROR]: 'bg-red-500',
  [FunctionalColorsType.WARNING]: 'bg-orange-500',
  [FunctionalColorsType.SUCCESS]: 'bg-green-500',
};

export const FunctionalColorTexts = {
  [FunctionalColorsType.DEFAULT]: 'bg-gray-500',
  [FunctionalColorsType.ERROR]: 'text-red-500',
  [FunctionalColorsType.WARNING]: 'text-orange-500',
  [FunctionalColorsType.SUCCESS]: 'text-green-500',
};
