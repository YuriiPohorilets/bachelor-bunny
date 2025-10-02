'use client';

import React, { useState, useRef, useCallback } from 'react';
import clsx from 'clsx';
import styles from './Ripple.module.scss';

interface RippleItem {
  key: number;
  x: number;
  y: number;
  size: number;
}

interface RippleProps {
  children: React.ReactElement<any>;
  color?: string;
  duration?: number;
  disabled?: boolean;
  className?: string;
}

export const Ripple: React.FC<RippleProps> = ({
  children,
  color = 'rgba(255, 255, 255, 0.3)',
  duration = 500,
  disabled = false,
  className,
}) => {
  const nextRippleKey = useRef(0);
  const [ripples, setRipples] = useState<RippleItem[]>([]);

  const createRipple = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (disabled) return;

      const element = e.currentTarget;
      const rect = element.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const newRipple: RippleItem = {
        key: nextRippleKey.current++,
        x,
        y,
        size,
      };

      setRipples(prev => [...prev, newRipple]);

      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.key !== newRipple.key));
      }, duration);
    },
    [disabled, duration]
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    createRipple(e);
    // Call original onMouseDown if it exists
    const originalOnMouseDown = children.props.onMouseDown;
    if (originalOnMouseDown) {
      originalOnMouseDown(e);
    }
  };

  const rippleContainerClass = clsx(styles.rippleContainer, className);

  return React.cloneElement(children, {
    ...children.props,
    onMouseDown: handleMouseDown,
    style: {
      position: 'relative',
      overflow: 'hidden',
      ...(children.props.style || {}),
    },
    children: (
      <>
        {children.props.children}
        <span className={rippleContainerClass}>
          {ripples.map(ripple => (
            <span
              key={ripple.key}
              className={styles.ripple}
              style={{
                left: ripple.x,
                top: ripple.y,
                width: ripple.size,
                height: ripple.size,
                backgroundColor: color,
                animationDuration: `${duration}ms`,
              }}
            />
          ))}
        </span>
      </>
    ),
  });
};
