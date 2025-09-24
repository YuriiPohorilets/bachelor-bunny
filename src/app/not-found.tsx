import { LinkButton } from '@/components/ui';
import { PagePath } from '@/types/navigation';
import '@/styles/index.scss';

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <LinkButton href={PagePath.Home}>RETURN HOME</LinkButton>
    </div>
  );
}
