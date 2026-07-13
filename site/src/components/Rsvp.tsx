import { useMemo, useState } from 'react';
import { buildConfetti } from '../lib/confetti';
import { submitRsvp } from '../lib/rsvp';

export function Rsvp() {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const confetti = useMemo(() => buildConfetti(), [confirmed]);

  const guestLabel =
    guests === 0
      ? 'Você vai sozinho(a) — te esperamos!'
      : `Você + ${guests}${guests === 1 ? ' acompanhante' : ' acompanhantes'}`;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || submitting) return;
    setSubmitting(true);
    setError(false);
    try {
      await submitRsvp({ name: name.trim(), guests });
      setConfirmed(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section data-screen-label="Confirme presença" className="bg-[#fbf3e2] px-[22px] pt-2 pb-[38px]">
      <h2 className="m-0 mb-1.5 text-center font-[Fredoka] text-[30px] font-bold text-[#e0503a]">
        Confirme sua presença
      </h2>
      <p className="m-0 mb-[22px] text-center text-[15px] font-semibold text-[#8a6a44]">
        Sua presença é o melhor presente pro Arthur! 🤠
      </p>

      <div
        className="relative min-h-[300px] overflow-hidden rounded-[22px] px-[22px] py-6"
        style={{ background: '#fff', border: '3px solid #7c451f', boxShadow: '0 6px 0 #d9c7a0' }}
      >
        {!confirmed && (
          <form onSubmit={submit}>
            <label className="mb-[7px] block font-[Fredoka] text-[15px] font-semibold text-[#4a2e17]">
              Seu nome
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
              className="w-full rounded-[14px] border-[3px] border-[#e6d6b3] bg-[#fdf9ef] px-4 py-[14px] text-base text-[#4a2e17] outline-none focus:border-[#3f8fd0] focus:bg-white"
            />

            <label className="mt-5 mb-[7px] block font-[Fredoka] text-[15px] font-semibold text-[#4a2e17]">
              Quantos acompanhantes?
            </label>
            <div className="flex items-center gap-3.5">
              <button
                type="button"
                onClick={() => setGuests((g) => Math.max(0, g - 1))}
                className="h-[52px] w-[52px] cursor-pointer rounded-[14px] font-[Fredoka] text-[28px] leading-none font-bold text-[#7c451f]"
                style={{ background: '#f4b93b', border: '3px solid #7c451f', boxShadow: '0 4px 0 #c99327' }}
              >
                −
              </button>
              <div className="flex-1 text-center font-[Fredoka] text-[32px] font-bold text-[#4a2e17]">
                {guests}
              </div>
              <button
                type="button"
                onClick={() => setGuests((g) => Math.min(20, g + 1))}
                className="h-[52px] w-[52px] cursor-pointer rounded-[14px] font-[Fredoka] text-[28px] leading-none font-bold text-[#7c451f]"
                style={{ background: '#f4b93b', border: '3px solid #7c451f', boxShadow: '0 4px 0 #c99327' }}
              >
                +
              </button>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-6 w-full cursor-pointer rounded-[40px] py-4 font-[Fredoka] text-[19px] font-semibold text-[#fff5df] disabled:cursor-not-allowed disabled:opacity-70"
              style={{ background: '#e0503a', border: '3px solid #a83322', boxShadow: '0 5px 0 #a83322' }}
            >
              {submitting ? 'Enviando…' : 'Eu vou! Confirmar 🎉'}
            </button>

            {error && (
              <p className="mt-3 text-center text-sm font-semibold text-[#c23f2b]">
                Ops, não consegui enviar. Confira sua conexão e toque em confirmar de novo.
              </p>
            )}
          </form>
        )}

        {confirmed && (
          <>
            <div
              className="relative z-[2] px-1 py-4 text-center"
              style={{ animation: 'pop .5s ease both' }}
            >
              <div
                className="mx-auto flex h-[76px] w-[76px] items-center justify-center rounded-full"
                style={{ background: '#8fbf5a', border: '4px solid #5f8a34' }}
              >
                <div
                  style={{
                    width: 30,
                    height: 16,
                    borderLeft: '6px solid #fff',
                    borderBottom: '6px solid #fff',
                    borderRadius: 2,
                    transform: 'rotate(-45deg) translate(2px,-3px)',
                  }}
                />
              </div>
              <h3 className="mt-[18px] mb-1.5 font-[Fredoka] text-[26px] font-bold text-[#5f8a34]">
                Presença confirmada!
              </h3>
              <p className="m-0 text-base font-semibold text-[#4a2e17]">
                Obrigado, <strong>{name}</strong>! 🎈
                <br />
                {guestLabel}
              </p>
              <p className="mt-3.5 mb-0 text-[15px] text-[#8a6a44]">Até dia 12 de setembro! 🚀</p>
              <button
                type="button"
                onClick={() => setConfirmed(false)}
                className="mt-5 cursor-pointer border-0 bg-transparent px-4 py-2 font-[Fredoka] text-[15px] font-semibold text-[#3f8fd0] underline"
              >
                Editar confirmação
              </button>
            </div>
            <div className="pointer-events-none absolute inset-0 z-[1]">
              {confetti.map((c, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: `${c.left}%`,
                    width: c.size,
                    height: c.size,
                    background: c.color,
                    borderRadius: 2,
                    transform: `rotate(${c.rot}deg)`,
                    animation: `confetti-fall ${c.dur}s ease-in ${c.delay}s forwards`,
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
