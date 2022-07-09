import React from 'react';
import { useDispatch } from 'react-redux';
import { LinkButton } from '../../../components/button/Button';
import { IconButton } from '../../../components/button/IconButton';
import { setApproved } from '../../../redux/orderStore';
import { ProductStatus } from '../../../types/product';

interface Props {
  status: string;
  id: string;
}

export function TableActions({ status, id }: Props) {
  const dispatch = useDispatch();

  const handleSetApproved = () => {
    dispatch(setApproved(id));
  };
  const handleSetMissing = () => {
    console.log('missing');
  };
  const handleEdit = () => {
    console.log('edit');
  };

  return (
    <div className="flex gap-2 justify-end">
      <IconButton
        icon="CheckOutlined"
        buttonStyle={
          status === ProductStatus.APPROVED ? IconButton.style.POSITIVE : IconButton.style.PRIMARY
        }
        onClick={handleSetApproved}
      />
      <IconButton
        icon="CloseOutlined"
        onClick={handleSetMissing}
        buttonStyle={
          status === ProductStatus.MIS_URGENT || status === ProductStatus.MISSING
            ? IconButton.style.NEGATIVE
            : IconButton.style.PRIMARY
        }
      />
      <LinkButton label="Edit" onClick={handleEdit} />
    </div>
  );
}
