import styles from './Spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.round}>
        <div></div>
      </div>
    </div>
  );
};
