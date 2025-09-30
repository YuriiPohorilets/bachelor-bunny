'use client';

import { createContext, useContext } from 'react';
import { FormContextType } from './types';

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const useForm = (): FormContextType => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useForm must be used within FormProvider');
  }

  return context;
};
