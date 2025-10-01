'use client';

import { ReactNode, useState } from 'react';
import { FormContext } from './form-context';

const MIN_STEP = 0;
const MAX_STEP = 4;

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Partial<FormData>>({});
  const [step, setStep] = useState(0);

  const setFormValues = (values: Partial<FormData>) => {
    setData(prevData => ({ ...prevData, ...values }));
  };

  const next = () => setStep(prevStep => Math.min(MAX_STEP, prevStep + 1));
  const back = () => setStep(prevStep => Math.max(MIN_STEP, prevStep - 1));
  const reset = () => {
    setData({});
    setStep(0);
  };

  const value = {
    data,
    setFormValues,
    step: {
      min: MIN_STEP,
      max: MAX_STEP,
      current: step,
    },
    next,
    back,
    reset,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
