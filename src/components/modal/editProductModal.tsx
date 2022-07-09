import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IProductOrder, updateProductData } from '../../redux/orderStore';
import { Button, SecondaryButton } from '../button/Button';
import { IconButton } from '../button/IconButton';

interface Props {
  product: IProductOrder;
  closeModal: () => void;
}

export function EditProductModal({ product, closeModal }: Props) {
  const [editData, setEditData] = useState<IProductOrder>(product);
  const dispatch = useDispatch();

  const handleEdit = (property: string, newValue: number) => {
    setEditData({ ...editData, [property]: newValue });
  };

  const handleSave = () => {
    if (editData !== product) {
      dispatch(updateProductData(editData));
      closeModal();
    } else {
      // should inform the user that nothing has changed?
    }
  };

  const formPrice = editData.newPrice ? editData.newPrice : editData.price;
  const formQuantity = editData.newQuantity ? editData.newQuantity : editData.quantity;

  return (
    <div className="fixed top-0 w-screen h-screen bg-black bg-opacity-20 flex items-center justify-center">
      <div className="min-w-96 p-5 rounded-sm bg-white">
        <div className="flex flex-row items-start">
          <div className="flex-grow">
            <h2 className="text-base font-bold">{product.title}</h2>
            <p>{product.brand}</p>
          </div>
          <IconButton icon="CloseOutlined" onClick={closeModal} />
        </div>

        <div className="grid grid-cols-2 gap-2 items-center justify-center">
          <label htmlFor="price">Price ($)</label>
          <div className="flex flex-row gap-2 items-center">
            <input
              id="price"
              className="input"
              type="number"
              pattern="^\d*(\.\d{0,2})?$"
              min={0}
              defaultValue={formPrice}
              onChange={(e) => handleEdit('newPrice', parseFloat(e.target.value))}
            />
            <p>/ {product.packing}</p>
          </div>

          <label htmlFor="quantity">Quantity</label>
          <div className="flex flex-row gap-2 items-center">
            <input
              id="quantity"
              className="input"
              type="number"
              min={0}
              defaultValue={formQuantity}
              onChange={(e) => handleEdit('newQuantity', parseInt(e.target.value))}
            />
            <p>X {product.packing}</p>
          </div>

          <p>Total</p>
          <p>
            {(formPrice * formQuantity).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </p>
        </div>
        <div className="mt-4 flex flex-row items-center justify-end gap-2">
          <SecondaryButton label="Cancel" onClick={closeModal} />
          <Button label="Send" onClick={handleSave} />
        </div>
      </div>
    </div>
  );
}
