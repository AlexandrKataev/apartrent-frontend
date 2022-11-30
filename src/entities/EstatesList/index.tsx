import React, { useEffect, useState } from 'react';
import s from './Estate.module.scss';

import { ReactComponent as Trash } from 'shared/icons/trash.svg';

import { ReactComponent as Plus } from 'shared/icons/plus.svg';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDeleteEstateMutation, useGetEstatesListQuery } from 'shared/api/services/EstateService';

export const EstatesList: React.FC = () => {
  const navigate = useNavigate();

  const { data } = useGetEstatesListQuery('');
  const [deleteEstate] = useDeleteEstateMutation();

  const [onMouseDelete, setOnMouseDelete] = useState(false);

  const onClickEstate = (estateId: number) => {
    navigate(`/estate/${estateId}`);
  };

  const onClickAddEstate = () => {
    navigate(`/estate/add`);
  };

  const onClickDelete = async (id: number) => {
    if (window.confirm('Delete estate?')) {
      deleteEstate(id);
    }
  };

  const items = data?.map((el) => {
    return (
      <div className={s.item} key={el.id} onClick={() => !onMouseDelete && onClickEstate(el.id)}>
        <div className={s.id}>{el.id}</div>
        <div className={s.name}>{el.name}</div>
        <div className={s.buyPrice}>{el.buyPrice} $</div>
        <div className={s.rentPayment}>{el.rentPayment} $</div>
        <div className={s.status}>{el.status}</div>
        <div className={s.updated}>{el.lastUpdated.slice(0, 10)}</div>
        <div
          className={s.icon}
          onClick={() => onClickDelete(el.id)}
          onMouseOver={() => setOnMouseDelete(true)}
          onMouseOut={() => setOnMouseDelete(false)}>
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
        <div className={s.plus} onClick={onClickAddEstate}>
          <Plus />
        </div>
      </div>
      {items}
    </div>
  );
};
