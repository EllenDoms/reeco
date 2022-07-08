import React from 'react';
import { SecondaryButton, PrimaryButton } from '../../components/button/Button';
import { SubHeader } from '../../components/header/SubHeader';
import { OrderBanner } from './OrderBanner';
import { OrderTable } from './OrderTable';

interface Props {}

export function Order(props: Props) {
  return (
    <div className="bg-gray-50 flex-grow">
      <SubHeader
        breadCrumbs={[{ title: 'Orders' }, { title: 'Order 32457ABC' }]}
        actions={
          <div className="flex flex-row gap-5">
            <SecondaryButton label="Back" />
            <PrimaryButton label="Approve order" />
          </div>
        }
      />
      <div className="px-14 py-8 flex-grow flex flex-col gap-6">
        <OrderBanner />
        <OrderTable />
      </div>
    </div>
  );
}
