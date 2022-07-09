import React from 'react';
import { useDispatch } from 'react-redux';
import { IProductOrder, setMissing } from '../../redux/orderStore';
import { LinkButton } from '../button/Button';
import { IconButton } from '../button/IconButton';

interface Props {
  product: IProductOrder;
  closeModal: () => void;
}

export function MissingProductModal({ product, closeModal }: Props) {
  const dispatch = useDispatch();

  const handleSetMissing = (urgent: boolean) => {
    dispatch(setMissing({ id: product.id, urgent }));
    closeModal();
  };

  return (
    <div className="fixed top-0 w-screen h-screen bg-black bg-opacity-20 flex items-center justify-center">
      <div className="w-96 p-5 rounded-sm bg-white">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-base font-bold">Missing product</h2>
          <IconButton icon="CloseOutlined" onClick={closeModal} />
        </div>
        <p>Is '{product.title}' urgent?</p>
        <div className="mt-4 flex flex-row items-center justify-end gap-2">
          <LinkButton label="Yes" onClick={() => handleSetMissing(true)} />
          <LinkButton label="No" onClick={() => handleSetMissing(false)} />
        </div>
      </div>
    </div>
  );
}
