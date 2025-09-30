export interface FormContextType {
  data: Partial<FormData>;
  setFormValues: (values: Partial<FormData>) => void;
  step: number;
  next: () => void;
  back: () => void;
  reset: () => void;
}
