'use client';

import { createContext, useContext } from 'react';
import { ModalContextType } from './types';

export const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }

  return context;
};
