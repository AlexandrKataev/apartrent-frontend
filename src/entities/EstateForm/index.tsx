import React from 'react';
import s from './EstateForm.module.scss';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { Ioptions, IShippingFields } from './types';
import ReactSelect from 'react-select';
import { ErrorHint } from './ui/ErrorHint';
import { Field } from 'devextreme-react/data-grid';

const options: Ioptions[] = [
  { value: 'none', label: 'None' },
  { value: 'preparingForInvestments', label: 'Preparing for investments' },
  { value: 'announcement', label: 'Announcement' },
  { value: 'fundraising', label: 'Fundraising' },
  { value: 'buyingEstate', label: 'Buying Estate' },
  { value: 'preparingForRent', label: 'Preparing for rent' },
  { value: 'rented', label: 'Rented' },
  { value: 'lookingForTenants', label: 'Looking for tenants' },
  { value: 'preparingForSell', label: 'Preparing for sell' },
  { value: 'sold', label: 'Sold' },
];

// Форма на DevExpress
export const EstateForm: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<IShippingFields>({ mode: 'onChange' });
  const onSubmit: SubmitHandler<IShippingFields> = (data) => {
    alert(
      `name: ${data.name}, price: ${data.buyPrice}, descr: ${data.description}, status: ${data.status}`,
    );
    reset();
  };

  const setValueFormClick = () => {
    setValue('name', 'House');
    setValue('buyPrice', 2000);
    setValue('description', 'Здесь будет загруженое описание');
    setValue('status', 'rented');
  };

  const getValue = (value: string) =>
    value ? options.find((option) => option.value === value) : '';

  return (
    <div className={s.container}>
      <h1>EstateForm</h1>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)} className={s.container}>
        <div className={s.stroke}>
          <div className={s.descr}>Name</div>
          <input
            {...register('name', { required: 'Поле обязательно' })}
            type="text"
            className={s.input}
          />
          {errors.name?.message && <ErrorHint errorMessage={errors.name.message} />}
        </div>
        <div className={s.stroke}>
          <div className={s.descr}>Buy Price</div>
          <input
            type="number"
            className={s.input}
            {...register('buyPrice', {
              required: 'Поле обязательно',
              min: {
                value: 1000,
                message: 'Не должно быть меньше 1000',
              },
            })}
          />
          {errors.buyPrice?.message && <ErrorHint errorMessage={errors.buyPrice.message} />}
        </div>
        <div className={s.stroke}>
          <div className={s.descr}>Rent Payment</div>
          <input
            type="number"
            className={s.input}
            {...register('rentPayment', {
              required: 'Поле обязательно',
              min: {
                value: 1000,
                message: 'Не должно быть меньше 1000',
              },
            })}
          />
          {errors.rentPayment?.message && <ErrorHint errorMessage={errors.rentPayment.message} />}
        </div>
        <div className={s.stroke}>
          <div className={s.descr}>Description</div>
          <input
            className={s.input}
            {...register('description', {
              pattern: { value: /^[A-Za-z]+$/i, message: 'Только буквы' },
            })}
          />
          {errors.description?.message && <ErrorHint errorMessage={errors.description.message} />}
        </div>
        <div className={s.stroke}>
          <Controller
            control={control}
            name="status"
            rules={{ required: 'Выберите статус' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <div>
                <ReactSelect
                  className={s.popup}
                  placeholder={'status'}
                  options={options}
                  value={getValue(value)}
                  onChange={(newValue) => {
                    onChange((newValue as Ioptions).value);
                  }}
                />
                {error?.message && <ErrorHint errorMessage={error.message} />}
              </div>
            )}
          />
        </div>

        <button>Save</button>
      </form>
      <button onClick={setValueFormClick}>Set value</button>
    </div>
  );
};
