export interface FormContextType {
  data: Partial<FormData>;
  setFormValues: (values: Partial<FormData>) => void;
  step: {
    min: number;
    max: number;
    current: number;
  };
  next: () => void;
  back: () => void;
  reset: () => void;
}
