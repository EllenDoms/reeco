import React from 'react';
import { useDispatch } from 'react-redux';
import { LinkButton } from '../../../components/button/Button';
import { IconButton } from '../../../components/button/IconButton';
import { IProductOrder, setApproved } from '../../../redux/orderStore';
import { ProductStatus } from '../../../types/product';

interface Props {
  product: IProductOrder;
  setMissingProductModal: (product: IProductOrder) => void;
  setEditProductModal: (product: IProductOrder) => void;
}

export function TableActions({ product, setMissingProductModal, setEditProductModal }: Props) {
  const dispatch = useDispatch();

  const handleSetApproved = () => {
    dispatch(setApproved(product.id));
  };
  const handleSetMissing = () => {
    setMissingProductModal(product);
  };
  const handleEdit = () => {
    setEditProductModal(product);
  };

  return (
    <div className="flex gap-2 justify-end">
      <IconButton
        icon="CheckOutlined"
        buttonStyle={
          product.status === ProductStatus.APPROVED ||
          product.status === ProductStatus.PRICE_UPDATE ||
          product.status === ProductStatus.QUANTITY_UPDATE ||
          product.status === ProductStatus.QUAN_PRICE_UPDATE
            ? IconButton.style.POSITIVE
            : IconButton.style.PRIMARY
        }
        onClick={handleSetApproved}
      />
      <IconButton
        icon="CloseOutlined"
        onClick={handleSetMissing}
        buttonStyle={
          product.status === ProductStatus.MIS_URGENT || product.status === ProductStatus.MISSING
            ? IconButton.style.NEGATIVE
            : IconButton.style.PRIMARY
        }
      />
      <LinkButton label="Edit" onClick={handleEdit} />
    </div>
  );
}
