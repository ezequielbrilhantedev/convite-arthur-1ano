import { useEffect, useState } from 'react';

const pad = (n: number) => String(n).padStart(2, '0');

export interface Countdown {
  days: string;
  hours: string;
  mins: string;
  secs: string;
}

export function useCountdown(target: number): Countdown {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const s = Math.floor(diff / 1000);

  return {
    days: pad(Math.floor(s / 86400)),
    hours: pad(Math.floor((s % 86400) / 3600)),
    mins: pad(Math.floor((s % 3600) / 60)),
    secs: pad(s % 60),
  };
}
