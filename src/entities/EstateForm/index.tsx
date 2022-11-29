import React from 'react';
import s from './EstateForm.module.scss';

import { SubmitHandler, useForm } from 'react-hook-form';
import { IShippingFields } from './types';

// Форма на DevExpress
export const EstateForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IShippingFields>();
  const onSubmit: SubmitHandler<IShippingFields> = (data) =>
    alert(`name: ${data.name}, price: ${data.buyPrice}, descr: ${data.description}`);

  return (
    <div className={s.container}>
      <h1>EstateForm</h1>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)} className={s.container}>
        <div className={s.stroke}>
          <input
            {...register('name', { required: 'Поле обязательно' })}
            type="text"
            className={s.input}
          />
          {errors.name && (
            <div className={s.error} style={{ color: 'red' }}>
              {errors.name.message}
            </div>
          )}
        </div>

        <input className={s.input} {...register('buyPrice', { required: true, max: 20 })} />
        <input className={s.input} {...register('description', { pattern: /^[A-Za-z]+$/i })} />

        <button>Save</button>
      </form>
    </div>
  );
};
