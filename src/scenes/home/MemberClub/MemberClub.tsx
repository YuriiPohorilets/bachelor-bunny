'use client';

import { Button, Container, Paragraph } from '@/components/ui';
import { socialList } from '@/constants/social';
import styles from './MemberClub.module.scss';

export const MemberClub: React.FC = () => {
  const handleClickJoin = () => {
    const youtubeLink = socialList.find(item => item.id === 'youtube')?.href;
    window.open(youtubeLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <Container>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Become <br /> A Member Of <br /> The Bachelor Club
        </h2>

        <div className={styles.content}>
          <Paragraph capitalFirstLetter className={styles.paragraph}>
            Join 'The Bachelor's Club' for an exclusive dining experience where meals are delivered,
            unpacked, plated, and served by our team, elevating your dining experience and making
            you part of an elite group. <br />
            Indulge in the Art of Mastery, where success is crafted and leisure is defined in the
            exclusive realm of the Modern Gentleman.
          </Paragraph>

          <Button fullWidth onClick={handleClickJoin}>
            Join the club
          </Button>
        </div>
      </div>
    </Container>
  );
};
