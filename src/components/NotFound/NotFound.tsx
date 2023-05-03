import {FC} from 'react';
import {clsx} from 'clsx';
import styles from './NotFound.module.scss';
import {useNavigate} from 'react-router-dom';

interface INotFound {
  message: string;
}

export const NotFound: FC<INotFound> = ({message}) => {
  const navigate = useNavigate();

  function navigateToHomePage() {
    navigate('/');
  }

  return (
    <div className={styles.not_found}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.title}>{message}</div>
        <div className={styles.actions}>
          <button type="button" className={styles.button} onClick={navigateToHomePage}>
            Go To Home Page
          </button>
        </div>
      </div>
    </div>
  );
};
