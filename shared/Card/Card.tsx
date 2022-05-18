import React from 'react';
import classNames from 'classnames';

interface ICard {
  children: React.ReactChild;
  className?: string;
  style?: React.CSSProperties;
  width?: string;
}

export const Card = ({ children, className, style, width }: ICard) => {
    return (
        <div
            className={classNames('bg-white rounded-xl min-w-[17.1875rem] h-full box-border', className)}
            style={{ width: width , ...style }}
        >
            {children}
        </div>
    );
};
