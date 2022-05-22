interface IBadge {
  children: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'error';
}

const configColor = {
    primary: 'bg-light-blue',
    secondary: '',
    error: 'bg-light-red',
};

export const Badge = ({ children, className, color = 'primary' }: IBadge) => {
    return (
        <span className={`rounded-lg flex justify-center items-center ${configColor[color]} ${className}`}>
            {children}
        </span>
    );
};
