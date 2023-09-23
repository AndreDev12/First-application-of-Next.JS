import { ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './alert.module.css';

interface Props {
  children: ReactNode;
  type: string;
}

export default function Alert({ children, type }: Props) {
  return (
    <div
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}
