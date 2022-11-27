import React, { useEffect, useState } from 'react';
import s from './Estate.module.scss';

import { ReactComponent as Trash } from 'shared/icons/trash.svg';

import { ReactComponent as Plus } from 'shared/icons/plus.svg';

import { getEstateList } from './model/estateListSlice';
import axios from 'axios';

export const Estate: React.FC = () => {
  const [dataArr, setDataArr] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('http://localhost:6100/Estate/getEstatesList');
    console.log(data);
    setDataArr(data);
  };

  useEffect(() => {
    getData();
    console.log(dataArr);
  }, []);

  const arr = [
    {
      id: 123435,
      name: 'Квартира на Зяби',
      description: 'нормальная такая квартира, че нет',
      buyPrice: 3000000,
      rentPayment: 15000,
      status: 'looking',
      lastUpdated: '2022-11-16T13:43:21.6862713Z',
    },
    {
      id: 253544,
      name: 'Квартира на ГЭСе',
      description: 'дерьмище подешевле',
      buyPrice: 2500000,
      rentPayment: 12000,
      status: 'fundraising',
      lastUpdated: '2022-11-21T13:43:21.6864157Z',
    },
    {
      id: 533,
      name: 'Квартира в Новом Городе',
      description: null,
      buyPrice: 5000000,
      rentPayment: 20000,
      status: 'preparing',
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
