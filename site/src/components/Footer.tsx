import { Star } from './Star';

export function Footer() {
  return (
    <footer
      data-screen-label="Footer"
      className="relative overflow-hidden px-[22px] pt-10 pb-[46px] text-center"
      style={{ background: 'linear-gradient(#9ed4f0 0%, #6bb2e4 100%)' }}
    >
      <Star size={12} style={{ bottom: 20, left: 20 }} duration="3s" />
      <Star size={10} style={{ top: 30, right: 26 }} duration="2.5s" delay="0.6s" />

      <div className="mb-2 text-[34px]">🤠🚀</div>
      <p
        className="m-0 font-[Fredoka] text-[22px] font-semibold text-[#fff5df]"
        style={{ textShadow: '0 2px 6px rgba(0,0,0,.2)' }}
      >
        Com carinho,
      </p>
      <p className="mt-1 mb-0 font-[Fredoka] text-[26px] font-bold text-[#7c451f]">a família do Arthur</p>
      <p className="mt-4 mb-0 text-[13px] text-[#f0f8ff] opacity-80">Ao infinito e além!✨</p>
    </footer>
  );
}
