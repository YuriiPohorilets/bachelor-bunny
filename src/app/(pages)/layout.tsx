import clsx from 'clsx';
import { GothamPro, CenturyGothic, CormorantUnicase, AGaramondPro } from '@/utils/local-fonts';
import { Footer, Header, SmoothScroll } from '@/components/common';
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
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
