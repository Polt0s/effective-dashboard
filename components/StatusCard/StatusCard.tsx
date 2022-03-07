import styles from './StatusCard.module.css';

interface IStatusCard {
  count: string;
  title: string;
}

export const StatusCard = ({ count, title }: IStatusCard) => {
  return (
    <div className={styles.StatusCard}>
      <div className={styles.StatusCard__icon}>
        <i></i>
      </div>

      <div className={styles.StatusCard__info}>
        <h4>{count}</h4>
        <span>{title}</span>
      </div>
    </div>
  );
};

