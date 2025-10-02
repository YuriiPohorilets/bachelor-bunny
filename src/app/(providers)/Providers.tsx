import { FormProvider } from '@/app/(providers)/form/form-provider';
import { ModalProvider } from '@/app/(providers)/modal/modal-provider';
import { SmoothScroll } from '@/components/common';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <FormProvider>
        <ModalProvider>{children}</ModalProvider>
      </FormProvider>
    </SmoothScroll>
  );
}
