import { useAppDispatch, useAppSelector } from 'app/model/hooks';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './EstateProfile.module.scss';

import {
  resetEstate,
  setEstateBuyPrice,
  setEstateDescription,
  setEstateId,
  setEstateLastUpdated,
  setEstateName,
  setEstateRentPayment,
  setEstateStatus,
} from './model/estateProfileSlice';
import { useFetchEstateProfile } from './model/hooks/useFetchEstateProfile';
import { selectEstateProfile, selectEstateProfileDescription } from './model/selectors';

interface EstateProfileProps {
  estateId: string;
  isCreated: boolean;
}

export const EstateProfile: React.FC<EstateProfileProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isChanged, setIsChanged] = useState(false);

  const profileState = useAppSelector(selectEstateProfile);
  const description = useAppSelector(selectEstateProfileDescription);

  useFetchEstateProfile(props);

  useEffect(() => {
    return () => {
      dispatch(resetEstate());
    };
  }, []);

  const onClickPostEstate = async () => {
    if (window.confirm('Add estate?')) {
      await axios
        .post('http://localhost:6100/Estate/addEstate', {
          name: profileState.name,
          id: 0,
          description: profileState.description,
          buyPrice: profileState.buyPrice,
          rentPayment: profileState.rentPayment,
          status: profileState.status,
        })
        .then(function (response) {
          navigate(`/admin`);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const onClickUpdateEstate = async () => {
    if (window.confirm('Save changes?')) {
      await axios
        .patch('http://localhost:6100/Estate/updateEstate', {
          name: profileState.name,
          id: profileState.id,
          description: profileState.description,
          buyPrice: profileState.buyPrice,
          rentPayment: profileState.rentPayment,
          status: profileState.status,
        })
        .then(function (response) {
          navigate(`/admin`);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const onClickDelete = async () => {
    if (window.confirm('Delete estate?')) {
      await axios
        .delete(`http://localhost:6100/Estate/deleteEstate?id=${props.estateId}`)
        .then(function (response) {
          navigate(`/admin`);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEstateName(event.target.value));
    !isChanged && setIsChanged(true);
  };

  const onChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setEstateDescription(event.target.value));
    !isChanged && setIsChanged(true);
  };
  const onChangeBuyPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEstateBuyPrice(event.target.value));
    !isChanged && setIsChanged(true);
  };

  const onChangeRentPayment = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEstateRentPayment(event.target.value));
    !isChanged && setIsChanged(true);
  };

  const onChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEstateStatus(event.target.value));
    !isChanged && setIsChanged(true);
  };

  const onClickCancel = () => {
    navigate(`/admin`);
  };

  return (
    <div>
      <div className={s.container}>
        <div className={s.header}>
          {props.isCreated ? `Estate #${props.estateId}` : 'Add estate'}{' '}
        </div>
        <div className={s.item}>
          <div className={s.title}>id</div>
          <div>{profileState.id}</div>
        </div>
        <div className={s.item}>
          <div className={s.title}>name</div>
          <input
            className={s.input}
            type="text"
            value={profileState.name}
            onChange={onChangeName}
          />
        </div>
        <div className={s.item}>
          <div className={s.title}>description</div>
          <textarea
            className={s.input}
            value={description}
            onChange={onChangeDescription}
            rows={6}
          />
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
          <div>{`${profileState.lastUpdated}`}</div>
        </div>
        <div className={s.item}>
          {isChanged ? (
            <button onClick={props.isCreated ? onClickUpdateEstate : onClickPostEstate}>
              Сохранить
            </button>
          ) : (
            <button className={s.dissabled_button}>Сохранить</button>
          )}
          <button onClick={onClickCancel}>Отменить</button>
          {props.isCreated && <button onClick={onClickDelete}>Удалить</button>}
        </div>
      </div>
    </div>
  );
};
