import { useAppDispatch, useAppSelector } from 'app/model/hooks';
import React, { useEffect } from 'react';
import s from './EstateProfile.module.scss';

import {
  getEstateProfile,
  setEstateProfileBuyPrice,
  setEstateProfileDescription,
  setEstateProfileId,
  setEstateProfileLastUpdated,
  setEstateProfileName,
  setEstateProfileRentPayment,
  setEstateProfileStatus,
} from './model/estateProfileSlice';
import { useFetchEstateProfile } from './model/hooks/useFetchEstateProfile';
import { selectEstateProfile, selectEstateProfileDescription } from './model/selectors';

interface EstateProfileProps {
  estateId: string;
  isCreated: boolean;
}

export const EstateProfile: React.FC<EstateProfileProps> = (props) => {
  const profileState = useAppSelector(selectEstateProfile);
  const description = useAppSelector(selectEstateProfileDescription);
  const dispatch = useAppDispatch();
  useFetchEstateProfile(props);

  useEffect(() => {
    return () => {
      dispatch(setEstateProfileId(''));
      dispatch(setEstateProfileName(''));
      dispatch(setEstateProfileDescription(''));
      dispatch(setEstateProfileBuyPrice(''));
      dispatch(setEstateProfileRentPayment(''));
      dispatch(setEstateProfileStatus(''));
      dispatch(setEstateProfileLastUpdated(''));
    };
  }, []);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEstateProfileName(event.target.value));
  };

  const onChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setEstateProfileDescription(event.target.value));
  };
  const onChangeBuyPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEstateProfileBuyPrice(event.target.value));
  };

  const onChangeRentPayment = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEstateProfileRentPayment(event.target.value));
  };

  const onChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEstateProfileStatus(event.target.value));
  };

  const onChangeLastUpdated = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEstateProfileLastUpdated(event.target.value));
  };

  return (
    <div className={s.container}>
      <div className={s.item}>
        <div className={s.title}>id</div>
        <div>{profileState.id}</div>
      </div>
      <div className={s.item}>
        <div className={s.title}>name</div>
        <input className={s.input} type="text" value={profileState.name} onChange={onChangeName} />
      </div>
      <div className={s.item}>
        <div className={s.title}>description</div>
        <textarea className={s.input} value={description} onChange={onChangeDescription} rows={6} />
      </div>
      <div className={s.item}>
        <div className={s.title}>buyPrice</div>
        <input
          className={s.input}
          type="text"
          value={profileState.buyPrice}
          onChange={onChangeBuyPrice}
        />
      </div>
      <div className={s.item}>
        <div className={s.title}>rentPayment</div>
        <input
          className={s.input}
          type="text"
          value={profileState.rentPayment}
          onChange={onChangeRentPayment}
        />
      </div>
      <div className={s.item}>
        <div className={s.title}>status</div>
        <input
          className={s.input}
          type="text"
          value={profileState.status}
          onChange={onChangeStatus}
        />
      </div>
      <div className={s.item}>
        <div className={s.title}>lastUpdated</div>
        <input
          className={s.input}
          type="text"
          value={profileState.lastUpdated}
          onChange={onChangeLastUpdated}
        />
      </div>
      <div className={s.item}>
        <button>Сохранить</button>
        <button>Отменить</button>
        <button>Удалить</button>
      </div>
    </div>
  );
};
