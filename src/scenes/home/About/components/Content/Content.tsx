'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Collapse, Paragraph, Quote } from '@/components/ui';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types/media-query';
import styles from './Content.module.scss';

const content = {
  quote: 'Indulge in gourmet elegance, tailored for the modern gentleman',
  description_full:
    'Bachelor Bunny Gourmet is a gourmet meal delivery and catering service aimed at busy professionals who don`t have time to cook.\n We offer you the convenience and luxury of home style, gourmet meals delivered right to your doorstep. We offers a premium dining experience, combining convenience and luxury. Our weekly dinner delivery service is tailored for each client and executed punctually by our courteous customer service representatives.',
  description_chunk00:
    'Bachelor Bunny Gourmet is a gourmet meal delivery and catering service aimed at busy professionals who don`t have time to cook.',
  description_chunk01:
    'We offer you the convenience and luxury of home style, gourmet meals delivered right to your doorstep. We offers a premium dining experience, combining convenience and luxury. Our weekly dinner delivery service is tailored for each client and executed punctually by our courteous customer service representatives.',
};

export const Content: React.FC = () => {
  const isDesktop = useMediaQuery(MediaQuery.DesktopSM);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandedToggle = () => setIsExpanded(expanded => !expanded);

  return (
    <div className={styles.content}>
      <div className={styles.quoteWrapper}>
        <Quote align={isDesktop ? 'end' : 'start'} uppercase>
          {content.quote}
        </Quote>
      </div>

      <div className={styles.paragraphWrapper}>
        {isDesktop ? (
          <Paragraph capitalFirstLetter className={styles.paragraph}>
            {content.description_full}
          </Paragraph>
        ) : (
          <Paragraph capitalFirstLetter className={styles.paragraph}>
            {content.description_chunk00}
            <Collapse component="span" isOpen={isExpanded} className={styles.collapse}>
              {content.description_chunk01}
            </Collapse>
          </Paragraph>
        )}

        <AnimatePresence initial={false}>
          {!isExpanded && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              type="button"
              onClick={handleExpandedToggle}
              className={styles.moreButton}
            >
              read MORE
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
