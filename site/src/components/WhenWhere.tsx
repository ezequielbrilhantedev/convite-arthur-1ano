const MAPS_URL = 'https://maps.google.com/?q=Endere%C3%A7o%20do%20evento%20Arthur';

export function WhenWhere() {
  return (
    <section data-screen-label="Quando e onde" className="bg-[#fbf3e2] px-[22px] pt-10 pb-[34px]">
      <h2 className="m-0 mb-[22px] text-center font-[Fredoka] text-[30px] font-bold text-[#e0503a]">
        Quando &amp; Onde
      </h2>

      <div
        className="rounded-[22px] px-[22px] py-6"
        style={{ background: '#fff', border: '3px solid #7c451f', boxShadow: '0 6px 0 #d9c7a0' }}
      >
        <div className="flex items-center gap-4">
          <div
            className="flex h-[58px] w-[58px] flex-none flex-col overflow-hidden rounded-[14px]"
            style={{ background: '#3f8fd0', border: '3px solid #7c451f' }}
          >
            <div className="h-4" style={{ background: '#e0503a' }} />
            <div className="flex flex-1 items-center justify-center font-[Fredoka] text-2xl font-bold text-white">
              12
            </div>
          </div>
          <div>
            <div className="font-[Fredoka] text-xl font-semibold text-[#4a2e17]">Sábado, 12 de setembro</div>
            <div className="text-[15px] font-bold text-[#8a6a44]">de 2026 · às 16h</div>
          </div>
        </div>

        <div
          className="my-5 h-0.5"
          style={{ background: 'repeating-linear-gradient(90deg,#e6d6b3 0 8px,transparent 8px 16px)' }}
        />

        <div className="flex items-start gap-4">
          <div
            className="flex h-[58px] w-[58px] flex-none items-center justify-center rounded-[14px]"
            style={{ background: '#f4b93b', border: '3px solid #7c451f' }}
          >
            <div
              className="relative"
              style={{ width: 20, height: 26, background: '#e0503a', borderRadius: '60% 60% 40% 40%' }}
            >
              <div
                className="absolute top-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
                style={{ background: '#fff' }}
              />
            </div>
          </div>
          <div>
            <div className="font-[Fredoka] text-[19px] font-semibold text-[#4a2e17]">[Nome do Local]</div>
            <div className="mt-0.5 text-sm leading-[1.4] text-[#8a6a44]">
              [Endereço completo do evento — rua, número, bairro e cidade]
            </div>
          </div>
        </div>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener"
          className="mt-[22px] flex items-center justify-center gap-2.5 rounded-[40px] py-[15px] font-[Fredoka] text-[17px] font-semibold text-white"
          style={{ background: '#3f8fd0', border: '3px solid #2d6ea3', boxShadow: '0 5px 0 #235880' }}
        >
          <span
            className="h-3.5 w-3.5 rounded-full"
            style={{ border: '3px solid #fff', boxShadow: '0 6px 0 -3px #fff' }}
          />
          Ver localização
        </a>
      </div>
    </section>
  );
}
