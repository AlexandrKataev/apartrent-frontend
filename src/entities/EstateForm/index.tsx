import React, { useEffect } from 'react';
import s from './EstateForm.module.scss';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { Ioptions, IShippingFields, statusOptions } from './model/types';
import ReactSelect from 'react-select';
import { ErrorHint } from './ui/ErrorHint';
import { Button } from 'shared/ui/Button';
import {
  useCreateEstateMutation,
  useGetEstateQuery,
  useUpdateEstateMutation,
} from 'shared/api/services/EstateService';
import { useNavigate, useParams } from 'react-router-dom';
import { EstateCreateRequest, EstateUpdateRequest } from 'shared/api/swagger/myApi';

export const EstateForm: React.FC = () => {
  const { estateId } = useParams();

  const navigate = useNavigate();

  const { data } = useGetEstateQuery(Number(estateId));
  const [createEstate] = useCreateEstateMutation();
  const [updateEstate] = useUpdateEstateMutation();

  useEffect(() => {
    estateId && setValueFormClick();
  }, [data]);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<IShippingFields>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IShippingFields> = (formData) => {
    if (window.confirm('Save estate?')) {
      estateId
        ? updateEstate({ ...formData, id: Number(estateId) } as EstateUpdateRequest)
        : createEstate({ ...formData, id: 0 } as EstateCreateRequest);
      navigate('/admin');
      reset();
    }
  };

  const setValueFormClick = () => {
    if (data) {
      data.name && setValue('name', data.name);
      setValue('buyPrice', data?.buyPrice);
      setValue('rentPayment', data?.rentPayment);
      data.description && setValue('description', data.description);
      setValue('status', data?.status);
    }
  };

  const getValue = (value: string) =>
    value ? statusOptions.find((option) => option.value === value) : '';

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
            type="text"
            {...register('description', {
              required: 'Поле обязательно',
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
                  options={statusOptions}
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
      <Button />
    </div>
  );
};
