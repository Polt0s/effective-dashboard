import React from 'react';

export const useClickOutside = (className: string, func: () => void) => {
    const clickOutside = React.useCallback((event: MouseEvent) => {
        const target = event.target as Element;
        if (target && target.className === className) {
            func();
        }
    }, [className, func]);

    React.useEffect(() => {
        document.addEventListener('click', clickOutside);

        return () => {
            document.removeEventListener('click', clickOutside);
        };
    }, [clickOutside]);
};
