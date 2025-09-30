'use client';

import { ReactNode, useState } from 'react';
import { FormContext } from './form-context';

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Partial<FormData>>({});
  const [step, setStep] = useState(0);

  const setFormValues = (values: Partial<FormData>) => {
    setData(prevData => ({ ...prevData, ...values }));
  };

  const next = () => setStep(prevStep => prevStep + 1);
  const back = () => setStep(prevStep => Math.max(0, prevStep - 1));
  const reset = () => {
    setData({});
    setStep(0);
  };

  const value = {
    data,
    setFormValues,
    step,
    next,
    back,
    reset,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
