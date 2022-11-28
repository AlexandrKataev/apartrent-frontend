import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Header.module.scss';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const onClickEstate = () => {
    navigate(`/admin`);
  };
  return (
    <div className={s.container}>
      <div className={s.home} onClick={onClickEstate}>
        AdminPage
      </div>
    </div>
  );
};
