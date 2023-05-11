import {FC, memo} from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
  text: string;
  onClick: () => void;
}

export const Button: FC<IButtonProps> = memo(({text, onClick}) => (
  <button type="button" className={styles.button} onClick={onClick}>
    {text}
  </button>
));
