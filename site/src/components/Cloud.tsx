import type { CSSProperties } from 'react';

interface CloudProps {
  wrapperStyle: CSSProperties;
  width: number;
  height: number;
  borderRadius: number;
  opacity?: number;
  duration?: string;
  delay?: string;
}

export function Cloud({
  wrapperStyle,
  width,
  height,
  borderRadius,
  opacity = 1,
  duration = '9s',
  delay = '0s',
}: CloudProps) {
  return (
    <div
      style={{
        position: 'absolute',
        animation: `drift ${duration} ease-in-out ${delay} infinite alternate`,
        ...wrapperStyle,
      }}
    >
      <div
        style={{
          position: 'relative',
          width,
          height,
          background: '#fff',
          borderRadius,
          opacity,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -height * 0.53,
            left: width * 0.21,
            width: width * 0.42,
            height: width * 0.42,
            background: '#fff',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -height * 0.76,
            left: width * 0.46,
            width: width * 0.31,
            height: width * 0.31,
            background: '#fff',
            borderRadius: '50%',
          }}
        />
      </div>
    </div>
  );
}
