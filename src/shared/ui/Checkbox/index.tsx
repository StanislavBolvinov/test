import { InputHTMLAttributes, ChangeEvent, useState, useEffect } from 'react';
import styles from './Checkbox.module.scss';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  isCheckedDefault?: boolean;
}

export const Checkbox = ({ className, onChange, label, isCheckedDefault, ...otherProps }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(!!isCheckedDefault);

  useEffect(() => {
    setIsChecked(!!isCheckedDefault);
  }, [isCheckedDefault]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
    setIsChecked((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input className={styles.input} type="checkbox" checked={isChecked} onChange={handleChange} {...otherProps} />
      </div>
      {label && (
        <label className={styles.label} htmlFor={otherProps.id}>
          {label}
        </label>
      )}
    </div>
  );
};
