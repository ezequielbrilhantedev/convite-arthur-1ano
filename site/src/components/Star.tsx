import type { CSSProperties } from 'react';

const STAR_CLIP =
  'polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)';

interface StarProps {
  size: number;
  style: CSSProperties;
  duration?: string;
  delay?: string;
}

export function Star({ size, style, duration = '2.4s', delay = '0s' }: StarProps) {
  return (
    <div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        background: '#fdf3d0',
        clipPath: STAR_CLIP,
        animation: `twinkle ${duration} ease-in-out ${delay} infinite`,
        ...style,
      }}
    />
  );
}
