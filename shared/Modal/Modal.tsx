import { useEffect, useRef } from 'react';

import styles from './Modal.module.css';

interface IModal {
  show: boolean;
  children: React.ReactNode;
  setShow: (item: boolean) => void;
  hideCloseButton?: boolean;
}

export const Modal = ({ show, children, setShow, hideCloseButton }: IModal) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutsideContent = (event: any) => {
      if (event.target === modalRef.current) {
        setShow(false);
      }

      window.addEventListener('click', clickOutsideContent);

      return () => {
        window.removeEventListener('click', clickOutsideContent);
      }
    };

  }, [setShow, show]);

  return (
    <div ref={modalRef} className={`${styles.Modal} ${show ? styles.active : ''}`}>
        <div className={styles.Modal__content}>
          {!hideCloseButton && (
            <span style={{ color: 'black' }}
              onClick={() => setShow(false)}className={styles.Modal__close}
            >
              &times;
            </span>
          )}
          {children}
        </div>
    </div>
  );
};

export const ModalHeader = ({ children }: IComponentModal) => {
  return (
    <div className={styles.Modal__header}>
      {children}
    </div>
  )
};

export const ModalBody = ({ children }: IComponentModal) => {
  return (
    <div className={styles.Modal__body}>
      {children}
    </div>
  )
};

export const ModalFooter = ({ children }: IComponentModal) => {
  return (
    <div className={styles.Modal__footer}>
      {children}
    </div>
  )
};


interface IComponentModal {
  children: React.ReactNode;
}