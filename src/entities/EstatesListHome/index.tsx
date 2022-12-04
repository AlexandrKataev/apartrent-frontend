import { EstateItem } from 'entities/EstateItem';
import React from 'react';
import { useGetEstatesListQuery } from 'shared/api/services/EstateService';
import s from './EstatesListHome.module.scss';

export const EstatesListHome = () => {
  const { data } = useGetEstatesListQuery('');
  return (
    <div className={s.container}>
      {data?.map((el) => {
        return <EstateItem {...el} />;
      })}
    </div>
  );
};
