import classNames from 'classnames';

import styles from './Skeleton.module.css';

interface ISkeleton {
    variant?: 'rectangular' | 'circular' | 'text';
    width?: number;
    height?: number;
    background?: string;
    className?: string;
}

export const Skeleton = ({ variant, width, height, background, className }: ISkeleton) => {

    const RectangularSkeleton = () => (
        <div
            style={{ maxWidth: width, height: height, backgroundColor: background }}
            className={classNames(styles.SkRectangular, className)}
        />
    );

    const CircularSkeleton = () => (
        <div
            style={{ width: width, height: height, backgroundColor: background }}
            className={classNames(styles.SkCircular, className)}
        />
    );

    const TextSkeleton = () => (
        <span
            style={{ backgroundColor: background }}
            className={classNames(styles.SkText, className)}
        />
    );

    const configRender = {
        'rectangular': <RectangularSkeleton />,
        'circular': <CircularSkeleton />,
        'text': <TextSkeleton />
    };

    return configRender[variant || 'rectangular'];
};
