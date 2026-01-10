import { FC } from 'react';
import { useSelector } from '../../services/store';
import { TOrder } from '@utils-types';
import { FeedInfoUI } from '../ui/feed-info';

const getOrders = (orders: TOrder[], status: string): number[] =>
  orders
    .filter((item) => item.status === status)
    .map((item) => item.number)
    .slice(0, 20);

export const FeedInfo: FC = () => {
  const { orders, total, totalToday } = useSelector((state) => state.feed);

  /*const readyOrders = orders
    .filter((item) => item.status === 'done')
    .slice(0, 10)
    .map((item) => item.number);

  const pendingOrders = orders
    .filter((item) => item.status === 'done')
    .slice(10, 20)
    .map((item) => item.number);*/
  const readyOrders = getOrders(orders, 'done');

  const pendingOrders = getOrders(orders, 'done');

  return (
    <FeedInfoUI
      readyOrders={readyOrders}
      pendingOrders={pendingOrders}
      feed={{ total, totalToday }}
    />
  );
};
