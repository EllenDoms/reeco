import { FunctionalColorsType } from './colors';

export enum ProductStatus {
  UNDEFINED = 'undefined',
  MIS_URGENT = 'Missing - urgent',
  MISSING = 'Missing',
  APPROVED = 'Approved',
  PRICE_UPDATE = 'Price update',
  QUANTITY_UPDATE = 'Quantity update',
  QUAN_PRICE_UPDATE = 'Price & quantity update',
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
