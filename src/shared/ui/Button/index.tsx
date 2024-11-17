import { HTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button type="button" {...rest} className={styles.button}>
      {children}
    </button>
  );
};
