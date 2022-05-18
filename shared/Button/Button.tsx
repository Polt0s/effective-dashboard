import classNames from 'classnames';

import type { ButtonHTMLAttributes } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button = ({ isLoading, ...props }: IButton) => {

    return (
        <button
            className={classNames(
                'border-0 outline-0 py-2 px-6 font-semibold bg-orange-main rounded-xl cursor-pointer',
                props.className
            )}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};
