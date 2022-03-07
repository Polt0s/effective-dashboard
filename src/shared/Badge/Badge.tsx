import './badge.css';

interface IBadge {
  type: string;
  content: string;
}

export const Badge = ({ type, content }: IBadge) => {
  return (
    <span className={`badge badge-${type}`}>
      {content}
    </span>
  );
};
