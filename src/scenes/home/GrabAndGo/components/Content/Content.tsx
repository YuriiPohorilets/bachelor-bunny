'use client';

import { LinkButton, Paragraph } from '@/components/ui';
import { PagePath } from '@/types/navigation';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types/media-query';
import styles from './Content.module.scss';

const content = {
  title: 'About',
  subtitle: 'Grab&Go',
  description:
    'Your convenient solution for busy days and hectic evenings. Our meal package includes four delicious meals, with two delivered on one day and the remaining two on another day within \n the same week. Enjoy gourmet meals without the hassle, tailored to your busy lifestyle.',
};

export const Content: React.FC = () => {
  const isDesktop = useMediaQuery(MediaQuery.DesktopSM);

  return (
    <div className={styles.content}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{content.title}</h2>
      </div>

      <h3 className={styles.subtitle}>{content.subtitle}</h3>

      <Paragraph capitalFirstLetter={isDesktop} className={styles.description}>
        {content.description}
      </Paragraph>

      <div className={styles.linkWRapper}>
        <LinkButton href={PagePath.GrabAndGo} fullWidth={isDesktop} className={styles.link}>
          {isDesktop ? 'Grab&Go' : 'more'}
        </LinkButton>
      </div>
    </div>
  );
};
