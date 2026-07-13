export function GiftSuggestion() {
  return (
    <section data-screen-label="Sugestão de presente" className="bg-[#fbf3e2] px-[22px] pt-2 pb-10">
      <h2 className="m-0 mb-1.5 text-center font-[Fredoka] text-[30px] font-bold text-[#e0503a]">
        Sugestão de presente
      </h2>
      <p className="m-0 mb-[22px] text-center text-[15px] font-semibold text-[#8a6a44]">
        Se quiser mimar o cowboy, aqui vão as ideias
      </p>

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
          <div className="rounded-xl bg-white py-[13px] text-center font-[Fredoka] text-base font-semibold tracking-[.5px] text-[#2d6ea3]">
            [chave-pix@email.com]
          </div>
        </div>

        <a
          href="#"
          target="_blank"
          rel="noopener"
          className="block rounded-[22px] p-[22px]"
          style={{ background: '#f4b93b', border: '3px solid #c99327', boxShadow: '0 6px 0 #c99327' }}
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: '#7c451f' }}>
              <div
                className="relative"
                style={{ width: 16, height: 14, border: '3px solid #fff5df', borderTop: 'none', borderRadius: '0 0 4px 4px' }}
              >
                <div
                  className="absolute -top-2 left-1/2 -translate-x-1/2"
                  style={{ width: 12, height: 8, border: '3px solid #fff5df', borderBottom: 'none', borderRadius: '8px 8px 0 0' }}
                />
              </div>
            </div>
            <h3 className="m-0 font-[Fredoka] text-xl font-semibold text-[#4a2e17]">Lista de presentes</h3>
          </div>
          <p className="mt-3.5 mb-0 text-sm text-[#6e4a22]">
            Escolha um mimo na nossa listinha na loja <strong>[Nome da loja]</strong> → toque para abrir.
          </p>
        </a>
      </div>
    </section>
  );
}
