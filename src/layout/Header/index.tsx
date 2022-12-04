import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Header.module.scss';
import { ReactComponent as UserIcon } from 'shared/icons/user.svg';
import { ReactComponent as DownIcon } from 'shared/icons/down.svg';
import { Popup } from 'shared/ui/Popup';

type PopupClick = MouseEvent & {
  path: Node[];
};

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const popupRef = React.useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;
      if (popupRef.current && !_event.path.includes(popupRef.current)) {
        setShowPopup(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

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
      <div ref={popupRef} className={s.user} onClick={onClickUser}>
        User Name
        <UserIcon className={s.user_icon} />
        <DownIcon className={s.down_icon} />
        {showPopup && <Popup />}
      </div>
    </div>
  );
};
