import {FC, useEffect} from 'react';
import {Select, initTE} from 'tw-elements';
import styles from './MovieSort.module.scss';

export const MovieSort: FC = () => {

  useEffect(() => {
    initTE({Select});
  }, []);

  return (
    <div className={styles.sort}>
      <select data-te-select-init="">
        <option value="1">By Name</option>
        <option value="2">By Rating</option>
        <option value="3">By Length</option>
      </select>
      <label data-te-select-label-ref="">Sort</label>
    </div>
  );
};
