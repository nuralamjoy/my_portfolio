import FocusAreaCard from "./FocusAreaCard";
import { FOCUS_AREAS } from "./focusAreaData";
import useCardAnimation from "./useCardAnimation";
import "./focusArea.css";

export default function FocusArea() {
  const cardRefs = useCardAnimation();

  return (
    <section
      className="bg-[#0a0d12] px-5 py-20 md:px-8 md:py-28"
      aria-labelledby="fa-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-[640px] text-center md:mb-[72px]">
          <span
            className="relative mb-[22px] inline-flex items-center gap-2.5 pl-4 text-[12.5px] uppercase tracking-[0.14em] text-[#8b93a3]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="absolute left-0 h-[7px] w-[7px] rounded-full bg-[#6ee7c7] shadow-[0_0_10px_1px_rgba(110,231,199,0.7)]" />
            Currently tuning in
          </span>

          <h2
            id="fa-heading"
            className="mb-[18px] text-[clamp(2.4rem,4.6vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[#f4f6f9]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Focus Areas
          </h2>

          <p
            className="m-0 text-[16.5px] font-normal leading-[1.6] text-[#8b93a3]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            The technologies and domains I'm continuously exploring, building,
            and growing in.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {FOCUS_AREAS.map((area, index) => (
            <FocusAreaCard
              key={area.id}
              area={area}
              index={index}
              cardRefs={cardRefs}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
