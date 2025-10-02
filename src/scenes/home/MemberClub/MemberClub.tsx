'use client';

import { Button, Container, Paragraph } from '@/components/ui';
import { socialList } from '@/constants/social';
import styles from './MemberClub.module.scss';

const content = {
  title: 'Become \n A Member Of \n The Bachelor Club',
  description:
    "Join 'The Bachelor's Club' for an exclusive dining experience where meals are delivered, unpacked, plated, and served by our team, elevating your dining experience and making you part of an elite group. \n Indulge in the Art of Mastery, where success is crafted and leisure is defined in the exclusive realm of the Modern Gentleman.",
  buttonLabel: 'Join the club',
};

export const MemberClub: React.FC = () => {
  const handleClickJoin = () => {
    const youtubeLink = socialList.find(item => item.id === 'youtube')?.href;
    window.open(youtubeLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.innerWrapper}>
          <h2 className={styles.title}>{content.title}</h2>

          <div className={styles.content}>
            <Paragraph capitalFirstLetter className={styles.paragraph}>
              {content.description}
            </Paragraph>

            <Button fullWidth onClick={handleClickJoin}>
              {content.buttonLabel}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
