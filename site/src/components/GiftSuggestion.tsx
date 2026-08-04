import { useEffect, useState } from 'react';

const PIX_KEY = '616.587.213-14';

const GIFT_IDEAS: Array<{ icon: string; bg: string; title: string; desc: string }> = [
  { icon: '👕', bg: '#3f8fd0', title: 'Roupa', desc: 'TM 2 anos' },
  { icon: '👟', bg: '#f4b93b', title: 'Sapato ou sandália', desc: 'TM 20' },
  {
    icon: '🧴',
    bg: '#e0503a',
    title: 'Perfumaria',
    desc: '"Mamãe e Bebê, Natura", "Boti Baby, colônia da lua" e "Blosson Kids"',
  },
  { icon: '🧸', bg: '#8fbf5a', title: 'Brinquedos', desc: 'Interativos / Educativos' },
];

export function GiftSuggestion() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
    } catch {
      // clipboard indisponível — sem feedback
    }
  };

  return (
    <section data-screen-label="Sugestão de presente" className="bg-[#fbf3e2] px-[22px] pt-2 pb-10">
      <h2 className="m-0 mb-1.5 text-center font-[Fredoka] text-[30px] font-bold text-[#e0503a]">
        Sugestão de presente
      </h2>
      <p className="m-0 mb-[22px] text-center text-[15px] font-semibold text-[#8a6a44]">
        Se quiser mimar o cowboy, aqui vão as ideias
      </p>

      <div
        className="mb-3.5 rounded-[22px] px-[22px] py-6"
        style={{ background: '#fff', border: '3px solid #7c451f', boxShadow: '0 6px 0 #d9c7a0' }}
      >
        {GIFT_IDEAS.map((item, i) => (
          <div key={item.title}>
            {i > 0 && (
              <div
                className="my-4 h-0.5"
                style={{ background: 'repeating-linear-gradient(90deg,#e6d6b3 0 8px,transparent 8px 16px)' }}
              />
            )}
            <div className="flex items-center gap-4">
              <div
                className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-[14px] text-2xl"
                style={{ background: item.bg, border: '3px solid #7c451f' }}
              >
                {item.icon}
              </div>
              <div>
                <div className="font-[Fredoka] text-[17px] font-semibold text-[#4a2e17]">{item.title}</div>
                <div className="mt-0.5 text-sm leading-[1.4] text-[#8a6a44]">{item.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3.5">
        <div
          className="rounded-[22px] p-[22px]"
          style={{ background: '#3f8fd0', border: '3px solid #2d6ea3', boxShadow: '0 6px 0 #235880' }}
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff5df] font-[Fredoka] text-xl font-bold text-[#3f8fd0]">
              $
            </div>
            <h3 className="m-0 font-[Fredoka] text-xl font-semibold text-white">Prefere ajudar via PIX</h3>
          </div>
          <p className="mt-3.5 mb-2 text-sm text-[#eaf5ff]">
            Toda contribuição vira sonho pro Arthur crescer. Chave PIX:
          </p>
          <button
            type="button"
            onClick={copyPixKey}
            aria-label="Copiar chave PIX"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-white py-[13px] text-center font-[Fredoka] text-base font-semibold tracking-[.5px] text-[#2d6ea3]"
          >
            CPF: {PIX_KEY}
            {copied ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12.5l5 5L19 7"
                  stroke="#2d6ea3"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="9" y="9" width="11" height="11" rx="2" stroke="#2d6ea3" strokeWidth="2" />
                <path d="M5 15V6a1 1 0 0 1 1-1h9" stroke="#2d6ea3" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
          <p className="mt-3.5 mb-2 text-sm text-[#eaf5ff]">
            Titular da conta: Suelen dos Santos Oliveira Brilhante - Banco Nubank
          </p>
          {copied && (
            <p
              aria-live="polite"
              className="m-0 text-center text-sm font-semibold text-white"
              style={{ animation: 'pop .35s ease both' }}
            >
              Chave PIX copiada! ✅
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
