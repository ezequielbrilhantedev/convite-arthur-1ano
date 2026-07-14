import { Star } from "./Star";
import { Cloud } from "./Cloud";
import { ScrollHint } from "./ScrollHint";
import arthurPersonagem from "../assets/arthur-personagem.png";
import type { Countdown } from "../hooks/useCountdown";

const CELL_LABELS: Array<[keyof Countdown, string]> = [
  ["days", "Dias"],
  ["hours", "Horas"],
  ["mins", "Min"],
  ["secs", "Seg"],
];

export function Hero({ countdown }: { countdown: Countdown }) {
  return (
    <section
      data-screen-label="Hero"
      className="relative overflow-hidden px-[22px] pt-[34px] pb-[46px]"
      style={{
        background: "linear-gradient(#3f8fd0 0%, #6bb2e4 55%, #9ed4f0 100%)",
      }}
    >
      {/* sun */}
      <div
        className="absolute top-6 left-[26px] h-[58px] w-[58px] rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 35%, #ffd766, #f4b93b)",
          boxShadow: "0 0 0 6px rgba(244,185,59,.28)",
          animation: "floaty 6s ease-in-out infinite",
        }}
      />

      {/* stars */}
      <Star size={16} style={{ top: 30, right: 40 }} duration="2.4s" />
      <Star
        size={11}
        style={{ top: 88, right: 96 }}
        duration="3.1s"
        delay="0.5s"
      />
      <Star
        size={13}
        style={{ top: 150, left: 30 }}
        duration="2.7s"
        delay="0.9s"
      />
      <Star
        size={10}
        style={{ top: 200, right: 30 }}
        duration="3.5s"
        delay="0.3s"
      />

      {/* clouds */}
      <Cloud
        wrapperStyle={{ top: 66, left: -10 }}
        width={96}
        height={34}
        borderRadius={22}
        duration="9s"
      />
      <Cloud
        wrapperStyle={{ top: 14, right: -16 }}
        width={74}
        height={26}
        borderRadius={18}
        opacity={0.95}
        duration="12s"
        delay="1s"
      />

      {/* toy sign header */}
      <div className="relative pt-[14px] text-center">
        <div
          className="inline-block rounded-[40px] px-5 py-[7px] font-[Fredoka] text-[13px] font-semibold tracking-[2px] text-[#fff5df] uppercase"
          style={{
            background: "#e0503a",
            boxShadow: "0 4px 0 #a83322",
            animation: "rise .6s ease both",
          }}
        >
          Você foi convidado
        </div>

        <h1
          className="m-0 mt-[22px] font-[Fredoka] text-[82px] leading-[.92] font-bold text-[#fbf3e2]"
          style={{
            WebkitTextStroke: "4px #7c451f",
            paintOrder: "stroke fill",
            textShadow: "0 7px 0 #7c451f, 0 10px 14px rgba(0,0,0,.28)",
            animation: "rise .6s ease .1s both",
          }}
        >
          Arthur
        </h1>

        <p
          className="m-0 mt-5 font-[Fredoka] text-[25px] font-semibold text-[#fff5df]"
          style={{
            textShadow: "0 2px 6px rgba(0,0,0,.28)",
            animation: "rise .6s ease .2s both",
          }}
        >
          está completando <span style={{ color: "#f4b93b" }}>1 aninho!</span>
        </p>
      </div>

      {/* central illustration: rocket + ringed planet + cowboy toy (Arthur's face) */}
      <div className="relative mt-[50px] h-[250px]">
        {/* ringed planet */}
        <div
          className="absolute top-[2px] right-4"
          style={{ animation: "floaty 7s ease-in-out .4s infinite" }}
        >
          <div
            className="relative h-11 w-11 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 32% 30%, #f4b93b, #d98b2b)",
              border: "3px solid #7c451f",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 h-5 w-[70px] rounded-full"
            style={{
              border: "4px solid #e0503a",
              transform: "translate(-50%,-50%) rotate(-20deg)",
            }}
          />
        </div>

        {/* rocket */}
        <div
          className="absolute top-2 left-[6px] origin-top-left"
          style={{ transform: "scale(.78)" }}
        >
          <div style={{ animation: "floaty 4.5s ease-in-out infinite" }}>
            <div className="relative" style={{ width: 84, height: 133 }}>
              <div
                className="absolute top-0 left-1/2"
                style={{
                  transform: "translateX(-50%)",
                  width: 0,
                  height: 0,
                  borderLeft: "22px solid transparent",
                  borderRight: "22px solid transparent",
                  borderBottom: "30px solid #e0503a",
                }}
              />
              <div
                className="absolute left-1/2 top-[26px] rounded-[22px_22px_16px_16px]"
                style={{
                  transform: "translateX(-50%)",
                  width: 44,
                  height: 74,
                  background: "linear-gradient(#fefaf0,#f2e6cf)",
                  border: "3px solid #7c451f",
                }}
              />
              <div
                className="absolute left-1/2 top-10 rounded-full"
                style={{
                  transform: "translateX(-50%)",
                  width: 22,
                  height: 22,
                  background:
                    "radial-gradient(circle at 35% 35%, #8fd0f2, #3f8fd0)",
                  border: "3px solid #7c451f",
                }}
              />
              <div
                className="absolute left-1/2 top-[74px]"
                style={{
                  transform: "translateX(-50%)",
                  width: 44,
                  height: 12,
                  background: "#f4b93b",
                }}
              />
              <div
                className="absolute left-1 top-[78px]"
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "22px solid transparent",
                  borderRight: "16px solid #e0503a",
                }}
              />
              <div
                className="absolute right-1 top-[78px]"
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "22px solid transparent",
                  borderLeft: "16px solid #e0503a",
                }}
              />
              <div
                className="absolute left-1/2 top-[100px] rounded-b-[50%]"
                style={{
                  transform: "translateX(-50%)",
                  width: 20,
                  height: 26,
                  background:
                    "radial-gradient(circle at 50% 20%, #ffd766, #f4b93b)",
                  animation: "flicker .5s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>

        {/* cowboy toy with Arthur's face */}
        <div
          className="absolute bottom-0 left-1/2"
          style={{ transform: "translateX(-50%)" }}
        >
          <div
            style={{
              animation: "sway 5s ease-in-out infinite",
              transformOrigin: "bottom center",
              filter: "drop-shadow(0 10px 7px rgba(0,0,0,.22))",
            }}
          >
            <img
              src={arthurPersonagem}
              alt="Arthur cowboy"
              className="block h-[280px] w-auto select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* countdown */}
      <div className="relative mt-[6px]">
        <p
          className="m-0 mb-3 text-center font-[Fredoka] text-[15px] font-semibold tracking-[1px] text-[#fff5df]"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,.25)" }}
        >
          A FESTA COMEÇA EM
        </p>
        <div className="grid grid-cols-4 gap-[9px]">
          {CELL_LABELS.map(([key, label]) => (
            <div
              key={key}
              className="rounded-2xl px-1 py-3 text-center"
              style={{
                background: "#7c451f",
                border: "3px solid #5c3315",
                boxShadow: "0 5px 0 #4a2810",
              }}
            >
              <div className="font-[Fredoka] text-[30px] leading-none font-bold text-[#fbf3e2]">
                {countdown[key]}
              </div>
              <div className="mt-1 text-[11px] font-bold tracking-[1px] text-[#f4b93b] uppercase">
                {label}
              </div>
            </div>
          ))}
        </div>
        <ScrollHint />
      </div>
    </section>
  );
}
