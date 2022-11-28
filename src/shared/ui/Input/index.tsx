import React from 'react';

import s from './Button.module.scss';

interface InputProps {
  value: string;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => {};
}

export const Input: React.FC<InputProps> = (props) => {
  return <input className={s.input} type="text" value={props.value} onChange={props.handler} />;
};
