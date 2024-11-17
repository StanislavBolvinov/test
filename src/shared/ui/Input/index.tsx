import { useState, ChangeEvent, HTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  initialValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ initialValue, onChange, ...rest }: InputProps) => {
  const [value, setValue] = useState(initialValue);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange?.(event);
  };

  return <input className={styles.input} value={value} onChange={onChangeInput} {...rest} />;
};
