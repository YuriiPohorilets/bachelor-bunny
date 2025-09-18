import clsx from 'clsx';
import { GothamPro, CenturyGothic, CormorantUnicase, AGaramondPro } from '@/utils/local-fonts';
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
      <body className={classNames}>{children}</body>
    </html>
  );
}
