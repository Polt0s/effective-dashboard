import React from 'react';

import { Button } from 'shared/Button';
import { useClickOutside } from 'hooks';

import styles from './Modal.module.css';

interface IModal {
  isShow: boolean;
  setIsShow: (item: boolean) => void;
  children: React.ReactNode;
  modalFooter?: boolean;
  hideCloseButton?: boolean;
  title?: string;
  buttonFooter?: boolean;
  textButtonFooter?: string;
  onClickButtonFooter?: () => void;
}

export const Modal = ({ 
  isShow,
  setIsShow,
  children,
  modalFooter,
  hideCloseButton,
  title,
  buttonFooter,
  textButtonFooter,
  onClickButtonFooter
}: IModal) => {
  useClickOutside(styles.Modal, () => setIsShow(false));

  const RenderModal = () => (
    <div className={styles.Modal}>
        <div className={styles.Modal__body}>
          <div className={styles.Modal__header}>
            <h2>{title}</h2>
            {hideCloseButton && (
              <span
                onClick={() => setIsShow(false)}className={styles.Modal__close}
              >
                &times;
              </span>
            )}
          </div>

          {children}

          {modalFooter && <div className={styles.Modal__footer}>
            {buttonFooter && (
              <Button onClick={onClickButtonFooter}>{textButtonFooter}</Button>
            )}
            <Button onClick={() => setIsShow(false)}>Close</Button>
          </div>}
        </div>
    </div>
  );

  // createPortal(<RenderModal />, idRoot);
  return isShow ? <RenderModal /> : null;
};
