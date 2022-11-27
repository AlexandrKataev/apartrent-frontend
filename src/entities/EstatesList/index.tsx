import React from 'react';
import s from './Estate.module.scss';

import { ReactComponent as Trash } from 'shared/icons/trash.svg';

import { ReactComponent as Plus } from 'shared/icons/plus.svg';

import { useFetchEstateList } from './model/hooks/useFetchEstateList';
import { useAppSelector } from 'app/model/hooks';
import { selectEstatesList } from './model/selectors';

export const EstatesList: React.FC = () => {
  const estatesListData = useAppSelector(selectEstatesList);
  useFetchEstateList();

  const items = estatesListData.map((el) => {
    return (
      <div className={s.item} key={el.id}>
        <div className={s.id}>{el.id}</div>
        <div className={s.name}>{el.name}</div>
        <div className={s.buyPrice}>{el.buyPrice} $</div>
        <div className={s.rentPayment}>{el.rentPayment} $</div>
        <div className={s.status}>{el.status}</div>
        <div className={s.updated}>{el.lastUpdated.slice(0, 10)}</div>
        <div className={s.icon}>
          <Trash />
        </div>
      </div>
    );
  });

  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.id}>id</div>
        <div className={s.name}>Name</div>
        <div className={s.buyPrice}>Buy </div>
        <div className={s.rentPayment}>Rent</div>
        <div className={s.status}>Status</div>
        <div className={s.updated}>Updated</div>
        <div className={s.plus}>
          <Plus />
        </div>
      </div>
      {items}
    </div>
  );
};
