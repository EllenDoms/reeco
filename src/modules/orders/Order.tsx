import { useEffect } from 'react';
import { SecondaryButton, PrimaryButton } from '../../components/button/Button';
import { SubHeader } from '../../components/header/SubHeader';
import { FullPageLoading } from '../../components/loading/fullPageLoading';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchOrderById, selectOrderById } from '../../redux/orderStore';
import { OrderBanner } from './OrderBanner';
import { OrderTable } from './orderTable/OrderTable';

interface Props {}

export function Order(props: Props) {
  const orderStore = useAppSelector(selectOrderById);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrderById('32457ABC'));
  }, []);

  const order = orderStore.order;

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
      {orderStore.loading ? (
        <FullPageLoading />
      ) : (
        <div className="px-14 py-8 flex-grow flex flex-col gap-6">
          <OrderBanner order={order} />
          <OrderTable products={order?.products} />
        </div>
      )}
    </div>
  );
}
