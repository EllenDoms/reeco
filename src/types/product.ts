import { FunctionalColorsType } from './colors';

export enum ProductStatus {
  UNDEFINED = 'UNDEFINED',
  MIS_URGENT = 'MIS_URGENT',
  MISSING = 'MISSING',
  APPROVED = 'APPROVED',
  PRICE_UPDATE = 'PRICE_UPDATE',
  QUANTITY_UPDATE = 'QUANTITY_UPDATE',
  QUAN_PRICE_UPDATE = 'QUAN_PRICE_UPDATE',
}

export const ProductStatusColors = {
  [ProductStatus.UNDEFINED]: FunctionalColorsType.DEFAULT,
  [ProductStatus.MIS_URGENT]: FunctionalColorsType.ERROR,
  [ProductStatus.MISSING]: FunctionalColorsType.WARNING,
  [ProductStatus.APPROVED]: FunctionalColorsType.SUCCESS,
  [ProductStatus.PRICE_UPDATE]: FunctionalColorsType.SUCCESS,
  [ProductStatus.QUANTITY_UPDATE]: FunctionalColorsType.SUCCESS,
  [ProductStatus.QUAN_PRICE_UPDATE]: FunctionalColorsType.SUCCESS,
};
