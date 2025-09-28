'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { useRef } from 'react';

interface CollapseProps extends React.PropsWithChildren {
  component?: string | React.ComponentType<any>;
  isOpen: boolean;
  duration?: number;
  className?: string;
}

const inlineTags = new Set([
  'a',
  'span',
  'button',
  'textarea',
  'input',
  'img',
  'label',
  'strong',
  'b',
  'br',
  'sub',
  'sup',
]);

export const Collapse: React.FC<CollapseProps> = ({
  children,
  component: Component = 'span',
  isOpen,
  duration = 0.3,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const MotionComponent = motion.create(Component);
  const classNames = clsx(className);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <MotionComponent
          ref={ref}
          key="collapse"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: ref.current?.scrollHeight ?? 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration }}
          style={{
            display: inlineTags.has(Component as string) ? 'inline-block' : 'block',
            overflow: 'hidden',
          }}
          className={classNames}
        >
          {children}
        </MotionComponent>
      )}
    </AnimatePresence>
  );
};
