import clsx from 'clsx';
import { GothamPro, CenturyGothic, CormorantUnicase, AGaramondPro } from '@/utils/local-fonts';
import { Header, SmoothScroll } from '@/components/common';
import { ModalProvider } from '@/app/(providers)/modal/modal-provider';
import { FormProvider } from '@/app/(providers)/form/form-provider';
import '@/styles/index.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classNames = clsx(
    GothamPro.variable,
    CenturyGothic.variable,
    CormorantUnicase.variable,
    AGaramondPro.variable
  );

  return (
    <html lang="en">
      <body className={classNames}>
        <SmoothScroll>
          <FormProvider>
            <ModalProvider>
              <Header />
              {children}
            </ModalProvider>
          </FormProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
