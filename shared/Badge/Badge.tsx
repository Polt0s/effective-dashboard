interface IBadge {
  children: React.ReactElement;
  className?: string;
}

export const Badge = ({ children, className }: IBadge) => {
    return (
        <span className={`rounded-lg flex justify-center items-center ${className}`}>
            {children}
        </span>
    );
};
