import localFont from 'next/font/local';

const CenturyGothic = localFont({
  src: [
    {
      path: '../../public/fonts/CenturyGothic/CenturyGothic-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CenturyGothic/CenturyGothic-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-primary',
});

const GothamPro = localFont({
  src: [
    {
      path: '../../public/fonts/GothamPro/GothamPro-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GothamPro/GothamPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-secondary',
});

const CormorantUnicase = localFont({
  src: [
    {
      path: '../../public/fonts/CormorantUnicase/CormorantUnicase-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CormorantUnicase/CormorantUnicase-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CormorantUnicase/CormorantUnicase-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-accent',
});

const AGaramondPro = localFont({
  src: [
    {
      path: '../../public/fonts/AGaramondPro/AGaramondPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-accent-2',
});

const localFonts = { GothamPro, CenturyGothic, CormorantUnicase, AGaramondPro };
export { localFonts };
