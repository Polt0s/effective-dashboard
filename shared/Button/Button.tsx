import classNames from 'classnames';

import type { ButtonHTMLAttributes } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  color?: 'primary' | 'orange';
}

const colorConfig = {
    primary: 'bg-primary',
    orange: 'bg-orange'
};

export const Button = ({ isLoading, color = 'orange', ...props }: IButton) => {

    return (
        <button
            className={classNames(
                `border-0 outline-0 py-2 px-6 font-semibold ${colorConfig[color]} rounded-main cursor-pointer`,
                props.className
            )}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};
