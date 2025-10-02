'use client';

import { Container, ScrollToTopButton } from '@/components/ui';
import { Address, Copyright, FooterAction, FooterNavigation, Social } from '@/components/common';
import { MediaQuery } from '@/types/media-query';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import styles from './Footer.module.scss';

const navigationItems = [
  {
    title: 'Navigation',
    Component: <FooterNavigation />,
  },
  {
    title: 'Business enquires',
    Component: <Address direction="column" />,
  },
  {
    title: 'Follow us',
    Component: <Social direction="column" variant="text" />,
  },
];

export const Footer: React.FC = () => {
  const isDesktop = useMediaQuery(MediaQuery.DesktopSM);

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <FooterAction />

          <div className={styles.navigation}>
            {isDesktop ? (
              navigationItems.map(({ title, Component }, index) => (
                <div key={`${title}_${index}`} className={styles.navigationItem}>
                  <h3 className={styles.title}>{title}</h3>
                  {Component}
                </div>
              ))
            ) : (
              <Address direction="column" showIcon={true} hideElements={['fax']} />
            )}
          </div>

          <div className={styles.copyright}>
            <Copyright />

            {isDesktop ? (
              <ScrollToTopButton />
            ) : (
              <Social color="secondary" direction="row" variant="icon" />
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
};
