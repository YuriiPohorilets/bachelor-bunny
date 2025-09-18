import type { Metadata } from 'next';
import { Hero } from '@/scenes/home';

export const metadata: Metadata = {
  title: 'Home | Bachelor Bunny Gourmet',
  description: 'Delicious meals delivered to your door',
};

export default function HomePage() {
  return (
    <div>
      <Hero />
    </div>
  );
}
