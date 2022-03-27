import React from 'react';
import cn from 'classnames';

import styles from './Typography.module.css';

interface ITypography {
  variant?: TVariant;
  align?: TTextAlign;
  size?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const Typography = ({ variant, children, style, align, className, size }: ITypography) => React.createElement(
  variant || 'h1',
  {
    className: cn(styles.Typography, styles[`TextAlign-${align}`], className),
    style: { fontSize: size, lineHeight: size, ...style}
  },
  children
);

type TVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
type TTextAlign = 'center' | 'justify' | 'left' | 'right' | 'auto' | 'inherit' | 'start' | 'end';
