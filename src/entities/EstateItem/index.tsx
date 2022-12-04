import React from 'react';
import { EstateGridDto } from 'shared/api/openapi';
import apartImg from 'assets/estate.jpg';
import s from './EstateItem.module.scss';

export const EstateItem = (props: EstateGridDto) => {
  return (
    <div className={s.container}>
      <img src={apartImg} />
      <div className={s.title}>{props.name}</div>
      <div>
        <div className={s.buy}>{props.buyPrice} $</div>
      </div>
      <div>
        <div className={s.rent}>{props.rentPayment} $</div>
      </div>
      <div className={s.status}>{props.status}</div>
    </div>
  );
};
