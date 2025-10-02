import type { Metadata } from 'next';

import { LinkButton } from '@/components/ui';
import { PagePath } from '@/types/navigation';
import '@/styles/index.scss';

export const metadata: Metadata = {
  title: 'Not Found | Bachelor Bunny Gourmet',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <LinkButton href={PagePath.Home}>RETURN HOME</LinkButton>
    </div>
  );
}
