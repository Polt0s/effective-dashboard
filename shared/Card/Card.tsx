import React from 'react';
import classNames from 'classnames';

import styles from './Card.module.css';

interface ICard {
  children: React.ReactChild;
  className?: string;
  style?: React.CSSProperties;
  width?: string;
}

export const Card = ({ children, className, style, width }: ICard) => {
  return (
    <div className={classNames(styles.Card, className)} style={{ width: width , ...style }}>
      {children}
    </div>
  );
};
