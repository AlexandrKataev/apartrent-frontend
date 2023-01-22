import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Header.module.scss';
import { ReactComponent as UserIcon } from 'shared/icons/user.svg';
import { ReactComponent as DownIcon } from 'shared/icons/down.svg';
import { Popup } from 'shared/ui/Popup';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);

  const onClickHome = () => {
    navigate(`/`);
  };
  const onClickUser = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className={s.container}>
      <div className={s.home} onClick={onClickHome}>
        apartRent
      </div>
      <div className={s.user} onClick={onClickUser}>
        User Name
        <UserIcon className={s.user_icon} />
        <DownIcon className={s.down_icon} />
        {showPopup && <Popup setShowPopup={setShowPopup} showPopup={showPopup} />}
      </div>
    </div>
  );
};
