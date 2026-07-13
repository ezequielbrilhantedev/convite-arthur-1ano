export interface ConfettiPiece {
  left: number;
  delay: string;
  dur: string;
  color: string;
  size: number;
  rot: number;
}

export const CONFETTI_PALETTE = ['#e0503a', '#f4b93b', '#3f8fd0', '#fff5df', '#8fbf5a'];

export function buildConfetti(palette: string[] = CONFETTI_PALETTE, count = 46): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => ({
    left: Math.round(Math.random() * 100),
    delay: (Math.random() * 0.5).toFixed(2),
    dur: (1.7 + Math.random() * 1.4).toFixed(2),
    color: palette[i % palette.length],
    size: 8 + Math.round(Math.random() * 9),
    rot: Math.round(Math.random() * 360),
  }));
}
