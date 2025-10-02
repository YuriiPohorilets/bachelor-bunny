import clsx from 'clsx';
import { GothamPro, CenturyGothic, CormorantUnicase, AGaramondPro } from '@/utils/local-fonts';
import { Providers } from '@/app/(providers)/Providers';
import { Header } from '@/components/common';
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
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
