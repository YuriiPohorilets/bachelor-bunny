import type { Metadata } from 'next';
import { Section } from '@/components/ui';
import { Footer } from '@/components/common';
import {
  Hero,
  About,
  Services,
  GrabAndGo,
  InHomeExecutiveDelivery,
  CateringAndEvents,
  Quotes,
  OurClients,
  MemberClub,
} from '@/scenes/home';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Home | Bachelor Bunny Gourmet',
  description: 'Delicious meals delivered to your door',
};

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <GrabAndGo />
        <InHomeExecutiveDelivery />
        <CateringAndEvents />
        <Quotes />
        <OurClients />
      </main>

      <Section className={styles.section}>
        <MemberClub />
        <Footer />
      </Section>
    </>
  );
}
