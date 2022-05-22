import classNames from 'classnames';

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
            className={classNames('bg-black-main w-full h-full animate-pulse', className)}
        />
    );

    const CircularSkeleton = () => (
        <div
            style={{ width: width, height: height, backgroundColor: background }}
            className={classNames('bg-black-main w-8 h-8 rounded-half animate-pulse', className)}
        />
    );

    const TextSkeleton = () => (
        <span
            style={{ backgroundColor: background }}
            className={classNames('d-block bg-black-main w-full h-5 rounded-xl animate-pulse', className)}
        />
    );

    const configRender = {
        'rectangular': <RectangularSkeleton />,
        'circular': <CircularSkeleton />,
        'text': <TextSkeleton />
    };

    return configRender[variant || 'rectangular'];
};
