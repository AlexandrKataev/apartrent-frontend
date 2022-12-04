import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Popup.module.scss';

export const Popup = () => {
  const navigate = useNavigate();

  const onClickProfile = () => {
    navigate('/profile');
  };

  const onClickAdminPanel = () => {
    navigate('/admin');
  };

  return (
    <div className={s.container}>
      <div className={s.item} onClick={onClickProfile}>
        Профиль
      </div>
      <div className={s.item} onClick={onClickAdminPanel}>
        Админ-панель
      </div>
    </div>
  );
};
