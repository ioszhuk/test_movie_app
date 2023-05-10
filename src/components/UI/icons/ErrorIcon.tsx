import {FC, memo} from 'react';
import closeIcon from '../../../assets/images/icons/close.png';

export const ErrorIcon: FC = memo(() => <img src={closeIcon} alt="Error" width="64" height="64" />);
