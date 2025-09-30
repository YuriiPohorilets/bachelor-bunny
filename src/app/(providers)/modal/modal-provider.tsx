'use client';

import { useState, ReactNode, useCallback } from 'react';
import { useLenis } from 'lenis/react';
import { OrderModal } from '@/components/features';
import { Backdrop, Modal } from '@/components/ui';
import { ModalContext } from './modal-context';
import { ModalName, ModalParams } from './types';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const lenis = useLenis();
  const [modalParams, setModalParams] = useState<ModalParams | null>(null);

  const openModal = useCallback(
    (params: ModalParams) => {
      setModalParams(params);
      lenis?.stop();
    },
    [lenis]
  );

  const closeModal = useCallback(() => {
    setModalParams(null);
    lenis?.start();
  }, [lenis]);

  const renderModal = () => {
    if (!modalParams) return null;
    const { name } = modalParams!;

    switch (name) {
      case ModalName.Order:
        return <OrderModal />;

      default:
        return null;
    }
  };

  return (
    <ModalContext.Provider value={{ modalName: modalParams?.name, openModal, closeModal }}>
      {children}
      <Modal
        isOpen={!!modalParams}
        onClose={closeModal}
        className={modalParams?.options?.className}
      >
        {renderModal()}
      </Modal>

      <Backdrop isOpen={!!modalParams} onClose={closeModal} />
    </ModalContext.Provider>
  );
};
