import styles from './Badge.module.css';

interface IBadge {
  type: string;
  content: string;
}

export const Badge = ({ type, content }: IBadge) => {
  return (
    <span className={`${styles.Badge} ${styles.Badge}_${type}`}>
      {content}
    </span>
  );
};
