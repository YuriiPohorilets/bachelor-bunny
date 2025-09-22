import clsx from 'clsx';
import { localFonts } from '@/utils/local-fonts';
import { Footer, Header, SmoothScroll } from '@/components/common';
import '@/styles/index.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classNames = clsx(localFonts);

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
