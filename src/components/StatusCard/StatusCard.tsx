import './statusCard.css';

interface IStatusCard {
  count: string;
  title: string;
}

export const StatusCard = ({ count, title }: IStatusCard) => {
  return (
    <div className='status-card'>
      <div className="status-card__icon">
        <i></i>
      </div>

      <div className="status-card__info">
        <h4>{count}</h4>
        <span>{title}</span>
      </div>
    </div>
  );
};

