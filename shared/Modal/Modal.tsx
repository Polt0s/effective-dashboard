import React from 'react';

import { Button } from 'shared/Button';
import { useClickOutside } from 'hooks';

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
    const ModalStyle = 'fixed overflow-hidden top-0 left-0 w-full h-screen z-10 bg-bg-modal flex justify-center items-center';

    useClickOutside(ModalStyle, () => setIsShow(false));

    const RenderModal = () => (
        <div className={ModalStyle}>
            <div className="relative py-5 px-6 bg-gray-dark shadow-shadow-window rounded-md inline-block align-middle max-w-3xl">
                <div className="flex justify-between items-center mb-5 border-b border-solid border-white">
                    <h2>{title}</h2>
                    {hideCloseButton && (
                        <span
                            onClick={() => setIsShow(false)}
                            className="absolute top-4 right-5 text-xl cursor-pointer text-gray hover:text-black"
                        >
                &times;
                        </span>
                    )}
                </div>

                {children}

                {modalFooter && <div className="flex justify-end items-center mt-5 gap-5">
                    {buttonFooter && (
                        <Button onClick={onClickButtonFooter}>{textButtonFooter}</Button>
                    )}
                    <Button onClick={() => setIsShow(false)}>Close</Button>
                </div>}
            </div>
        </div>
    );

    return isShow ? <RenderModal /> : null;
};
