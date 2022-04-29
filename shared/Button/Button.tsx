import classNames from 'classnames';

import styles from './Button.module.css';

import type { ButtonHTMLAttributes } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

// const switchColorButton = () => {

// }

export const Button = ({ isLoading, ...props }: IButton) => {

  return (
    <button className={classNames(styles.Button, props.className)} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
