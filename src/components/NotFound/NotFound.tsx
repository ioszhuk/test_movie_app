import {FC, memo} from 'react';
import {useNavigate} from 'react-router-dom';
import {clsx} from 'clsx';
import styles from './NotFound.module.scss';

interface INotFoundProps {
  message: string;
}

export const NotFound: FC<INotFoundProps> = memo(({message}) => {
  const navigate = useNavigate();

  const goHome = () => navigate('/');

  return (
    <div className={styles.not_found}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.title}>{message}</div>
        <div className={styles.actions}>
          <button type="button" className={styles.button} onClick={goHome}>
            Go To Home Page
          </button>
        </div>
      </div>
    </div>
  );
});
