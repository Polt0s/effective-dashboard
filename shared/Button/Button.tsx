import styles from './Button.module.css';

import type { ButtonHTMLAttributes } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button = ({ isLoading, ...props }: IButton) => {

  return (
    <button className={styles.Button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
