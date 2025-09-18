import localFont from 'next/font/local';

const GothamPro = localFont({
  src: [
    {
      path: '../assets/fonts/GothamPro/GothamPro-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/GothamPro/GothamPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

const CenturyGothic = localFont({
  src: [
    {
      path: '../assets/fonts/CenturyGothic/CenturyGothic-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CenturyGothic/CenturyGothic-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

const CormorantUnicase = localFont({
  src: [
    {
      path: '../assets/fonts/CormorantUnicase/CormorantUnicase-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CormorantUnicase/CormorantUnicase-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CormorantUnicase/CormorantUnicase-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

const AGaramondPro = localFont({
  src: [
    {
      path: '../assets/fonts/AGaramondPro/AGaramondPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

export { GothamPro, CenturyGothic, CormorantUnicase, AGaramondPro };
