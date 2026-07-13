import { useEffect, useRef, useState } from 'react';

/**
 * Trilha sonora em loop ("Amigo, Estou Aqui").
 *
 * Navegadores bloqueiam autoplay com áudio até haver uma interação do usuário
 * (regra mais rígida no celular). Então: tentamos tocar no carregamento e, se
 * for bloqueado, começamos no primeiro toque/clique/tecla em qualquer lugar da
 * página. O botão flutuante permite ligar/desligar a qualquer momento.
 */
export function Soundtrack() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = () =>
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));

    // tenta tocar já; se o navegador bloquear, espera a 1ª interação
    tryPlay();

    const onFirstInteraction = () => {
      if (audio.paused) tryPlay();
    };
    const events = ['pointerdown', 'keydown', 'touchstart'] as const;
    events.forEach((e) => window.addEventListener(e, onFirstInteraction, { once: true }));

    return () => {
      events.forEach((e) => window.removeEventListener(e, onFirstInteraction));
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/trilha.mp3" loop preload="auto" />

      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? 'Desligar a música' : 'Ligar a música'}
        aria-pressed={playing}
        className="fixed right-4 bottom-4 z-50 flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full"
        style={{
          background: '#e0503a',
          border: '3px solid #a83322',
          boxShadow: '0 4px 0 #a83322',
          animation: playing ? 'soundpulse 1.6s ease-in-out infinite' : 'none',
        }}
      >
        {playing ? (
          // alto-falante com ondas
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 9v6h4l5 4V5L8 9H4z" fill="#fff5df" />
            <path
              d="M16 8.5a4 4 0 0 1 0 7M18.5 6a7.5 7.5 0 0 1 0 12"
              stroke="#fff5df"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          // alto-falante mudo
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 9v6h4l5 4V5L8 9H4z" fill="#fff5df" />
            <path
              d="M16 9.5l5 5M21 9.5l-5 5"
              stroke="#fff5df"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </>
  );
}
