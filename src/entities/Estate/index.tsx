import React from 'react';
import s from './Estate.module.scss';

import { ReactComponent as Trash } from 'shared/icons/trash.svg';

export const Estate: React.FC = () => {
  const arr = [
    {
      id: 1,
      name: 'Квартира на Зяби',
      description: 'нормальная такая квартира, че нет',
      buyPrice: 3000000,
      rentPayment: 15000,
      status: 'lookingForTenants',
      lastUpdated: '2022-11-16T13:43:21.6862713Z',
    },
    {
      id: 2,
      name: 'Квартира на ГЭСе',
      description: 'дерьмище подешевле',
      buyPrice: 2500000,
      rentPayment: 12000,
      status: 'fundraising',
      lastUpdated: '2022-11-21T13:43:21.6864157Z',
    },
    {
      id: 3,
      name: 'Квартира в Новом Городе',
      description: null,
      buyPrice: 5000000,
      rentPayment: 20000,
      status: 'preparingForInvestments',
      lastUpdated: '2022-11-23T13:43:21.6864173Z',
    },
    {
      id: 4,
      name: 'Челны',
      description: 'string',
      buyPrice: 0,
      rentPayment: 0,
      status: 'none',
      lastUpdated: '2022-11-26T14:01:03.0152277Z',
    },
  ];

  const items = arr.map((el) => {
    return (
      <div className={s.item}>
        <div>
          <div className={s.name}>{el.name}</div>
          <div className={s.buyPrice}>{el.buyPrice} $</div>
          <div className={s.rentPayment}>{el.rentPayment} $</div>
        </div>
        <div className={s.icon}>
          <Trash />
        </div>
      </div>
    );
  });

  return <div className={s.container}>{items}</div>;
};
