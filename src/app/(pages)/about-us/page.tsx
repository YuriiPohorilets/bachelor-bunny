import { Section } from '@/components/ui';
import { Hero } from '@/scenes/about-us';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About us | Bachelor Bunny Gourmet',
  description: 'Crafting gourmet delights, personalized for your lifestyle',
};

export default function AboutUsPage() {
  return (
    <>
      <main>
        <Hero />
      </main>

      <Section></Section>
    </>
  );
}
