import { FC, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Popup.module.scss';

interface PopupProps {
  showPopup: boolean;
  setShowPopup: (showPopup: boolean) => void;
}

export const Popup: FC<PopupProps> = ({ showPopup, setShowPopup }) => {
  const navigate = useNavigate();
  const popupRef = useRef<HTMLDivElement>(null);

  const onClickProfile = () => {
    navigate('/profile');
  };

  const onClickAdminPanel = () => {
    navigate('/admin');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showPopup &&
        popupRef.current &&
        !popupRef.current.contains(event.target as Node | null)
      ) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div className={s.container} ref={popupRef}>
      <div className={s.item} onClick={onClickProfile}>
        Профиль
      </div>
      <div className={s.item} onClick={onClickAdminPanel}>
        Админ-панель
      </div>
    </div>
  );
};
