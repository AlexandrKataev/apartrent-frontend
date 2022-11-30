import React from 'react';
import s from './ErrorHint.module.scss';

interface ErrorHintProps {
  errorMessage: string;
}

export const ErrorHint: React.FC<ErrorHintProps> = (props) => {
  return (
    <div className={s.error} style={{ color: 'red' }}>
      {props.errorMessage}
    </div>
  );
};
